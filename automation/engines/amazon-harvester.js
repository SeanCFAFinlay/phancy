import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const categories = [
 "probiotics",
 "collagen",
 "vitamins",
 "brain supplements",
 "magnesium glycinate"
];

async function fetchProducts() {

 let results = [];

 for (const category of categories) {

   console.log("Fetching:", category);

   const res = await axios.get(
     "https://api.rainforestapi.com/request",
     {
       params:{
         api_key:process.env.AMAZON_API_KEY,
         type:"search",
         search_term:category,
         amazon_domain:"amazon.ca"
       }
     }
   );

   const items = res.data.search_results || [];

   for (const p of items) {
     results.push({
       name:p.title,
       price:p.price?.value || null,
       rating:p.rating || null,
       reviews:p.reviews || 0,
       image:p.image,
       url:p.link,
       category:category
     });
   }

 }

 fs.writeFileSync(
   "./automation/data/products.json",
   JSON.stringify(results,null,2)
 );

 console.log("Products harvested:", results.length);

}

fetchProducts();
