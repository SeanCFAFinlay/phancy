import type { ProductBlock } from "@/lib/productBlocks";

export default function ComparisonGrid({ items }: { items: ProductBlock[] }) {
  if (!items.length) return null;

  return (
    <section className="card p22" style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h2 className="h2">Top Picks Comparison</h2>
          <div className="small" style={{ marginTop: 6 }}>
            Auto-generated from <code>{"<ProductCard />"}</code> blocks • Links are placeholders
          </div>
        </div>
        <div className="small" style={{ opacity: 0.85 }}>Items: {items.length}</div>
      </div>

      <div className="grid3" style={{ marginTop: 14 }}>
        {items.map((it, idx) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="card p16" style={{ boxShadow: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div style={{ fontWeight: 900 }}>{idx + 1}. {it.title}</div>
                <span className="badge" style={{ padding: "6px 10px", fontSize: 12 }}>
                  {it.tag ?? "Pick"}
                </span>
              </div>

              {it.bullets?.length ? (
                <ul style={{ margin: "10px 0 0", paddingLeft: 18, opacity: 0.9 }}>
                  {it.bullets.slice(0, 3).map((b, i) => (
                    <li key={i} style={{ marginTop: 6 }}>{b}</li>
                  ))}
                </ul>
              ) : (
                <div className="small" style={{ marginTop: 10 }}>No bullets found (still okay).</div>
              )}

              <div className="small" style={{ marginTop: 12 }}>
                Jump to details ↓
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
