import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { downloadImage, ensureProductsDir } from "../utils/image-downloader.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.automation
dotenv.config({ path: path.resolve(__dirname, "../../.env.automation") });

const AFFILIATE_TAG = process.env.AFFILIATE_TAG || "phcfastore-20";
const API_KEY = process.env.AMAZON_API_KEY;
const DATA_DIR = path.resolve(__dirname, "../data");
const ENRICHED_FILE = path.join(DATA_DIR, "enriched-products.json");
const MANIFEST_PATH = path.resolve(__dirname, "../../lib/manifest.ts");

// Rate limiting: 1 request per second
const RATE_LIMIT_MS = 1000;

/**
 * Extracts ASIN from an Amazon affiliate link
 * @param {string} affiliateLink - The Amazon affiliate URL
 * @returns {string|null} - The ASIN or null if not found
 */
function extractAsin(affiliateLink) {
  if (!affiliateLink) return null;

  // Pattern: /dp/ASIN or /dp/ASIN?
  const dpMatch = affiliateLink.match(/\/dp\/([A-Z0-9]{10})/i);
  if (dpMatch) return dpMatch[1];

  // Pattern: /product/ASIN
  const productMatch = affiliateLink.match(/\/product\/([A-Z0-9]{10})/i);
  if (productMatch) return productMatch[1];

  // Pattern: /gp/product/ASIN
  const gpMatch = affiliateLink.match(/\/gp\/product\/([A-Z0-9]{10})/i);
  if (gpMatch) return gpMatch[1];

  return null;
}

/**
 * Reads the product manifest and extracts product data with ASINs
 * @returns {Array<Object>} - Array of products with extracted ASINs
 */
function readManifestProducts() {
  const content = fs.readFileSync(MANIFEST_PATH, "utf-8");

  // Extract the ProductManifest array content
  const manifestMatch = content.match(/export const ProductManifest: Product\[\] = \[([\s\S]*?)\];/);
  if (!manifestMatch) {
    throw new Error("Could not parse ProductManifest from manifest.ts");
  }

  const products = [];

  // Match individual product objects
  const productRegex = /\{\s*id:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?brand:\s*"([^"]+)"[\s\S]*?affiliateLink:\s*"([^"]+)"[\s\S]*?\}/g;

  let match;
  while ((match = productRegex.exec(manifestMatch[1])) !== null) {
    const [, id, slug, title, brand, affiliateLink] = match;
    const asin = extractAsin(affiliateLink);

    if (asin) {
      products.push({
        id,
        slug,
        title,
        brand,
        affiliateLink,
        asin
      });
    } else {
      console.warn(`Could not extract ASIN for product: ${id}`);
    }
  }

  return products;
}

/**
 * Fetches product details from RainforestAPI
 * @param {string} asin - The Amazon product ASIN
 * @returns {Promise<Object|null>} - Product data or null on failure
 */
async function fetchProductFromAmazon(asin) {
  if (!API_KEY) {
    throw new Error("AMAZON_API_KEY not set in .env.automation");
  }

  try {
    const response = await axios.get("https://api.rainforestapi.com/request", {
      params: {
        api_key: API_KEY,
        type: "product",
        asin: asin,
        amazon_domain: "amazon.ca"
      },
      timeout: 30000
    });

    const product = response.data.product;

    if (!product) {
      console.warn(`No product data returned for ASIN: ${asin}`);
      return null;
    }

    return {
      asin,
      title: product.title || null,
      description: product.description || null,
      features: product.feature_bullets || [],
      mainImage: product.main_image?.link || null,
      images: product.images?.map(img => img.link) || [],
      price: product.buybox_winner?.price?.value || null,
      rating: product.rating || null,
      ratingsTotal: product.ratings_total || 0,
      brand: product.brand || null,
      categories: product.categories?.map(c => c.name) || []
    };
  } catch (error) {
    console.error(`Failed to fetch ASIN ${asin}:`, error.message);
    return null;
  }
}

/**
 * Delays execution for rate limiting
 * @param {number} ms - Milliseconds to wait
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main enrichment function
 */
async function enrichProducts() {
  console.log("=".repeat(60));
  console.log("Product Enrichment Script");
  console.log(`Affiliate Tag: ${AFFILIATE_TAG}`);
  console.log("=".repeat(60));

  // Ensure data directory exists
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  // Ensure products directory exists
  ensureProductsDir();

  // Read products from manifest
  console.log("\nReading products from manifest...");
  const products = readManifestProducts();
  console.log(`Found ${products.length} products with ASINs`);

  // Load existing enriched data if available (for resuming)
  let enrichedData = {};
  if (fs.existsSync(ENRICHED_FILE)) {
    try {
      enrichedData = JSON.parse(fs.readFileSync(ENRICHED_FILE, "utf-8"));
      console.log(`Loaded ${Object.keys(enrichedData).length} existing enriched products`);
    } catch {
      enrichedData = {};
    }
  }

  // Process each product
  let processed = 0;
  let skipped = 0;
  let failed = 0;

  for (const product of products) {
    // Skip if already enriched (allows resuming)
    if (enrichedData[product.slug] && enrichedData[product.slug].amazonData) {
      console.log(`Skipping ${product.slug} (already enriched)`);
      skipped++;
      continue;
    }

    console.log(`\nProcessing: ${product.title} (${product.asin})`);

    // Fetch from Amazon
    const amazonData = await fetchProductFromAmazon(product.asin);

    if (amazonData) {
      // Download main image
      let localImagePath = null;
      if (amazonData.mainImage) {
        localImagePath = await downloadImage(amazonData.mainImage, product.slug);
      }

      // Store enriched data
      enrichedData[product.slug] = {
        ...product,
        amazonData,
        localImagePath: localImagePath || `/products/${product.slug}.jpg`,
        enrichedAt: new Date().toISOString()
      };

      processed++;
      console.log(`  ✓ Enriched successfully`);
    } else {
      // Store partial data for failed lookups
      enrichedData[product.slug] = {
        ...product,
        amazonData: null,
        localImagePath: `/products/${product.slug}.jpg`,
        enrichedAt: new Date().toISOString(),
        error: "Failed to fetch from Amazon"
      };
      failed++;
      console.log(`  ✗ Failed to fetch`);
    }

    // Save progress after each product (allows safe interruption)
    fs.writeFileSync(ENRICHED_FILE, JSON.stringify(enrichedData, null, 2));

    // Rate limiting
    await delay(RATE_LIMIT_MS);
  }

  console.log("\n" + "=".repeat(60));
  console.log("Enrichment Complete");
  console.log(`  Processed: ${processed}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log(`  Total: ${products.length}`);
  console.log(`\nData saved to: ${ENRICHED_FILE}`);
  console.log("=".repeat(60));
}

// Run if called directly
enrichProducts().catch(console.error);
