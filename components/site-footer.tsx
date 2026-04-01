"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[var(--soft-black)] text-white">
      {/* Email Signup Section */}
      <div className="border-b border-white/10">
        <div className="phancy-wrap py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="phancy-eyebrow text-[var(--sage)] mb-4 block">Join the Edit</span>
              <h3 className="font-[var(--font-display)] text-3xl lg:text-4xl font-semibold mb-4">
                Curated finds, delivered.
              </h3>
              <p className="font-[var(--font-body)] text-lg text-white/60 leading-relaxed">
                Occasional updates on new arrivals, design inspiration, and objects worth knowing about.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="bg-white/5 rounded-[var(--radius-lg)] p-8 text-center">
                  <p className="font-[var(--font-display)] text-lg font-medium mb-2">
                    Welcome to Phancy.
                  </p>
                  <p className="font-[var(--font-body)] text-white/60">
                    We will be in touch with beautiful finds.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-4 rounded-[var(--radius-md)] bg-white/10 border border-white/10 text-white font-[var(--font-display)] text-sm placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-[var(--radius-md)] bg-white text-[var(--soft-black)] font-[var(--font-display)] text-sm font-medium hover:bg-white/90 transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="phancy-wrap py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-[var(--font-display)] font-semibold text-[var(--soft-black)] transition-transform group-hover:scale-105">
                  P
                </div>
                <span className="font-[var(--font-display)] text-xl font-semibold">
                  Phancy
                </span>
              </div>
            </Link>
            <p className="font-[var(--font-body)] text-base leading-relaxed text-white/60 mb-6 max-w-sm">
              Objects for calmer living. A curated destination for wellness essentials and design-forward homewares, chosen for aesthetics, utility, and warmth.
            </p>
            <p className="font-[var(--font-body)] text-sm italic text-white/40">
              &ldquo;Every piece is chosen for how it looks, how it works, and how it makes you feel.&rdquo;
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">
              Shop
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/shop" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                All Products
              </Link>
              <Link href="/wellness" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Wellness
              </Link>
              <Link href="/homewares" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Homewares
              </Link>
              <Link href="/favorites" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Editor&apos;s Picks
              </Link>
              <Link href="/collections/best-under-100" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Best Under $100
              </Link>
            </nav>
          </div>

          {/* Discover Links */}
          <div>
            <h4 className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">
              Discover
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/journal" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Journal
              </Link>
              <Link href="/rooms" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Shop by Room
              </Link>
              <Link href="/about" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/collections/design-classics" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Design Classics
              </Link>
            </nav>
          </div>

          {/* Rooms Links */}
          <div>
            <h4 className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">
              Rooms
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/rooms/living-room" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Living Room
              </Link>
              <Link href="/rooms/bedroom" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Bedroom
              </Link>
              <Link href="/rooms/bathroom" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Bathroom
              </Link>
              <Link href="/rooms/kitchen" className="font-[var(--font-display)] text-sm text-white/70 hover:text-white transition-colors">
                Kitchen
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="phancy-wrap py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright & Legal */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-white/40">
              <span>&copy; {new Date().getFullYear()} Phancy</span>
              <Link href="/privacy" className="hover:text-white/70 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white/70 transition-colors">
                Terms
              </Link>
              <Link href="/disclosure" className="hover:text-white/70 transition-colors">
                Disclosure
              </Link>
            </div>

            {/* Affiliate Disclosure */}
            <p className="text-[11px] text-white/30 text-center md:text-right max-w-md">
              As an Amazon Associate, Phancy earns from qualifying purchases. Prices and availability are subject to change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
