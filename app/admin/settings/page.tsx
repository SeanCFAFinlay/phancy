"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    siteName: "Phancy",
    tagline: "Curated for Modern Living",
    affiliateTag: "phcfastore-20",
    domain: "phancy.ca",
    marketplace: "Canada",
    contactEmail: "",
    socialLinks: {
      instagram: "",
      pinterest: "",
      twitter: "",
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name.startsWith("social.")) {
      const social = name.split(".")[1];
      setSettings((prev) => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [social]: value,
        },
      }));
    } else {
      setSettings((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSave() {
    // In a real app, this would save to a database or config file
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="font-[var(--font-display)] text-2xl font-bold">
          Settings
        </h1>
        <p className="text-[var(--muted)]">
          Configure your site settings and preferences
        </p>
      </div>

      {saved && (
        <div className="p-4 bg-[var(--forest-light)] border border-[var(--sage)] rounded-xl text-[var(--forest)]">
          Settings saved successfully!
        </div>
      )}

      {/* Site Settings */}
      <div className="admin-card p-6">
        <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
          Site Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="phancy-label">Site Name</label>
            <input
              type="text"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className="phancy-input"
            />
          </div>

          <div>
            <label className="phancy-label">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={settings.tagline}
              onChange={handleChange}
              className="phancy-input"
            />
          </div>

          <div>
            <label className="phancy-label">Domain</label>
            <input
              type="text"
              name="domain"
              value={settings.domain}
              onChange={handleChange}
              className="phancy-input"
            />
          </div>

          <div>
            <label className="phancy-label">Marketplace</label>
            <input
              type="text"
              name="marketplace"
              value={settings.marketplace}
              onChange={handleChange}
              className="phancy-input"
            />
          </div>
        </div>
      </div>

      {/* Affiliate Settings */}
      <div className="admin-card p-6">
        <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
          Affiliate Configuration
        </h2>

        <div className="space-y-6">
          <div>
            <label className="phancy-label">Amazon Affiliate Tag</label>
            <input
              type="text"
              name="affiliateTag"
              value={settings.affiliateTag}
              onChange={handleChange}
              className="phancy-input"
              placeholder="your-tag-20"
            />
            <p className="text-xs text-[var(--muted)] mt-1">
              This tag will be automatically appended to all Amazon links
            </p>
          </div>

          <div className="p-4 bg-[var(--cream-dark)] rounded-xl">
            <h3 className="font-[var(--font-display)] font-semibold mb-2">
              How to find your affiliate tag
            </h3>
            <ol className="text-sm text-[var(--muted)] space-y-1 list-decimal list-inside">
              <li>Log into your Amazon Associates account</li>
              <li>Go to Account Settings → Manage Your Tracking IDs</li>
              <li>Copy your Tracking ID (e.g., yourstore-20)</li>
              <li>Paste it in the field above</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="admin-card p-6">
        <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
          Contact Information
        </h2>

        <div>
          <label className="phancy-label">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={settings.contactEmail}
            onChange={handleChange}
            className="phancy-input"
            placeholder="hello@phancy.ca"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="admin-card p-6">
        <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
          Social Links
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="phancy-label">Instagram</label>
            <input
              type="url"
              name="social.instagram"
              value={settings.socialLinks.instagram}
              onChange={handleChange}
              className="phancy-input"
              placeholder="https://instagram.com/phancy"
            />
          </div>

          <div>
            <label className="phancy-label">Pinterest</label>
            <input
              type="url"
              name="social.pinterest"
              value={settings.socialLinks.pinterest}
              onChange={handleChange}
              className="phancy-input"
              placeholder="https://pinterest.com/phancy"
            />
          </div>

          <div>
            <label className="phancy-label">Twitter / X</label>
            <input
              type="url"
              name="social.twitter"
              value={settings.socialLinks.twitter}
              onChange={handleChange}
              className="phancy-input"
              placeholder="https://twitter.com/phancy"
            />
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="admin-card p-6">
        <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
          Data Management
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[var(--cream-light)] rounded-xl">
            <div>
              <div className="font-[var(--font-display)] font-medium">
                Export Products
              </div>
              <div className="text-sm text-[var(--muted)]">
                Download all products as JSON
              </div>
            </div>
            <button
              onClick={() => {
                window.open("/api/products", "_blank");
              }}
              className="phancy-btn phancy-btn-secondary phancy-btn-sm"
            >
              Export
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-[var(--cream-light)] rounded-xl">
            <div>
              <div className="font-[var(--font-display)] font-medium">
                Export Analytics
              </div>
              <div className="text-sm text-[var(--muted)]">
                Download analytics data as JSON
              </div>
            </div>
            <button
              onClick={() => {
                window.open("/api/analytics?days=365", "_blank");
              }}
              className="phancy-btn phancy-btn-secondary phancy-btn-sm"
            >
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="phancy-btn phancy-btn-primary phancy-btn-lg"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
