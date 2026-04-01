"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const mainNav = [
  { href: "/shop", label: "Shop" },
  { href: "/wellness", label: "Wellness" },
  { href: "/homewares", label: "Homewares" },
  { href: "/rooms", label: "Rooms" },
  { href: "/journal", label: "Journal" },
];

const secondaryNav = [
  { href: "/about", label: "About" },
  { href: "/favorites", label: "Favorites" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--cream)]/95 backdrop-blur-xl border-b border-[var(--line)]"
            : "bg-transparent"
        }`}
      >
        <div className="phancy-wrap">
          <div className="flex h-20 items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[var(--soft-black)] flex items-center justify-center font-[var(--font-display)] text-base font-semibold text-white transition-transform duration-300 group-hover:scale-105">
                P
              </div>
              <div className="hidden sm:block">
                <div className="font-[var(--font-display)] text-xl font-semibold tracking-tight text-[var(--soft-black)]">
                  Phancy
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 font-[var(--font-display)] text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-[var(--soft-black)] bg-[var(--sand)]"
                        : "text-[var(--muted)] hover:text-[var(--soft-black)] hover:bg-[var(--oat)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/favorites"
                className="font-[var(--font-display)] text-sm font-medium text-[var(--muted)] hover:text-[var(--soft-black)] transition-colors"
              >
                Favorites
              </Link>
              <Link
                href="/shop"
                className="phancy-btn phancy-btn-primary phancy-btn-sm"
              >
                Shop All
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 rounded-xl hover:bg-[var(--oat)] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 bg-[var(--soft-black)] rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
                />
                <span
                  className={`h-0.5 bg-[var(--soft-black)] rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 bg-[var(--soft-black)] rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-20 bg-[var(--cream)] z-40 transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="phancy-wrap py-8">
            <nav className="flex flex-col gap-2">
              {/* Main Navigation */}
              {mainNav.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-4 font-[var(--font-display)] text-lg font-medium rounded-xl transition-all ${
                      isActive
                        ? "text-[var(--soft-black)] bg-[var(--sand)]"
                        : "text-[var(--charcoal)] hover:bg-[var(--oat)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Divider */}
              <hr className="my-4 border-[var(--line)]" />

              {/* Secondary Navigation */}
              {secondaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 font-[var(--font-display)] text-base font-medium text-[var(--muted)] rounded-xl hover:bg-[var(--oat)] transition-all"
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA */}
              <div className="mt-6 px-4">
                <Link
                  href="/shop"
                  className="phancy-btn phancy-btn-primary w-full"
                >
                  Shop All Products
                </Link>
              </div>
            </nav>

            {/* Mobile Footer */}
            <div className="mt-12 px-4 pt-8 border-t border-[var(--line)]">
              <p className="font-[var(--font-body)] text-sm text-[var(--muted)] italic">
                &ldquo;Objects for calmer living&rdquo;
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed inset-x-4 bottom-4 z-50 lg:hidden">
        <div className="rounded-[var(--radius-xl)] border border-[var(--line)] bg-[var(--warm-white)]/98 backdrop-blur-xl shadow-lg">
          <div className="grid grid-cols-5 gap-1 p-2">
            <Link
              href="/"
              className={`flex flex-col items-center justify-center rounded-xl py-2 transition-all ${
                pathname === "/" ? "bg-[var(--sand)]" : ""
              }`}
            >
              <svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-[9px] font-[var(--font-display)] font-medium">Home</span>
            </Link>

            <Link
              href="/shop"
              className={`flex flex-col items-center justify-center rounded-xl py-2 transition-all ${
                pathname.startsWith("/shop") ? "bg-[var(--sand)]" : ""
              }`}
            >
              <svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-[9px] font-[var(--font-display)] font-medium">Shop</span>
            </Link>

            <Link
              href="/wellness"
              className={`flex flex-col items-center justify-center rounded-xl py-2 transition-all ${
                pathname.startsWith("/wellness") ? "bg-[var(--sand)]" : ""
              }`}
            >
              <svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-[9px] font-[var(--font-display)] font-medium">Wellness</span>
            </Link>

            <Link
              href="/homewares"
              className={`flex flex-col items-center justify-center rounded-xl py-2 transition-all ${
                pathname.startsWith("/homewares") ? "bg-[var(--sand)]" : ""
              }`}
            >
              <svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-[9px] font-[var(--font-display)] font-medium">Home</span>
            </Link>

            <Link
              href="/favorites"
              className={`flex flex-col items-center justify-center rounded-xl py-2 transition-all ${
                pathname.startsWith("/favorites") ? "bg-[var(--sand)]" : ""
              }`}
            >
              <svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="text-[9px] font-[var(--font-display)] font-medium">Picks</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed bottom nav on mobile */}
      <div className="h-24 lg:hidden" />
    </>
  );
}
