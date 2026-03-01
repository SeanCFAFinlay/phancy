"use client";

import Link from "next/link";
import { useState } from "react";
import config from "@/lib/config";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-amber-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl">☕</span>
                        <span className="text-xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                            {config.siteName}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {config.navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-amber-700 hover:bg-amber-50 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA + Mobile toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/best/best-espresso-grinders"
                            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 active:scale-95 transition-all"
                        >
                            Top Picks 🔥
                        </Link>
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-amber-700 hover:bg-amber-50 transition-all"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-amber-100 bg-white">
                    <nav className="flex flex-col px-4 py-3 gap-1">
                        {config.navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:text-amber-700 hover:bg-amber-50 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
