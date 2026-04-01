import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard from "@/components/ProductCard";
import { ProductManifest } from "@/lib/manifest";

export const metadata = {
  title: "Shop All | Phancy - Curated Wellness & Homewares",
  description: "Browse our complete collection of curated wellness essentials and design-forward homewares. Objects for calmer living.",
};

export default function ShopPage() {
  const wellnessProducts = ProductManifest.filter(p => p.category === "Wellness");
  const homewaresProducts = ProductManifest.filter(p => p.category === "Homewares");

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--oat)] border-b border-[var(--line)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="max-w-2xl">
              <span className="phancy-eyebrow-accent mb-4 block">The Full Collection</span>
              <h1 className="phancy-display mb-6">Shop All</h1>
              <p className="phancy-body-lg">
                Every piece in our collection, chosen for aesthetics, utility, and warmth. Wellness essentials and design-forward homewares for calmer living.
              </p>
            </div>
          </div>
        </section>

        {/* Category Nav */}
        <section className="border-b border-[var(--line)] sticky top-20 bg-[var(--cream)] z-30">
          <div className="phancy-wrap py-4">
            <div className="flex gap-4 overflow-x-auto">
              <a href="#wellness" className="phancy-btn phancy-btn-ghost shrink-0">Wellness ({wellnessProducts.length})</a>
              <a href="#homewares" className="phancy-btn phancy-btn-ghost shrink-0">Homewares ({homewaresProducts.length})</a>
            </div>
          </div>
        </section>

        {/* Wellness Section */}
        <section id="wellness" className="phancy-section">
          <div className="phancy-wrap">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="phancy-eyebrow mb-2 block">Category</span>
                <h2 className="phancy-h1">Wellness</h2>
                <p className="phancy-body mt-2">Essentials for calmer mornings, restful nights, and daily rituals.</p>
              </div>
              <Link href="/wellness" className="phancy-btn phancy-btn-secondary phancy-btn-sm hidden md:flex">
                View All Wellness
              </Link>
            </div>

            <div className="phancy-grid-4">
              {wellnessProducts.map((product) => (
                <ProductCard key={product.id} product={product} showDescription={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Homewares Section */}
        <section id="homewares" className="phancy-section bg-[var(--oat)]">
          <div className="phancy-wrap">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="phancy-eyebrow mb-2 block">Category</span>
                <h2 className="phancy-h1">Homewares</h2>
                <p className="phancy-body mt-2">Design-forward objects for every room in your home.</p>
              </div>
              <Link href="/homewares" className="phancy-btn phancy-btn-secondary phancy-btn-sm hidden md:flex">
                View All Homewares
              </Link>
            </div>

            <div className="phancy-grid-4">
              {homewaresProducts.map((product) => (
                <ProductCard key={product.id} product={product} showDescription={false} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
