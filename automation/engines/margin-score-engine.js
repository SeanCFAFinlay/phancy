import fs from "fs";

// Gross margin benchmarks by product category keyword
// Based on typical supplement industry cost-of-goods vs retail price data
const MARGIN_BENCHMARKS = {
  "marine collagen": 84,
  "collagen peptides": 82,
  "collagen gummies": 80,
  "collagen beauty": 82,
  "collagen powder": 81,
  "collagen": 80,
  "nad+": 83,
  "nmn": 83,
  "cortisol": 82,
  "adrenal": 82,
  "berberine": 81,
  "sleep formula": 81,
  "sleep supplement": 79,
  "ashwagandha": 80,
  "adaptogen": 80,
  "rhodiola": 79,
  "probiotic 50 billion": 79,
  "probiotic for women": 78,
  "probiotic": 77,
  "hair growth": 79,
  "biotin keratin": 79,
  "biotin": 76,
  "gut repair": 77,
  "l-glutamine": 77,
  "lion's mane": 76,
  "lions mane": 76,
  "mushroom": 75,
  "turmeric curcumin": 76,
  "turmeric": 74,
  "omega-3": 74,
  "fish oil": 74,
  "elderberry": 74,
  "immune": 73,
  "magnesium glycinate": 75,
  "magnesium": 72,
  "vitamin d3 k2": 72,
  "vitamin d3": 70,
  "vitamin d": 69,
  "multivitamin": 68,
  "vitamin": 67,
  "creatine": 67,
  "protein": 62,
};

/**
 * Estimate gross margin percentage for a product based on its name/category.
 * Returns the best matching benchmark or a default of 60.
 */
function estimateMargin(name, category) {
  const combined = `${name} ${category}`.toLowerCase();

  for (const [keyword, margin] of Object.entries(MARGIN_BENCHMARKS)) {
    if (combined.includes(keyword)) {
      return margin;
    }
  }

  return 60; // default for unknown wellness categories
}

/**
 * Score products by gross margin and revenue opportunity.
 * marginScore = estimatedMarginPct × price (higher = better opportunity)
 */
function scoreProducts(products) {
  return products
    .map((p) => {
      const margin = p.estimatedMarginPct ?? estimateMargin(p.name ?? "", p.category ?? "");
      const price = p.price ?? 0;
      const marginScore = Math.round((margin * price) / 100 * 100) / 100;

      return {
        ...p,
        estimatedMarginPct: margin,
        marginScore,
      };
    })
    .sort((a, b) => b.marginScore - a.marginScore);
}

const inputPath = "./automation/data/products.json";
const outputPath = "./automation/data/margin-scored.json";

if (!fs.existsSync(inputPath)) {
  console.error("No products.json found at", inputPath, "— run amazon-harvester.js first");
  process.exit(1);
}

const products = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const scored = scoreProducts(products);

fs.writeFileSync(outputPath, JSON.stringify(scored, null, 2));

console.log(`Margin scoring complete: ${scored.length} products ranked`);
console.log(
  `Top 5 by margin score:\n${scored
    .slice(0, 5)
    .map((p) => `  ${p.name?.slice(0, 50)} — ${p.estimatedMarginPct}% margin, score: ${p.marginScore}`)
    .join("\n")}`
);
