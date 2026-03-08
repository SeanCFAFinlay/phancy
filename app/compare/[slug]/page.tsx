import { notFound } from "next/navigation";
import ComparisonTable from "@/components/comparison-table";
import { getAllComparisons, getComparisonBySlug, getProductById, type ComparisonGuide } from "@/lib/products";

export function generateStaticParams() {
  return getAllComparisons().map((c: ComparisonGuide) => ({ slug: c.slug }));
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

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">{comparison.title}</h1>
      <p className="mt-3 text-zinc-600">
        Compare features, pricing, and ratings before choosing.
      </p>

      <div className="mt-10">
        <ComparisonTable productA={productA} productB={productB} />
      </div>
    </main>
  );
}