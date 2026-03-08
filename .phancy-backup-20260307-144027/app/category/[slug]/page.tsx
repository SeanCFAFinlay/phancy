import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { siteConfig } from "@/lib/config";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);

  return {
    title: category?.name || "Category",
    description: `${category?.name || "Category"} guides and reviews`,
  };
}

export async function generateStaticParams() {
  return siteConfig.categories.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);
  const posts = getAllPosts().filter((p) => p.frontmatter.category === slug);
  
  const best = posts.filter((p) => p.type === "best");
  const reviews = posts.filter((p) => p.type === "review");

  if (!category) {
    return <div className="card p22">Category not found</div>;
  }

  return (
    <main className="grid" style={{ gap: 32 }}>
      {/* Hero */}
      <section className="card p22" style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
        borderColor: "#e0e7ff"
      }}>
        <h1 className="h1" style={{ marginBottom: 12 }}>{category.name}</h1>
        <p className="muted" style={{ fontSize: 16, marginTop: 8, marginBottom: 0, lineHeight: 1.6 }}>
          Curated guides and honest reviews for {category.name.toLowerCase()}
        </p>
        
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <Link href="/" className="btn">
            ← Back to home
          </Link>
        </div>
      </section>

      {/* Best Guides */}
      {best.length > 0 && (
        <section className="grid" style={{ gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h2 className="h2">✨ Best Guides</h2>
            <span className="badge" style={{ background: "#fef08a", border: "1px solid #fde047", color: "#78350f" }}>
              {best.length} {best.length === 1 ? "guide" : "guides"}
            </span>
          </div>
          
          <div className="grid4">
            {best.map((post) => (
              <Link
                key={`${post.type}-${post.slug}`}
                href={`/${post.type}/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card p20" style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  cursor: "pointer"
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
                    {post.frontmatter.title}
                  </h3>
                  
                  <p className="muted" style={{ 
                    fontSize: 14, 
                    marginBottom: 12,
                    flex: 1,
                    lineHeight: 1.5
                  }}>
                    {post.frontmatter.description}
                  </p>
                  
                  <div style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    marginTop: "auto"
                  }}>
                    {formatDate(post.frontmatter.date)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="grid" style={{ gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h2 className="h2">🔍 Reviews</h2>
            <span className="badge" style={{ background: "#dbeafe", border: "1px solid #bfdbfe", color: "#0c2d6b" }}>
              {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
            </span>
          </div>
          
          <div className="grid4">
            {reviews.map((post) => (
              <Link
                key={`${post.type}-${post.slug}`}
                href={`/${post.type}/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card p20" style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  cursor: "pointer"
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
                    {post.frontmatter.title}
                  </h3>
                  
                  <p className="muted" style={{ 
                    fontSize: 14, 
                    marginBottom: 12,
                    flex: 1,
                    lineHeight: 1.5
                  }}>
                    {post.frontmatter.description}
                  </p>
                  
                  <div style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    marginTop: "auto"
                  }}>
                    {formatDate(post.frontmatter.date)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="card p22" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--muted)", margin: 0 }}>
            No guides or reviews in this category yet.
          </p>
        </div>
      )}
    </main>
  );
}
