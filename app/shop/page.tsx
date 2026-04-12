import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard from "@/components/ProductCard";
import { ProductManifest, getProductsByCategory } from "@/lib/manifest";

export const metadata = {
  title: "Shop All | Phancy - Mid-Century Modern Home & Wellness",
  description: "Browse our complete collection of mid-century modern furniture, architectural lighting, and wellness objects. Verified products from premium retailers.",
};

export default function ShopPage() {
  const lightingProducts = getProductsByCategory("Lighting");
  const furnitureProducts = getProductsByCategory("Furniture");
  const decorProducts = getProductsByCategory("Decor");
  const wellnessProducts = getProductsByCategory("Wellness");
  const textilesProducts = getProductsByCategory("Textiles");
  const kitchenProducts = getProductsByCategory("Kitchen");
  const outdoorProducts = getProductsByCategory("Outdoor");

  const categories = [
    { id: "lighting", name: "Lighting", products: lightingProducts, href: "/lighting" },
    { id: "furniture", name: "Furniture", products: furnitureProducts, href: "/furniture" },
    { id: "decor", name: "Decor", products: decorProducts, href: "/decor" },
    { id: "wellness", name: "Wellness", products: wellnessProducts, href: "/wellness" },
    { id: "textiles", name: "Textiles", products: textilesProducts, href: "/textiles" },
    { id: "kitchen", name: "Kitchen", products: kitchenProducts, href: "/kitchen" },
    { id: "outdoor", name: "Outdoor", products: outdoorProducts, href: "/outdoor" },
  ].filter(cat => cat.products.length > 0);

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
                {ProductManifest.length} verified products from premium retailers. Mid-century modern furniture, architectural lighting, and wellness objects for calmer living.
              </p>
            </div>
          </div>
        </section>

        {/* Category Nav */}
        <section className="border-b border-[var(--line)] sticky top-20 bg-[var(--cream)] z-30">
          <div className="phancy-wrap py-4">
            <div className="flex gap-4 overflow-x-auto">
              {categories.map(cat => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="phancy-btn phancy-btn-ghost shrink-0"
                >
                  {cat.name} ({cat.products.length})
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {categories.map((category, idx) => (
          <section
            key={category.id}
            id={category.id}
            className={`phancy-section ${idx % 2 === 1 ? 'bg-[var(--oat)]' : ''}`}
          >
            <div className="phancy-wrap">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="phancy-eyebrow mb-2 block">Category</span>
                  <h2 className="phancy-h1">{category.name}</h2>
                  <p className="phancy-body mt-2">{category.products.length} curated pieces</p>
                </div>
                <Link
                  href={category.href}
                  className="phancy-btn phancy-btn-secondary phancy-btn-sm hidden md:flex"
                >
                  View All {category.name}
                </Link>
              </div>

              <div className="phancy-grid-4">
                {category.products.map((product) => (
                  <ProductCard key={product.id} product={product} showDescription={false} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <SiteFooter />
    </>
  );
}
