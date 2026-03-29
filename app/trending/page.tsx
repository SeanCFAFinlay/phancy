import { getTrendingProducts } from "@/lib/products";
import ProductCard from "@/components/product-card";

export const metadata = {
  title: "Trending | Phancy",
  description: "The pieces currently drawing the most attention in our curated collection.",
};

export default function TrendingPage() {
  const products = getTrendingProducts();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--forest)]">
        <div className="phancy-wrap py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage-light)] mb-6">
              Currently Popular
            </div>
            <h1 className="font-[var(--font-display)] text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Trending This Season
            </h1>
            <p className="font-[var(--font-body)] text-lg text-[var(--sage-light)] leading-relaxed max-w-xl">
              The pieces currently drawing the most attention. Selected by our
              editorial team for quality, design, and the way they elevate
              everyday rituals.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="phancy-wrap phancy-section">
        <div className="mb-12">
          <div className="phancy-eyebrow mb-4">Editor&apos;s Selection</div>
          <h2 className="phancy-h2">What&apos;s Moving Now</h2>
          <p className="phancy-body mt-4 max-w-xl">
            These products are resonating with our community. Each has been
            verified for quality and aligned with our editorial standards.
          </p>
        </div>

        <div className="phancy-collection-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[var(--cream-dark)] border-t border-[var(--line)]">
        <div className="phancy-wrap phancy-section-sm">
          <div className="text-center max-w-xl mx-auto">
            <div className="phancy-eyebrow mb-4">Stay Updated</div>
            <h2 className="phancy-h3 mb-4">Get the Weekly Edit</h2>
            <p className="phancy-body text-sm mb-6">
              Be the first to know about new arrivals and trending pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="rounded-[var(--radius-md)] border border-[var(--line)] bg-white px-5 py-3 font-[var(--font-display)] text-sm outline-none focus:border-[var(--forest)]"
              />
              <button className="phancy-btn phancy-btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
