import Link from "next/link";

const nav = [
  { href: "/high-margin", label: "High Margin" },
  { href: "/category/womens-health", label: "Women&apos;s Health" },
  { href: "/category/vitamins", label: "Vitamins" },
  { href: "/category/brain-health", label: "Brain Health" },
  { href: "/trending", label: "Trending" },
  { href: "/deals", label: "Deals" }
];

export default function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/85 backdrop-blur-xl">
        <div className="phancy-wrap flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-lg font-black text-white shadow-lg shadow-pink-500/20">
              P
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight text-pink-600">Phancy</div>
              <div className="-mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">
                Modern Wellness
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-700 lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-pink-600">
                <span dangerouslySetInnerHTML={{ __html: item.label }} />
              </Link>
            ))}
          </nav>

          <Link
            href="/deals"
            className="hidden rounded-full bg-pink-600 px-5 py-3 text-sm font-black text-white transition hover:bg-pink-700 md:inline-flex"
          >
            Shop Deals
          </Link>
        </div>
      </header>

      <div className="fixed inset-x-3 bottom-4 z-50 rounded-full border border-pink-100 bg-white/95 p-2 shadow-2xl shadow-pink-500/10 backdrop-blur lg:hidden">
        <div className="grid grid-cols-5 gap-1 text-center">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-3 text-[11px] font-black text-zinc-700 transition hover:bg-pink-50 hover:text-pink-600"
            >
              <span dangerouslySetInnerHTML={{ __html: item.label }} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}