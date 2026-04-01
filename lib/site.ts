export const site = {
  name: "Phancy",
  domain: "phancy.ca",
  marketplace: "Canada",
  affiliateTag: "phcfastore-20",
  title: "Phancy | Curated Wellness & Homewares",
  description: "A curated destination for wellness essentials and design-forward homewares. Objects for calmer living, chosen for aesthetics, utility, and warmth.",
  tagline: "Objects for Calmer Living",
  editorialNote: "Every piece is chosen for how it looks, how it works, and how it makes you feel.",
  brandStatement: "We believe beautiful objects create calmer spaces. Phancy curates wellness essentials and homewares with intention, selecting pieces that are as useful as they are beautiful. Design-led, warm, and never generic.",
};

// ═══════════════════════════════════════════════════════════════
// DESIGN TOKENS - Mid-Century Modern + Warm Neutral Palette
// ═══════════════════════════════════════════════════════════════

export const colors = {
  // Primary Warm Neutrals
  cream: "#FAF8F5",        // Main background
  oat: "#F5F2ED",          // Secondary background
  sand: "#E8E4DD",         // Tertiary/borders
  warmWhite: "#FDFCFA",    // Cards

  // Warm Accents
  walnut: "#5C4033",       // Rich wood tone
  terracotta: "#C4785C",   // Warm accent
  moss: "#6B7D5C",         // Muted green
  sage: "#8FAE8B",         // Light green accent

  // Darks
  charcoal: "#3D3D3D",     // Secondary text
  softBlack: "#1A1D19",    // Primary text

  // Brand
  forest: "#03854C",       // Primary action
  forestDark: "#026B3D",   // Hover state
  forestLight: "#E8F5EE",  // Light accent

  // Supporting
  muted: "#6B695F",        // Muted text
  line: "#E5E2DB",         // Borders
};

// ═══════════════════════════════════════════════════════════════
// NAVIGATION STRUCTURE
// ═══════════════════════════════════════════════════════════════

