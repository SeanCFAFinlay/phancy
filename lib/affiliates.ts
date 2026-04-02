/**
 * Multi-Affiliate Network Configuration
 * Supports multiple affiliate programs with different commission structures
 */

export type AffiliateNetwork =
  | "amazon-ca"
  | "amazon-us"
  | "amazon-uk"
  | "homedepot-ca"
  | "homedepot-us"
  | "rona"
  | "lowes-ca"
  | "wayfair-ca"
  | "cb2"
  | "cratebarrel"
  | "westelm"
  | "potterybarn"
  | "ikea-ca"
  | "structube"
  | "eq3"
  | "shareasale"
  | "cj"
  | "impact"
  | "rakuten"
  | "awin"
  | "direct";

export interface AffiliateConfig {
  id: AffiliateNetwork;
  name: string;
  enabled: boolean;
  priority: number; // Lower = higher priority
  baseUrl?: string;
  tag?: string;
  merchantId?: string;
  publisherId?: string;
  apiKey?: string;
  commissionRate?: number; // Percentage for reference
}

export interface AffiliateLink {
  network: AffiliateNetwork;
  url: string;
  productId?: string; // ASIN, SKU, or merchant product ID
}

/**
 * Affiliate network configurations
 * Priority determines which link to show when multiple are available
 */
