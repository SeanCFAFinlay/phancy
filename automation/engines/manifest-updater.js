import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, "../../.env.automation") });

const AFFILIATE_TAG = process.env.AFFILIATE_TAG || "phcfastore-20";
const DATA_DIR = path.resolve(__dirname, "../data");
const ENRICHED_FILE = path.join(DATA_DIR, "enriched-products.json");
const MANIFEST_PATH = path.resolve(__dirname, "../../lib/manifest.ts");
const BACKUP_PATH = path.resolve(__dirname, "../../lib/manifest.ts.backup");

/**
 * Creates a backup of the current manifest
 */
function backupManifest() {
  if (fs.existsSync(MANIFEST_PATH)) {
    fs.copyFileSync(MANIFEST_PATH, BACKUP_PATH);
    console.log(`Backup created: ${BACKUP_PATH}`);
  }
}

/**
 * Reads the enriched products data
 * @returns {Object} - Map of slug to enriched data
 */
function readEnrichedData() {
  if (!fs.existsSync(ENRICHED_FILE)) {
    throw new Error(`Enriched data file not found: ${ENRICHED_FILE}\nRun 'npm run enrich-products' first.`);
  }

  return JSON.parse(fs.readFileSync(ENRICHED_FILE, "utf-8"));
}

/**
 * Cleans and formats a description from Amazon data
 * @param {Object} amazonData - The Amazon product data
 * @param {string} existingDescription - The current manifest description
 * @returns {string} - A clean description
 */
function formatDescription(amazonData, existingDescription) {
  if (!amazonData) return existingDescription;

  // Prefer Amazon description if available
  if (amazonData.description && amazonData.description.length > 50) {
    // Clean up the description
    let desc = amazonData.description
      .replace(/\s+/g, " ")
      .trim()
      .substring(0, 500); // Limit length

    // Ensure it ends cleanly
    if (desc.length === 500) {
      const lastPeriod = desc.lastIndexOf(".");
      if (lastPeriod > 300) {
        desc = desc.substring(0, lastPeriod + 1);
      }
    }

    return desc;
  }

  // Fall back to features if no description
  if (amazonData.features && amazonData.features.length > 0) {
    const features = amazonData.features.slice(0, 3);
    return features.join(" ").substring(0, 400);
  }

  // Keep existing description
  return existingDescription;
}

/**
 * Escapes special characters for use in TypeScript strings
 * @param {string} str - The string to escape
 * @returns {string} - Escaped string
 */
function escapeForTs(str) {
  if (!str) return "";
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, " ")
    .replace(/\r/g, "")
    .replace(/\t/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Ensures affiliate link has the correct tag
 * @param {string} link - The affiliate link
 * @returns {string} - Link with correct tag
 */
function ensureAffiliateTag(link) {
  if (!link) return link;

  // Replace any existing tag with the correct one
  if (link.includes("tag=")) {
    return link.replace(/tag=[^&\s]+/, `tag=${AFFILIATE_TAG}`);
  }

  // Add tag if missing
  if (link.includes("?")) {
    return `${link}&tag=${AFFILIATE_TAG}`;
  }
  return `${link}?tag=${AFFILIATE_TAG}`;
}

/**
 * Updates the manifest with enriched data
 */
function updateManifest() {
  console.log("=".repeat(60));
  console.log("Manifest Updater Script");
  console.log(`Affiliate Tag: ${AFFILIATE_TAG}`);
  console.log("=".repeat(60));

  // Create backup
  backupManifest();

  // Read enriched data
  console.log("\nReading enriched data...");
  const enrichedData = readEnrichedData();
  const enrichedSlugs = Object.keys(enrichedData);
  console.log(`Found ${enrichedSlugs.length} enriched products`);

  // Read current manifest
  console.log("\nReading current manifest...");
  let manifestContent = fs.readFileSync(MANIFEST_PATH, "utf-8");

  // Track updates
  let updatedDescriptions = 0;
  let updatedImages = 0;
  let updatedLinks = 0;

  // Process each enriched product
  for (const slug of enrichedSlugs) {
    const enriched = enrichedData[slug];
    const amazonData = enriched.amazonData;

    // Find the product block in the manifest
    const productBlockRegex = new RegExp(
      `(\\{[^}]*id:\\s*"${slug}"[^}]*\\})`,
      "gs"
    );

    // More precise approach: find and update specific fields
    // Update image path
    if (enriched.localImagePath) {
      const imageRegex = new RegExp(
        `(id:\\s*"${slug}"[\\s\\S]*?image:\\s*)"[^"]*"`,
        "g"
      );
      const newContent = manifestContent.replace(
        imageRegex,
        `$1"${enriched.localImagePath}"`
      );
      if (newContent !== manifestContent) {
        manifestContent = newContent;
        updatedImages++;
      }
    }

    // Update description if we have Amazon data
    if (amazonData && amazonData.description) {
      const cleanDesc = escapeForTs(formatDescription(amazonData, ""));
      if (cleanDesc && cleanDesc.length > 50) {
        const descRegex = new RegExp(
          `(id:\\s*"${slug}"[\\s\\S]*?description:\\s*)"[^"]*"`,
          "g"
        );
        const newContent = manifestContent.replace(
          descRegex,
          `$1"${cleanDesc}"`
        );
        if (newContent !== manifestContent) {
          manifestContent = newContent;
          updatedDescriptions++;
        }
      }
    }

    // Ensure affiliate link has correct tag
    const linkRegex = new RegExp(
      `(id:\\s*"${slug}"[\\s\\S]*?affiliateLink:\\s*)"([^"]*)"`,
      "g"
    );
    manifestContent = manifestContent.replace(linkRegex, (match, prefix, link) => {
      const correctedLink = ensureAffiliateTag(link);
      if (correctedLink !== link) {
        updatedLinks++;
      }
      return `${prefix}"${correctedLink}"`;
    });
  }

  // Write updated manifest
  fs.writeFileSync(MANIFEST_PATH, manifestContent);

  console.log("\n" + "=".repeat(60));
  console.log("Manifest Update Complete");
  console.log(`  Descriptions updated: ${updatedDescriptions}`);
  console.log(`  Images updated: ${updatedImages}`);
  console.log(`  Links corrected: ${updatedLinks}`);
  console.log(`\nManifest saved: ${MANIFEST_PATH}`);
  console.log(`Backup saved: ${BACKUP_PATH}`);
  console.log("=".repeat(60));
}

// Run if called directly
updateManifest();
