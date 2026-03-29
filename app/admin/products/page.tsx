"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  collection?: string;
  price: number;
  rating: number;
  featured: boolean;
  trending: boolean;
  amazonUrl: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setProducts(products.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  async function toggleFeatured(id: string, featured: boolean) {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !featured }),
      });
      const data = await res.json();
      if (data.success) {
        setProducts(
          products.map((p) => (p.id === id ? { ...p, featured: !featured } : p))
        );
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  async function toggleTrending(id: string, trending: boolean) {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trending: !trending }),
      });
      const data = await res.json();
      if (data.success) {
        setProducts(
          products.map((p) => (p.id === id ? { ...p, trending: !trending } : p))
        );
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  const filteredProducts = products.filter((p) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "featured" && p.featured) ||
      (filter === "trending" && p.trending) ||
      p.category === filter;

    const matchesSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-[var(--muted)]">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-[var(--font-display)] text-2xl font-bold">
            Products
          </h1>
          <p className="text-[var(--muted)]">
            {products.length} products in your collection
          </p>
        </div>
        <Link href="/admin/products/new" className="phancy-btn phancy-btn-primary">
          Add New Product
        </Link>
      </div>

      {/* Filters */}
      <div className="admin-card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="phancy-input flex-1"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="phancy-input phancy-select w-full md:w-48"
          >
            <option value="all">All Products</option>
            <option value="featured">Featured Only</option>
            <option value="trending">Trending Only</option>
            <optgroup label="By Category">
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.replace(/-/g, " ")}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="admin-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-[var(--muted)]">
                          {product.brand}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="capitalize">
                        {product.category.replace(/-/g, " ")}
                      </span>
                    </td>
                    <td className="font-semibold">${product.price}</td>
                    <td>⭐ {product.rating}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            toggleFeatured(product.id, product.featured)
                          }
                          className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                            product.featured
                              ? "bg-[var(--forest)] text-white"
                              : "bg-[var(--line)] text-[var(--muted)]"
                          }`}
                        >
                          Featured
                        </button>
                        <button
                          onClick={() =>
                            toggleTrending(product.id, product.trending)
                          }
                          className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                            product.trending
                              ? "bg-[var(--terracotta)] text-white"
                              : "bg-[var(--line)] text-[var(--muted)]"
                          }`}
                        >
                          Trending
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/products/${product.id}`}
                          className="phancy-btn phancy-btn-sm phancy-btn-secondary"
                        >
                          Edit
                        </Link>
                        <a
                          href={product.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="phancy-btn phancy-btn-sm phancy-btn-soft"
                        >
                          View
                        </a>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="phancy-btn phancy-btn-sm bg-red-50 text-red-600 hover:bg-red-100"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-12">
                    <p className="text-[var(--muted)]">
                      {search || filter !== "all"
                        ? "No products match your filters."
                        : "No products yet."}
                    </p>
                    {!search && filter === "all" && (
                      <Link
                        href="/admin/products/new"
                        className="phancy-btn phancy-btn-primary mt-4"
                      >
                        Add Your First Product
                      </Link>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
