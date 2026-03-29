import fs from "fs";
import path from "path";

const productsPath = path.join(process.cwd(), "content", "data", "products.json");

// Read products
const products = JSON.parse(fs.readFileSync(productsPath, "utf8").replace(/^\uFEFF/, ""));

// Sort by reviewCount descending to find trending products
const sorted = [...products].sort((a, b) => b.reviewCount - a.reviewCount);

// Top 10 are trending
const trendingIds = new Set(sorted.slice(0, 10).map(p => p.id));

// Update products
const updatedProducts = products.map(p => ({
  ...p,
  trending: trendingIds.has(p.id)
}));

fs.writeFileSync(productsPath, JSON.stringify(updatedProducts, null, 2));

console.log("Weekly batch: Trending products updated based on review counts.");
