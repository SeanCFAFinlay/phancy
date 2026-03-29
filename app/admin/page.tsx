"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AnalyticsSummary {
  totalPageViews: number;
  totalProductClicks: number;
  totalAffiliateClicks: number;
  topProducts: { id: string; name: string; clicks: number }[];
  dailyStats: { date: string; views: number; clicks: number }[];
}

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  featured: boolean;
  trending: boolean;
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [analyticsRes, productsRes] = await Promise.all([
          fetch("/api/analytics?days=30"),
          fetch("/api/products"),
        ]);

        const analyticsData = await analyticsRes.json();
        const productsData = await productsRes.json();

        if (analyticsData.success) setAnalytics(analyticsData.data);
        if (productsData.success) setProducts(productsData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-[var(--muted)]">Loading dashboard...</div>
      </div>
    );
  }

  const recentProducts = products.slice(-5).reverse();
  const featuredCount = products.filter((p) => p.featured).length;
  const trendingCount = products.filter((p) => p.trending).length;
  // Use trendingCount to avoid unused variable warning
  void trendingCount;

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="admin-card">
          <div className="admin-stat">
            <div className="admin-stat-value">{products.length}</div>
            <div className="admin-stat-label">Total Products</div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-stat">
            <div className="admin-stat-value">
              {analytics?.totalPageViews || 0}
            </div>
            <div className="admin-stat-label">Page Views (30d)</div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-stat">
            <div className="admin-stat-value">
              {analytics?.totalAffiliateClicks || 0}
            </div>
            <div className="admin-stat-label">Affiliate Clicks (30d)</div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-stat">
            <div className="admin-stat-value text-[var(--terracotta)]">
              {featuredCount}
            </div>
            <div className="admin-stat-label">Featured Products</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/admin/products/new" className="admin-card p-6 hover:shadow-lg transition-shadow group">
          <div className="text-3xl mb-3">➕</div>
          <h3 className="font-[var(--font-display)] font-semibold text-lg mb-2 group-hover:text-[var(--forest)] transition-colors">
            Add New Product
          </h3>
          <p className="text-sm text-[var(--muted)]">
            Add a new product to your collection with affiliate link
          </p>
        </Link>

        <Link href="/admin/products" className="admin-card p-6 hover:shadow-lg transition-shadow group">
          <div className="text-3xl mb-3">📦</div>
          <h3 className="font-[var(--font-display)] font-semibold text-lg mb-2 group-hover:text-[var(--forest)] transition-colors">
            Manage Products
          </h3>
          <p className="text-sm text-[var(--muted)]">
            Edit, update, or remove existing products
          </p>
        </Link>

        <Link href="/admin/analytics" className="admin-card p-6 hover:shadow-lg transition-shadow group">
          <div className="text-3xl mb-3">📈</div>
          <h3 className="font-[var(--font-display)] font-semibold text-lg mb-2 group-hover:text-[var(--forest)] transition-colors">
            View Analytics
          </h3>
          <p className="text-sm text-[var(--muted)]">
            Track clicks, views, and performance metrics
          </p>
        </Link>
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Products */}
        <div className="admin-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-[var(--font-display)] font-semibold text-lg">
              Recent Products
            </h2>
            <Link
              href="/admin/products"
              className="text-sm text-[var(--forest)] hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {recentProducts.length > 0 ? (
              recentProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between py-3 border-b border-[var(--line)] last:border-0"
                >
                  <div>
                    <div className="font-[var(--font-display)] font-medium">
                      {product.name}
                    </div>
                    <div className="text-sm text-[var(--muted)]">
                      {product.brand} · ${product.price}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {product.featured && (
                      <span className="phancy-badge phancy-badge-sm">
                        Featured
                      </span>
                    )}
                    {product.trending && (
                      <span className="phancy-badge phancy-badge-sm phancy-badge-terracotta">
                        Trending
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[var(--muted)] text-center py-8">
                No products yet.{" "}
                <Link href="/admin/products/new" className="text-[var(--forest)]">
                  Add your first product
                </Link>
              </p>
            )}
          </div>
        </div>

        {/* Top Performing Products */}
        <div className="admin-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-[var(--font-display)] font-semibold text-lg">
              Top Performing
            </h2>
            <span className="text-sm text-[var(--muted)]">Last 30 days</span>
          </div>

          <div className="space-y-4">
            {analytics?.topProducts && analytics.topProducts.length > 0 ? (
              analytics.topProducts.slice(0, 5).map((product, index) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between py-3 border-b border-[var(--line)] last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--forest-light)] text-[var(--forest)] flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="font-[var(--font-display)]">
                      {product.name}
                    </span>
                  </div>
                  <span className="font-[var(--font-display)] font-semibold text-[var(--forest)]">
                    {product.clicks} clicks
                  </span>
                </div>
              ))
            ) : (
              <p className="text-[var(--muted)] text-center py-8">
                No click data yet. Analytics will appear as visitors interact
                with your site.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Collection Stats */}
      <div className="admin-card p-6">
        <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
          Collection Overview
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {["morning-ritual", "high-end-home", "lifestyle-accessories"].map(
            (collection) => {
              const count = products.filter(
                (p) => p.category === collection
              ).length;
              const label = collection
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ");

              return (
                <div
                  key={collection}
                  className="p-4 rounded-xl bg-[var(--cream-light)] border border-[var(--line)]"
                >
                  <div className="font-[var(--font-display)] font-semibold text-2xl text-[var(--forest)]">
                    {count}
                  </div>
                  <div className="text-sm text-[var(--muted)]">{label}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
