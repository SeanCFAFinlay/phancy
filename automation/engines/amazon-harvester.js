import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// High-margin wellness categories ranked by estimated gross margin potential
const HIGH_MARGIN_CATEGORIES = [
  { term: "marine collagen peptides", estimatedMargin: 84 },
  { term: "NAD NMN supplement", estimatedMargin: 83 },
  { term: "cortisol balance adaptogen supplement", estimatedMargin: 82 },
  { term: "collagen peptides powder", estimatedMargin: 82 },
  { term: "berberine supplement", estimatedMargin: 81 },
  { term: "deep sleep supplement melatonin free", estimatedMargin: 81 },
  { term: "ashwagandha KSM-66", estimatedMargin: 80 },
  { term: "collagen gummies biotin", estimatedMargin: 80 },
  { term: "probiotic 50 billion CFU", estimatedMargin: 79 },
  { term: "hair growth biotin keratin supplement", estimatedMargin: 79 },
  { term: "probiotics for women", estimatedMargin: 78 },
  { term: "gut repair L-glutamine", estimatedMargin: 77 },
  { term: "lions mane mushroom supplement", estimatedMargin: 76 },
  { term: "turmeric curcumin bioperine", estimatedMargin: 76 },
  { term: "omega 3 fish oil triple strength", estimatedMargin: 74 },
  { term: "elderberry immune supplement", estimatedMargin: 74 },
  { term: "magnesium glycinate supplement", estimatedMargin: 75 },
  { term: "vitamin D3 K2 supplement", estimatedMargin: 72 },
  { term: "women's multivitamin daily", estimatedMargin: 68 },
  { term: "creatine monohydrate micronized", estimatedMargin: 67 },
];

async function fetchProducts() {

 let results = [];

 for (const category of HIGH_MARGIN_CATEGORIES) {

   console.log(`Fetching: ${category.term} (est. margin: ${category.estimatedMargin}%)`);

   const res = await axios.get(
     "https://api.rainforestapi.com/request",
     {
       params:{
         api_key:process.env.AMAZON_API_KEY,
         type:"search",
         search_term:category.term,
         amazon_domain:"amazon.ca"
       }
     }
   );

   const items = res.data.search_results || [];

   for (const p of items) {
     const price = p.price?.value || null;
     results.push({
       name: p.title,
       price,
       rating: p.rating || null,
       reviews: p.reviews || 0,
       image: p.image,
       url: p.link,
       category: category.term,
       estimatedMarginPct: category.estimatedMargin,
       // Estimated gross margin revenue potential = price × estimatedMargin
       marginRevenuePotential: price ? Math.round(price * category.estimatedMargin) / 100 : null,
     });
   }

 }

 // Sort by margin revenue potential descending (highest opportunity first)
 results.sort((a, b) => (b.marginRevenuePotential ?? 0) - (a.marginRevenuePotential ?? 0));

 fs.writeFileSync(
   "./automation/data/products.json",
   JSON.stringify(results, null, 2)
 );

 console.log(`Products harvested: ${results.length} (sorted by margin revenue potential)`);

}

fetchProducts();
