"use client";

import React from "react";
import Link from "next/link";
import { Product, getProductAffiliateUrl } from "@/lib/manifest";
import { formatPrice, getCtaText } from "@/lib/site";

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
      body: JSON.stringify({
        type: 'affiliate_click',
        productId: product.id,
        retailer: product.retailerName,
        price: product.price
      })
    }).catch(() => {});
  };

  const affiliateUrl = getProductAffiliateUrl(product);
  const displayMaterials = product.materials.slice(0, compact ? 2 : 4);

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
                product.badge.includes("Classic") ? "phancy-badge-walnut" :
                product.badge.includes("American") ? "phancy-badge-terracotta" :
                product.badge.includes("Artisan") || product.badge.includes("Fair") ? "phancy-badge-moss" :
                "phancy-badge-charcoal"
              }`}>
                {product.badge}
              </span>
            </div>
          )}

          {/* Image placeholder - replace with actual image when available */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--oat)] to-[var(--sand)]">
            <div className="text-center px-4">
              <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-lg opacity-50">
                {product.brand}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="phancy-product-content">
        {/* Category & Retailer */}
        <div className="flex items-center justify-between mb-2">
          <span className="phancy-product-category">
            {product.subCategory}
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-wider text-[var(--muted)] opacity-60">
            {product.retailerName}
          </span>
        </div>

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

        {/* Materials */}
        {showAttributes && displayMaterials.length > 0 && (
          <div className="phancy-product-attributes">
            {displayMaterials.map((material, idx) => (
              <span key={idx} className="phancy-product-attribute">
                {material}
              </span>
            ))}
          </div>
        )}

        {/* Footer: Price + CTA */}
        <div className="phancy-product-footer">
          <span className="phancy-product-price">
            {formatPrice(product.price, product.currency)}
          </span>

          <a
            href={affiliateUrl}
            onClick={handleAffiliateClick}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="phancy-product-cta"
          >
            {getCtaText(product.retailerName)}
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

// Compact variant for smaller grids
export const ProductCardCompact: React.FC<{ product: Product }> = ({ product }) => {
  const affiliateUrl = getProductAffiliateUrl(product);

  return (
    <article className="group bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-md)]">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-square bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] flex items-center justify-center relative overflow-hidden">
          <div className="text-center px-3">
            <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-sm opacity-50">
              {product.brand}
            </span>
          </div>
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
            {formatPrice(product.price, product.currency)}
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
  const affiliateUrl = getProductAffiliateUrl(product);

  const handleAffiliateClick = () => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'affiliate_click',
        productId: product.id,
        retailer: product.retailerName,
        price: product.price
      })
    }).catch(() => {});
  };

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
            <div className="text-center px-6">
              <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-2xl opacity-40">
                {product.brand}
              </span>
            </div>
          </div>
        </Link>

        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-3">
            <span className="phancy-eyebrow-accent">{product.subCategory}</span>
            <span className="text-[0.65rem] font-medium uppercase tracking-wider text-[var(--muted)]">
              {product.retailerName}
            </span>
          </div>

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
            {product.materials.slice(0, 4).map((material, idx) => (
              <span key={idx} className="phancy-product-attribute">
                {material}
              </span>
            ))}
          </div>

          {/* Style Tags */}
          {product.styleTags && product.styleTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {product.styleTags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className="text-[0.65rem] font-medium uppercase tracking-wider text-[var(--muted)] bg-[var(--oat)] px-2 py-1 rounded">
                  {tag.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-[var(--line)]">
            <span className="font-[var(--font-display)] text-2xl font-semibold text-[var(--soft-black)]">
              {formatPrice(product.price, product.currency)}
            </span>
            <a
              href={affiliateUrl}
              onClick={handleAffiliateClick}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="phancy-btn phancy-btn-primary"
            >
              {getCtaText(product.retailerName)}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

// Gallery card for collection pages
export const ProductCardGallery: React.FC<{ product: Product }> = ({ product }) => {
  const affiliateUrl = getProductAffiliateUrl(product);

  return (
    <article className="group relative">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-[3/4] bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] rounded-[var(--radius-lg)] overflow-hidden mb-4 relative">
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="phancy-badge phancy-badge-forest text-xs">{product.badge}</span>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl opacity-40">
              {product.brand}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[var(--soft-black)]/0 group-hover:bg-[var(--soft-black)]/5 transition-colors duration-300" />
        </div>
      </Link>

      <div className="space-y-1">
        <p className="font-[var(--font-display)] text-[0.65rem] font-medium tracking-wider uppercase text-[var(--muted)]">
          {product.brand}
        </p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-[var(--font-display)] text-base font-semibold text-[var(--soft-black)] leading-snug group-hover:text-[var(--forest)] transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-2">
          <span className="font-[var(--font-display)] font-semibold text-[var(--soft-black)]">
            {formatPrice(product.price, product.currency)}
          </span>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-xs font-[var(--font-display)] font-medium text-[var(--forest)] hover:underline"
          >
            {product.retailerName}
          </a>
        </div>
      </div>
    </article>
  );
};
