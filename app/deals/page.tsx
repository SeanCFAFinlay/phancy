import ProductGrid from "@/components/product-grid";
import SectionTitle from "@/components/section-title";
import { getAllProducts } from "@/lib/products";

export default function DealsPage() {
  const products = getAllProducts().slice(0, 8);

  return (
    <main className="phancy-wrap phancy-section">
      <div className="rounded-[34px] border border-pink-100 bg-gradient-to-r from-[#fff2f7] to-white p-8 shadow-[0_18px_50px_rgba(233,30,99,0.08)] md:p-10">
        <div className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-pink-700">
          Deals edit
        </div>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-950 md:text-6xl">
          Top Wellness Deals
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
          A wider, cleaner, more premium storefront-style presentation for featured product picks.
        </p>
      </div>

      <section className="pt-10">
        <SectionTitle
          kicker="Current picks"
          title="Products featured in the current Phancy deal edit"
          subtitle="Cleaner spacing, stronger cards, and better mobile browsing."
        />
        <ProductGrid products={products} />
      </section>
    </main>
  );
}