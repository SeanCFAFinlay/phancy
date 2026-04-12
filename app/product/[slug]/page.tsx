import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard from "@/components/ProductCard";
import { ProductManifest, getProductBySlug, getProductsByCategory, getProductAffiliateUrl } from "@/lib/manifest";
import { formatPrice, getCtaText } from "@/lib/site";

export function generateStaticParams() {
  return ProductManifest.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} by ${product.brand} | Phancy`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return notFound();

  const affiliateUrl = getProductAffiliateUrl(product);
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  // Get category URL
  const categoryUrl = `/${product.category.toLowerCase()}`;

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Breadcrumb */}
        <div className="bg-[var(--oat)] border-b border-[var(--line)]">
          <div className="phancy-wrap py-4">
            <nav className="flex items-center gap-2 font-[var(--font-display)] text-sm text-[var(--muted)]">
              <Link href="/" className="hover:text-[var(--forest)] transition-colors">
                Home
              </Link>
              <span className="text-[var(--line)]">/</span>
              <Link
                href={categoryUrl}
                className="hover:text-[var(--forest)] transition-colors"
              >
                {product.category}
              </Link>
              <span className="text-[var(--line)]">/</span>
              <span className="text-[var(--soft-black)]">{product.title}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] rounded-[var(--radius-2xl)] flex items-center justify-center overflow-hidden relative">
                {product.badge && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className={`phancy-badge ${
                      product.badge.includes("Editor") ? "phancy-badge-forest" :
                      product.badge.includes("Classic") ? "phancy-badge-walnut" :
                      product.badge.includes("American") ? "phancy-badge-terracotta" :
                      "phancy-badge-charcoal"
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="text-center px-6">
                  <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-3xl opacity-40">
                    {product.brand}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="phancy-eyebrow">{product.subCategory}</span>
                    <span className="text-[var(--line)]">|</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                      {product.retailerName}
                    </span>
                  </div>
                  <h1 className="phancy-h1 mb-3">{product.title}</h1>
                  <p className="font-[var(--font-display)] text-lg text-[var(--muted)]">{product.brand}</p>
                </div>

                <p className="phancy-editorial text-[var(--charcoal)] mb-6">
                  &ldquo;{product.editorNote}&rdquo;
                </p>

                <p className="phancy-body mb-8">{product.description}</p>

                {/* Materials */}
                {product.materials && product.materials.length > 0 && (
                  <div className="mb-6">
                    <p className="phancy-caption mb-3">Materials</p>
                    <div className="flex flex-wrap gap-2">
                      {product.materials.map((material, idx) => (
                        <span key={idx} className="phancy-product-attribute">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Style Tags */}
                {product.styleTags && product.styleTags.length > 0 && (
                  <div className="mb-8">
                    <p className="phancy-caption mb-3">Style</p>
                    <div className="flex flex-wrap gap-2">
                      {product.styleTags.map((tag, idx) => (
                        <span key={idx} className="text-xs font-medium uppercase tracking-wider text-[var(--muted)] bg-[var(--oat)] px-3 py-1.5 rounded-full">
                          {tag.replace(/-/g, ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-[var(--oat)] rounded-[var(--radius-xl)] mb-8">
                  <div>
                    <p className="phancy-caption mb-1">Price</p>
                    <p className="font-[var(--font-display)] text-3xl font-semibold text-[var(--soft-black)]">
                      {formatPrice(product.price, product.currency)}
                    </p>
                  </div>
                  <a
                    href={affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="phancy-btn phancy-btn-primary phancy-btn-lg flex-1 sm:flex-initial text-center"
                  >
                    {getCtaText(product.retailerName)}
                  </a>
                </div>

                {/* Source URL Note */}
                <p className="text-xs text-[var(--muted)] mb-6">
                  Available at{" "}
                  <a
                    href={product.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[var(--forest)]"
                  >
                    {product.retailerName}
                  </a>
                </p>

                {/* Collections */}
                {product.collection && product.collection.length > 0 && (
                  <div className="pt-6 border-t border-[var(--line)]">
                    <p className="phancy-caption mb-3">Found In</p>
                    <div className="flex flex-wrap gap-2">
                      {product.collection.map((col) => (
                        <Link
                          key={col}
                          href={`/collections/${col}`}
                          className="phancy-badge hover:bg-[var(--sand)] transition-colors"
                        >
                          {col.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rooms */}
                {product.room && product.room.length > 0 && (
                  <div className="pt-6 border-t border-[var(--line)] mt-6">
                    <p className="phancy-caption mb-3">Perfect For</p>
                    <div className="flex flex-wrap gap-2">
                      {product.room.map((room) => (
                        <Link
                          key={room}
                          href={`/rooms/${room}`}
                          className="phancy-badge phancy-badge-outline hover:bg-[var(--oat)] transition-colors"
                        >
                          {room.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="phancy-section bg-[var(--oat)]">
            <div className="phancy-wrap">
              <div className="mb-10">
                <span className="phancy-eyebrow mb-2 block">You Might Also Like</span>
                <h2 className="phancy-h2">More {product.category}</h2>
              </div>

              <div className="phancy-grid-4">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} showDescription={false} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section className="bg-[var(--soft-black)]">
          <div className="phancy-wrap py-12 text-center">
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to add this to your home?
            </h2>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="phancy-btn phancy-btn-white inline-flex"
            >
              {getCtaText(product.retailerName)}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
