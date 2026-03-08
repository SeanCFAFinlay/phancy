import ProductGrid from "@/components/product-grid";
import SectionTitle from "@/components/section-title";
import { getTrendingProducts } from "@/lib/products";

export default function TrendingPage() {
  const products = getTrendingProducts();

  return (
    <main className="phancy-container phancy-section-space">
      <div className="rounded-[2.2rem] phancy-gradient p-8 text-white shadow-[0_25px_80px_rgba(233,30,99,0.20)]">
        <div className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-white">
          Trending now
        </div>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Trending Wellness Products
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-pink-50">
          A stronger editorial presentation for the products drawing the most interest right now.
        </p>
      </div>

      <section className="pt-10">
        <SectionTitle
          kicker="Popular now"
          title="Products driving the current Phancy trend edit"
          subtitle="Designed to look stronger on mobile, desktop, and future PWA installs."
        />
        <ProductGrid products={products} />
      </section>
    </main>
  );
}