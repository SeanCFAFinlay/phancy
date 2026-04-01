// Legacy products module - deprecated
// All product data is now managed through lib/manifest.ts
// This file is kept for backwards compatibility with existing pages

import { ProductManifest, Product, getProductBySlug as manifestGetProductBySlug } from "./manifest";

// Re-export the Product type for backwards compatibility
export type { Product };

// Legacy type aliases
export type Collection = {
  id: string;
  name: string;
  subtitle: string;
  editorsNote: string;
  products: Product[];
};

// Legacy functions that map to the new manifest
export function getAllProducts(): Product[] {
  return ProductManifest;
}

export function getProductBySlug(slug: string): Product | undefined {
  return manifestGetProductBySlug(slug);
}

export function getProductsByCategory(category: string): Product[] {
  return ProductManifest.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export function getProductsByCollection(collectionId: string): Product[] {
  return ProductManifest.filter(p => p.collection?.includes(collectionId));
}

export function getFeaturedProducts(): Product[] {
  return ProductManifest.filter(p => p.featured).slice(0, 8);
}

export function getTrendingProducts(): Product[] {
  return ProductManifest.filter(p => p.trending).slice(0, 12);
}

export function getProductById(id: string): Product | undefined {
  return ProductManifest.find(p => p.id === id);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(ProductManifest.map(p => p.category)));
}
