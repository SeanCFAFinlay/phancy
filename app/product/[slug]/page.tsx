import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProducts, getProductBySlug, getCollectionById } from "@/lib/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
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
    title: `${product.name} | Phancy`,
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

  const collection = product.collection
    ? getCollectionById(product.collection)
    : null;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[var(--warm-white)] border-b border-[var(--line)]">
        <div className="phancy-wrap py-4">
          <nav className="flex items-center gap-2 font-[var(--font-display)] text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--forest)]">
              Home
            </Link>
            <span>/</span>
            {collection && (
              <>
                <Link
                  href={`/collections/${collection.id}`}
                  className="hover:text-[var(--forest)]"
                >
                  {collection.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[var(--off-black)]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="phancy-wrap phancy-section">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="phancy-card-cream aspect-square flex items-center justify-center overflow-hidden rounded-[var(--radius-xl)] p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {product.badge && (
                <span className="phancy-badge">{product.badge}</span>
              )}
              <span className="phancy-badge phancy-badge-cream">
                {product.brand}
              </span>
            </div>

            <h1 className="phancy-h1 mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-[var(--terracotta)] text-lg">★</span>
                <span className="font-[var(--font-display)] font-semibold text-[var(--off-black)]">
                  {product.rating}
                </span>
              </div>
              <span className="text-[var(--line)]">|</span>
              <span className="font-[var(--font-display)] text-[var(--muted)]">
                {product.reviewCount.toLocaleString()} reviews
              </span>
            </div>

            <div className="font-[var(--font-display)] text-4xl font-bold text-[var(--forest)] mb-6">
              ${product.price.toFixed(2)}
            </div>

            <p className="phancy-body-lg mb-8">{product.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="phancy-btn phancy-btn-primary text-center"
              >
                Discover on Amazon
              </a>
              {collection && (
                <Link
                  href={`/collections/${collection.id}`}
                  className="phancy-btn phancy-btn-secondary text-center"
                >
                  View Collection
                </Link>
              )}
            </div>

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mt-10 pt-8 border-t border-[var(--line)]">
                <h2 className="phancy-h3 mb-4">Key Ingredients</h2>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="phancy-badge phancy-badge-cream"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="bg-[var(--warm-white)] border-y border-[var(--line)]">
        <div className="phancy-wrap phancy-section-sm">
          <div className="mb-10 text-center">
            <div className="phancy-eyebrow mb-4">Editor&apos;s Assessment</div>
            <h2 className="phancy-h2">What We Think</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Pros */}
            <div className="phancy-card p-8 bg-[var(--forest-light)] border-[var(--sage-light)]">
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--forest)] mb-4">
                What We Love
              </h3>
              <ul className="space-y-3">
                {product.pros.map((pro) => (
                  <li
                    key={pro}
                    className="flex items-start gap-3 font-[var(--font-body)] text-[var(--off-black)]"
                  >
                    <span className="text-[var(--forest)] mt-1">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="phancy-card p-8 bg-[var(--terracotta-light)] border-[var(--terracotta-light)]">
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--terracotta)] mb-4">
                Worth Noting
              </h3>
              <ul className="space-y-3">
                {product.cons.map((con) => (
                  <li
                    key={con}
                    className="flex items-start gap-3 font-[var(--font-body)] text-[var(--off-black)]"
                  >
                    <span className="text-[var(--terracotta)] mt-1">○</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--forest)]">
        <div className="phancy-wrap py-12 text-center">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to add this to your collection?
          </h2>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="phancy-btn bg-white text-[var(--forest)] hover:bg-[var(--cream)] inline-flex"
          >
            Discover on Amazon
          </a>
        </div>
      </section>
    </>
  );
}
