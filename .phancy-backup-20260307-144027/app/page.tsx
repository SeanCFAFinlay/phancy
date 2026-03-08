import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const posts = getAllPosts();
  const best = posts.filter((p) => p.type === "best").slice(0, 8);
  const reviews = posts.filter((p) => p.type === "review").slice(0, 8);

  return (
    <main className="grid" style={{ gap: 32 }}>
      {/* Hero Section */}
      <section className="card p22" style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
        borderColor: "#e0e7ff"
      }}>
        <div style={{ maxWidth: 600 }}>
          <h1 className="h1" style={{ marginBottom: 12 }}>{siteConfig.siteName}</h1>
          <p className="muted" style={{ fontSize: 16, marginTop: 8, marginBottom: 0, lineHeight: 1.6 }}>
            Honest reviews and buyer guides. Clear disclosures. No fake ratings or prices.
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
          {(siteConfig.categories ?? []).map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="badge">
              {c.name}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
          <Link href={`/category/${siteConfig.categories?.[0]?.slug ?? "coffee"}`} className="btn btnPrimary">
            Explore Guides
          </Link>
          <Link href="/affiliate-disclosure" className="btn">
            Disclosure
          </Link>
        </div>
      </section>

      {/* Best Guides Section */}
      {best.length > 0 && (
        <section className="grid" style={{ gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h2 className="h2">✨ Best Guides</h2>
            <span className="badge" style={{ background: "#fef08a", border: "1px solid #fde047", color: "#78350f" }}>
              {best.length} articles
            </span>
          </div>
          
          <div className="grid4">
            {best.map((p) => (
              <Link 
                key={`${p.type}-${p.slug}`} 
                href={`/${p.type}/${p.slug}`} 
                style={{ textDecoration: "none" }}
              >
                <div className="card p20" style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  cursor: "pointer",
                  transition: "all .3s ease"
                }}>
                  <div style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#78350f",
                    background: "#fef08a",
                    padding: "4px 8px",
                    borderRadius: 6,
                    width: "fit-content",
                    marginBottom: 12
                  }}>
                    ⭐ BEST PICK
                  </div>
                  
                  <h3 className="h3" style={{ marginBottom: 8, lineHeight: 1.4 }}>
                    {p.frontmatter.title}
                  </h3>
                  
                  <p className="muted" style={{ 
                    fontSize: 14, 
                    marginBottom: 12,
                    flex: 1,
                    lineHeight: 1.5
                  }}>
                    {p.frontmatter.description}
                  </p>
                  
                  <div style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    fontSize: 12,
                    color: "var(--muted)",
                    marginTop: "auto"
                  }}>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      background: "#f0f9ff",
                      padding: "4px 8px",
                      borderRadius: 4,
                      color: "#0c2d6b"
                    }}>
                      {p.frontmatter.category}
                    </span>
                    <span>•</span>
                    <span>{p.frontmatter.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <section className="grid" style={{ gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h2 className="h2">🔍 Reviews</h2>
            <span className="badge" style={{ background: "#dbeafe", border: "1px solid #bfdbfe", color: "#0c2d6b" }}>
              {reviews.length} articles
            </span>
          </div>
          
          <div className="grid4">
            {reviews.map((p) => (
              <Link 
                key={`${p.type}-${p.slug}`} 
                href={`/${p.type}/${p.slug}`} 
                style={{ textDecoration: "none" }}
              >
                <div className="card p20" style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  cursor: "pointer",
                  transition: "all .3s ease"
                }}>
                  <div style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#0c2d6b",
                    background: "#dbeafe",
                    padding: "4px 8px",
                    borderRadius: 6,
                    width: "fit-content",
                    marginBottom: 12
                  }}>
                    🔍 REVIEW
                  </div>
                  
                  <h3 className="h3" style={{ marginBottom: 8, lineHeight: 1.4 }}>
                    {p.frontmatter.title}
                  </h3>
                  
                  <p className="muted" style={{ 
                    fontSize: 14, 
                    marginBottom: 12,
                    flex: 1,
                    lineHeight: 1.5
                  }}>
                    {p.frontmatter.description}
                  </p>
                  
                  <div style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    fontSize: 12,
                    color: "var(--muted)",
                    marginTop: "auto"
                  }}>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      background: "#f0f9ff",
                      padding: "4px 8px",
                      borderRadius: 4,
                      color: "#0c2d6b"
                    }}>
                      {p.frontmatter.category}
                    </span>
                    <span>•</span>
                    <span>{p.frontmatter.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="card p22" style={{
        background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
        border: "none",
        color: "white"
      }}>
        <h2 className="h2" style={{
          color: "white",
          background: "none",
          WebkitTextFillColor: "white",
          marginBottom: 8
        }}>
          Find Your Perfect Product
        </h2>
        <p style={{ color: "rgba(255,255,255,.85)", marginTop: 6, marginBottom: 0, fontSize: 16 }}>
          Browse curated guides and honest reviews tailored to your needs.
        </p>
        <Link href={`/category/${siteConfig.categories?.[0]?.slug ?? "coffee"}`} className="btn" style={{
          marginTop: 16,
          background: "white",
          color: "#7c3aed",
          fontWeight: 700,
          border: "none"
        }}>
          Start Exploring →
        </Link>
      </section>
    </main>
  );
}
