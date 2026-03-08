import { notFound } from "next/navigation";
import ProductGrid from "@/components/product-grid";
import { getAllBestOf, getBestOfBySlug, getProductById } from "@/lib/products";

export function generateStaticParams() {
  return getAllBestOf().map((b: any) => ({ slug: b.slug }));
}

export default async function BestOfPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getBestOfBySlug(slug);

  if (!guide) return notFound();

  const products = guide.products
    .map((id: string) => getProductById(id))
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black tracking-tight">{guide.title}</h1>
      <p className="mt-3 max-w-2xl text-zinc-600">{guide.description}</p>

      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}