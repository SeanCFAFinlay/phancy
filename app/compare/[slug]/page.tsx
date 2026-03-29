import { notFound } from "next/navigation";
import Link from "next/link";
import ComparisonTable from "@/components/comparison-table";
import {
  getAllComparisons,
  getComparisonBySlug,
  getProductById,
  type ComparisonGuide,
} from "@/lib/products";

export function generateStaticParams() {
  return getAllComparisons().map((c: ComparisonGuide) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return { title: "Comparison Not Found" };

  return {
    title: `${comparison.title} | Phancy`,
    description: `Compare features, pricing, and ratings for ${comparison.title}`,
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) return notFound();

  const productA = getProductById(comparison.productA);
  const productB = getProductById(comparison.productB);

  if (!productA || !productB) return notFound();

  const allComparisons = getAllComparisons().filter((c) => c.slug !== slug);

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
            <span className="text-[var(--off-black)]">Compare</span>
          </nav>

          <div className="max-w-3xl">
            <div className="phancy-badge phancy-badge-terracotta mb-6">
              Comparison
            </div>
            <h1 className="phancy-h1 mb-6">{comparison.title}</h1>
            <p className="phancy-body-lg">
              A side-by-side comparison to help you make an informed decision.
              We&apos;ve analyzed features, pricing, and user feedback for each
              product.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="phancy-wrap phancy-section">
        <ComparisonTable productA={productA} productB={productB} />
      </section>

      {/* Other Comparisons */}
      {allComparisons.length > 0 && (
        <section className="bg-[var(--cream-dark)] border-t border-[var(--line)]">
          <div className="phancy-wrap phancy-section-sm">
            <div className="mb-10">
              <div className="phancy-eyebrow mb-4">More Comparisons</div>
              <h2 className="phancy-h2">Explore Other Comparisons</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {allComparisons.map((c) => (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="phancy-card phancy-hover-lift group p-6"
                >
                  <div className="phancy-badge phancy-badge-terracotta text-[9px] mb-4">
                    Compare
                  </div>
                  <h3 className="phancy-h3 text-lg group-hover:text-[var(--forest)] transition-colors">
                    {c.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
