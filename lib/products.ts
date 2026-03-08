import productsData from "@/content/data/products.json";
import bestOfData from "@/content/data/best-of.json";
import comparisonsData from "@/content/data/comparisons.json";
import blogData from "@/content/data/blog.json";
import { withAffiliateTag } from "./affiliate";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  image: string;
  amazonUrl: string;
  price: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  description: string;
  ingredients?: string[];
  pros: string[];
  cons: string[];
  featured?: boolean;
  trending?: boolean;
};

export function getAllProducts(): Product[] {
  return (productsData as Product[]).map((p) => ({
    ...p,
    amazonUrl: withAffiliateTag(p.amazonUrl),
  }));
}

export function getProductBySlug(slug: string) {
  return getAllProducts().find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return getAllProducts().filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return getAllProducts().filter((p) => p.featured).slice(0, 8);
}

export function getTrendingProducts() {
  return getAllProducts().filter((p) => p.trending).slice(0, 12);
}

export function getBestOfBySlug(slug: string) {
  return (bestOfData as any[]).find((b) => b.slug === slug);
}

export function getAllBestOf() {
  return bestOfData as any[];
}

export function getComparisonBySlug(slug: string) {
  return (comparisonsData as any[]).find((c) => c.slug === slug);
}

export function getAllComparisons() {
  return comparisonsData as any[];
}

export function getAllBlogPosts() {
  return blogData as any[];
}

export function getBlogBySlug(slug: string) {
  return (blogData as any[]).find((b) => b.slug === slug);
}

export function getProductById(id: string) {
  return getAllProducts().find((p) => p.id === id);
}

export function getAllCategories() {
  return Array.from(new Set(getAllProducts().map((p) => p.category)));
}