import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer style={{ 
      marginTop: 60, 
      borderTop: "1px solid var(--border)", 
      background: "#f9fafb"
    }}>
      <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, marginBottom: 32 }}>
          {/* Brand */}
          <div>
            <div style={{ 
              fontWeight: 900, 
              fontSize: 18,
              marginBottom: 8,
              background: "linear-gradient(135deg,#8b5cf6,#7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              {siteConfig.siteName}
            </div>
            <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 6, lineHeight: 1.6 }}>
              Honest reviews and buyer guides without fake prices or ratings.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Navigation</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/" style={{ fontSize: 13, color: "var(--muted)", transition: "color .2s" }}>
                Home
              </Link>
              <Link href="/affiliate-disclosure" style={{ fontSize: 13, color: "var(--muted)", transition: "color .2s" }}>
                Disclosure
              </Link>
              <Link href="/privacy" style={{ fontSize: 13, color: "var(--muted)", transition: "color .2s" }}>
                Privacy
              </Link>
              <Link href="/terms" style={{ fontSize: 13, color: "var(--muted)", transition: "color .2s" }}>
                Terms
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Categories</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {siteConfig.categories.map((cat) => (
                <Link 
                  key={cat.slug}
                  href={`/category/${cat.slug}`} 
                  style={{ fontSize: 13, color: "var(--muted)", transition: "color .2s" }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: "1px solid var(--border)", 
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12
        }}>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            As an Amazon Associate I earn from qualifying purchases.
          </div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
