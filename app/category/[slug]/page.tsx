import { notFound } from "next/navigation";
import ProductGrid from "@/components/product-grid";
import SectionTitle from "@/components/section-title";
import { getAllCategories, getProductsByCategory } from "@/lib/products";
import { titleFromSlug } from "@/lib/utils";

export function generateStaticParams() {
  return getAllCategories().map((slug) => ({ slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = getProductsByCategory(slug);

  if (!products.length) return notFound();

  const title = titleFromSlug(slug);

  return (
    <main className="phancy-container phancy-section-space">
      <div className="rounded-[2.2rem] border border-pink-100 bg-gradient-to-b from-pink-50 to-white p-8 shadow-[0_18px_50px_rgba(233,30,99,0.08)]">
        <div className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-pink-700">
          Category
        </div>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-950 md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
          Explore curated {title.toLowerCase()} picks designed to feel cleaner, more editorial, and easier to browse on every device.
        </p>
      </div>

      <section className="pt-10">
        <SectionTitle
          kicker="Curated picks"
          title={`Top ${title.toLowerCase()} products`}
          subtitle="Each product card is designed to feel more premium and easier to compare."
        />
        <ProductGrid products={products} />
      </section>
    </main>
  );
}