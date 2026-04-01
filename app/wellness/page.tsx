import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard from "@/components/ProductCard";
import { ProductManifest } from "@/lib/manifest";
import { categories } from "@/lib/site";

export const metadata = {
  title: "Wellness | Phancy - Curated Wellness Essentials",
  description: "Discover curated wellness essentials for calmer mornings, restful nights, and daily rituals worth keeping.",
};

export default function WellnessPage() {
  const wellnessProducts = ProductManifest.filter(p => p.category === "Wellness");
  const subCategories = categories.wellness.subCategories;

  // Group products by subcategory
  const productsBySubCategory = subCategories.map(sub => ({
    ...sub,
    products: wellnessProducts.filter(p =>
      p.subCategory.toLowerCase().replace(/\s+/g, '-').includes(sub.id.toLowerCase()) ||
      p.subCategory.toLowerCase() === sub.name.toLowerCase()
    )
  }));

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--forest-light)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="phancy-eyebrow-accent mb-4 block">Wellness Collection</span>
                <h1 className="phancy-display mb-6">Wellness</h1>
                <p className="phancy-body-lg mb-8">
                  {categories.wellness.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {subCategories.map(sub => (
                    <a
                      key={sub.id}
                      href={`#${sub.id}`}
                      className="phancy-badge"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] rounded-[var(--radius-2xl)] flex items-center justify-center">
                <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-3xl">
                  Wellness
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-10">
              <h2 className="phancy-h2 mb-2">All Wellness Products</h2>
              <p className="phancy-body">{wellnessProducts.length} curated pieces</p>
            </div>

            <div className="phancy-grid-4">
              {wellnessProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* By Category */}
        {productsBySubCategory.filter(cat => cat.products.length > 0).map((category, idx) => (
          <section
            key={category.id}
            id={category.id}
            className={`phancy-section ${idx % 2 === 0 ? 'bg-[var(--oat)]' : 'bg-[var(--cream)]'}`}
          >
            <div className="phancy-wrap">
              <div className="mb-10">
                <span className="phancy-eyebrow mb-2 block">{category.name}</span>
                <h2 className="phancy-h2 mb-2">{category.name}</h2>
                <p className="phancy-body">{category.description}</p>
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
