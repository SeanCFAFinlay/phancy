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

   res.data.search_results.forEach(p=>{
     results.push({
       name:p.title,
       price:p.price,
       rating:p.rating,
       reviews:p.reviews,
       image:p.image,
       url:p.link,
       category:category
     });
   });

 }

 fs.writeFileSync(
   "./automation/data/products.json",
   JSON.stringify(results,null,2)
 );

 console.log("Products harvested:", results.length);

}

fetchProducts();
