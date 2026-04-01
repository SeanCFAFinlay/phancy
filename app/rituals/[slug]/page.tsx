import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard from "@/components/ProductCard";
import { rituals } from "@/lib/site";
import { ProductManifest } from "@/lib/manifest";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rituals.map((ritual) => ({
    slug: ritual.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const ritual = rituals.find(r => r.id === slug);

  if (!ritual) {
    return { title: "Ritual Not Found | Phancy" };
  }

  return {
    title: `${ritual.name} | Phancy - Shop by Ritual`,
    description: ritual.description,
  };
}

export default async function RitualPage({ params }: PageProps) {
  const { slug } = await params;
  const ritual = rituals.find(r => r.id === slug);

  if (!ritual) {
    notFound();
  }

  const products = ProductManifest.filter(p => p.ritual?.includes(slug));

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--oat)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/#rituals" className="phancy-eyebrow hover:text-[var(--forest)] transition-colors mb-4 block">
                  &larr; All Rituals
                </Link>
                <h1 className="phancy-display mb-6">{ritual.name}</h1>
                <p className="phancy-body-lg">
                  {ritual.description}
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] rounded-[var(--radius-2xl)] flex items-center justify-center">
                <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-3xl">
                  {ritual.name}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-10">
              <h2 className="phancy-h2 mb-2">Products for {ritual.name}</h2>
              <p className="phancy-body">{products.length} curated pieces</p>
            </div>

            {products.length > 0 ? (
              <div className="phancy-grid-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[var(--oat)] rounded-[var(--radius-xl)]">
                <p className="phancy-body mb-4">No products tagged for this ritual yet.</p>
                <Link href="/shop" className="phancy-btn phancy-btn-primary">
                  Browse All Products
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Other Rituals */}
        <section className="phancy-section bg-[var(--oat)]">
          <div className="phancy-wrap">
            <h2 className="phancy-h2 mb-8">Explore Other Rituals</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rituals.filter(r => r.id !== slug).map((otherRitual) => (
                <Link
                  key={otherRitual.id}
                  href={`/rituals/${otherRitual.id}`}
                  className="group bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-lg)] p-6 hover:border-[var(--sand)] hover:shadow-md transition-all"
                >
                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                    {otherRitual.name}
                  </h3>
                  <p className="font-[var(--font-body)] text-[var(--muted)] text-sm">
                    {otherRitual.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
