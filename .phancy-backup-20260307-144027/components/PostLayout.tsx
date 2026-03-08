import DisclosureInline from "@/components/DisclosureInline";
import Toc from "@/components/Toc";
import type { TocItem } from "@/lib/toc";

export default function PostLayout({
  title,
  description,
  metaLine,
  toc,
  children,
  sidebar,
}: {
  title: string;
  description?: string;
  metaLine?: string;
  toc?: TocItem[];
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <div className="postLayout" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 28 }}>
      <div className="grid" style={{ gap: 20 }}>
        <div className="card p28" style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
          borderColor: "#e0e7ff"
        }}>
          <h1 className="h1" style={{ marginBottom: 12 }}>{title}</h1>
          {description ? (
            <p className="muted" style={{ 
              marginTop: 12, 
              marginBottom: 0, 
              lineHeight: 1.7,
              fontSize: 16
            }}>
              {description}
            </p>
          ) : null}
          {metaLine ? (
            <div className="small" style={{ marginTop: 16, fontSize: 13 }}>
              {metaLine}
            </div>
          ) : null}
        </div>

        <DisclosureInline />

        <div className="card p28 prose" style={{
          lineHeight: 1.85,
          fontSize: 15
        }}>
          {children}
        </div>
      </div>

      <div className="grid sticky" style={{ gap: 16, top: 24 }}>
        {toc ? <Toc items={toc} /> : null}
        {sidebar ? sidebar : null}
        <div className="card p20">
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>
            ✓ Guide Checklist
          </div>
          <div style={{ fontSize: 12, lineHeight: 1.7, color: "var(--muted)" }}>
            <div>• Clear picks</div>
            <div>• Real benefits</div>
            <div>• Honest review</div>
            <div>• Working links</div>
          </div>
        </div>
      </div>
    </div>
  );
}
