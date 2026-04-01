import { getTrendingProducts } from "@/lib/manifest";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Trending | Phancy - Curated Wellness & Homewares",
  description: "The pieces currently drawing the most attention. Selected by our editorial team for quality, design, and lasting appeal.",
};

export default function TrendingPage() {
  const products = getTrendingProducts();

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--soft-black)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="max-w-2xl">
              <span className="phancy-eyebrow text-[var(--sage)] mb-4 block">Currently Popular</span>
              <h1 className="font-[var(--font-display)] text-4xl lg:text-5xl font-semibold text-white mb-6">
                Trending This Season
              </h1>
              <p className="font-[var(--font-body)] text-lg text-white/60 leading-relaxed">
                The pieces currently drawing the most attention. Selected by our editorial team for quality, design, and the way they elevate everyday rituals.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-12">
              <span className="phancy-eyebrow mb-3 block">Editor&apos;s Selection</span>
              <h2 className="phancy-h2 mb-3">What&apos;s Moving Now</h2>
              <p className="phancy-body max-w-xl">
                These products are resonating with our community. Each has been verified for quality and aligned with our editorial standards.
              </p>
            </div>

            <div className="phancy-grid-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
