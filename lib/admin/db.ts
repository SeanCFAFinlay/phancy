import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'content', 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Generic JSON file operations
export function readJsonFile<T>(filename: string): T[] {
  const filepath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filepath)) {
    return [];
  }
  const data = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(data);
}

export function writeJsonFile<T>(filename: string, data: T[]): void {
  const filepath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

// Analytics data
export interface AnalyticsEvent {
  id: string;
  type: 'page_view' | 'product_click' | 'affiliate_click' | 'search';
  productId?: string;
  page?: string;
  timestamp: string;
  userAgent?: string;
  referrer?: string;
}

export interface DailyStats {
  date: string;
  pageViews: number;
  productClicks: number;
  affiliateClicks: number;
  topProducts: { id: string; clicks: number }[];
}

// Product type
export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  collection?: string;
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
  createdAt?: string;
  updatedAt?: string;
}

// Admin user
export interface AdminUser {
  id: string;
  username: string;
  passwordHash: string;
  createdAt: string;
}

// Products CRUD
export function getProducts(): Product[] {
  return readJsonFile<Product>('products.json');
}

export function getProductById(id: string): Product | undefined {
  const products = getProducts();
  return products.find(p => p.id === id);
}

export function createProduct(product: Omit<Product, 'createdAt' | 'updatedAt'>): Product {
  const products = getProducts();
  const newProduct: Product = {
    ...product,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  products.push(newProduct);
  writeJsonFile('products.json', products);
  return newProduct;
}

export function updateProduct(id: string, updates: Partial<Product>): Product | null {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;

  products[index] = {
    ...products[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  writeJsonFile('products.json', products);
  return products[index];
}

export function deleteProduct(id: string): boolean {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return false;

  products.splice(index, 1);
  writeJsonFile('products.json', products);
  return true;
}

// Analytics
export function logAnalyticsEvent(event: Omit<AnalyticsEvent, 'id' | 'timestamp'>): void {
  const events = readJsonFile<AnalyticsEvent>('analytics.json');
  const newEvent: AnalyticsEvent = {
    ...event,
    id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
  };
  events.push(newEvent);

  // Keep only last 10000 events
  if (events.length > 10000) {
    events.splice(0, events.length - 10000);
  }

  writeJsonFile('analytics.json', events);
}

export function getAnalyticsEvents(days: number = 30): AnalyticsEvent[] {
  const events = readJsonFile<AnalyticsEvent>('analytics.json');
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);

  return events.filter(e => new Date(e.timestamp) >= cutoff);
}

export function getAnalyticsSummary(days: number = 30): {
  totalPageViews: number;
  totalProductClicks: number;
  totalAffiliateClicks: number;
  topProducts: { id: string; name: string; clicks: number }[];
  dailyStats: { date: string; views: number; clicks: number }[];
} {
  const events = getAnalyticsEvents(days);
  const products = getProducts();

  const productClicks = new Map<string, number>();
  const dailyData = new Map<string, { views: number; clicks: number }>();

  let totalPageViews = 0;
  let totalProductClicks = 0;
  let totalAffiliateClicks = 0;

  events.forEach(event => {
    const date = event.timestamp.split('T')[0];

    if (!dailyData.has(date)) {
      dailyData.set(date, { views: 0, clicks: 0 });
    }

    const daily = dailyData.get(date)!;

    switch (event.type) {
      case 'page_view':
        totalPageViews++;
        daily.views++;
        break;
      case 'product_click':
        totalProductClicks++;
        if (event.productId) {
          productClicks.set(event.productId, (productClicks.get(event.productId) || 0) + 1);
        }
        break;
      case 'affiliate_click':
        totalAffiliateClicks++;
        daily.clicks++;
        if (event.productId) {
          productClicks.set(event.productId, (productClicks.get(event.productId) || 0) + 1);
        }
        break;
    }
  });

  const topProducts = Array.from(productClicks.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([id, clicks]) => {
      const product = products.find(p => p.id === id);
      return { id, name: product?.name || 'Unknown', clicks };
    });

  const dailyStats = Array.from(dailyData.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, data]) => ({ date, ...data }));

  return {
    totalPageViews,
    totalProductClicks,
    totalAffiliateClicks,
    topProducts,
    dailyStats,
  };
}

// Admin users
export function getAdminUsers(): AdminUser[] {
  return readJsonFile<AdminUser>('admin-users.json');
}

export function getAdminByUsername(username: string): AdminUser | undefined {
  const users = getAdminUsers();
  return users.find(u => u.username === username);
}

export function createAdminUser(user: Omit<AdminUser, 'id' | 'createdAt'>): AdminUser {
  const users = getAdminUsers();
  const newUser: AdminUser = {
    ...user,
    id: `admin_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  writeJsonFile('admin-users.json', users);
  return newUser;
}