export const navigation = {
  main: [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/wellness", label: "Wellness" },
    { href: "/homewares", label: "Homewares" },
    { href: "/rooms", label: "Rooms" },
    { href: "/journal", label: "Journal" },
  ],
  secondary: [
    { href: "/about", label: "About" },
    { href: "/favorites", label: "Favorites" },
  ],
  footer: {
    shop: [
      { href: "/shop", label: "All Products" },
      { href: "/wellness", label: "Wellness" },
      { href: "/homewares", label: "Homewares" },
      { href: "/favorites", label: "Favorites" },
    ],
    discover: [
      { href: "/journal", label: "Journal" },
      { href: "/about", label: "About Us" },
      { href: "/collections/editors-picks", label: "Editor's Picks" },
      { href: "/collections/best-under-100", label: "Best Under $100" },
    ],
    rooms: [
      { href: "/rooms/living-room", label: "Living Room" },
      { href: "/rooms/bedroom", label: "Bedroom" },
      { href: "/rooms/bathroom", label: "Bathroom" },
      { href: "/rooms/kitchen", label: "Kitchen" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/disclosure", label: "Affiliate Disclosure" },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════
// CATEGORY STRUCTURE
// ═══════════════════════════════════════════════════════════════

export const categories = {
  wellness: {
    id: "wellness",
    name: "Wellness",
    description: "Essentials for calmer mornings, restful nights, and daily rituals worth keeping.",
    subCategories: [
      { id: "sleep", name: "Sleep", description: "Rest deeply, wake refreshed." },
      { id: "bath-body", name: "Bath & Body", description: "Rituals for self-care." },
      { id: "scent", name: "Scent", description: "Atmosphere, elevated." },
      { id: "rituals", name: "Rituals", description: "Daily practices worth keeping." },
      { id: "recovery", name: "Recovery", description: "Restore, repair, renew." },
      { id: "mindful-living", name: "Mindful Living", description: "Presence in practice." },
    ],
  },
  homewares: {
    id: "homewares",
    name: "Homewares",
    description: "Design-forward objects that make everyday living feel intentional.",
    subCategories: [
      { id: "lighting", name: "Lighting", description: "Warm light, beautiful forms." },
      { id: "decor", name: "Decor", description: "Statement pieces and finishing touches." },
      { id: "kitchen", name: "Kitchen", description: "Tools for gathering and nourishing." },
      { id: "tabletop", name: "Tabletop", description: "Set the scene." },
      { id: "storage", name: "Storage", description: "Organization with intention." },
      { id: "textiles", name: "Textiles", description: "Soft goods, warm spaces." },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════
// ROOMS
// ═══════════════════════════════════════════════════════════════

export const rooms = [
  {
    id: "living-room",
    name: "Living Room",
    description: "The heart of the home. Warm, inviting, designed for living.",
    image: "/rooms/living-room.jpg"
  },
  {
    id: "bedroom",
    name: "Bedroom",
    description: "Your sanctuary. Calm, restful, beautifully simple.",
    image: "/rooms/bedroom.jpg"
  },
  {
    id: "bathroom",
    name: "Bathroom",
    description: "A spa-like retreat. Daily rituals, elevated.",
    image: "/rooms/bathroom.jpg"
  },
  {
    id: "kitchen",
    name: "Kitchen",
    description: "Where nourishment happens. Functional and beautiful.",
    image: "/rooms/kitchen.jpg"
  },
  {
    id: "workspace",
    name: "Workspace",
    description: "Focused and calm. A space for deep work.",
    image: "/rooms/workspace.jpg"
  },
  {
    id: "entryway",
    name: "Entryway",
    description: "First impressions. Welcoming and organized.",
    image: "/rooms/entryway.jpg"
  },
];

// ═══════════════════════════════════════════════════════════════
// CURATED COLLECTIONS
// ═══════════════════════════════════════════════════════════════

export const collections = {
  "editors-picks": {
    id: "editors-picks",
    name: "Editor's Picks",
    subtitle: "Our Absolute Favorites",
    description: "The pieces we reach for ourselves. Chosen for quality, design, and lasting appeal.",
    image: "/collections/editors-picks.jpg",
  },
  "most-loved": {
    id: "most-loved",
    name: "Most Loved",
    subtitle: "Reader Favorites",
    description: "The products our community returns to again and again.",
    image: "/collections/most-loved.jpg",
  },
  "best-under-100": {
    id: "best-under-100",
    name: "Best Under $100",
    subtitle: "Small Luxuries",
    description: "Elevated everyday objects that do not require a big investment.",
    image: "/collections/best-under-100.jpg",
  },
  "design-classics": {
    id: "design-classics",
    name: "Design Classics",
    subtitle: "Timeless Pieces",
    description: "Icons of design that never go out of style. Investment pieces worth the space.",
    image: "/collections/design-classics.jpg",
  },
  "small-luxuries": {
    id: "small-luxuries",
    name: "Small Luxuries",
    subtitle: "Everyday Indulgences",
    description: "The little things that make daily life feel special.",
    image: "/collections/small-luxuries.jpg",
  },
};

// ═══════════════════════════════════════════════════════════════
// RITUALS (Shop by Ritual)
// ═══════════════════════════════════════════════════════════════

export const rituals = [
  {
    id: "slow-morning",
    name: "Slow Morning",
    description: "Start the day with intention. Coffee, journal, quiet.",
    image: "/rituals/slow-morning.jpg",
  },
  {
    id: "evening-reset",
    name: "Evening Reset",
    description: "Wind down beautifully. Candles, calm, rest.",
    image: "/rituals/evening-reset.jpg",
  },
  {
    id: "bath-ritual",
    name: "Bath Ritual",
    description: "Your personal spa. Soaks, oils, soft towels.",
    image: "/rituals/bath-ritual.jpg",
  },
  {
    id: "hosting-essentials",
    name: "Hosting Essentials",
    description: "Gather well. Serveware, linens, ambiance.",
    image: "/rituals/hosting-essentials.jpg",
  },
];

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

export function withAffiliateTag(url: string): string {
  if (!url || url === "#") return "#";
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("amazon")) {
      parsed.searchParams.set("tag", site.affiliateTag);
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

export const ctaText = {
  primary: "Shop Now",
  secondary: "View Details",
  explore: "Explore Collection",
  amazon: "View on Amazon",
};

// ═══════════════════════════════════════════════════════════════
// JOURNAL CATEGORIES
// ═══════════════════════════════════════════════════════════════

export const journalCategories = [
  { id: "roundups", name: "Roundups", description: "Curated lists of the best" },
  { id: "gift-guides", name: "Gift Guides", description: "Thoughtful giving ideas" },
  { id: "room-guides", name: "Room Guides", description: "Space-by-space inspiration" },
  { id: "ritual-guides", name: "Ritual Guides", description: "Daily practices worth keeping" },
  { id: "design-edits", name: "Design Edits", description: "Trends, classics, and everything between" },
];
