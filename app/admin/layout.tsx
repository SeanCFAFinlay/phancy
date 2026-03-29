"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/products", label: "Products", icon: "📦" },
  { href: "/admin/products/new", label: "Add Product", icon: "➕" },
  { href: "/admin/analytics", label: "Analytics", icon: "📈" },
  { href: "/admin/settings", label: "Settings", icon: "⚙️" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState<string>("");

  // Skip auth check for login page
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setAuthenticated(true); // Allow login page to render
      return;
    }

    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/check");
        const data = await res.json();

        if (data.authenticated) {
          setAuthenticated(true);
          setUsername(data.username || "Admin");
        } else {
          setAuthenticated(false);
          router.push("/admin/login");
        }
      } catch (err) {
        console.error(err);
        setAuthenticated(false);
        router.push("/admin/login");
      }
    }

    checkAuth();
  }, [isLoginPage, router]);

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (err) {
      console.error(err);
    }
  }

  // Show nothing while checking auth
  if (authenticated === null && !isLoginPage) {
    return (
      <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--forest)] animate-pulse" />
          <div className="text-[var(--muted)]">Loading...</div>
        </div>
      </div>
    );
  }

  // Render login page without sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Not authenticated - redirect handled in useEffect
  if (!authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--cream-light)]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[var(--off-black)] text-white z-50 overflow-y-auto flex flex-col">
        <div className="p-6">
          <Link href="/admin" className="block group">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[var(--forest)] flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-105">
                P
              </div>
              <div>
                <div className="font-[var(--font-display)] font-bold text-lg">
                  Phancy
                </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Admin Panel
                </div>
              </div>
            </div>
          </Link>
        </div>

        <nav className="px-4 py-2 flex-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-200 font-[var(--font-display)] text-sm group ${
                  isActive
                    ? "bg-[var(--forest)] text-white shadow-lg shadow-[var(--forest)]/20"
                    : "text-gray-300 hover:bg-white/10 hover:text-white hover:translate-x-1"
                }`}
              >
                <span className="transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User & Logout */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-[var(--forest)] flex items-center justify-center text-sm font-bold">
              {username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{username}</div>
              <div className="text-xs text-gray-400">Administrator</div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-500/20 hover:text-red-300 transition-all w-full font-[var(--font-display)] text-sm"
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </button>

          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-all font-[var(--font-display)] text-sm mt-1"
          >
            <span>🌐</span>
            <span>View Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-[var(--line)] px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-[var(--font-display)] text-xl font-semibold text-[var(--off-black)]">
                {navItems.find(
                  (item) =>
                    pathname === item.href ||
                    (item.href !== "/admin" && pathname.startsWith(item.href))
                )?.label || "Admin"}
              </h1>
              <p className="text-sm text-[var(--muted)]">
                Manage your curated collection
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="phancy-badge">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                Live
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 animate-fade-in">{children}</div>
      </main>
    </div>
  );
}
