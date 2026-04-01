import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard, { ProductCardFeature } from "@/components/ProductCard";
import { collections } from "@/lib/site";
import { getProductsByCollection } from "@/lib/manifest";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const collectionList = Object.values(collections);

export function generateStaticParams() {
  return collectionList.map((col) => ({
    slug: col.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const collection = collections[slug as keyof typeof collections];

  if (!collection) {
    return { title: "Collection Not Found | Phancy" };
  }

  return {
    title: `${collection.name} | Phancy - Curated Wellness & Homewares`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = collections[slug as keyof typeof collections];

  if (!collection) {
    notFound();
  }

  const products = getProductsByCollection(slug);

  // Determine badge color based on collection
  const getBadgeClass = () => {
    switch (slug) {
      case 'editors-picks': return 'phancy-badge-forest';
      case 'most-loved': return 'phancy-badge-terracotta';
      case 'design-classics': return 'phancy-badge-walnut';
      default: return 'phancy-badge';
    }
  };

  // Determine hero background based on collection
  const getHeroBg = () => {
    switch (slug) {
      case 'editors-picks': return 'bg-[var(--forest-light)]';
      case 'most-loved': return 'bg-[var(--terracotta-light)]';
      case 'best-under-100': return 'bg-[var(--sage-light)]';
      default: return 'bg-[var(--oat)]';
    }
  };

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className={getHeroBg()}>
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/favorites" className="phancy-eyebrow hover:text-[var(--forest)] transition-colors mb-4 block">
                  &larr; All Collections
                </Link>
                <span className={`phancy-badge ${getBadgeClass()} mb-4`}>
                  {collection.subtitle}
                </span>
                <h1 className="phancy-display mb-6">{collection.name}</h1>
                <p className="phancy-body-lg">
                  {collection.description}
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] rounded-[var(--radius-2xl)] flex items-center justify-center">
                <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-3xl">
                  {collection.name}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-10">
              <h2 className="phancy-h2 mb-2">{collection.name}</h2>
              <p className="phancy-body">{products.length} curated pieces</p>
            </div>

            {products.length > 0 ? (
              <>
                {/* Featured Product */}
                {products[0] && (
                  <div className="mb-8">
                    <ProductCardFeature product={products[0]} />
                  </div>
                )}

                {/* Rest of products */}
                <div className="phancy-grid-4">
                  {products.slice(1).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16 bg-[var(--oat)] rounded-[var(--radius-xl)]">
                <p className="phancy-body mb-4">No products in this collection yet.</p>
                <Link href="/shop" className="phancy-btn phancy-btn-primary">
                  Browse All Products
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Other Collections */}
        <section className="phancy-section bg-[var(--oat)]">
          <div className="phancy-wrap">
            <h2 className="phancy-h2 mb-8">Explore Other Collections</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collectionList.filter(c => c.id !== slug).map((col) => (
                <Link
                  key={col.id}
                  href={`/collections/${col.id}`}
                  className="group bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-lg)] p-6 hover:border-[var(--sand)] hover:shadow-md transition-all"
                >
                  <span className="phancy-badge phancy-badge-outline mb-3">{col.subtitle}</span>
                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                    {col.name}
                  </h3>
                  <p className="font-[var(--font-body)] text-[var(--muted)] text-sm line-clamp-2">
                    {col.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
