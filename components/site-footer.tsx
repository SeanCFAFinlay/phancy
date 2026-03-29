import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--off-black)] text-white">
      <div className="phancy-wrap py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--forest)] flex items-center justify-center font-[var(--font-display)] font-bold text-white transition-transform group-hover:scale-105">
                  P
                </div>
                <span className="font-[var(--font-display)] text-xl font-bold">
                  Phancy
                </span>
              </div>
            </Link>
            <p className="font-[var(--font-body)] text-sm leading-relaxed text-gray-400 mb-6">
              A curated collection of wellness essentials and high-end home
              goods for the modern Canadian lifestyle.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-[var(--font-display)] font-medium">
              <span className="w-2 h-2 rounded-full bg-[var(--forest)] animate-pulse" />
              Curated for Modern Living
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)] mb-6">
              Collections
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/collections/morning-ritual", label: "Morning Ritual" },
                { href: "/collections/high-end-home", label: "High-End Home" },
                { href: "/collections/lifestyle-accessories", label: "Lifestyle Accessories" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-[var(--font-display)] text-sm text-gray-400 transition-colors hover:text-white hover:translate-x-1 transform duration-200 inline-block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)] mb-6">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/trending", label: "Trending" },
                { href: "/deals", label: "All Products" },
                { href: "/admin", label: "Admin Panel" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-[var(--font-display)] text-sm text-gray-400 transition-colors hover:text-white hover:translate-x-1 transform duration-200 inline-block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)] mb-6">
              Stay Updated
            </h4>
            <p className="font-[var(--font-body)] text-sm text-gray-400 mb-4">
              Get occasional updates on new arrivals and seasonal picks.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-sm font-[var(--font-display)] placeholder:text-gray-500 focus:outline-none focus:border-[var(--forest)] transition-colors"
              />
              <button className="phancy-btn phancy-btn-primary phancy-btn-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>&copy; {new Date().getFullYear()} Phancy</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>As an Amazon Associate, Phancy earns from qualifying purchases.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
