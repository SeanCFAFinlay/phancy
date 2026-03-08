export type ParsedProduct = {
  id: string;
  title: string;
  bullets: string[];
  href?: string;
  tag?: string;
};

// We generate stable section IDs like product-1, product-2, ...
function makeId(i: number) {
  return `product-${i}`;
}

// Extract ProductCard blocks that look like:
//
// <ProductCard
//   title="..."
//   bullets={[
//     "...",
//     "..."
//   ]}
//   href="#"
//   tag="Top Pick"
// />
//
// This is a "best effort" parser, built for our generator output.
export function parseProductCardsFromMdx(source: string): ParsedProduct[] {
  const products: ParsedProduct[] = [];

  // Grab each <ProductCard ... />
  const blockRegex = /<ProductCard\s+([\s\S]*?)\/>/g;
  let match: RegExpExecArray | null;
  let i = 1;

  while ((match = blockRegex.exec(source)) !== null) {
    const block = match[1];

    const titleMatch = block.match(/title="([^"]+)"/);
    const hrefMatch = block.match(/href="([^"]+)"/);
    const tagMatch = block.match(/tag="([^"]+)"/);

    // bullets={[ "a", "b", "c" ]}
    const bulletsMatch = block.match(/bullets=\{\[\s*([\s\S]*?)\s*\]\}/);

    const title = titleMatch?.[1]?.trim() ?? `Product ${i}`;
    const href = hrefMatch?.[1]?.trim();
    const tag = tagMatch?.[1]?.trim();

    const bullets: string[] = [];
    if (bulletsMatch?.[1]) {
      const bulletsInner = bulletsMatch[1];
      // pull quoted strings
      const bRe = /"([^"]+)"/g;
      let bm: RegExpExecArray | null;
      while ((bm = bRe.exec(bulletsInner)) !== null) {
        bullets.push(bm[1]);
      }
    }

    products.push({
      id: makeId(i),
      title,
      bullets: bullets.slice(0, 3),
      href,
      tag,
    });

    i++;
  }

  return products;
}
