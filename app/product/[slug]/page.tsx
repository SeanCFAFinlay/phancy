import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import AmazonButton from "@/components/amazon-button";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <main className="phancy-container phancy-section-space">
      <div className="grid gap-8 lg:grid-cols-[1fr,0.95fr]">
        <div className="overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-pink-50 to-white p-6 shadow-[0_18px_50px_rgba(233,30,99,0.08)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-[440px] w-full object-contain"
          />
        </div>

        <div className="rounded-[2.2rem] border border-pink-100 bg-white p-8 shadow-[0_18px_50px_rgba(233,30,99,0.08)]">
          <div className="flex flex-wrap gap-2">
            {product.badge ? (
              <div className="rounded-full bg-pink-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-pink-700">
                {product.badge}
              </div>
            ) : null}
            <div className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-zinc-600">
              {product.category.replace(/-/g, " ")}
            </div>
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
            <span className="text-amber-500">★</span>
            <span>{product.rating}</span>
            <span>·</span>
            <span>{product.reviewCount.toLocaleString()} reviews</span>
          </div>

          <div className="mt-5 text-4xl font-black tracking-tight text-pink-700">
            ${product.price.toFixed(2)}
          </div>

          <p className="mt-5 text-base leading-8 text-zinc-600">
            {product.description}
          </p>

          <div className="mt-7">
            <AmazonButton href={product.amazonUrl}>
              Check Price on Amazon.ca
            </AmazonButton>
          </div>

          {product.ingredients?.length ? (
            <div className="mt-10">
              <h2 className="text-xl font-black text-zinc-950">Ingredients</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-600">
                {product.ingredients.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6">
          <h2 className="text-xl font-black text-emerald-900">Pros</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-emerald-900">
            {product.pros.map((pro) => (
              <li key={pro}>• {pro}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-rose-100 bg-rose-50 p-6">
          <h2 className="text-xl font-black text-rose-900">Cons</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-rose-900">
            {product.cons.map((con) => (
              <li key={con}>• {con}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}