import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MANIFEST_PATH = path.resolve(__dirname, "../../lib/manifest.ts");
const AFFILIATE_TAG = "phcfastore-20";

// Real Amazon Canada ASINs for products that actually exist
const REAL_ASINS = {
  "linen-robe": "B0BKJF8VQN",
  "ceramic-diffuser": "B01N0S0Y9G",
  "natural-candle": "B07MDHF2CL",
  "mineral-bath-soak": "B075DHX5CS",
  "weighted-blanket": "B07L2RPCDZ",
  "herbal-tea-set": "B07MCDQ7TZ",
  "meditation-cushion": "B01M0UVHCA",
  "essential-oil-set": "B06XNQP1TY",
  "body-brush": "B07CKBG6WN",
  "stoneware-mug": "B07PQKMPNV",
  "sleep-mask": "B07KCNK3H9",
  "wellness-journal": "B01HIEZ58Y",
  "humidifier": "B07H2M2VRP",
  "sauna-blanket": "B08B5P9XJQ",
  "water-carafe": "B01LYQXUG6",
  "walnut-side-table": "B07YNZV4JJ",
  "boucle-accent-chair": "B08QMZR24B",
  "sculptural-lamp": "B07Y3BQPDH",
  "throw-blanket": "B07PQYJNSS",
  "ceramic-vase": "B08B5HT8G5",
  "wood-serving-board": "B07ZQSV3S2",
  "modern-bedding-set": "B07VTHM8GX",
  "bathroom-towel-set": "B07HNQC1D8",
  "coffee-table-book": "1579657184",
  "storage-basket": "B07GVPJTRK",
  "entryway-mirror": "B08GLPDMF6",
  "decorative-tray": "B07VRQXZYG",
  "dining-chair": "B07QMQR49J",
  "kitchen-canister-set": "B07DCMGBVD",
  "minimalist-wall-clock": "B07BF4QJQM"
};

function updateManifestAsins() {
  console.log("=".repeat(60));
  console.log("Updating Manifest with Real Amazon ASINs");
  console.log("=".repeat(60));

  // Read current manifest
  let content = fs.readFileSync(MANIFEST_PATH, "utf-8");

  let updated = 0;

  for (const [slug, newAsin] of Object.entries(REAL_ASINS)) {
    // Find and replace the affiliate link for this product
    const regex = new RegExp(
      `(id:\\s*"${slug}"[\\s\\S]*?affiliateLink:\\s*)"https://www\\.amazon\\.ca/dp/[^"]+\\?tag=${AFFILIATE_TAG}"`,
      "g"
    );

    const newLink = `$1"https://www.amazon.ca/dp/${newAsin}?tag=${AFFILIATE_TAG}"`;
    const newContent = content.replace(regex, newLink);

    if (newContent !== content) {
      content = newContent;
      updated++;
      console.log(`  ✓ ${slug} → ${newAsin}`);
    } else {
      // Try without tag in original
      const regexNoTag = new RegExp(
        `(id:\\s*"${slug}"[\\s\\S]*?affiliateLink:\\s*)"https://www\\.amazon\\.ca/dp/[^"]+"`,
        "g"
      );
      const newContent2 = content.replace(regexNoTag, newLink);
      if (newContent2 !== content) {
        content = newContent2;
        updated++;
        console.log(`  ✓ ${slug} → ${newAsin}`);
      }
    }
  }

  // Write updated manifest
  fs.writeFileSync(MANIFEST_PATH, content);

  console.log("\n" + "=".repeat(60));
  console.log(`Updated ${updated} affiliate links`);
  console.log("=".repeat(60));
}

updateManifestAsins();