export const AffiliateNetworks: Record<AffiliateNetwork, AffiliateConfig> = {
  "amazon-ca": {
    id: "amazon-ca",
    name: "Amazon Canada",
    enabled: true,
    priority: 1,
    baseUrl: "https://www.amazon.ca",
    tag: process.env.NEXT_PUBLIC_AMAZON_CA_TAG || "phcfastore-20",
    commissionRate: 4.0
  },
  "amazon-us": {
    id: "amazon-us",
    name: "Amazon US",
    enabled: false,
    priority: 2,
    baseUrl: "https://www.amazon.com",
    tag: process.env.NEXT_PUBLIC_AMAZON_US_TAG || "",
    commissionRate: 4.0
  },
  "amazon-uk": {
    id: "amazon-uk",
    name: "Amazon UK",
    enabled: false,
    priority: 3,
    baseUrl: "https://www.amazon.co.uk",
    tag: process.env.NEXT_PUBLIC_AMAZON_UK_TAG || "",
    commissionRate: 4.0
  },
  // ═══════════════════════════════════════════════════════════════
  // HOME IMPROVEMENT STORES
  // ═══════════════════════════════════════════════════════════════
  "homedepot-ca": {
    id: "homedepot-ca",
    name: "Home Depot Canada",
    enabled: false,
    priority: 5,
    baseUrl: "https://www.homedepot.ca",
    publisherId: process.env.HOMEDEPOT_CA_AFFILIATE_ID || "",
    commissionRate: 2.0 // Uses Impact Radius
  },
  "homedepot-us": {
    id: "homedepot-us",
    name: "Home Depot US",
    enabled: false,
    priority: 6,
    baseUrl: "https://www.homedepot.com",
    publisherId: process.env.HOMEDEPOT_US_AFFILIATE_ID || "",
    commissionRate: 2.0 // Uses Impact Radius
  },
  "rona": {
    id: "rona",
    name: "RONA",
    enabled: false,
    priority: 7,
    baseUrl: "https://www.rona.ca",
    publisherId: process.env.RONA_AFFILIATE_ID || "",
    commissionRate: 2.5
  },
  "lowes-ca": {
    id: "lowes-ca",
    name: "Lowe's Canada",
    enabled: false,
    priority: 8,
    baseUrl: "https://www.lowes.ca",
    publisherId: process.env.LOWES_CA_AFFILIATE_ID || "",
    commissionRate: 2.0
  },
  // ═══════════════════════════════════════════════════════════════
  // HOME & FURNITURE STORES
  // ═══════════════════════════════════════════════════════════════
  "wayfair-ca": {
    id: "wayfair-ca",
    name: "Wayfair Canada",
    enabled: false,
    priority: 10,
    baseUrl: "https://www.wayfair.ca",
    publisherId: process.env.WAYFAIR_CA_AFFILIATE_ID || "",
    commissionRate: 7.0 // Uses CJ Affiliate
  },
  "cb2": {
    id: "cb2",
    name: "CB2",
    enabled: false,
    priority: 11,
    baseUrl: "https://www.cb2.ca",
    publisherId: process.env.CB2_AFFILIATE_ID || "",
    commissionRate: 4.0 // Uses Rakuten
  },
  "cratebarrel": {
    id: "cratebarrel",
    name: "Crate & Barrel",
    enabled: false,
    priority: 12,
    baseUrl: "https://www.crateandbarrel.ca",
    publisherId: process.env.CRATEBARREL_AFFILIATE_ID || "",
    commissionRate: 4.0 // Uses Rakuten
  },
  "westelm": {
    id: "westelm",
    name: "West Elm",
    enabled: false,
    priority: 13,
    baseUrl: "https://www.westelm.ca",
    publisherId: process.env.WESTELM_AFFILIATE_ID || "",
    commissionRate: 4.0 // Uses Rakuten
  },
  "potterybarn": {
    id: "potterybarn",
    name: "Pottery Barn",
    enabled: false,
    priority: 14,
    baseUrl: "https://www.potterybarn.ca",
    publisherId: process.env.POTTERYBARN_AFFILIATE_ID || "",
    commissionRate: 4.0 // Uses Rakuten
  },
  "ikea-ca": {
    id: "ikea-ca",
    name: "IKEA Canada",
    enabled: false,
    priority: 15,
    baseUrl: "https://www.ikea.com/ca",
    publisherId: process.env.IKEA_CA_AFFILIATE_ID || "",
    commissionRate: 3.0 // Uses Awin
  },
  "structube": {
    id: "structube",
    name: "Structube",
    enabled: false,
    priority: 16,
    baseUrl: "https://www.structube.com",
    publisherId: process.env.STRUCTUBE_AFFILIATE_ID || "",
    commissionRate: 5.0
  },
  "eq3": {
    id: "eq3",
    name: "EQ3",
    enabled: false,
    priority: 17,
    baseUrl: "https://www.eq3.com",
    publisherId: process.env.EQ3_AFFILIATE_ID || "",
    commissionRate: 5.0
  },
  // ═══════════════════════════════════════════════════════════════
  // AFFILIATE NETWORKS (for generic links)
  // ═══════════════════════════════════════════════════════════════
  "shareasale": {
    id: "shareasale",
    name: "ShareASale",
    enabled: false,
    priority: 4,
    baseUrl: "https://www.shareasale.com",
    merchantId: process.env.SHAREASALE_MERCHANT_ID || "",
    publisherId: process.env.SHAREASALE_AFFILIATE_ID || "",
    commissionRate: 8.0
  },
  "cj": {
    id: "cj",
    name: "CJ Affiliate (Commission Junction)",
    enabled: false,
    priority: 5,
    baseUrl: "https://www.anrdoezrs.net",
    publisherId: process.env.CJ_WEBSITE_ID || "",
    commissionRate: 7.0
  },
  "impact": {
    id: "impact",
    name: "Impact",
    enabled: false,
    priority: 6,
    baseUrl: "https://impact.com",
    publisherId: process.env.IMPACT_ACCOUNT_SID || "",
    commissionRate: 6.0
  },
  "rakuten": {
    id: "rakuten",
    name: "Rakuten Advertising",
    enabled: false,
    priority: 7,
    baseUrl: "https://click.linksynergy.com",
    publisherId: process.env.RAKUTEN_SITE_ID || "",
    commissionRate: 5.0
  },
  "awin": {
    id: "awin",
    name: "Awin",
    enabled: false,
    priority: 8,
    baseUrl: "https://www.awin1.com",
    publisherId: process.env.AWIN_PUBLISHER_ID || "",
    commissionRate: 6.0
  },
  "direct": {
    id: "direct",
    name: "Direct Brand Partnership",
    enabled: true,
    priority: 10,
    commissionRate: 10.0
  }
};

