import fs from "fs";
import path from "path";

const productsPath = path.join(process.cwd(), "content", "data", "products.json");
const bestPath = path.join(process.cwd(), "content", "data", "best-of.json");
const comparePath = path.join(process.cwd(), "content", "data", "comparisons.json");

const products = JSON.parse(fs.readFileSync(productsPath, "utf8").replace(/^\uFEFF/, ""));

const byCategory = {};
for (const product of products) {
  const key = product.category;
  if (!byCategory[key]) byCategory[key] = [];
  byCategory[key].push(product.id);
}

const bestOf = Object.entries(byCategory).map(([category, ids]) => ({
  slug: `best-${String(category)}-canada`,
  title: `Best ${String(category).replace(/-/g, " ")} in Canada`,
  description: `Top ${String(category).replace(/-/g, " ")} products available on Amazon Canada.`,
  products: ids.slice(0, 10),
}));

const comparisons = [];
for (let i = 0; i < products.length - 1; i += 2) {
  const a = products[i];
  const b = products[i + 1];
  if (a && b) {
    comparisons.push({
      slug: `${a.slug}-vs-${b.slug}`,
      title: `${a.name} vs ${b.name}`,
      productA: a.id,
      productB: b.id
    });
  }
}

fs.writeFileSync(bestPath, JSON.stringify(bestOf, null, 2));
fs.writeFileSync(comparePath, JSON.stringify(comparisons, null, 2));

console.log("Best-of and comparison files generated.");