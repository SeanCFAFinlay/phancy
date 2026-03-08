import OpenAI from "openai";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
 apiKey: process.env.OPENAI_KEY
});

const products = JSON.parse(
 fs.readFileSync("./automation/data/products.json")
);

async function generateReview(product){

 const prompt = `
Write a wellness product review.

Product: ${product.name}

Include:
summary
pros
cons
who it is best for
`;

 const res = await openai.chat.completions.create({
  model:"gpt-4o-mini",
  messages:[{role:"user",content:prompt}]
 });

 return res.choices[0].message.content;

}

async function run(){

 let reviews = [];

 for(const p of products){

   const review = await generateReview(p);

   reviews.push({
    product:p.name,
    review:review
   });

   console.log("Generated review:", p.name);
 }

 fs.writeFileSync(
  "./automation/data/reviews.json",
  JSON.stringify(reviews,null,2)
 );

}

run();
