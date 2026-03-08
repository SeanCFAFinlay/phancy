import type { TocItem } from "@/lib/toc";

export default function Toc({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <div className="card p16 sticky toc">
      <div style={{ fontWeight: 900, marginBottom: 10 }}>On this page</div>
      {items.map((it) => (
        <a key={it.id} href={`#${it.id}`} style={{ marginLeft: it.level === 3 ? 10 : 0 }}>
          {it.text}
        </a>
      ))}
      <hr />
      <div className="small">
        Tip: Keep headings in your MDX using <strong>##</strong> and <strong>###</strong>.
      </div>
    </div>
  );
}
