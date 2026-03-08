export type ProductBlock = {
  id: string;
  title: string;
  bullets: string[];
  href: string;
  tag?: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[`"'!?.,:;()]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

/**
 * Extract <ProductCard ... /> blocks from MDX.
 * We intentionally keep this lightweight:
 * - title="..."
 * - href="..."
 * - bullets={[ "a", "b", "c" ]}
 * - tag="..." (optional)
 */
export function extractProductCards(mdx: string): ProductBlock[] {
  const blocks: ProductBlock[] = [];

  // Match self-closing ProductCard components across lines
  const re = /<ProductCard([\s\S]*?)\/>/g;
  const matches = mdx.matchAll(re);

  let index = 0;
  for (const m of matches) {
    const raw = m[1] ?? "";
    const title = matchAttr(raw, "title") ?? `Product ${index + 1}`;
    const href = matchAttr(raw, "href") ?? "#";
    const tag = matchAttr(raw, "tag") ?? undefined;
    const bullets = matchBullets(raw);

    const id = slugify(title) || `product-${index + 1}`;
    blocks.push({ id, title, bullets, href, tag });

    index++;
  }

  return blocks;
}

function matchAttr(raw: string, attr: string): string | null {
  // attr="value"
  const re = new RegExp(`${attr}\\s*=\\s*"(.*?)"`, "m");
  const m = raw.match(re);
  return m ? m[1] : null;
}

function matchBullets(raw: string): string[] {
  // bullets={[ "a", "b", "c" ]}
  // Also handle bullets={[ 'a', 'b' ]}
  const re = /bullets\s*=\s*\{\s*\[\s*([\s\S]*?)\s*\]\s*\}/m;
  const m = raw.match(re);
  if (!m) return [];
  const inside = m[1] ?? "";

  // Grab quoted strings
  const strRe = /"([^"]+)"|'([^']+)'/g;
  const bullets: string[] = [];
  let sm;
  while ((sm = strRe.exec(inside)) !== null) {
    bullets.push(sm[1] ?? sm[2] ?? "");
  }
  return bullets.filter(Boolean);
}
