import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard from "@/components/ProductCard";
import { rooms } from "@/lib/site";
import { ProductManifest } from "@/lib/manifest";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms.find(r => r.id === slug);

  if (!room) {
    return { title: "Room Not Found | Phancy" };
  }

  return {
    title: `${room.name} | Phancy - Curated Wellness & Homewares`,
    description: room.description,
  };
}

export default async function RoomPage({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms.find(r => r.id === slug);

  if (!room) {
    notFound();
  }

  const products = ProductManifest.filter(p => p.room?.includes(slug));

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--oat)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/rooms" className="phancy-eyebrow hover:text-[var(--forest)] transition-colors mb-4 block">
                  &larr; All Rooms
                </Link>
                <h1 className="phancy-display mb-6">{room.name}</h1>
                <p className="phancy-body-lg">
                  {room.description}
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] rounded-[var(--radius-2xl)] flex items-center justify-center">
                <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-3xl">
                  {room.name}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="mb-10">
              <h2 className="phancy-h2 mb-2">Products for Your {room.name}</h2>
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
                <p className="phancy-body mb-4">No products found for this room yet.</p>
                <Link href="/shop" className="phancy-btn phancy-btn-primary">
                  Browse All Products
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Other Rooms */}
        <section className="phancy-section bg-[var(--oat)]">
          <div className="phancy-wrap">
            <h2 className="phancy-h2 mb-8">Explore Other Rooms</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {rooms.filter(r => r.id !== slug).map((otherRoom) => (
                <Link
                  key={otherRoom.id}
                  href={`/rooms/${otherRoom.id}`}
                  className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-lg)] p-4 text-center hover:border-[var(--sand)] hover:shadow-md transition-all"
                >
                  <p className="font-[var(--font-display)] text-sm font-medium text-[var(--soft-black)]">
                    {otherRoom.name}
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
