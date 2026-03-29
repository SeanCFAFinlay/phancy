import { getAllProducts, getAllCollections } from "@/lib/products";
import ProductCard from "@/components/product-card";
import Link from "next/link";

export const metadata = {
  title: "All Products | Phancy",
  description: "Browse our complete curated collection of wellness essentials and high-end home goods.",
};

export default function DealsPage() {
  const products = getAllProducts();
  const collections = getAllCollections();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--warm-white)] border-b border-[var(--line)]">
        <div className="phancy-wrap py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="phancy-eyebrow mb-4">Complete Collection</div>
            <h1 className="phancy-h1 mb-6">All Curated Pieces</h1>
            <p className="phancy-body-lg max-w-xl">
              Browse our complete selection of wellness essentials and high-end
              home goods. Each piece has been selected for quality, design, and
              its place in modern Canadian living.
            </p>
          </div>
        </div>
      </section>

      {/* Collection Quick Links */}
      <section className="bg-[var(--cream-dark)] border-b border-[var(--line)]">
        <div className="phancy-wrap py-6">
          <div className="flex flex-wrap gap-3">
            <span className="font-[var(--font-display)] text-sm text-[var(--muted)] py-2">
              Shop by collection:
            </span>
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="phancy-btn phancy-btn-soft text-xs py-2 px-4"
              >
                {collection.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="phancy-wrap phancy-section">
        <div className="mb-12">
          <div className="phancy-eyebrow mb-4">{products.length} Pieces</div>
          <h2 className="phancy-h2">The Full Edit</h2>
        </div>

        <div className="phancy-collection-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Note */}
      <section className="bg-[var(--forest-light)] border-t border-[var(--line)]">
        <div className="phancy-wrap phancy-section-sm">
          <div className="max-w-2xl mx-auto text-center">
            <div className="phancy-eyebrow mb-4">Our Promise</div>
            <p className="phancy-pullquote text-xl">
              Every product in our collection has been personally reviewed and
              selected by our editorial team. We only feature items we would use
              in our own homes.
            </p>
            <div className="phancy-caption mt-6">The Phancy Editorial Team</div>
          </div>
        </div>
      </section>
    </>
  );
}
