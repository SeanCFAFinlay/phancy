import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard, { ProductCardFeature } from "@/components/ProductCard";
import { getProductsByCollection } from "@/lib/manifest";
import { collections } from "@/lib/site";

export const metadata = {
  title: "Favorites | Phancy - Editor's Picks & Most Loved",
  description: "Discover our editor's picks and community favorites. The pieces we reach for ourselves and recommend most.",
};

export default function FavoritesPage() {
  const editorsPicks = getProductsByCollection("editors-picks");
  const mostLoved = getProductsByCollection("most-loved");
  const bestUnder100 = getProductsByCollection("best-under-100");
  const designClassics = getProductsByCollection("design-classics");
  const smallLuxuries = getProductsByCollection("small-luxuries");

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--oat)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="max-w-2xl">
              <span className="phancy-eyebrow-accent mb-4 block">Curated Collections</span>
              <h1 className="phancy-display mb-6">Favorites</h1>
              <p className="phancy-body-lg">
                The pieces we reach for ourselves and recommend most. Organized by what matters: quality, value, and lasting design.
              </p>
            </div>
          </div>
        </section>

        {/* Collection Nav */}
        <section className="border-b border-[var(--line)] sticky top-20 bg-[var(--cream)] z-30">
          <div className="phancy-wrap py-4">
            <div className="flex gap-3 overflow-x-auto pb-1">
              <a href="#editors-picks" className="phancy-btn phancy-btn-ghost shrink-0">Editor&apos;s Picks</a>
              <a href="#most-loved" className="phancy-btn phancy-btn-ghost shrink-0">Most Loved</a>
              <a href="#best-under-100" className="phancy-btn phancy-btn-ghost shrink-0">Best Under $100</a>
              <a href="#design-classics" className="phancy-btn phancy-btn-ghost shrink-0">Design Classics</a>
              <a href="#small-luxuries" className="phancy-btn phancy-btn-ghost shrink-0">Small Luxuries</a>
            </div>
          </div>
        </section>

        {/* Editor's Picks */}
        <section id="editors-picks" className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-10">
              <span className="phancy-eyebrow mb-2 block">{collections["editors-picks"].subtitle}</span>
              <h2 className="phancy-h1 mb-3">{collections["editors-picks"].name}</h2>
              <p className="phancy-body max-w-2xl">{collections["editors-picks"].description}</p>
            </div>

            {editorsPicks[0] && (
              <div className="mb-8">
                <ProductCardFeature product={editorsPicks[0]} />
              </div>
            )}

            <div className="phancy-grid-3">
              {editorsPicks.slice(1).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Most Loved */}
        <section id="most-loved" className="phancy-section bg-[var(--oat)]">
          <div className="phancy-wrap">
            <div className="mb-10">
              <span className="phancy-eyebrow mb-2 block">{collections["most-loved"].subtitle}</span>
              <h2 className="phancy-h1 mb-3">{collections["most-loved"].name}</h2>
              <p className="phancy-body max-w-2xl">{collections["most-loved"].description}</p>
            </div>

            <div className="phancy-grid-4">
              {mostLoved.map((product) => (
                <ProductCard key={product.id} product={product} showDescription={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Best Under $100 */}
        <section id="best-under-100" className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-10">
              <span className="phancy-eyebrow mb-2 block">{collections["best-under-100"].subtitle}</span>
              <h2 className="phancy-h1 mb-3">{collections["best-under-100"].name}</h2>
              <p className="phancy-body max-w-2xl">{collections["best-under-100"].description}</p>
            </div>

            <div className="phancy-grid-4">
              {bestUnder100.map((product) => (
                <ProductCard key={product.id} product={product} showDescription={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Design Classics */}
        <section id="design-classics" className="phancy-section bg-[var(--oat)]">
          <div className="phancy-wrap">
            <div className="mb-10">
              <span className="phancy-eyebrow mb-2 block">{collections["design-classics"].subtitle}</span>
              <h2 className="phancy-h1 mb-3">{collections["design-classics"].name}</h2>
              <p className="phancy-body max-w-2xl">{collections["design-classics"].description}</p>
            </div>

            <div className="phancy-grid-3">
              {designClassics.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Small Luxuries */}
        <section id="small-luxuries" className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-10">
              <span className="phancy-eyebrow mb-2 block">{collections["small-luxuries"].subtitle}</span>
              <h2 className="phancy-h1 mb-3">{collections["small-luxuries"].name}</h2>
              <p className="phancy-body max-w-2xl">{collections["small-luxuries"].description}</p>
            </div>

            <div className="phancy-grid-4">
              {smallLuxuries.map((product) => (
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
