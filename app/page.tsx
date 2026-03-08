import ProductGrid from "@/components/product-grid";
import {
  getAllBestOf,
  getAllCategories,
  getAllProducts,
  getFeaturedProducts,
  getTrendingProducts,
  type BestOfGuide,
  type Product,
} from "@/lib/products";
import Link from "next/link";

type CategoryStat = {
  slug: string;
  title: string;
  count: number;
  tone: string;
};

function categoryStats(products: Product[]): CategoryStat[] {
  const counts = new Map<string, number>();

  for (const product of products) {
    counts.set(product.category, (counts.get(product.category) ?? 0) + 1);
  }

  const tones = [
    "from-pink-500 to-fuchsia-600",
    "from-fuchsia-500 to-rose-500",
    "from-rose-500 to-orange-400",
    "from-violet-500 to-fuchsia-500",
    "from-pink-400 to-rose-500",
    "from-purple-500 to-pink-500",
  ];

  return Array.from(counts.entries())
    .slice(0, 6)
    .map(([slug, count], index) => ({
      slug,
      title: slug.replace(/-/g, " "),
      count,
      tone: tones[index % tones.length],
    }));
}

function featuredGuides(guides: BestOfGuide[]) {
  return guides.slice(0, 3);
}

export default function HomePage() {
  const featured = getFeaturedProducts();
  const trending = getTrendingProducts();
  const allProducts = getAllProducts();
  const categories = categoryStats(allProducts);
  const guides = featuredGuides(getAllBestOf());

  return (
    <main>
      <section className="phancy-wrap pt-8 md:pt-10">
        <div className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-rose-600 p-8 text-white shadow-[0_32px_100px_rgba(233,30,99,0.24)] md:p-12">
            <div className="phancy-pill bg-white/15 text-white">Curated for modern Canadian living</div>

            <h1 className="phancy-h1 mt-6 max-w-4xl">
              Wellness discovery that feels editorial, elevated, and actually usable.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-pink-50 md:text-lg">
              Phancy brings together supplements, probiotics, collagen, vitamins, and wellness essentials in a cleaner product discovery experience designed to feel more like a modern brand than a basic affiliate page.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/deals" className="phancy-btn phancy-btn-secondary">
                Explore Products
              </Link>
              <Link href="/trending" className="phancy-btn border border-white/25 text-white hover:bg-white/10">
                See Trending
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] bg-white/12 p-4">
                <div className="text-2xl font-black">Premium feel</div>
                <div className="mt-2 text-sm text-pink-50">More white space, stronger hierarchy, and cleaner browsing.</div>
              </div>
              <div className="rounded-[24px] bg-white/12 p-4">
                <div className="text-2xl font-black">Editorial UX</div>
                <div className="mt-2 text-sm text-pink-50">Built like a product discovery publication, not a cluttered grid.</div>
              </div>
              <div className="rounded-[24px] bg-white/12 p-4">
                <div className="text-2xl font-black">Mobile first</div>
                <div className="mt-2 text-sm text-pink-50">Structured to work properly on phones, tablets, and desktop.</div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="phancy-card relative overflow-hidden p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,228,239,.9),transparent_35%)]" />
              <div className="relative">
                <div className="phancy-eyebrow">Phancy spotlight</div>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">
                  A storefront that feels more magazine than marketplace.
                </h2>
                <p className="phancy-copy mt-4">
                  The strongest affiliate sites do not look like pages built only to sell. They feel curated, structured, and useful. That is the direction here.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Link href="/best/best-womens-health-canada" className="phancy-card bg-gradient-to-br from-white to-pink-50 p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(233,30,99,0.14)]">
                <div className="phancy-eyebrow">Guide</div>
                <div className="mt-3 text-2xl font-black tracking-tight text-zinc-950">
                  Best picks
                </div>
                <p className="phancy-copy mt-3 text-sm">
                  Ranked lists that help users decide faster.
                </p>
              </Link>

              <Link href="/compare/pink-probiotic-for-her-vs-womens-multi-daily" className="phancy-card bg-gradient-to-br from-white to-fuchsia-50 p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(233,30,99,0.14)]">
                <div className="phancy-eyebrow">Compare</div>
                <div className="mt-3 text-2xl font-black tracking-tight text-zinc-950">
                  Side by side
                </div>
                <p className="phancy-copy mt-3 text-sm">
                  Price, ratings, pros, and ingredient context.
                </p>
              </Link>
            </div>

            <div className="phancy-card bg-zinc-950 p-8 text-white">
              <div className="phancy-eyebrow text-pink-300">Trust</div>
              <div className="mt-3 text-3xl font-black tracking-tight">
                Independent framing. Cleaner recommendations.
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-300">
                Product discovery should feel confidence-building. That comes from better structure, stronger design decisions, and less noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="phancy-wrap phancy-section">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="phancy-card p-8">
            <div className="phancy-eyebrow">Why this works</div>
            <div className="mt-4 text-2xl font-black tracking-tight text-zinc-950">
              Trusted by wellness-first shoppers
            </div>
            <p className="phancy-copy mt-4">
              Better visual hierarchy helps users focus on the products that matter instead of scanning clutter.
            </p>
          </div>
          <div className="phancy-card p-8">
            <div className="phancy-eyebrow">Editorial approach</div>
            <div className="mt-4 text-2xl font-black tracking-tight text-zinc-950">
              Guides, comparisons, and curation
            </div>
            <p className="phancy-copy mt-4">
              The strongest affiliate storefronts feel like product publications with taste, structure, and point of view.
            </p>
          </div>
          <div className="phancy-card p-8">
            <div className="phancy-eyebrow">Professional flow</div>
            <div className="mt-4 text-2xl font-black tracking-tight text-zinc-950">
              Research before you click
            </div>
            <p className="phancy-copy mt-4">
              Buying guides, category cards, and product reviews work together to create a more serious user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="phancy-wrap phancy-section">
        <div className="mb-10 max-w-3xl">
          <div className="phancy-eyebrow mb-3">Category explorer</div>
          <h2 className="phancy-h2">Browse by wellness intent, not by clutter.</h2>
          <p className="phancy-copy mt-4 max-w-2xl">
            Category cards make the homepage feel like a platform, not just a stack of products.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group overflow-hidden rounded-[34px] border border-pink-100 bg-white p-8 shadow-[0_18px_50px_rgba(233,30,99,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(233,30,99,0.14)]"
            >
              <div className={`h-14 w-14 rounded-[18px] bg-gradient-to-br ${category.tone}`} />
              <div className="mt-6 text-3xl font-black capitalize tracking-tight text-zinc-950">
                {category.title}
              </div>
              <div className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-pink-600">
                {category.count} curated products
              </div>
              <p className="mt-4 text-sm leading-8 text-zinc-600">
                Explore a stronger discovery flow for {category.title}.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="phancy-wrap phancy-section">
        <div className="grid gap-6 xl:grid-cols-[0.9fr,1.1fr]">
          <div className="phancy-card bg-gradient-to-br from-white to-pink-50 p-8 md:p-10">
            <div className="phancy-eyebrow">Editorial guides</div>
            <h2 className="phancy-h2 mt-4">
              Buying guides that make the site feel like a real content brand.
            </h2>
            <p className="phancy-copy mt-5 max-w-xl">
              Guides are one of the fastest ways to improve trust, SEO, and conversion. They create a more useful product discovery path than a plain storefront.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/best/best-womens-health-canada" className="phancy-btn phancy-btn-primary">
                See Guides
              </Link>
              <Link href="/trending" className="phancy-btn phancy-btn-secondary">
                See Trending
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {guides.map((guide: BestOfGuide) => (
              <Link
                key={guide.slug}
                href={`/best/${guide.slug}`}
                className="phancy-card p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(233,30,99,0.14)]"
              >
                <div className="phancy-pill bg-pink-100 text-pink-700">Buying guide</div>
                <div className="mt-5 text-2xl font-black tracking-tight text-zinc-950">
                  {guide.title}
                </div>
                <p className="mt-4 text-sm leading-8 text-zinc-600">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="phancy-wrap phancy-section">
        <div className="mb-10 max-w-3xl">
          <div className="phancy-eyebrow mb-3">Trending now</div>
          <h2 className="phancy-h2">The current product edit.</h2>
          <p className="phancy-copy mt-4 max-w-2xl">
            This section should feel like an editorial selection, not a repetitive store row.
          </p>
        </div>
        <ProductGrid products={trending} />
      </section>

      <section className="phancy-wrap phancy-section">
        <div className="mb-10 max-w-3xl">
          <div className="phancy-eyebrow mb-3">Featured picks</div>
          <h2 className="phancy-h2">Curated recommendations with stronger card design.</h2>
          <p className="phancy-copy mt-4 max-w-2xl">
            These cards create the real shopping layer while the rest of the page adds trust and context.
          </p>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="phancy-wrap pb-24">
        <div className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
          <div className="overflow-hidden rounded-[40px] bg-zinc-950 p-8 text-white shadow-[0_32px_100px_rgba(0,0,0,0.18)] md:p-12">
            <div className="phancy-pill bg-white/10 text-white">Newsletter</div>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Make Phancy feel like a brand people return to.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">
              Add email capture, deal alerts, and editor picks to turn this from a one-time visit into a repeat-use destination.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-full border border-white/15 bg-white/95 px-6 text-sm font-semibold text-zinc-900 outline-none"
              />
              <button className="phancy-btn bg-white text-pink-700">
                Join the Edit
              </button>
            </div>
          </div>

          <div className="grid gap-5">
            <Link href="/compare/pink-probiotic-for-her-vs-womens-multi-daily" className="phancy-card p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(233,30,99,0.14)]">
              <div className="phancy-eyebrow">Comparison tools</div>
              <div className="mt-4 text-3xl font-black tracking-tight text-zinc-950">
                Compare before you buy
              </div>
              <p className="phancy-copy mt-4">
                Product comparisons give the site a much more professional and useful structure.
              </p>
            </Link>

            <Link href="/deals" className="phancy-card bg-gradient-to-br from-pink-50 to-white p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(233,30,99,0.14)]">
              <div className="phancy-eyebrow">Deal layer</div>
              <div className="mt-4 text-3xl font-black tracking-tight text-zinc-950">
                A cleaner deal-driven conversion path
              </div>
              <p className="phancy-copy mt-4">
                Keep direct shopping pages, but frame them within a polished editorial system.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}