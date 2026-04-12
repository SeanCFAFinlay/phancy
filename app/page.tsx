import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProductCard, { ProductCardCompact, ProductCardFeature, ProductCardGallery } from "@/components/ProductCard";
import {
  getBestSellers,
  getProductsByCollection,
  getProductsByCategory,
  ProductManifest,
  getUniqueRetailers,
} from "@/lib/manifest";
import { rooms, collections, site } from "@/lib/site";

export default function HomePage() {
  const designClassics = getProductsByCollection("design-classics").slice(0, 4);
  const bestUnder100 = getProductsByCollection("best-under-100").slice(0, 6);
  const materialWarmth = getProductsByCollection("material-warmth").slice(0, 4);
  const quietRituals = getProductsByCollection("quiet-rituals").slice(0, 4);
  const bestSellers = getBestSellers().slice(0, 6);
  const lightingProducts = getProductsByCategory("Lighting").slice(0, 4);

  const totalProducts = ProductManifest.length;
  const totalRetailers = getUniqueRetailers().length;

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen">
        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 1: HERO - Architectural + Editorial
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[var(--oat)]">
          <div className="phancy-wrap py-24 lg:py-36">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Hero Content */}
              <div className="space-y-8 max-w-xl">
                <span className="phancy-eyebrow-accent">Mid-Century Modern Design</span>

                <h1 className="phancy-display">
                  Objects of<br />
                  <span className="font-[var(--font-body)] italic font-normal text-[var(--walnut)]">
                    Quiet Architecture
                  </span>
                </h1>

                <p className="phancy-body-lg">
                  {site.brandStatement}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/shop" className="phancy-btn phancy-btn-primary phancy-btn-lg">
                    Explore the Collection
                  </Link>
                  <Link href="/collections/design-classics" className="phancy-btn phancy-btn-secondary phancy-btn-lg">
                    Design Classics
                  </Link>
                </div>
              </div>

              {/* Hero Image / Architectural Element */}
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-[var(--sand)] via-[var(--cream)] to-[var(--parchment)] rounded-[var(--radius-2xl)] flex items-center justify-center overflow-hidden shadow-xl">
                  <div className="text-center p-8">
                    <div className="w-32 h-px bg-[var(--walnut)]/20 mx-auto mb-8" />
                    <span className="font-[var(--font-body)] italic text-[var(--walnut)]/40 text-3xl block mb-2">
                      Material Warmth
                    </span>
                    <span className="font-[var(--font-display)] text-[var(--walnut)]/20 text-sm uppercase tracking-widest">
                      Walnut • Brass • Ceramic • Linen
                    </span>
                    <div className="w-32 h-px bg-[var(--walnut)]/20 mx-auto mt-8" />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-[var(--radius-lg)] p-6 shadow-lg">
                  <p className="font-[var(--font-display)] text-xs font-medium text-[var(--muted)] uppercase tracking-wider mb-1">
                    Curated Collection
                  </p>
                  <p className="font-[var(--font-display)] text-2xl font-semibold text-[var(--soft-black)]">
                    {totalProducts} Verified Pieces
                  </p>
                  <p className="font-[var(--font-display)] text-xs text-[var(--muted)] mt-1">
                    from {totalRetailers} Premium Retailers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 2: CATEGORY NAVIGATION
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] border-y border-[var(--line)]">
          <div className="phancy-wrap py-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { href: "/lighting", label: "Lighting", icon: "💡" },
                { href: "/furniture", label: "Furniture", icon: "🪑" },
                { href: "/decor", label: "Decor", icon: "🏺" },
                { href: "/wellness", label: "Wellness", icon: "🕯️" },
                { href: "/textiles", label: "Textiles", icon: "🧵" },
                { href: "/collections/design-classics", label: "Classics", icon: "✨" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--oat)] hover:bg-[var(--sand)] transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-[var(--font-display)] text-sm font-medium text-[var(--soft-black)]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 3: DESIGN CLASSICS
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] phancy-section">
          <div className="phancy-wrap">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="phancy-eyebrow mb-3 block">Timeless Icons</span>
                <h2 className="phancy-h1">Design Classics</h2>
                <p className="phancy-body mt-3 max-w-xl">
                  The pieces that defined mid-century modern. Eames, Noguchi, Nelson, Henningsen. Icons that never go out of style.
                </p>
              </div>
              <Link href="/collections/design-classics" className="phancy-btn phancy-btn-secondary shrink-0">
                View All Classics
              </Link>
            </div>

            {/* Featured Product (Large) */}
            {designClassics[0] && (
              <div className="mb-8">
                <ProductCardFeature product={designClassics[0]} />
              </div>
            )}

            {/* Product Grid */}
            <div className="phancy-grid-3">
              {designClassics.slice(1, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 4: ARCHITECTURAL LIGHTING
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--soft-black)] text-white phancy-section">
          <div className="phancy-wrap">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="phancy-eyebrow text-[var(--sage)] mb-3 block">Light as Structure</span>
                <h2 className="font-[var(--font-display)] text-4xl lg:text-5xl font-semibold mb-6">
                  Architectural Lighting
                </h2>
                <p className="font-[var(--font-body)] text-lg text-white/60 leading-relaxed mb-6">
                  Pendant lights, table lamps, and floor lamps that treat light as an architectural element. From Nelson Bubble Lamps to Scandinavian glass pendants.
                </p>
                <p className="font-[var(--font-body)] text-white/40 text-sm mb-8">
                  Featuring Louis Poulsen, Herman Miller, Muuto, Ferm Living, Schoolhouse
                </p>
                <Link href="/lighting" className="phancy-btn phancy-btn-white">
                  Shop All Lighting
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {lightingProducts.slice(0, 4).map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    className="group aspect-square bg-white/5 rounded-[var(--radius-lg)] p-4 flex flex-col justify-end hover:bg-white/10 transition-colors"
                  >
                    <p className="font-[var(--font-display)] text-xs text-white/40 mb-1">
                      {product.brand}
                    </p>
                    <h3 className="font-[var(--font-display)] text-sm font-medium text-white group-hover:text-[var(--sage)] transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="font-[var(--font-display)] text-white/60 text-sm mt-1">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 5: QUIET RITUALS (Wellness)
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--oat)] phancy-section">
          <div className="phancy-wrap">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="phancy-eyebrow mb-3 block">Wellness Objects</span>
              <h2 className="phancy-h1">Quiet Rituals</h2>
              <p className="phancy-body mt-4">
                Diffusers, candles, and scents for daily rituals. Objects that make ordinary moments feel intentional.
              </p>
            </div>

            <div className="phancy-grid-4">
              {quietRituals.map((product) => (
                <ProductCardGallery key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/wellness" className="phancy-btn phancy-btn-secondary">
                Shop Wellness
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 6: SHOP BY ROOM
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] phancy-section">
          <div className="phancy-wrap">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="phancy-eyebrow mb-3 block">Space by Space</span>
                <h2 className="phancy-h1">Shop by Room</h2>
                <p className="phancy-body mt-3 max-w-xl">
                  Every room deserves intention. Find pieces curated for specific spaces in your home.
                </p>
              </div>
              <Link href="/rooms" className="phancy-btn phancy-btn-secondary shrink-0">
                All Rooms
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rooms.slice(0, 4).map((room) => (
                <Link
                  key={room.id}
                  href={`/rooms/${room.id}`}
                  className="group bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[var(--oat)] to-[var(--sand)] flex items-center justify-center">
                    <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl opacity-40">
                      {room.name}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                      {room.name}
                    </h3>
                    <p className="font-[var(--font-body)] text-[var(--muted)] text-sm">
                      {room.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 7: MATERIAL WARMTH
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--parchment)] phancy-section">
          <div className="phancy-wrap">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="phancy-eyebrow mb-3 block">Natural & Honest</span>
                <h2 className="phancy-h1">Material Warmth</h2>
                <p className="phancy-body mt-3 max-w-xl">
                  Walnut, brass, linen, ceramic. Pieces defined by their materials. Honest construction, natural beauty.
                </p>
              </div>
              <Link href="/collections/material-warmth" className="phancy-btn phancy-btn-secondary shrink-0">
                View Collection
              </Link>
            </div>

            <div className="phancy-scroll-grid">
              {materialWarmth.map((product) => (
                <ProductCard key={product.id} product={product} compact />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 8: BEST SELLERS
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] phancy-section">
          <div className="phancy-wrap">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="phancy-eyebrow mb-3 block">Proven Quality</span>
                <h2 className="phancy-h1">Most Loved</h2>
                <p className="phancy-body mt-3 max-w-xl">
                  The pieces our readers return to again and again. Proven quality, lasting appeal.
                </p>
              </div>
              <Link href="/shop?sort=bestsellers" className="phancy-btn phancy-btn-secondary shrink-0">
                See All Favorites
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestSellers.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} showDescription={false} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 9: BRAND PHILOSOPHY
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--oat)] phancy-section-lg">
          <div className="phancy-wrap">
            <div className="max-w-4xl mx-auto text-center">
              <div className="phancy-divider-thick mx-auto mb-10" />

              <h2 className="phancy-pullquote mb-10">
                &ldquo;{site.editorialNote}&rdquo;
              </h2>

              <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
                <div className="text-center">
                  <p className="font-[var(--font-display)] text-3xl font-semibold text-[var(--soft-black)] mb-1">{totalProducts}</p>
                  <p className="phancy-caption">Verified Products</p>
                </div>
                <div className="text-center">
                  <p className="font-[var(--font-display)] text-3xl font-semibold text-[var(--soft-black)] mb-1">{totalRetailers}</p>
                  <p className="phancy-caption">Premium Retailers</p>
                </div>
                <div className="text-center">
                  <p className="font-[var(--font-display)] text-3xl font-semibold text-[var(--soft-black)] mb-1">7</p>
                  <p className="phancy-caption">Categories</p>
                </div>
              </div>

              <p className="phancy-body max-w-2xl mx-auto mb-8">
                Every product on Phancy is verified and sourced from legitimate retailers. We work with Design Within Reach, Herman Miller, Muuto, Ferm Living, Schoolhouse, Article, and more. No placeholders, no fake products—only real pieces you can actually buy.
              </p>

              <Link href="/about" className="phancy-btn-link font-[var(--font-display)] text-sm font-medium">
                Learn More About Our Process
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 10: BEST UNDER $100
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] phancy-section">
          <div className="phancy-wrap">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="phancy-eyebrow mb-3 block">Accessible Design</span>
                <h2 className="phancy-h1">Best Under $100</h2>
                <p className="phancy-body mt-3 max-w-xl">
                  Well-designed objects at accessible prices. Entry points to better living.
                </p>
              </div>
              <Link href="/collections/best-under-100" className="phancy-btn phancy-btn-secondary shrink-0">
                Shop All Under $100
              </Link>
            </div>

            <div className="phancy-grid-3 lg:phancy-grid-6">
              {bestUnder100.map((product) => (
                <ProductCardCompact key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 11: COLLECTIONS PREVIEW
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--soft-black)] text-white phancy-section">
          <div className="phancy-wrap">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="phancy-eyebrow text-[var(--sage)] mb-3 block">Curated Edits</span>
              <h2 className="font-[var(--font-display)] text-4xl lg:text-5xl font-semibold mb-4">
                Shop by Collection
              </h2>
              <p className="font-[var(--font-body)] text-lg text-white/60 leading-relaxed">
                Thoughtfully curated groupings organized around aesthetic, material, and purpose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(collections).slice(0, 8).map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className="group bg-white/5 rounded-[var(--radius-lg)] p-6 hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-white mb-1 group-hover:text-[var(--sage)] transition-colors">
                    {collection.name}
                  </h3>
                  <p className="font-[var(--font-display)] text-xs uppercase tracking-wider text-white/40 mb-3">
                    {collection.subtitle}
                  </p>
                  <p className="font-[var(--font-body)] text-sm text-white/50 line-clamp-2">
                    {collection.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/favorites" className="phancy-btn phancy-btn-white">
                View All Collections
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════════
            SECTION 12: JOURNAL PREVIEW
            ═══════════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--cream)] phancy-section">
          <div className="phancy-wrap">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="phancy-eyebrow mb-3 block">The Journal</span>
              <h2 className="phancy-h1">Read & Discover</h2>
              <p className="phancy-body mt-4">
                Design history, material deep-dives, and guides to creating spaces you love.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <Link href="/journal/the-story-of-the-eames-lounge-chair" className="group">
                <article className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]">
                  <div className="aspect-[3/2] bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] flex items-center justify-center">
                    <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl">Eames</span>
                  </div>
                  <div className="p-6">
                    <span className="phancy-badge phancy-badge-walnut mb-3">Design Classic</span>
                    <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                      The Story of the Eames Lounge Chair
                    </h3>
                    <p className="font-[var(--font-body)] text-[var(--muted)] text-sm line-clamp-2">
                      How Charles and Ray Eames created the most iconic chair of the 20th century.
                    </p>
                  </div>
                </article>
              </Link>

              {/* Article 2 */}
              <Link href="/journal/understanding-nelson-bubble-lamps" className="group">
                <article className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]">
                  <div className="aspect-[3/2] bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] flex items-center justify-center">
                    <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl">Nelson</span>
                  </div>
                  <div className="p-6">
                    <span className="phancy-badge phancy-badge-forest mb-3">Lighting</span>
                    <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                      Understanding Nelson Bubble Lamps
                    </h3>
                    <p className="font-[var(--font-body)] text-[var(--muted)] text-sm line-clamp-2">
                      George Nelson&apos;s revolutionary approach to lighting design.
                    </p>
                  </div>
                </article>
              </Link>

              {/* Article 3 */}
              <Link href="/journal/the-art-of-the-slow-morning" className="group">
                <article className="bg-[var(--warm-white)] border border-[var(--line)] rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 hover:border-[var(--sand)] hover:shadow-[var(--shadow-hover)]">
                  <div className="aspect-[3/2] bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] flex items-center justify-center">
                    <span className="font-[var(--font-body)] italic text-[var(--muted-light)] text-xl">Ritual</span>
                  </div>
                  <div className="p-6">
                    <span className="phancy-badge phancy-badge-moss mb-3">Wellness</span>
                    <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--soft-black)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                      The Art of the Slow Morning
                    </h3>
                    <p className="font-[var(--font-body)] text-[var(--muted)] text-sm line-clamp-2">
                      Objects and rituals for starting the day with intention.
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
      </main>

      <SiteFooter />
    </>
  );
}
