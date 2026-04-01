import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { journalCategories } from "@/lib/site";

export const metadata = {
  title: "Journal | Phancy - Design Inspiration & Guides",
  description: "Design inspiration, product deep-dives, and guides to creating spaces you love.",
};

// Sample journal articles
const articles = [
  {
    slug: "wellness-essentials-for-better-sleep",
    title: "10 Wellness Pieces for Better Sleep",
    excerpt: "From weighted blankets to silk sleep masks, the essentials for a restorative night.",
    category: "Wellness",
    categorySlug: "roundups",
    featured: true,
  },
  {
    slug: "sculptural-lamps-warm-modern",
    title: "Best Sculptural Lamps for a Warm Modern Home",
    excerpt: "Light as sculpture. Our favorite table lamps that double as art.",
    category: "Homewares",
    categorySlug: "roundups",
    featured: true,
  },
  {
    slug: "small-luxuries-under-50",
    title: "Small Luxuries That Improve Everyday Rituals",
    excerpt: "Thoughtful gifts under $50 for the design-conscious.",
    category: "Gift Guide",
    categorySlug: "gift-guides",
    featured: true,
  },
  {
    slug: "bathroom-boutique-hotel",
    title: "How to Make Your Bathroom Feel Like a Boutique Hotel",
    excerpt: "Simple upgrades that transform your daily routine into a spa-like experience.",
    category: "Room Guide",
    categorySlug: "room-guides",
    featured: false,
  },
  {
    slug: "morning-ritual-essentials",
    title: "The Perfect Morning Ritual: A Complete Guide",
    excerpt: "Objects and habits for a calmer start to your day.",
    category: "Ritual Guide",
    categorySlug: "ritual-guides",
    featured: false,
  },
  {
    slug: "design-forward-homewares-worth-space",
    title: "Design-Forward Homewares Worth the Space",
    excerpt: "Investment pieces that earn their place in your home.",
    category: "Design Edit",
    categorySlug: "design-edits",
    featured: false,
  },
];

export default function JournalPage() {
  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--oat)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="max-w-2xl">
              <span className="phancy-eyebrow-accent mb-4 block">Read & Discover</span>
              <h1 className="phancy-display mb-6">The Journal</h1>
              <p className="phancy-body-lg">
                Design inspiration, product deep-dives, and guides to creating spaces you love.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-[var(--line)]">
          <div className="phancy-wrap py-4">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {journalCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="phancy-btn phancy-btn-ghost shrink-0"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <h2 className="phancy-h2 mb-8">Featured</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link key={article.slug} href={`/journal/${article.slug}`} className="group">
                  <article className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]">
                    <div className="aspect-[3/2] bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] flex items-center justify-center">
                      <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <span className={`phancy-badge mb-3 ${
                        article.category === 'Wellness' ? 'phancy-badge-forest' :
                        article.category === 'Homewares' ? 'phancy-badge-terracotta' :
                        'phancy-badge-walnut'
                      }`}>
                        {article.category}
                      </span>
                      <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-[var(--font-body)] text-[var(--muted)] text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="phancy-section bg-[var(--oat)]">
          <div className="phancy-wrap">
            <h2 className="phancy-h2 mb-8">All Articles</h2>

            <div className="grid gap-6">
              {regularArticles.map((article) => (
                <Link key={article.slug} href={`/journal/${article.slug}`} className="group">
                  <article className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-lg)] p-6 flex gap-6 items-center transition-all duration-300 hover:border-[var(--sand)] hover:shadow-md">
                    <div className="w-24 h-24 shrink-0 bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] rounded-[var(--radius-md)] flex items-center justify-center">
                      <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-sm">
                        {article.category}
                      </span>
                    </div>
                    <div>
                      <span className="phancy-badge phancy-badge-outline mb-2">{article.category}</span>
                      <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-1 group-hover:text-[var(--forest)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-[var(--font-body)] text-[var(--muted)] text-sm">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="bg-[var(--soft-black)] text-white rounded-[var(--radius-2xl)] p-10 lg:p-16 text-center">
              <span className="phancy-eyebrow text-[var(--sage)] mb-4 block">Stay Inspired</span>
              <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl font-semibold mb-4">
                New articles, delivered.
              </h2>
              <p className="font-[var(--font-body)] text-lg text-white/60 max-w-md mx-auto mb-8">
                Design inspiration and curated finds, straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-4 rounded-[var(--radius-md)] bg-white/10 border border-white/10 text-white font-[var(--font-display)] text-sm placeholder:text-white/40 focus:outline-none focus:border-white/30"
                />
                <button type="submit" className="px-8 py-4 rounded-[var(--radius-md)] bg-white text-[var(--soft-black)] font-[var(--font-display)] text-sm font-medium hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
