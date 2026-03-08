import ProductGrid from "@/components/product-grid";
import SectionTitle from "@/components/section-title";
import { getFeaturedProducts, getTrendingProducts, getAllBestOf, getAllCategories } from "@/lib/products";
import Link from "next/link";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const trending = getTrendingProducts();
  const bestOf = getAllBestOf();
  const categories = getAllCategories();

  return (
    <main>
      <section className="phancy-wrap phancy-section">
        <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
          <div className="overflow-hidden rounded-[38px] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-pink-700 p-8 text-white shadow-[0_28px_90px_rgba(233,30,99,0.24)] md:p-12">
            <div className="inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
              Curated for Canada
            </div>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Wellness shopping that feels like a real brand, not a generic template.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-pink-50 md:text-lg">
              Phancy curates probiotics, vitamins, collagen, mushroom blends, and beauty-wellness essentials in a cleaner, more premium shopping experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/deals"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-pink-700 transition hover:bg-pink-50"
              >
                Explore Deals
              </Link>
              <Link
                href="/trending"
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
              >
                See Trending
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[30px] border border-pink-100 bg-white p-7 shadow-[0_18px_50px_rgba(233,30,99,0.08)]">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-pink-600">Phancy edit</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">
                Mobile-first, cleaner, and more premium.
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Bigger cards, wider layout, stronger typography, and a branded flow designed to feel better on desktop and mobile.
              </p>
            </div>

            <div className="rounded-[30px] border border-pink-100 bg-gradient-to-b from-pink-50 to-white p-7 shadow-[0_18px_50px_rgba(233,30,99,0.08)]">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-pink-600">Shop by category</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category}`}
                    className="rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-bold text-zinc-700 transition hover:border-pink-400 hover:text-pink-700"
                  >
                    {category.replace(/-/g, " ")}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="phancy-section">
          <SectionTitle
            kicker="Featured picks"
            title="A more polished product presentation"
            subtitle="These cards are designed to feel branded, modern, and easier to browse."
          />
          <ProductGrid products={featured} />
        </section>

        <section className="phancy-section">
          <SectionTitle
            kicker="Trending now"
            title="What shoppers are exploring most"
            subtitle="The current high-interest wellness categories and product types."
          />
          <ProductGrid products={trending} />
        </section>

        <section className="phancy-section">
          <SectionTitle
            kicker="Buying guides"
            title="Editorial guide pages that make the site feel more premium"
            subtitle="Guide pages help with both SEO and conversion flow."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {bestOf.map((guide: any) => (
              <Link
                key={guide.slug}
                href={`/best/${guide.slug}`}
                className="rounded-[30px] border border-pink-100 bg-white p-7 shadow-[0_18px_50px_rgba(233,30,99,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(233,30,99,0.14)]"
              >
                <div className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-pink-700">
                  Buying guide
                </div>
                <div className="mt-4 text-2xl font-black tracking-tight text-zinc-950">
                  {guide.title}
                </div>
                <div className="mt-3 text-sm leading-7 text-zinc-600">
                  {guide.description}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}