/**
 * Get all enabled affiliate networks sorted by priority
 */
export function getEnabledNetworks(): AffiliateConfig[] {
  return Object.values(AffiliateNetworks)
    .filter(n => n.enabled)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Get a specific network configuration
 */
export function getNetwork(id: AffiliateNetwork): AffiliateConfig | undefined {
  return AffiliateNetworks[id];
}

/**
 * Build an Amazon affiliate link with the correct tag
 */
export function buildAmazonLink(
  asin: string,
  region: "ca" | "us" | "uk" = "ca"
): string {
  const network = AffiliateNetworks[`amazon-${region}`];
  if (!network.tag) {
    return `${network.baseUrl}/dp/${asin}`;
  }
  return `${network.baseUrl}/dp/${asin}?tag=${network.tag}`;
}

/**
 * Build a ShareASale affiliate link
 */
export function buildShareASaleLink(
  merchantId: string,
  productUrl: string
): string {
  const network = AffiliateNetworks.shareasale;
  const encodedUrl = encodeURIComponent(productUrl);
  return `https://www.shareasale.com/r.cfm?b=1&u=${network.publisherId}&m=${merchantId}&urllink=${encodedUrl}`;
}

/**
 * Build a CJ Affiliate link
 */
export function buildCJLink(
  advertiserId: string,
  productUrl: string
): string {
  const network = AffiliateNetworks.cj;
  const encodedUrl = encodeURIComponent(productUrl);
  return `https://www.anrdoezrs.net/links/${network.publisherId}/${advertiserId}?url=${encodedUrl}`;
}

/**
 * Build an Impact affiliate link
 */
export function buildImpactLink(
  campaignId: string,
  productUrl: string
): string {
  const encodedUrl = encodeURIComponent(productUrl);
  return `https://goto.target.com/c/${campaignId}?u=${encodedUrl}`;
}

/**
 * Build a Rakuten affiliate link
 */
export function buildRakutenLink(
  merchantId: string,
  productUrl: string
): string {
  const network = AffiliateNetworks.rakuten;
  const encodedUrl = encodeURIComponent(productUrl);
  return `https://click.linksynergy.com/deeplink?id=${network.publisherId}&mid=${merchantId}&murl=${encodedUrl}`;
}

/**
 * Resolve the best affiliate link from available options
 * Returns the highest priority (lowest number) enabled network link
 */
export function resolveAffiliateLink(links: AffiliateLink[]): AffiliateLink | null {
  if (!links || links.length === 0) return null;

  const enabledNetworks = getEnabledNetworks();
  const enabledIds = new Set(enabledNetworks.map(n => n.id));

  // Filter to enabled networks and sort by priority
  const availableLinks = links
    .filter(link => enabledIds.has(link.network))
    .sort((a, b) => {
      const priorityA = AffiliateNetworks[a.network].priority;
      const priorityB = AffiliateNetworks[b.network].priority;
      return priorityA - priorityB;
    });

  return availableLinks[0] || null;
}

/**
 * Get the primary affiliate URL from a list of links
 */
export function getPrimaryAffiliateUrl(links: AffiliateLink[]): string {
  const resolved = resolveAffiliateLink(links);
  return resolved?.url || "#";
}

/**
 * Check if a network is properly configured
 */
export function isNetworkConfigured(id: AffiliateNetwork): boolean {
  const network = AffiliateNetworks[id];
  if (!network) return false;

  // Amazon needs a tag
  if (id.startsWith("amazon-")) {
    return !!network.tag;
  }

  // Other networks need publisher/affiliate ID
  return !!(network.publisherId || network.merchantId);
}

/**
 * Get all configured networks
 */
export function getConfiguredNetworks(): AffiliateConfig[] {
  return Object.values(AffiliateNetworks)
    .filter(n => isNetworkConfigured(n.id))
    .sort((a, b) => a.priority - b.priority);
}
