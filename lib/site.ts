export const site = {
  name: "Phancy",
  domain: "phancy.ca",
  marketplace: "Canada",
  affiliateTag: "phcfastore-20",
  title: "Phancy | Curated for Modern Living",
  description:
    "A curated collection of wellness essentials and high-end home goods for the modern Canadian lifestyle. Editorial-driven product discovery.",
  tagline: "Curated for Modern Living",
  editorialNote: "Wellness discovery that feels editorial, elevated, and actually usable.",
};

// MCM Brand Colors - Strict Adherence
export const colors = {
  forest: "#03854C",
  forestDark: "#026B3D",
  forestLight: "#E8F5EE",
  offBlack: "#1A1D19",
  cream: "#F5F2ED",
  creamDark: "#EBE7E0",
  sage: "#8FAE8B",
  sageLight: "#D4E4D1",
  terracotta: "#C4785C",
  terracottaLight: "#F5E6E0",
  warmWhite: "#FDFCFA",
  muted: "#6B695F",
  line: "#E5E2DB",
};

// Collection Categories
export const collections = {
  morningRitual: {
    id: "morning-ritual",
    name: "The Morning Ritual",
    subtitle: "Nutrition & Wellness",
    editorsNote:
      "These are the supplements that belong in a thoughtful morning routine. Each has been selected for quality sourcing, clean formulation, and the kind of understated packaging that looks at home on a marble countertop.",
  },
  highEndHome: {
    id: "high-end-home",
    name: "The High-End Home",
    subtitle: "Wares & Decor",
    editorsNote:
      "Mid-century modernism meets everyday utility. These pieces elevate daily rituals—from morning coffee to evening hosting—with organic materials and architectural silhouettes.",
  },
  lifestyleAccessories: {
    id: "lifestyle-accessories",
    name: "Lifestyle Accessories",
    subtitle: "Essentials",
    editorsNote:
      "The finishing touches for a considered life. Sustainable materials, minimalist branding, and the kind of quality that improves with use.",
  },
};

// Affiliate link helper
export function withAffiliateTag(url: string): string {
  if (url.includes("amazon.ca") && !url.includes("tag=")) {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}tag=${site.affiliateTag}`;
  }
  return url;
}

// Soft-call CTA text options
export const ctaText = {
  primary: "Discover on Amazon",
  secondary: "View the Collection",
  explore: "Explore This Piece",
  shop: "Shop Now",
};
