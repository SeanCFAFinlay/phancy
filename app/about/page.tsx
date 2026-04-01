import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
  title: "About | Phancy - Objects for Calmer Living",
  description: "Learn about Phancy, our curation philosophy, and how we select wellness essentials and homewares for design-conscious living.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--cream)]">
        {/* Hero */}
        <section className="bg-[var(--oat)]">
          <div className="phancy-wrap py-20 lg:py-32">
            <div className="max-w-3xl">
              <span className="phancy-eyebrow-accent mb-4 block">Our Story</span>
              <h1 className="phancy-display mb-8">Objects for Calmer Living</h1>
              <p className="phancy-body-lg">
                Phancy is a curated destination for wellness essentials and design-forward homewares. We believe beautiful objects create calmer spaces.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="phancy-eyebrow mb-4 block">Our Philosophy</span>
                <h2 className="phancy-h1 mb-6">Not More. Better.</h2>
                <div className="space-y-6">
                  <p className="phancy-body">
                    In a world of endless options and algorithm-driven recommendations, we take a different approach. Every piece in our collection is hand-selected for how it looks, how it works, and how it makes a room feel.
                  </p>
                  <p className="phancy-body">
                    We do not believe in filling spaces. We believe in choosing pieces that earn their place. Objects that bring calm to your morning routine, warmth to your living room, and intention to your daily rituals.
                  </p>
                  <p className="phancy-body">
                    Phancy is for the design-conscious person who values quality over quantity, aesthetics alongside function, and understands that the objects we surround ourselves with shape how we feel.
                  </p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] rounded-[var(--radius-2xl)] flex items-center justify-center">
                <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-3xl">
                  Curated
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How We Curate */}
        <section className="phancy-section bg-[var(--oat)]">
          <div className="phancy-wrap">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="phancy-eyebrow mb-4 block">Selection Criteria</span>
              <h2 className="phancy-h1 mb-6">How We Choose</h2>
              <p className="phancy-body">
                Every product must pass our curation criteria before it earns a place in the collection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] p-8">
                <div className="w-12 h-12 rounded-full bg-[var(--forest-light)] flex items-center justify-center mb-6">
                  <span className="font-[var(--font-display)] text-lg font-semibold text-[var(--forest)]">1</span>
                </div>
                <h3 className="phancy-h3 mb-3">Aesthetics</h3>
                <p className="phancy-body-sm">
                  Does it look beautiful? Will it elevate a space rather than clutter it? We favor clean lines, warm materials, and timeless design.
                </p>
              </div>

              <div className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] p-8">
                <div className="w-12 h-12 rounded-full bg-[var(--forest-light)] flex items-center justify-center mb-6">
                  <span className="font-[var(--font-display)] text-lg font-semibold text-[var(--forest)]">2</span>
                </div>
                <h3 className="phancy-h3 mb-3">Utility</h3>
                <p className="phancy-body-sm">
                  Does it serve a real purpose? We select objects that are genuinely useful, not decorative dust collectors.
                </p>
              </div>

              <div className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] p-8">
                <div className="w-12 h-12 rounded-full bg-[var(--forest-light)] flex items-center justify-center mb-6">
                  <span className="font-[var(--font-display)] text-lg font-semibold text-[var(--forest)]">3</span>
                </div>
                <h3 className="phancy-h3 mb-3">Quality</h3>
                <p className="phancy-body-sm">
                  Is it well-made from good materials? We look for pieces built to last, from brands that care about craft.
                </p>
              </div>

              <div className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] p-8">
                <div className="w-12 h-12 rounded-full bg-[var(--forest-light)] flex items-center justify-center mb-6">
                  <span className="font-[var(--font-display)] text-lg font-semibold text-[var(--forest)]">4</span>
                </div>
                <h3 className="phancy-h3 mb-3">Warmth</h3>
                <p className="phancy-body-sm">
                  Does it add warmth to a space? We favor natural materials, organic forms, and pieces with soul.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="grid lg:grid-cols-2 gap-8">
              <Link href="/wellness" className="group block bg-[var(--forest-light)] rounded-[var(--radius-2xl)] p-10 lg:p-12">
                <span className="phancy-eyebrow-accent mb-4 block">Collection</span>
                <h3 className="phancy-h1 mb-4 group-hover:text-[var(--forest)] transition-colors">Wellness</h3>
                <p className="phancy-body mb-6">
                  Essentials for calmer mornings, restful nights, and daily rituals worth keeping. Sleep, bath, scent, and mindful living.
                </p>
                <span className="phancy-btn phancy-btn-primary inline-flex">
                  Explore Wellness
                </span>
              </Link>

              <Link href="/homewares" className="group block bg-[var(--terracotta-light)] rounded-[var(--radius-2xl)] p-10 lg:p-12">
                <span className="phancy-eyebrow text-[var(--terracotta)] mb-4 block">Collection</span>
                <h3 className="phancy-h1 mb-4 group-hover:text-[var(--terracotta)] transition-colors">Homewares</h3>
                <p className="phancy-body mb-6">
                  Design-forward objects that make everyday living feel intentional. Lighting, decor, kitchen, tabletop, and textiles.
                </p>
                <span className="phancy-btn phancy-btn-terracotta inline-flex">
                  Explore Homewares
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="phancy-section bg-[var(--oat)]">
          <div className="phancy-wrap">
            <div className="max-w-2xl mx-auto">
              <span className="phancy-eyebrow mb-4 block">Transparency</span>
              <h2 className="phancy-h2 mb-6">How Phancy Works</h2>
              <div className="space-y-4">
                <p className="phancy-body">
                  Phancy is an affiliate-supported publication. When you purchase through our links, we may earn a commission at no additional cost to you. This allows us to continue curating and sharing the best in wellness and homewares.
                </p>
                <p className="phancy-body">
                  Our editorial recommendations are never influenced by affiliate relationships. We only feature products we genuinely believe in and would recommend to friends.
                </p>
                <p className="phancy-body">
                  As an Amazon Associate, Phancy earns from qualifying purchases. Prices and availability are subject to change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="phancy-section">
          <div className="phancy-wrap">
            <div className="bg-[var(--soft-black)] text-white rounded-[var(--radius-2xl)] p-10 lg:p-16 text-center">
              <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl font-semibold mb-4">
                Start Exploring
              </h2>
              <p className="font-[var(--font-body)] text-lg text-white/60 max-w-md mx-auto mb-8">
                Discover curated pieces for every room and ritual.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/shop" className="phancy-btn phancy-btn-white">
                  Shop All
                </Link>
                <Link href="/favorites" className="phancy-btn phancy-btn-secondary border-white/20 text-white hover:bg-white/10">
                  View Favorites
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
