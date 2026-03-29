"use client";

import { useEffect, useState, useCallback } from "react";

interface AnalyticsSummary {
  totalPageViews: number;
  totalProductClicks: number;
  totalAffiliateClicks: number;
  topProducts: { id: string; name: string; clicks: number }[];
  dailyStats: { date: string; views: number; clicks: number }[];
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);

  const fetchAnalytics = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/analytics?days=${days}`);
      const data = await res.json();
      if (data.success) {
        setAnalytics(data.data);
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  }, [days]);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-[var(--muted)]">Loading analytics...</div>
      </div>
    );
  }

  const conversionRate =
    analytics && analytics.totalPageViews > 0
      ? ((analytics.totalAffiliateClicks / analytics.totalPageViews) * 100).toFixed(2)
      : "0.00";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-[var(--font-display)] text-2xl font-bold">
            Analytics
          </h1>
          <p className="text-[var(--muted)]">
            Track your affiliate performance and visitor engagement
          </p>
        </div>

        <select
          value={days}
          onChange={(e) => setDays(parseInt(e.target.value))}
          className="phancy-input phancy-select w-48"
        >
          <option value={7}>Last 7 days</option>
          <option value={30}>Last 30 days</option>
          <option value={90}>Last 90 days</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="admin-card p-6">
          <div className="text-sm text-[var(--muted)] uppercase tracking-wider mb-2">
            Page Views
          </div>
          <div className="font-[var(--font-display)] text-4xl font-bold text-[var(--off-black)]">
            {analytics?.totalPageViews.toLocaleString() || 0}
          </div>
        </div>

        <div className="admin-card p-6">
          <div className="text-sm text-[var(--muted)] uppercase tracking-wider mb-2">
            Product Clicks
          </div>
          <div className="font-[var(--font-display)] text-4xl font-bold text-[var(--forest)]">
            {analytics?.totalProductClicks.toLocaleString() || 0}
          </div>
        </div>

        <div className="admin-card p-6">
          <div className="text-sm text-[var(--muted)] uppercase tracking-wider mb-2">
            Affiliate Clicks
          </div>
          <div className="font-[var(--font-display)] text-4xl font-bold text-[var(--terracotta)]">
            {analytics?.totalAffiliateClicks.toLocaleString() || 0}
          </div>
        </div>

        <div className="admin-card p-6">
          <div className="text-sm text-[var(--muted)] uppercase tracking-wider mb-2">
            Conversion Rate
          </div>
          <div className="font-[var(--font-display)] text-4xl font-bold text-[var(--sage)]">
            {conversionRate}%
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Daily Stats */}
        <div className="admin-card p-6">
          <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
            Daily Activity
          </h2>

          {analytics?.dailyStats && analytics.dailyStats.length > 0 ? (
            <div className="space-y-3">
              {analytics.dailyStats.slice(-10).map((day) => (
                <div key={day.date} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-[var(--muted)]">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-2 h-6">
                      <div
                        className="bg-[var(--forest-light)] rounded"
                        style={{
                          width: `${Math.min(100, (day.views / Math.max(...analytics.dailyStats.map((d) => d.views), 1)) * 100)}%`,
                        }}
                        title={`${day.views} views`}
                      />
                      <div
                        className="bg-[var(--terracotta-light)] rounded"
                        style={{
                          width: `${Math.min(100, (day.clicks / Math.max(...analytics.dailyStats.map((d) => d.clicks), 1)) * 100)}%`,
                        }}
                        title={`${day.clicks} clicks`}
                      />
                    </div>
                  </div>
                  <div className="w-20 text-right text-sm">
                    <span className="text-[var(--forest)]">{day.views}</span>
                    {" / "}
                    <span className="text-[var(--terracotta)]">{day.clicks}</span>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 mt-4 pt-4 border-t border-[var(--line)]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[var(--forest-light)]" />
                  <span className="text-sm text-[var(--muted)]">Page Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[var(--terracotta-light)]" />
                  <span className="text-sm text-[var(--muted)]">Affiliate Clicks</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-[var(--muted)]">
              <p>No activity data yet.</p>
              <p className="text-sm mt-2">
                Data will appear as visitors interact with your site.
              </p>
            </div>
          )}
        </div>

        {/* Top Products */}
        <div className="admin-card p-6">
          <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
            Top Performing Products
          </h2>

          {analytics?.topProducts && analytics.topProducts.length > 0 ? (
            <div className="space-y-4">
              {analytics.topProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 py-3 border-b border-[var(--line)] last:border-0"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--forest)] text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-[var(--font-display)] font-medium">
                      {product.name}
                    </div>
                    <div className="text-sm text-[var(--muted)]">
                      {product.clicks} clicks
                    </div>
                  </div>
                  <div className="font-[var(--font-display)] font-semibold text-[var(--forest)]">
                    {((product.clicks / (analytics?.totalAffiliateClicks || 1)) * 100).toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[var(--muted)]">
              <p>No product clicks yet.</p>
              <p className="text-sm mt-2">
                Top products will appear here once visitors start clicking.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tips Section */}
      <div className="admin-card p-6 bg-[var(--forest-light)] border-[var(--sage-light)]">
        <h2 className="font-[var(--font-display)] font-semibold text-lg mb-4 text-[var(--forest)]">
          Tips to Improve Performance
        </h2>
        <ul className="space-y-2 text-[var(--off-black)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--forest)]">✓</span>
            <span>Add more products with high-quality descriptions and images</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--forest)]">✓</span>
            <span>Feature trending products on the homepage for better visibility</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--forest)]">✓</span>
            <span>Share your collection on social media to drive traffic</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--forest)]">✓</span>
            <span>Update product prices regularly to maintain accuracy</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
