import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header style={{ 
      borderBottom: "1px solid var(--border)", 
      background: "var(--card)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 8px rgba(15,23,42,.04)"
    }}>
      <div className="container" style={{ 
        paddingTop: 16, 
        paddingBottom: 16, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        gap: 24
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ 
              fontWeight: 900, 
              fontSize: 20,
              background: "linear-gradient(135deg,#8b5cf6,#7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              {siteConfig.siteName}
            </span>
            <span className="small" style={{ marginTop: 4, opacity: 0.6 }}>
              {siteConfig.niche}
            </span>
          </div>
        </Link>

        <nav style={{ 
          display: "flex", 
          gap: 8, 
          flexWrap: "wrap", 
          justifyContent: "flex-end",
          alignItems: "center"
        }}>
          {(siteConfig.navLinks ?? []).map((l) => (
            <Link 
              key={l.href} 
              href={l.href} 
              className="badge"
              style={{
                padding: "8px 12px",
                fontSize: 13,
                fontWeight: 600,
                transition: "all .2s ease"
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
