import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard from "@/components/ProductCard";
import { ProductManifest } from "@/lib/manifest";
import { categories } from "@/lib/site";

export const metadata = {
  title: "Homewares | Phancy - Design-Forward Home Objects",
  description: "Discover design-forward homewares that make everyday living feel intentional. Lighting, decor, kitchen, and more.",
};

export default function HomewaresPage() {
  const homewaresProducts = ProductManifest.filter(p => p.category === "Homewares");
  const subCategories = categories.homewares.subCategories;

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--terracotta-light)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="phancy-eyebrow text-[var(--terracotta)] mb-4 block">Homewares Collection</span>
                <h1 className="phancy-display mb-6">Homewares</h1>
                <p className="phancy-body-lg mb-8">
                  {categories.homewares.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {subCategories.map(sub => (
                    <a
                      key={sub.id}
                      href={`#${sub.id}`}
                      className="phancy-badge phancy-badge-terracotta"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] rounded-[var(--radius-2xl)] flex items-center justify-center">
                <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-3xl">
                  Homewares
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-10">
              <h2 className="phancy-h2 mb-2">All Homewares</h2>
              <p className="phancy-body">{homewaresProducts.length} curated pieces</p>
            </div>

            <div className="phancy-grid-4">
              {homewaresProducts.map((product) => (
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
