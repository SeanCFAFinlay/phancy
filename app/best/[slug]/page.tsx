import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGrid from "@/components/product-grid";
import {
  getAllBestOf,
  getBestOfBySlug,
  getProductById,
  type Product,
  type BestOfGuide,
} from "@/lib/products";

export function generateStaticParams() {
  return getAllBestOf().map((b: BestOfGuide) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getBestOfBySlug(slug);
  if (!guide) return { title: "Guide Not Found" };

  return {
    title: `${guide.title} | Phancy`,
    description: guide.description,
  };
}

export default async function BestOfPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getBestOfBySlug(slug);

  if (!guide) return notFound();

  const products: Product[] = guide.products
    .map((id: string) => getProductById(id))
    .filter((product): product is Product => Boolean(product));

  const allGuides = getAllBestOf().filter((g) => g.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--warm-white)] border-b border-[var(--line)]">
        <div className="phancy-wrap py-16 md:py-24">
          <nav className="flex items-center gap-2 font-[var(--font-display)] text-sm text-[var(--muted)] mb-8">
            <Link href="/" className="hover:text-[var(--forest)]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--off-black)]">Buying Guides</span>
          </nav>

          <div className="max-w-3xl">
            <div className="phancy-badge mb-6">Buying Guide</div>
            <h1 className="phancy-h1 mb-6">{guide.title}</h1>
            <p className="phancy-body-lg">{guide.description}</p>
            <div className="mt-6 font-[var(--font-display)] text-sm text-[var(--muted)]">
              {products.length} products in this guide
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="phancy-wrap phancy-section">
        <div className="mb-12">
          <div className="phancy-eyebrow mb-4">Editor&apos;s Picks</div>
          <h2 className="phancy-h2">Our Recommendations</h2>
        </div>

        <ProductGrid products={products} />
      </section>

      {/* Other Guides */}
      {allGuides.length > 0 && (
        <section className="bg-[var(--cream-dark)] border-t border-[var(--line)]">
          <div className="phancy-wrap phancy-section-sm">
            <div className="mb-10">
              <div className="phancy-eyebrow mb-4">More Guides</div>
              <h2 className="phancy-h2">Explore Other Guides</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/best/${g.slug}`}
                  className="phancy-card phancy-hover-lift group p-6"
                >
                  <div className="phancy-badge text-[9px] mb-4">Guide</div>
                  <h3 className="phancy-h3 text-lg group-hover:text-[var(--forest)] transition-colors">
                    {g.title}
                  </h3>
                  <p className="phancy-body text-sm mt-2 line-clamp-2">
                    {g.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
