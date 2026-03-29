import { notFound } from "next/navigation";
import Link from "next/link";
import { getCollectionById, getAllCollections } from "@/lib/products";
import ProductCard from "@/components/product-card";

export function generateStaticParams() {
  return getAllCollections().map((collection) => ({
    slug: collection.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionById(slug);
  if (!collection) return { title: "Collection Not Found" };

  return {
    title: `${collection.name} | Phancy`,
    description: collection.editorsNote,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionById(slug);

  if (!collection) {
    notFound();
  }

  const allCollections = getAllCollections();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--warm-white)] border-b border-[var(--line)]">
        <div className="phancy-wrap py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="phancy-eyebrow mb-4">{collection.subtitle}</div>
            <h1 className="phancy-h1 mb-6">{collection.name}</h1>
            <p className="phancy-editor-note max-w-2xl">
              {collection.editorsNote}
            </p>
            <div className="mt-8 font-[var(--font-display)] text-sm text-[var(--muted)]">
              {collection.products.length} curated essentials
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="phancy-wrap phancy-section">
        <div className="phancy-collection-grid">
          {collection.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Other Collections */}
      <section className="bg-[var(--cream-dark)] border-t border-[var(--line)]">
        <div className="phancy-wrap phancy-section-sm">
          <div className="mb-10">
            <div className="phancy-eyebrow mb-4">Explore More</div>
            <h2 className="phancy-h2">Other Collections</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {allCollections
              .filter((c) => c.id !== collection.id)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/collections/${c.id}`}
                  className="phancy-card phancy-hover-lift group p-8"
                >
                  <div className="phancy-eyebrow mb-3">{c.subtitle}</div>
                  <h3 className="phancy-h3 group-hover:text-[var(--forest)] transition-colors">
                    {c.name}
                  </h3>
                  <p className="phancy-body text-sm mt-3 line-clamp-2">
                    {c.editorsNote}
                  </p>
                  <div className="mt-4 flex items-center gap-2 font-[var(--font-display)] text-sm font-semibold text-[var(--forest)]">
                    <span>View Collection</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
