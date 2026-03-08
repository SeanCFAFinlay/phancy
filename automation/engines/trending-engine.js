import fs from "fs";

const products = JSON.parse(
 fs.readFileSync("./automation/data/products.json")
);

const trending = products
 .sort((a,b)=>b.reviews - a.reviews)
 .slice(0,10);

fs.writeFileSync(
 "./automation/data/trending.json",
 JSON.stringify(trending,null,2)
);

console.log("Trending products updated");
