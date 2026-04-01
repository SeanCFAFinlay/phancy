"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/lib/manifest";
import { withAffiliateTag } from "@/lib/site";

interface ProductCardProps {
  product: Product;
  showDescription?: boolean;
  showAttributes?: boolean;
  compact?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showDescription = true,
  showAttributes = true,
  compact = false
}) => {
  const handleAffiliateClick = () => {
    // Track affiliate click
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'affiliate_click', productId: product.id })
    }).catch(() => {});
  };

  const affiliateUrl = withAffiliateTag(product.affiliateLink);
  const displayAttributes = product.attributes.slice(0, compact ? 2 : 4);

  return (
    <article className="phancy-product-card group">
      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="phancy-product-image">
          {/* Badge */}
          {product.badge && (
            <div className="phancy-product-badge">
              <span className={`phancy-badge ${
                product.badge.includes("Editor") ? "phancy-badge-forest" :
                product.badge.includes("Most") ? "phancy-badge-terracotta" :
                "phancy-badge-walnut"
              }`}>
                {product.badge}
              </span>
            </div>
          )}

          {/* Image placeholder - replace with actual image when available */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-2xl opacity-30">
              {product.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="phancy-product-content">
        {/* Category */}
        <span className="phancy-product-category">
          {product.subCategory}
        </span>

        {/* Title */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="phancy-product-title group-hover:text-[var(--forest)] transition-colors">
            {product.title}
          </h3>
        </Link>

        {/* Brand */}
        <p className="phancy-product-brand">
          {product.brand}
        </p>

        {/* Editorial Description */}
        {showDescription && !compact && (
          <p className="phancy-product-description line-clamp-2">
            &ldquo;{product.editorNote}&rdquo;
          </p>
        )}

        {/* Attributes */}
        {showAttributes && displayAttributes.length > 0 && (
          <div className="phancy-product-attributes">
            {displayAttributes.map((attr, idx) => (
              <span key={idx} className="phancy-product-attribute">
                {attr}
              </span>
            ))}
          </div>
        )}

        {/* Footer: Price + CTA */}
        <div className="phancy-product-footer">
          <span className="phancy-product-price">
            ${product.price.toFixed(0)}
          </span>

          <a
            href={affiliateUrl}
            onClick={handleAffiliateClick}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="phancy-product-cta"
          >
            View on Amazon
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

// Compact variant for smaller grids
export const ProductCardCompact: React.FC<{ product: Product }> = ({ product }) => {
  const affiliateUrl = withAffiliateTag(product.affiliateLink);

  return (
    <article className="group bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-md)]">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-square bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] flex items-center justify-center relative overflow-hidden">
          <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl opacity-30">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="p-4">
        <span className="font-[var(--font-display)] text-[0.65rem] font-medium tracking-wider uppercase text-[var(--muted)] mb-1 block">
          {product.brand}
        </span>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-[var(--font-display)] text-sm font-semibold text-[var(--soft-black)] leading-snug mb-2 group-hover:text-[var(--forest)] transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="font-[var(--font-display)] font-semibold text-[var(--soft-black)]">
            ${product.price.toFixed(0)}
          </span>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-xs font-[var(--font-display)] font-medium text-[var(--forest)] hover:underline"
          >
            Shop
          </a>
        </div>
      </div>
    </article>
  );
};

// Feature card for larger displays
export const ProductCardFeature: React.FC<{ product: Product }> = ({ product }) => {
  const affiliateUrl = withAffiliateTag(product.affiliateLink);

  return (
    <article className="group bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-500 hover:border-[var(--sand)] hover:shadow-[var(--shadow-lg)]">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <Link href={`/product/${product.slug}`} className="block">
          <div className="aspect-[4/5] md:aspect-auto md:h-full bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] flex items-center justify-center relative overflow-hidden">
            {product.badge && (
              <div className="absolute top-4 left-4 z-10">
                <span className="phancy-badge phancy-badge-forest">{product.badge}</span>
              </div>
            )}
            <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-3xl opacity-30">
              {product.category}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span className="phancy-eyebrow-accent mb-3">{product.subCategory}</span>

          <Link href={`/product/${product.slug}`}>
            <h3 className="phancy-h2 mb-2 group-hover:text-[var(--forest)] transition-colors">
              {product.title}
            </h3>
          </Link>

          <p className="font-[var(--font-display)] text-sm text-[var(--muted)] mb-4">
            {product.brand}
          </p>

          <p className="phancy-editorial text-[var(--charcoal)] mb-6">
            &ldquo;{product.editorNote}&rdquo;
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {product.attributes.slice(0, 4).map((attr, idx) => (
              <span key={idx} className="phancy-product-attribute">
                {attr}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-[var(--line)]">
            <span className="font-[var(--font-display)] text-2xl font-semibold text-[var(--soft-black)]">
              ${product.price.toFixed(0)}
            </span>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="phancy-btn phancy-btn-primary"
            >
              View on Amazon
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
