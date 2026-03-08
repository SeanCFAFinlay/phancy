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

export type BestOfGuide = {
  slug: string;
  title: string;
  description: string;
  products: string[];
};

export type ComparisonGuide = {
  slug: string;
  title: string;
  productA: string;
  productB: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  recommendedProductId: string;
  content: string[];
};

const rawProducts = productsData as Product[];
const rawBestOf = bestOfData as BestOfGuide[];
const rawComparisons = comparisonsData as ComparisonGuide[];
const rawBlog = blogData as BlogPost[];

export function getAllProducts(): Product[] {
  return rawProducts.map((p) => ({
    ...p,
    amazonUrl: withAffiliateTag(p.amazonUrl),
  }));
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((p) => p.featured).slice(0, 8);
}

export function getTrendingProducts(): Product[] {
  return getAllProducts().filter((p) => p.trending).slice(0, 12);
}

export function getBestOfBySlug(slug: string): BestOfGuide | undefined {
  return rawBestOf.find((b) => b.slug === slug);
}

export function getAllBestOf(): BestOfGuide[] {
  return rawBestOf;
}

export function getComparisonBySlug(slug: string): ComparisonGuide | undefined {
  return rawComparisons.find((c) => c.slug === slug);
}

export function getAllComparisons(): ComparisonGuide[] {
  return rawComparisons;
}

export function getAllBlogPosts(): BlogPost[] {
  return rawBlog;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return rawBlog.find((b) => b.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((p) => p.id === id);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(getAllProducts().map((p) => p.category)));
}