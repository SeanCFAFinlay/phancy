import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ComparisonTable({
  productA,
  productB,
}: {
  productA: Product;
  productB: Product;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {[productA, productB].map((product) => (
        <div
          key={product.id}
          className="phancy-card overflow-hidden"
        >
          {/* Product Image */}
          <div className="phancy-product-image aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {product.badge && (
                <span className="phancy-badge text-[9px]">{product.badge}</span>
              )}
              <span className="phancy-badge phancy-badge-cream text-[9px]">
                {product.brand}
              </span>
            </div>

            <h3 className="phancy-h3 mb-2">{product.name}</h3>

            <p className="phancy-body text-sm mb-6 line-clamp-2">
              {product.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-[var(--line)]">
              <div className="text-center">
                <div className="font-[var(--font-display)] text-2xl font-bold text-[var(--forest)]">
                  ${product.price.toFixed(0)}
                </div>
                <div className="phancy-caption text-xs">Price</div>
              </div>
              <div className="text-center">
                <div className="font-[var(--font-display)] text-2xl font-bold text-[var(--off-black)]">
                  {product.rating}
                </div>
                <div className="phancy-caption text-xs">Rating</div>
              </div>
              <div className="text-center">
                <div className="font-[var(--font-display)] text-2xl font-bold text-[var(--off-black)]">
                  {(product.reviewCount / 1000).toFixed(1)}k
                </div>
                <div className="phancy-caption text-xs">Reviews</div>
              </div>
            </div>

            {/* Pros */}
            <div className="mt-6">
              <h4 className="font-[var(--font-display)] text-sm font-semibold text-[var(--forest)] mb-3">
                What We Love
              </h4>
              <ul className="space-y-2">
                {product.pros.slice(0, 3).map((pro) => (
                  <li
                    key={pro}
                    className="flex items-start gap-2 font-[var(--font-body)] text-sm text-[var(--muted)]"
                  >
                    <span className="text-[var(--forest)]">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="mt-4">
              <h4 className="font-[var(--font-display)] text-sm font-semibold text-[var(--terracotta)] mb-3">
                Worth Noting
              </h4>
              <ul className="space-y-2">
                {product.cons.slice(0, 2).map((con) => (
                  <li
                    key={con}
                    className="flex items-start gap-2 font-[var(--font-body)] text-sm text-[var(--muted)]"
                  >
                    <span className="text-[var(--terracotta)]">○</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="phancy-btn phancy-btn-primary text-center"
              >
                Discover on Amazon
              </a>
              <Link
                href={`/product/${product.slug}`}
                className="phancy-btn phancy-btn-secondary text-center"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
