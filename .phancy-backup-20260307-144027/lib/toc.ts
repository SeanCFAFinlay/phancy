export type TocItem = { id: string; text: string; level: 2 | 3 };

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[`"'!?.,:;()]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function buildTocFromMdx(source: string): TocItem[] {
  const lines = source.split(/\r?\n/);
  const items: TocItem[] = [];

  for (const line of lines) {
    if (line.startsWith("## ")) {
      const text = line.replace(/^##\s+/, "").trim();
      items.push({ id: slugify(text), text, level: 2 });
    } else if (line.startsWith("### ")) {
      const text = line.replace(/^###\s+/, "").trim();
      items.push({ id: slugify(text), text, level: 3 });
    }
  }

  return items;
}

export function headingId(text: string) {
  return slugify(text);
}

export const getTocItems = buildTocFromMdx; // Alias for consistency
