"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const nav = [
  { href: "/collections/morning-ritual", label: "Morning Ritual" },
  { href: "/collections/high-end-home", label: "Home" },
  { href: "/collections/lifestyle-accessories", label: "Lifestyle" },
  { href: "/trending", label: "Trending" },
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--warm-white)]/95 backdrop-blur-xl shadow-sm border-b border-[var(--line)]"
            : "bg-transparent"
        }`}
      >
        <div className="phancy-wrap flex min-h-[80px] items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-11 h-11 rounded-xl bg-[var(--forest)] flex items-center justify-center font-[var(--font-display)] text-lg font-bold text-white shadow-lg shadow-[var(--forest)]/20 transition-transform duration-300 group-hover:scale-105">
              P
            </div>
            <div>
              <div className="font-[var(--font-display)] text-xl font-bold tracking-tight text-[var(--off-black)] transition-colors group-hover:text-[var(--forest)]">
                Phancy
              </div>
              <div className="phancy-badge mt-0.5 px-2 py-0.5 text-[8px] opacity-80">
                Curated for Modern Living
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-[var(--font-display)] text-sm font-medium transition-colors duration-200 rounded-xl ${
                    isActive
                      ? "text-[var(--forest)] bg-[var(--forest-light)]"
                      : "text-[var(--muted)] hover:text-[var(--off-black)] hover:bg-[var(--cream-dark)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/deals"
              className="phancy-btn phancy-btn-primary phancy-btn-sm"
            >
              Shop All
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-[var(--cream-dark)] transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-[var(--off-black)] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-[var(--off-black)] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-[var(--off-black)] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="phancy-wrap py-4 border-t border-[var(--line)]">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 font-[var(--font-display)] text-sm font-medium rounded-xl transition-colors ${
                      isActive
                        ? "text-[var(--forest)] bg-[var(--forest-light)]"
                        : "text-[var(--muted)] hover:text-[var(--off-black)] hover:bg-[var(--cream-dark)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/deals"
                className="phancy-btn phancy-btn-primary mt-2"
              >
                Shop All Products
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Only on small screens */}
      <div className="fixed inset-x-4 bottom-4 z-50 lg:hidden">
        <div className="rounded-[var(--radius-xl)] border border-[var(--line)] bg-[var(--warm-white)]/98 p-2 shadow-xl backdrop-blur-xl">
          <div className="grid grid-cols-4 gap-1 text-center">
            {nav.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-2 py-3 font-[var(--font-display)] text-[10px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-[var(--forest)] bg-[var(--forest-light)]"
                      : "text-[var(--muted)] hover:bg-[var(--cream-dark)] hover:text-[var(--off-black)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer for fixed bottom nav on mobile */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
