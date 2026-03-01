import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const posts = getAllPosts().slice(0, 8);

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>{siteConfig.siteName}</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>{siteConfig.defaultMeta.description}</p>

      <h2 style={{ fontSize: 22, marginTop: 24 }}>Latest</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginTop: 12 }}>
        {posts.map((p) => (
          <Link key={`${p.type}-${p.slug}`} href={`/${p.type}/${p.slug}`}>
            <div style={{ padding: 16, border: "1px solid #e5e7eb", borderRadius: 12 }}>
              <div style={{ fontWeight: 700 }}>{p.frontmatter.title}</div>
              <div style={{ fontSize: 14, opacity: 0.75 }}>{p.frontmatter.description}</div>
              <div style={{ fontSize: 12, opacity: 0.6, marginTop: 6 }}>
                {p.frontmatter.category} • {p.frontmatter.date}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </main>
  );
}
