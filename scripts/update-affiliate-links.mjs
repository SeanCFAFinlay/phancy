import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "content", "data", "products.json");
const tag = "phcfastore-20";

const products = JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));

const updated = products.map((p) => {
  if (!p.amazonUrl || p.amazonUrl === "#") return p;

  try {
    const url = new URL(p.amazonUrl);
    url.searchParams.set("tag", tag);
    return { ...p, amazonUrl: url.toString() };
  } catch {
    return p;
  }
});

fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
console.log("Affiliate links updated.");