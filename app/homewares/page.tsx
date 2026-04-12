import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/manifest";

export const metadata = {
  title: "Homewares | Phancy - Design-Forward Home Objects",
  description: "Discover design-forward homewares that make everyday living feel intentional. Furniture, decor, lighting, and more.",
};

export default function HomewaresPage() {
  // Combine furniture and decor categories for "homewares"
  const furnitureProducts = getProductsByCategory("Furniture");
  const decorProducts = getProductsByCategory("Decor");
  const kitchenProducts = getProductsByCategory("Kitchen");
  const outdoorProducts = getProductsByCategory("Outdoor");

  const allHomewares = [...furnitureProducts, ...decorProducts, ...kitchenProducts, ...outdoorProducts];

  const categoryLinks = [
    { href: "/furniture", name: "Furniture", count: furnitureProducts.length },
    { href: "/decor", name: "Decor", count: decorProducts.length },
    { href: "/lighting", name: "Lighting", count: getProductsByCategory("Lighting").length },
    { href: "/kitchen", name: "Kitchen", count: kitchenProducts.length },
  ];

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--parchment)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="phancy-eyebrow text-[var(--walnut)] mb-4 block">Design-Forward Living</span>
                <h1 className="phancy-display mb-6">Homewares</h1>
                <p className="phancy-body-lg mb-8">
                  Mid-century furniture, sculptural decor, architectural lighting, and kitchen objects. Pieces that anchor a room and define how you live.
                </p>
                <div className="flex flex-wrap gap-3">
                  {categoryLinks.map(cat => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="phancy-badge phancy-badge-walnut"
                    >
                      {cat.name} ({cat.count})
                    </Link>
                  ))}
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] rounded-[var(--radius-2xl)] flex items-center justify-center">
                <div className="text-center">
                  <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-2xl block mb-2">
                    Material Warmth
                  </span>
                  <span className="font-[var(--font-display)] text-[var(--muted-light)] text-xs uppercase tracking-widest">
                    Walnut • Brass • Ceramic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="bg-[var(--cream)] border-b border-[var(--line)]">
          <div className="phancy-wrap py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categoryLinks.map(cat => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group bg-[var(--oat)] rounded-[var(--radius-lg)] p-6 text-center hover:bg-[var(--sand)] transition-colors"
                >
                  <p className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] group-hover:text-[var(--forest)] transition-colors">
                    {cat.name}
                  </p>
                  <p className="font-[var(--font-display)] text-sm text-[var(--muted)]">
                    {cat.count} pieces
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-10">
              <h2 className="phancy-h2 mb-2">All Homewares</h2>
              <p className="phancy-body">{allHomewares.length} curated pieces</p>
            </div>

            <div className="phancy-grid-4">
              {allHomewares.map((product) => (
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
