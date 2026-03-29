import ProductGrid from "@/components/product-grid";
import SectionTitle from "@/components/section-title";
import { getHighMarginProducts, getAllProducts, type Product } from "@/lib/products";
import Link from "next/link";

const MARGIN_TIERS: { label: string; min: number; tone: string }[] = [
  { label: "Elite (80%+)", min: 80, tone: "from-pink-500 to-fuchsia-600" },
  { label: "High (70–79%)", min: 70, tone: "from-fuchsia-500 to-rose-500" },
  { label: "Strong (60–69%)", min: 60, tone: "from-rose-400 to-orange-400" },
];

function tierProducts(products: Product[], min: number, max = Infinity): Product[] {
  return products.filter(
    (p) => (p.grossMarginPct ?? 0) >= min && (p.grossMarginPct ?? 0) < max
  );
}

export default function HighMarginPage() {
  const allProducts = getAllProducts();
  const topPicks = getHighMarginProducts(12);

  const elite = tierProducts(allProducts, 80);
  const high = tierProducts(allProducts, 70, 80);
  const strong = tierProducts(allProducts, 60, 70);

  const avgMargin = Math.round(
    topPicks.reduce((sum, p) => sum + (p.grossMarginPct ?? 0), 0) / topPicks.length
  );

  return (
    <main>
      {/* Hero */}
      <section className="phancy-wrap pt-8 md:pt-10">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-rose-600 p-8 text-white shadow-[0_32px_100px_rgba(233,30,99,0.24)] md:p-12">
          <div className="phancy-pill bg-white/15 text-white">Automated margin intelligence</div>

          <h1 className="phancy-h1 mt-6 max-w-4xl">
            Highest gross margin wellness products.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-pink-50 md:text-lg">
            Our automation engine continuously scans the wellness industry to surface the products with the strongest gross margin profiles — giving you the best opportunities to market and sell at maximum profitability.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/deals" className="phancy-btn phancy-btn-secondary">
              Shop All Products
            </Link>
            <Link href="/trending" className="phancy-btn border border-white/25 text-white hover:bg-white/10">
              See Trending
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] bg-white/12 p-4">
              <div className="text-2xl font-black">{topPicks.length} picks</div>
              <div className="mt-2 text-sm text-pink-50">Curated high-margin wellness products identified by automation.</div>
            </div>
            <div className="rounded-[24px] bg-white/12 p-4">
              <div className="text-2xl font-black">{avgMargin}% avg margin</div>
              <div className="mt-2 text-sm text-pink-50">Estimated gross margin across our top picks.</div>
            </div>
            <div className="rounded-[24px] bg-white/12 p-4">
              <div className="text-2xl font-black">Auto-ranked</div>
              <div className="mt-2 text-sm text-pink-50">Products re-ranked weekly by margin score and trend signal.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Margin tier legend */}
      <section className="phancy-wrap phancy-section">
        <div className="mb-10 max-w-3xl">
          <div className="phancy-eyebrow mb-3">Margin tiers</div>
          <h2 className="phancy-h2">How we rank gross margin.</h2>
          <p className="phancy-copy mt-4 max-w-2xl">
            Each product is assigned an estimated gross margin percentage based on category benchmarks, ingredient sourcing costs, and average retail pricing. Products scoring 80%+ are classified as elite margin opportunities.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {MARGIN_TIERS.map((tier) => (
            <div
              key={tier.label}
              className="phancy-card p-8"
            >
              <div className={`h-12 w-12 rounded-[16px] bg-gradient-to-br ${tier.tone}`} />
              <div className="mt-5 text-2xl font-black tracking-tight text-zinc-950">{tier.label}</div>
              <p className="phancy-copy mt-3 text-sm">
                {tier.min >= 80
                  ? "Premium specialty supplements with high consumer willingness to pay and low raw material cost ratios."
                  : tier.min >= 70
                  ? "Established wellness categories with proven demand and favourable cost structures."
                  : "High-volume essentials that generate strong revenue despite tighter margin profiles."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Top picks grid */}
      <section className="phancy-wrap phancy-section">
        <SectionTitle
          kicker="Auto-ranked picks"
          title="Top 12 highest gross margin wellness products"
          subtitle="Sorted by estimated gross margin percentage. Updated weekly by the automation engine."
        />
        <ProductGrid products={topPicks} showMargin />
      </section>

      {/* Elite tier */}
      {elite.length > 0 && (
        <section className="phancy-wrap phancy-section">
          <div className="mb-10 max-w-3xl">
            <div className="phancy-eyebrow mb-3">Elite tier — 80%+ gross margin</div>
            <h2 className="phancy-h2">The highest-margin wellness categories.</h2>
            <p className="phancy-copy mt-4 max-w-2xl">
              These product categories consistently deliver 80%+ gross margin due to a combination of premium positioning, high repeat-purchase rates, and lower relative input costs.
            </p>
          </div>
          <ProductGrid products={elite} showMargin />
        </section>
      )}

      {/* High tier */}
      {high.length > 0 && (
        <section className="phancy-wrap phancy-section">
          <div className="mb-10 max-w-3xl">
            <div className="phancy-eyebrow mb-3">High tier — 70–79% gross margin</div>
            <p className="phancy-copy mt-4 max-w-2xl">
              Established wellness staples with strong consumer familiarity and reliable gross margin performance.
            </p>
          </div>
          <ProductGrid products={high} showMargin />
        </section>
      )}

      {/* Strong tier */}
      {strong.length > 0 && (
        <section className="phancy-wrap phancy-section">
          <div className="mb-10 max-w-3xl">
            <div className="phancy-eyebrow mb-3">Strong tier — 60–69% gross margin</div>
            <h2 className="phancy-h2">High volume, strong revenue.</h2>
            <p className="phancy-copy mt-4 max-w-2xl">
              Essential supplement categories that generate strong revenue through volume even at lower margin per unit.
            </p>
          </div>
          <ProductGrid products={strong} showMargin />
        </section>
      )}

      {/* CTA */}
      <section className="phancy-wrap pb-24">
        <div className="overflow-hidden rounded-[40px] bg-zinc-950 p-8 text-white shadow-[0_32px_100px_rgba(0,0,0,0.18)] md:p-12">
          <div className="phancy-pill bg-white/10 text-white">Marketing automation</div>
          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
            Ready to market these products?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">
            Each product on this page links directly to Amazon Canada with your affiliate tag pre-attached. Share the product links, write content around these picks, or run paid campaigns — the margin is built in.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/deals" className="phancy-btn bg-white text-pink-700">
              Start With Deals
            </Link>
            <Link href="/trending" className="phancy-btn border border-white/25 text-white hover:bg-white/10">
              Trending Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
