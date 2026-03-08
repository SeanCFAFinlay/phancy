import Link from "next/link";
import AmazonButton from "./amazon-button";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-pink-100 bg-white p-5 shadow-[0_18px_50px_rgba(233,30,99,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(233,30,99,0.14)]">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="overflow-hidden rounded-[24px] bg-gradient-to-b from-pink-50 to-[#fff1f7] p-5">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.badge ? (
          <span className="rounded-full bg-pink-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-pink-700">
            {product.badge}
          </span>
        ) : null}
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-zinc-600">
          {product.category.replace(/-/g, " ")}
        </span>
      </div>

      <Link href={`/product/${product.slug}`}>
        <h3 className="mt-4 text-2xl font-black leading-tight tracking-tight text-zinc-950">
          {product.name}
        </h3>
      </Link>

      <div className="mt-3 flex items-center gap-2 text-sm text-zinc-600">
        <span className="text-amber-500">★</span>
        <span>{product.rating}</span>
        <span>·</span>
        <span>{product.reviewCount.toLocaleString()} reviews</span>
      </div>

      <div className="mt-4 text-3xl font-black tracking-tight text-pink-700">
        ${product.price.toFixed(2)}
      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-600">
        {product.description}
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/product/${product.slug}`}
          className="inline-flex items-center justify-center rounded-full border border-pink-200 px-5 py-3 text-sm font-black text-pink-700 transition hover:bg-pink-50"
        >
          Read Review
        </Link>
        <AmazonButton href={product.amazonUrl} />
      </div>
    </article>
  );
}