import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_PRODUCTS_DIR = path.resolve(__dirname, "../../public/products");

/**
 * Ensures the public/products directory exists
 */
export function ensureProductsDir() {
  if (!fs.existsSync(PUBLIC_PRODUCTS_DIR)) {
    fs.mkdirSync(PUBLIC_PRODUCTS_DIR, { recursive: true });
    console.log(`Created directory: ${PUBLIC_PRODUCTS_DIR}`);
  }
}

/**
 * Downloads an image from a URL and saves it locally
 * @param {string} imageUrl - The URL of the image to download
 * @param {string} slug - The product slug (used for filename)
 * @returns {Promise<string|null>} - The local path (e.g., "/products/slug.jpg") or null on failure
 */
export async function downloadImage(imageUrl, slug) {
  if (!imageUrl) {
    console.warn(`No image URL provided for ${slug}`);
    return null;
  }

  ensureProductsDir();

  // Extract extension from URL or default to .jpg
  let extension = ".jpg";
  try {
    const urlPath = new URL(imageUrl).pathname;
    const ext = path.extname(urlPath).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext)) {
      extension = ext;
    }
  } catch {
    // Use default extension
  }

  const filename = `${slug}${extension}`;
  const localPath = path.join(PUBLIC_PRODUCTS_DIR, filename);
  const publicPath = `/products/${filename}`;

  // Skip if file already exists
  if (fs.existsSync(localPath)) {
    console.log(`Image already exists: ${filename}`);
    return publicPath;
  }

  try {
    const response = await axios({
      method: "GET",
      url: imageUrl,
      responseType: "arraybuffer",
      timeout: 30000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    fs.writeFileSync(localPath, response.data);
    console.log(`Downloaded: ${filename}`);
    return publicPath;
  } catch (error) {
    console.error(`Failed to download image for ${slug}:`, error.message);
    return null;
  }
}

/**
 * Downloads multiple images with rate limiting
 * @param {Array<{slug: string, imageUrl: string}>} items - Array of items to download
 * @param {number} delayMs - Delay between downloads in milliseconds
 * @returns {Promise<Map<string, string>>} - Map of slug to local path
 */
export async function downloadImages(items, delayMs = 500) {
  const results = new Map();

  for (const item of items) {
    const localPath = await downloadImage(item.imageUrl, item.slug);
    if (localPath) {
      results.set(item.slug, localPath);
    }
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, delayMs));
  }

  return results;
}

/**
 * Gets the local path for a product image
 * @param {string} slug - The product slug
 * @returns {string} - The expected local path
 */
export function getLocalImagePath(slug) {
  return `/products/${slug}.jpg`;
}
