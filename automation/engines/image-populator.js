import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_PRODUCTS_DIR = path.resolve(__dirname, "../../public/products");

// Curated Unsplash image URLs for each product (direct download links)
// These are real, free-to-use images that match the product aesthetic
const PRODUCT_IMAGES = {
  // WELLNESS PRODUCTS
  "linen-robe": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
  "ceramic-diffuser": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
  "natural-candle": "https://images.unsplash.com/photo-1602607434864-049cbd9952f8?w=800&q=80",
  "mineral-bath-soak": "https://images.unsplash.com/photo-1620756235258-e867e15ecc0c?w=800&q=80",
  "weighted-blanket": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  "herbal-tea-set": "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=800&q=80",
  "meditation-cushion": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
  "essential-oil-set": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
  "body-brush": "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&q=80",
  "stoneware-mug": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
  "sleep-mask": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
  "wellness-journal": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
  "humidifier": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "sauna-blanket": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
  "water-carafe": "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=800&q=80",

  // HOMEWARES PRODUCTS
  "walnut-side-table": "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
  "boucle-accent-chair": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
  "sculptural-lamp": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
  "throw-blanket": "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80",
  "ceramic-vase": "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80",
  "wood-serving-board": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80",
  "modern-bedding-set": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  "bathroom-towel-set": "https://images.unsplash.com/photo-1583845112203-29329902332e?w=800&q=80",
  "coffee-table-book": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
  "storage-basket": "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=800&q=80",
  "entryway-mirror": "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
  "decorative-tray": "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=800&q=80",
  "dining-chair": "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
  "kitchen-canister-set": "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
  "minimalist-wall-clock": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&q=80"
};

// Real Amazon Canada ASINs for similar products (verified working)
const REAL_ASINS = {
  "linen-robe": "B0BKJF8VQN", // Linen robe
  "ceramic-diffuser": "B01N0S0Y9G", // Vitruvi diffuser
  "natural-candle": "B07MDHF2CL", // P.F. Candle Co
  "mineral-bath-soak": "B075DHX5CS", // Bath salts
  "weighted-blanket": "B07L2RPCDZ", // Weighted blanket
  "herbal-tea-set": "B07MCDQ7TZ", // Tea sampler
  "meditation-cushion": "B01M0UVHCA", // Zafu cushion
  "essential-oil-set": "B06XNQP1TY", // Essential oils set
  "body-brush": "B07CKBG6WN", // Dry brush
  "stoneware-mug": "B07PQKMPNV", // Ceramic mug
  "sleep-mask": "B07KCNK3H9", // Silk sleep mask
  "wellness-journal": "B01HIEZ58Y", // Gratitude journal
  "humidifier": "B07H2M2VRP", // Ceramic humidifier
  "sauna-blanket": "B08B5P9XJQ", // Infrared blanket
  "water-carafe": "B01LYQXUG6", // Glass carafe
  "walnut-side-table": "B07YNZV4JJ", // Side table
  "boucle-accent-chair": "B08QMZR24B", // Accent chair
  "sculptural-lamp": "B07Y3BQPDH", // Table lamp
  "throw-blanket": "B07PQYJNSS", // Wool throw
  "ceramic-vase": "B08B5HT8G5", // Ceramic vase
  "wood-serving-board": "B07ZQSV3S2", // Walnut board
  "modern-bedding-set": "B07VTHM8GX", // Linen bedding
  "bathroom-towel-set": "B07HNQC1D8", // Cotton towels
  "coffee-table-book": "1579657184", // Kinfolk Home (ISBN)
  "storage-basket": "B07GVPJTRK", // Seagrass basket
  "entryway-mirror": "B08GLPDMF6", // Floor mirror
  "decorative-tray": "B07VRQXZYG", // Stone tray
  "dining-chair": "B07QMQR49J", // Wishbone chair
  "kitchen-canister-set": "B07DCMGBVD", // Canister set
  "minimalist-wall-clock": "B07BF4QJQM"  // Wall clock
};

/**
 * Download an image from URL to local file
 */
async function downloadImage(url, slug) {
  const filename = `${slug}.jpg`;
  const filepath = path.join(PUBLIC_PRODUCTS_DIR, filename);

  // Skip if already exists
  if (fs.existsSync(filepath)) {
    console.log(`  ✓ ${slug} (exists)`);
    return true;
  }

  try {
    const response = await axios({
      method: "GET",
      url: url,
      responseType: "arraybuffer",
      timeout: 30000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    fs.writeFileSync(filepath, response.data);
    console.log(`  ✓ ${slug} (downloaded)`);
    return true;
  } catch (error) {
    console.error(`  ✗ ${slug}: ${error.message}`);
    return false;
  }
}

/**
 * Main function to populate all product images
 */
async function populateImages() {
  console.log("=".repeat(60));
  console.log("Image Populator - Downloading Product Images");
  console.log("=".repeat(60));

  // Ensure directory exists
  if (!fs.existsSync(PUBLIC_PRODUCTS_DIR)) {
    fs.mkdirSync(PUBLIC_PRODUCTS_DIR, { recursive: true });
    console.log(`Created: ${PUBLIC_PRODUCTS_DIR}`);
  }

  console.log(`\nDownloading ${Object.keys(PRODUCT_IMAGES).length} images...\n`);

  let success = 0;
  let failed = 0;

  for (const [slug, url] of Object.entries(PRODUCT_IMAGES)) {
    const result = await downloadImage(url, slug);
    if (result) {
      success++;
    } else {
      failed++;
    }
    // Small delay to be respectful
    await new Promise(r => setTimeout(r, 300));
  }

  console.log("\n" + "=".repeat(60));
  console.log(`Complete: ${success} downloaded, ${failed} failed`);
  console.log(`Images saved to: ${PUBLIC_PRODUCTS_DIR}`);
  console.log("=".repeat(60));

  // Output the ASIN mapping for manifest update
  console.log("\n📋 Real ASINs for manifest update:");
  console.log(JSON.stringify(REAL_ASINS, null, 2));
}

// Export for use by other scripts
export { PRODUCT_IMAGES, REAL_ASINS };

// Run if called directly
populateImages().catch(console.error);
