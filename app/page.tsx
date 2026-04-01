import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard, { ProductCardCompact, ProductCardFeature } from "@/components/ProductCard";
import {
  getBestSellers,
  getProductsByCollection,
} from "@/lib/manifest";
import { rituals, rooms } from "@/lib/site";

export default function HomePage() {
  const bestSellers = getBestSellers().slice(0, 4);
  const editorsPicks = getProductsByCollection("editors-picks").slice(0, 4);
  const smallLuxuries = getProductsByCollection("small-luxuries").slice(0, 4);

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen">
        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 1: HERO
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[var(--oat)]">
          <div className="phancy-wrap py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Hero Content */}
              <div className="space-y-8 max-w-xl">
                <span className="phancy-eyebrow-accent">Curated Wellness & Homewares</span>

                <h1 className="phancy-display">
                  Objects for<br />
                  <span className="font-[var(--font-body)] italic font-normal text-[var(--walnut)]">
                    Calmer Living
                  </span>
                </h1>

                <p className="phancy-body-lg">
                  A curated destination for wellness essentials and design-forward homewares. Every piece chosen for how it looks, how it works, and how it makes you feel.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/shop" className="phancy-btn phancy-btn-primary phancy-btn-lg">
                    Explore the Edit
                  </Link>
                  <Link href="/collections/editors-picks" className="phancy-btn phancy-btn-secondary phancy-btn-lg">
                    Editor&apos;s Picks
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-[var(--sand)] to-[var(--cream)] rounded-[var(--radius-2xl)] flex items-center justify-center overflow-hidden shadow-xl">
                  <div className="text-center p-8">
                    <div className="w-24 h-0.5 bg-[var(--walnut)]/20 mx-auto mb-6" />
                    <span className="font-[var(--font-body)] italic text-[var(--walnut)]/30 text-4xl">
                      Beautiful & Useful
                    </span>
                    <div className="w-24 h-0.5 bg-[var(--walnut)]/20 mx-auto mt-6" />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-[var(--radius-lg)] p-5 shadow-lg">
                  <p className="font-[var(--font-display)] text-xs font-medium text-[var(--muted)] uppercase tracking-wider mb-1">
                    Featured This Week
                  </p>
                  <p className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)]">
                    30 Curated Pieces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 2: FEATURED CATEGORIES STRIP
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] border-y border-[var(--line)]">
          <div className="phancy-wrap py-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link
                href="/wellness"
                className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--oat)] hover:bg-[var(--sand)] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[var(--forest-light)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--forest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                <span className="font-[var(--font-display)] text-sm font-medium text-[var(--soft-black)]">Wellness</span>
              </Link>

              <Link
                href="/homewares"
                className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--oat)] hover:bg-[var(--sand)] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[var(--terracotta-light)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--terracotta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
                <span className="font-[var(--font-display)] text-sm font-medium text-[var(--soft-black)]">Homewares</span>
              </Link>

              <Link
                href="/rooms"
                className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--oat)] hover:bg-[var(--sand)] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[var(--moss-light)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--moss)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </span>
                <span className="font-[var(--font-display)] text-sm font-medium text-[var(--soft-black)]">Rooms</span>
              </Link>

              <Link
                href="/collections/best-under-100"
                className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--oat)] hover:bg-[var(--sand)] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[var(--sage-light)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--sage)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="font-[var(--font-display)] text-sm font-medium text-[var(--soft-black)]">Under $100</span>
              </Link>

              <Link
                href="/journal"
                className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--oat)] hover:bg-[var(--sand)] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[var(--oat)] border border-[var(--line-dark)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--charcoal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                <span className="font-[var(--font-display)] text-sm font-medium text-[var(--soft-black)]">Journal</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 3: EDITOR'S EDIT
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] phancy-section">
          <div className="phancy-wrap">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="phancy-eyebrow mb-3 block">This Week&apos;s Selection</span>
                <h2 className="phancy-h1">The Editor&apos;s Edit</h2>
                <p className="phancy-body mt-3 max-w-xl">
                  Our current obsessions. Pieces we have tested, loved, and believe will become part of your daily rituals.
                </p>
              </div>
              <Link href="/collections/editors-picks" className="phancy-btn phancy-btn-secondary shrink-0">
                View All Picks
              </Link>
            </div>

            {/* Featured Product (Large) */}
            {editorsPicks[0] && (
              <div className="mb-8">
                <ProductCardFeature product={editorsPicks[0]} />
              </div>
            )}

            {/* Product Grid */}
            <div className="phancy-grid-3">
              {editorsPicks.slice(1, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 4: SHOP BY RITUAL
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--oat)] phancy-section">
          <div className="phancy-wrap">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="phancy-eyebrow mb-3 block">Daily Practices</span>
              <h2 className="phancy-h1">Shop by Ritual</h2>
              <p className="phancy-body mt-4">
                Beautiful objects organized around the moments that matter. Morning quiet, evening wind-down, and everything between.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rituals.map((ritual) => (
                <Link
                  key={ritual.id}
                  href={`/rituals/${ritual.id}`}
                  className="group bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] p-8 transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] rounded-[var(--radius-lg)] mb-6 flex items-center justify-center">
                    <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl">
                      {ritual.name}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                    {ritual.name}
                  </h3>
                  <p className="font-[var(--font-body)] text-[var(--muted)] text-sm">
                    {ritual.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 5: BEST SELLERS / MOST LOVED
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] phancy-section">
          <div className="phancy-wrap">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="phancy-eyebrow mb-3 block">Community Favorites</span>
                <h2 className="phancy-h1">Most Loved</h2>
                <p className="phancy-body mt-3 max-w-xl">
                  The pieces our readers return to again and again. Proven quality, lasting appeal.
                </p>
              </div>
              <Link href="/collections/most-loved" className="phancy-btn phancy-btn-secondary shrink-0">
                See All Favorites
              </Link>
            </div>

            <div className="phancy-scroll-grid">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} compact />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 6: SHOP BY ROOM
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--soft-black)] text-white phancy-section">
          <div className="phancy-wrap">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
              <div>
                <span className="phancy-eyebrow text-[var(--sage)] mb-3 block">Room by Room</span>
                <h2 className="font-[var(--font-display)] text-4xl lg:text-5xl font-semibold mb-6">
                  Shop by Space
                </h2>
                <p className="font-[var(--font-body)] text-lg text-white/60 leading-relaxed mb-8">
                  Every room deserves intention. Find pieces curated for specific spaces in your home.
                </p>
                <Link href="/rooms" className="phancy-btn phancy-btn-white">
                  Explore All Rooms
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {rooms.slice(0, 4).map((room) => (
                  <Link
                    key={room.id}
                    href={`/rooms/${room.id}`}
                    className="group aspect-square bg-white/5 rounded-[var(--radius-lg)] p-6 flex flex-col justify-end hover:bg-white/10 transition-colors"
                  >
                    <h3 className="font-[var(--font-display)] text-lg font-medium text-white group-hover:text-[var(--sage)] transition-colors">
                      {room.name}
                    </h3>
                    <p className="font-[var(--font-body)] text-sm text-white/50 mt-1">
                      {room.description.split('.')[0]}.
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 7: JOURNAL / EDITORIAL
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--oat)] phancy-section">
          <div className="phancy-wrap">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="phancy-eyebrow mb-3 block">The Journal</span>
              <h2 className="phancy-h1">Read & Discover</h2>
              <p className="phancy-body mt-4">
                Design inspiration, product deep-dives, and guides to creating spaces you love.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <Link href="/journal/wellness-essentials-for-better-sleep" className="group">
                <article className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]">
                  <div className="aspect-[3/2] bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] flex items-center justify-center">
                    <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl">Sleep</span>
                  </div>
                  <div className="p-6">
                    <span className="phancy-badge phancy-badge-forest mb-3">Wellness</span>
                    <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                      10 Wellness Pieces for Better Sleep
                    </h3>
                    <p className="font-[var(--font-body)] text-[var(--muted)] text-sm line-clamp-2">
                      From weighted blankets to silk sleep masks, the essentials for a restorative night.
                    </p>
                  </div>
                </article>
              </Link>

              {/* Article 2 */}
              <Link href="/journal/sculptural-lamps-warm-modern" className="group">
                <article className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]">
                  <div className="aspect-[3/2] bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] flex items-center justify-center">
                    <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl">Lighting</span>
                  </div>
                  <div className="p-6">
                    <span className="phancy-badge phancy-badge-terracotta mb-3">Homewares</span>
                    <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                      Best Sculptural Lamps for a Warm Modern Home
                    </h3>
                    <p className="font-[var(--font-body)] text-[var(--muted)] text-sm line-clamp-2">
                      Light as sculpture. Our favorite table lamps that double as art.
                    </p>
                  </div>
                </article>
              </Link>

              {/* Article 3 */}
              <Link href="/journal/small-luxuries-under-50" className="group">
                <article className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]">
                  <div className="aspect-[3/2] bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] flex items-center justify-center">
                    <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl">Gifts</span>
                  </div>
                  <div className="p-6">
                    <span className="phancy-badge phancy-badge-walnut mb-3">Gift Guide</span>
                    <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                      Small Luxuries That Improve Everyday Rituals
                    </h3>
                    <p className="font-[var(--font-body)] text-[var(--muted)] text-sm line-clamp-2">
                      Thoughtful gifts under $50 for the design-conscious.
                    </p>
                  </div>
                </article>
              </Link>
            </div>

            <div className="text-center mt-10">
              <Link href="/journal" className="phancy-btn phancy-btn-secondary">
                Read the Journal
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 8: BRAND TRUST / PHILOSOPHY
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] phancy-section-lg">
          <div className="phancy-wrap">
            <div className="max-w-4xl mx-auto text-center">
              <div className="phancy-divider-thick mx-auto mb-10" />

              <h2 className="phancy-pullquote mb-10">
                &ldquo;We believe beautiful objects create calmer spaces. Every piece is chosen for aesthetics, utility, and the way it makes a room feel.&rdquo;
              </h2>

              <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
                <div className="text-center">
                  <p className="font-[var(--font-display)] text-3xl font-semibold text-[var(--soft-black)] mb-1">30</p>
                  <p className="phancy-caption">Curated Pieces</p>
                </div>
                <div className="text-center">
                  <p className="font-[var(--font-display)] text-3xl font-semibold text-[var(--soft-black)] mb-1">2</p>
                  <p className="phancy-caption">Categories</p>
                </div>
                <div className="text-center">
                  <p className="font-[var(--font-display)] text-3xl font-semibold text-[var(--soft-black)] mb-1">4+</p>
                  <p className="phancy-caption">Rooms Covered</p>
                </div>
              </div>

              <p className="phancy-body max-w-2xl mx-auto mb-8">
                Phancy is not about having more. It is about having better. We curate wellness essentials and homewares that bring calm and warmth to your daily life, choosing pieces for their design integrity, material quality, and lasting appeal.
              </p>

              <Link href="/about" className="phancy-btn-link font-[var(--font-display)] text-sm font-medium">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 9: SMALL LUXURIES / UNDER $100
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--oat)] phancy-section">
          <div className="phancy-wrap">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="phancy-eyebrow mb-3 block">Accessible Luxuries</span>
                <h2 className="phancy-h1">Best Under $100</h2>
                <p className="phancy-body mt-3 max-w-xl">
                  Elevated everyday objects that do not require a big investment. Small luxuries, big impact.
                </p>
              </div>
              <Link href="/collections/best-under-100" className="phancy-btn phancy-btn-secondary shrink-0">
                Shop All Under $100
              </Link>
            </div>

            <div className="phancy-grid-4">
              {smallLuxuries.map((product) => (
                <ProductCardCompact key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
