"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export default function ProductCard({
  product,
  compact = false,
}: ProductCardProps) {
  // Track affiliate clicks
  const handleAffiliateClick = async () => {
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "affiliate_click",
          productId: product.id,
        }),
      });
    } catch (e) {
      console.error("Analytics error:", e);
    }
  };

  if (compact) {
    return (
      <article className="phancy-product-card group">
        <Link href={`/product/${product.slug}`}>
          <div className="phancy-product-image aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[var(--forest)]/0 group-hover:bg-[var(--forest)]/5 transition-colors duration-300" />
          </div>
        </Link>

        <div className="p-5">
          {product.badge && (
            <span className="phancy-badge phancy-badge-sm mb-3 inline-block">
              {product.badge}
            </span>
          )}

          <Link href={`/product/${product.slug}`}>
            <h3 className="font-[var(--font-display)] text-[15px] font-semibold leading-snug text-[var(--off-black)] group-hover:text-[var(--forest)] transition-colors duration-200">
              {product.name}
            </h3>
          </Link>

          <div className="mt-3 flex items-center justify-between">
            <span className="font-[var(--font-display)] text-lg font-bold text-[var(--forest)]">
              ${product.price.toFixed(2)}
            </span>
            <span className="font-[var(--font-display)] text-xs text-[var(--muted)]">
              {product.brand}
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="phancy-product-card group">
      <Link href={`/product/${product.slug}`}>
        <div className="phancy-product-image aspect-square relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {/* Hover overlay with quick action */}
          <div className="absolute inset-0 bg-[var(--off-black)]/0 group-hover:bg-[var(--off-black)]/10 transition-all duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 phancy-btn phancy-btn-white phancy-btn-sm shadow-lg">
              Quick View
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {product.badge && (
            <span className="phancy-badge phancy-badge-sm">{product.badge}</span>
          )}
          <span className="phancy-badge phancy-badge-sm phancy-badge-cream">
            {product.brand}
          </span>
        </div>

        <Link href={`/product/${product.slug}`}>
          <h3 className="font-[var(--font-display)] text-lg font-semibold leading-snug text-[var(--off-black)] group-hover:text-[var(--forest)] transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[var(--terracotta)]">★</span>
            <span className="font-[var(--font-display)] text-sm font-medium text-[var(--off-black)]">
              {product.rating}
            </span>
          </div>
          <span className="w-1 h-1 rounded-full bg-[var(--line)]" />
          <span className="font-[var(--font-display)] text-sm text-[var(--muted)]">
            {product.reviewCount.toLocaleString()} reviews
          </span>
        </div>

        <p className="mt-4 font-[var(--font-body)] text-[15px] leading-relaxed text-[var(--muted)] line-clamp-2">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-[var(--font-display)] text-2xl font-bold text-[var(--forest)]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href={`/product/${product.slug}`}
            className="phancy-btn phancy-btn-secondary phancy-btn-sm text-center justify-center"
          >
            Details
          </Link>

          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            onClick={handleAffiliateClick}
            className="phancy-btn phancy-btn-primary phancy-btn-sm text-center justify-center"
          >
            View on Amazon
          </a>
        </div>
      </div>
    </article>
  );
}
