"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const collections = [
  { id: "morning-ritual", name: "The Morning Ritual", subtitle: "Nutrition & Wellness" },
  { id: "high-end-home", name: "The High-End Home", subtitle: "Wares & Decor" },
  { id: "lifestyle-accessories", name: "Lifestyle Accessories", subtitle: "Essentials" },
];

export default function NewProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "morning-ritual",
    subCategory: "",
    amazonUrl: "",
    price: "",
    rating: "4.5",
    reviewCount: "",
    badge: "",
    description: "",
    ingredients: "",
    pros: "",
    cons: "",
    featured: false,
    trending: false,
    image: "/products/placeholder.jpg",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        rating: parseFloat(formData.rating),
        reviewCount: parseInt(formData.reviewCount) || 0,
        ingredients: formData.ingredients
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        pros: formData.pros
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        cons: formData.cons
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        collection: formData.category,
      };

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin/products");
      } else {
        setError(data.error || "Failed to create product");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <Link
          href="/admin/products"
          className="text-[var(--muted)] hover:text-[var(--forest)] text-sm mb-2 inline-flex items-center gap-1"
        >
          ← Back to Products
        </Link>
        <h1 className="font-[var(--font-display)] text-2xl font-bold">
          Add New Product
        </h1>
        <p className="text-[var(--muted)]">
          Add a new product to your curated collection
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <div className="admin-card p-6">
          <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
            Basic Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="phancy-label">Product Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Premium Grass-Fed Collagen Peptides"
                className="phancy-input"
              />
            </div>

            <div>
              <label className="phancy-label">Brand *</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
                placeholder="e.g., Vital Proteins"
                className="phancy-input"
              />
            </div>

            <div>
              <label className="phancy-label">Collection *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="phancy-input phancy-select"
              >
                {collections.map((col) => (
                  <option key={col.id} value={col.id}>
                    {col.name} — {col.subtitle}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="phancy-label">Sub-Category</label>
              <input
                type="text"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                placeholder="e.g., collagen, coffee, yoga"
                className="phancy-input"
              />
            </div>

            <div>
              <label className="phancy-label">Badge</label>
              <input
                type="text"
                name="badge"
                value={formData.badge}
                onChange={handleChange}
                placeholder="e.g., Editor's Pick, MCM Classic"
                className="phancy-input"
              />
            </div>

            <div>
              <label className="phancy-label">Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="/products/your-image.jpg"
                className="phancy-input"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="phancy-label">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Write a compelling editorial description..."
              className="phancy-input phancy-textarea"
            />
          </div>
        </div>

        {/* Affiliate & Pricing */}
        <div className="admin-card p-6">
          <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
            Affiliate & Pricing
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="phancy-label">Amazon URL *</label>
              <input
                type="url"
                name="amazonUrl"
                value={formData.amazonUrl}
                onChange={handleChange}
                required
                placeholder="https://www.amazon.ca/dp/XXXXXXXXXX"
                className="phancy-input"
              />
              <p className="text-xs text-[var(--muted)] mt-1">
                Your affiliate tag will be automatically added
              </p>
            </div>

            <div>
              <label className="phancy-label">Price (CAD) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                step="0.01"
                min="0"
                placeholder="54.99"
                className="phancy-input"
              />
            </div>

            <div>
              <label className="phancy-label">Rating</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                step="0.1"
                min="0"
                max="5"
                placeholder="4.5"
                className="phancy-input"
              />
            </div>

            <div>
              <label className="phancy-label">Review Count</label>
              <input
                type="number"
                name="reviewCount"
                value={formData.reviewCount}
                onChange={handleChange}
                min="0"
                placeholder="1250"
                className="phancy-input"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="admin-card p-6">
          <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
            Product Details
          </h2>

          <div className="space-y-6">
            <div>
              <label className="phancy-label">
                Ingredients / Materials (one per line)
              </label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows={4}
                placeholder="Collagen peptides&#10;Vitamin C&#10;Hyaluronic acid"
                className="phancy-input phancy-textarea"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="phancy-label">Pros (one per line)</label>
                <textarea
                  name="pros"
                  value={formData.pros}
                  onChange={handleChange}
                  rows={4}
                  placeholder="High quality sourcing&#10;Great taste&#10;Fast shipping"
                  className="phancy-input phancy-textarea"
                />
              </div>

              <div>
                <label className="phancy-label">Cons (one per line)</label>
                <textarea
                  name="cons"
                  value={formData.cons}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Premium price point&#10;Limited flavors"
                  className="phancy-input phancy-textarea"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visibility */}
        <div className="admin-card p-6">
          <h2 className="font-[var(--font-display)] font-semibold text-lg mb-6">
            Visibility
          </h2>

          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="phancy-checkbox"
              />
              <span className="font-[var(--font-display)]">Featured Product</span>
              <span className="text-sm text-[var(--muted)]">
                Show on homepage featured section
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="trending"
                checked={formData.trending}
                onChange={handleChange}
                className="phancy-checkbox"
              />
              <span className="font-[var(--font-display)]">Trending</span>
              <span className="text-sm text-[var(--muted)]">
                Show in trending section
              </span>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="phancy-btn phancy-btn-primary phancy-btn-lg"
          >
            {loading ? "Creating..." : "Create Product"}
          </button>
          <Link
            href="/admin/products"
            className="phancy-btn phancy-btn-secondary phancy-btn-lg"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
