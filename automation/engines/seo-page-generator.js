import fs from "fs";
import slugify from "slugify";

const products = JSON.parse(
 fs.readFileSync("./automation/data/products.json")
);

const output = [];

products.forEach(p=>{

 const slug = slugify(p.name,{lower:true});

 output.push({
  slug:slug,
  name:p.name,
  price:p.price,
  rating:p.rating,
  category:p.category,
  amazonUrl:p.url
 });

});

fs.writeFileSync(
 "./content/data/products.json",
 JSON.stringify(output,null,2)
);

console.log("SEO pages updated");
