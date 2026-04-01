import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { rooms } from "@/lib/site";
import { ProductManifest } from "@/lib/manifest";

export const metadata = {
  title: "Shop by Room | Phancy - Curated Wellness & Homewares",
  description: "Find curated pieces for every room in your home. Living room, bedroom, bathroom, kitchen, and more.",
};

export default function RoomsPage() {
  const roomsWithProducts = rooms.map(room => ({
    ...room,
    productCount: ProductManifest.filter(p => p.room?.includes(room.id)).length
  }));

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--oat)]">
          <div className="phancy-wrap py-16 lg:py-24">
            <div className="max-w-2xl">
              <span className="phancy-eyebrow-accent mb-4 block">Room by Room</span>
              <h1 className="phancy-display mb-6">Shop by Room</h1>
              <p className="phancy-body-lg">
                Every room deserves intention. Find pieces curated for the specific spaces in your home.
              </p>
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roomsWithProducts.map((room) => (
                <Link
                  key={room.id}
                  href={`/rooms/${room.id}`}
                  className="group"
                >
                  <article className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] flex items-center justify-center relative">
                      <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-2xl">
                        {room.name}
                      </span>
                      <div className="absolute bottom-4 right-4">
                        <span className="phancy-badge">{room.productCount} pieces</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="font-[var(--font-display)] text-xl font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                        {room.name}
                      </h2>
                      <p className="font-[var(--font-body)] text-[var(--muted)]">
                        {room.description}
                      </p>
                    </div>
                  </article>
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
