/**
 * SITE CONFIGURATION
 * ==================
 *
 * Mid-Century Modern Architectural Affiliate Site
 * Premium home decor, furniture, lighting, and wellness objects
 *
 * Design Direction:
 * - Frank Lloyd Wright influenced in spirit
 * - Organic integration, strong geometry, horizontal rhythm
 * - Natural materials, harmony between object and environment
 * - Warm neutrals: walnut, oak, brass, ceramic, linen, stone
 */

export const site = {
  name: "Phancy",
  domain: "phancy.ca",
  affiliateTag: "phcfastore-20", // For Amazon affiliate links
  title: "Phancy | Mid-Century Modern Home & Wellness",
  description: "A curated gallery of mid-century modern furniture, architectural lighting, and wellness objects. Design classics and contemporary pieces chosen for material warmth and lasting appeal.",
  tagline: "Objects of Quiet Architecture",
  editorialNote: "Every piece is chosen for material integrity, timeless design, and the way it makes a space feel whole.",
  brandStatement: "We believe the best objects are those that disappear into their purpose—furniture that invites, lighting that softens, wellness rituals that calm. Phancy curates mid-century modern classics and contemporary design with intention, selecting pieces that honor craft, material, and the architecture of daily life.",
};

// ═══════════════════════════════════════════════════════════════════════════
// DESIGN TOKENS - Mid-Century Modern + Architectural Palette
// ═══════════════════════════════════════════════════════════════════════════

export const colors = {
  // Primary Warm Neutrals
  cream: "#FAF8F5",        // Main background
  oat: "#F5F2ED",          // Secondary background
  sand: "#E8E4DD",         // Tertiary/borders
  warmWhite: "#FDFCFA",    // Cards
  parchment: "#F0EBE3",    // Accent background

  // Natural Materials
  walnut: "#5C4033",       // Rich wood tone
  oak: "#8B7355",          // Light wood
  brass: "#B5986D",        // Warm metal
  clay: "#A67B5B",         // Earthy accent
  olive: "#6B7355",        // Muted green
  stone: "#8A8479",        // Neutral stone

  // Architectural Accents
  charcoal: "#3D3D3D",     // Secondary text
  softBlack: "#1A1D19",    // Primary text
  smokedGlass: "#5A5A5A",  // Muted dark

  // Brand
  forest: "#03854C",       // Primary action
  forestDark: "#026B3D",   // Hover state
  forestLight: "#E8F5EE",  // Light accent

  // Supporting
  terracotta: "#C4785C",   // Warm accent
  moss: "#6B7D5C",         // Muted green
  sage: "#8FAE8B",         // Light green accent
  muted: "#6B695F",        // Muted text
  line: "#E5E2DB",         // Borders
};

// ═══════════════════════════════════════════════════════════════════════════
// NAVIGATION STRUCTURE
// ═══════════════════════════════════════════════════════════════════════════

export const navigation = {
  main: [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/lighting", label: "Lighting" },
    { href: "/furniture", label: "Furniture" },
    { href: "/decor", label: "Decor" },
    { href: "/wellness", label: "Wellness" },
    { href: "/journal", label: "Journal" },
  ],
  secondary: [
    { href: "/about", label: "About" },
    { href: "/favorites", label: "Collections" },
  ],
  footer: {
    shop: [
      { href: "/shop", label: "All Products" },
      { href: "/lighting", label: "Lighting" },
      { href: "/furniture", label: "Furniture" },
      { href: "/decor", label: "Decor" },
      { href: "/wellness", label: "Wellness" },
    ],
    discover: [
      { href: "/journal", label: "Journal" },
      { href: "/about", label: "About Us" },
      { href: "/collections/design-classics", label: "Design Classics" },
      { href: "/collections/best-under-100", label: "Best Under $100" },
    ],
    rooms: [
      { href: "/rooms/living-room", label: "Living Room" },
      { href: "/rooms/bedroom", label: "Bedroom" },
      { href: "/rooms/kitchen", label: "Kitchen" },
      { href: "/rooms/entryway", label: "Entryway" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/disclosure", label: "Affiliate Disclosure" },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY STRUCTURE
// ═══════════════════════════════════════════════════════════════════════════

export const categories = {
  lighting: {
    id: "lighting",
    name: "Lighting",
    description: "Architectural pendants, sculptural table lamps, and statement floor lamps. Light as form.",
    subCategories: [
      { id: "pendant-light", name: "Pendant Lights", description: "Overhead illumination with presence." },
      { id: "table-lamp", name: "Table Lamps", description: "Sculptural light for surfaces." },
      { id: "floor-lamp", name: "Floor Lamps", description: "Standing statements of light." },
      { id: "sconce", name: "Sconces", description: "Wall-mounted ambient light." },
    ],
  },
  furniture: {
    id: "furniture",
    name: "Furniture",
    description: "Mid-century lounge chairs, walnut side tables, and benches that anchor a room.",
    subCategories: [
      { id: "lounge-chair", name: "Lounge Chairs", description: "Seats that invite lingering." },
      { id: "side-table", name: "Side Tables", description: "Surfaces for essentials." },
      { id: "coffee-table", name: "Coffee Tables", description: "The heart of the living room." },
      { id: "dining-chair", name: "Dining Chairs", description: "Where gathering happens." },
      { id: "bench", name: "Benches", description: "Entryways and end-of-bed." },
      { id: "stool", name: "Stools", description: "Kitchen islands and bars." },
    ],
  },
  decor: {
    id: "decor",
    name: "Decor",
    description: "Ceramic vases, sculptural objects, mirrors, and trays. The finishing touches.",
    subCategories: [
      { id: "vase", name: "Vases", description: "Sculptural vessels for stems or standing alone." },
      { id: "bowl", name: "Bowls", description: "Functional sculpture." },
      { id: "tray", name: "Trays", description: "Organization with intention." },
      { id: "mirror", name: "Mirrors", description: "Light and space, amplified." },
      { id: "sculpture", name: "Sculptural Objects", description: "Art objects for living." },
    ],
  },
  wellness: {
    id: "wellness",
    name: "Wellness",
    description: "Diffusers, candles, and room sprays. Rituals for calmer living.",
    subCategories: [
      { id: "diffuser", name: "Diffusers", description: "Atmosphere through scent." },
      { id: "candle", name: "Candles", description: "Warm light and fragrance." },
      { id: "room-spray", name: "Room Sprays", description: "Instant ambiance." },
      { id: "essential-oil", name: "Essential Oils", description: "Pure botanical scent." },
      { id: "bath", name: "Bath", description: "Rituals for restoration." },
    ],
  },
  textiles: {
    id: "textiles",
    name: "Textiles",
    description: "Linen bedding, wool throws, and handwoven pillows. Material comfort.",
    subCategories: [
      { id: "bedding", name: "Bedding", description: "Rest in quality." },
      { id: "throw", name: "Throws", description: "Warmth within reach." },
      { id: "pillow", name: "Pillows", description: "Comfort and texture." },
      { id: "bath-textile", name: "Bath Textiles", description: "Softness after bathing." },
      { id: "storage", name: "Storage", description: "Baskets and organization." },
    ],
  },
  kitchen: {
    id: "kitchen",
    name: "Kitchen",
    description: "Stoneware dinnerware, brass hardware, and linen towels. Tools for gathering.",
    subCategories: [
      { id: "dinnerware", name: "Dinnerware", description: "Every meal, elevated." },
      { id: "serveware", name: "Serveware", description: "For hosting and sharing." },
      { id: "hardware", name: "Hardware", description: "Brass and stone details." },
      { id: "textile", name: "Kitchen Textiles", description: "Linen and function." },
    ],
  },
  outdoor: {
    id: "outdoor",
    name: "Outdoor",
    description: "Architectural planters and garden objects. Nature, framed.",
    subCategories: [
      { id: "planter", name: "Planters", description: "Vessels for green." },
      { id: "outdoor-furniture", name: "Outdoor Furniture", description: "Sit outside in style." },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// ROOMS
// ═══════════════════════════════════════════════════════════════════════════

export const rooms = [
  {
    id: "living-room",
    name: "Living Room",
    description: "The heart of the home. Where architecture meets comfort.",
    image: "/rooms/living-room.jpg"
  },
  {
    id: "bedroom",
    name: "Bedroom",
    description: "A sanctuary of rest. Quiet, calm, considered.",
    image: "/rooms/bedroom.jpg"
  },
  {
    id: "kitchen",
    name: "Kitchen",
    description: "Where gathering happens. Tools for nourishment.",
    image: "/rooms/kitchen.jpg"
  },
  {
    id: "bathroom",
    name: "Bathroom",
    description: "Rituals of restoration. Calm before and after.",
    image: "/rooms/bathroom.jpg"
  },
  {
    id: "workspace",
    name: "Workspace",
    description: "Focused and intentional. A space for deep work.",
    image: "/rooms/workspace.jpg"
  },
  {
    id: "entryway",
    name: "Entryway",
    description: "First impressions. The architecture of welcome.",
    image: "/rooms/entryway.jpg"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// CURATED COLLECTIONS
// ═══════════════════════════════════════════════════════════════════════════

export const collections = {
  "design-classics": {
    id: "design-classics",
    name: "Design Classics",
    subtitle: "Timeless Icons",
    description: "The pieces that defined mid-century modern. Eames, Noguchi, Nelson, Jacobsen, Henningsen. Icons that never go out of style.",
    image: "/collections/design-classics.jpg",
  },
  "prairie-light": {
    id: "prairie-light",
    name: "Prairie Light",
    subtitle: "Architectural Illumination",
    description: "Lighting inspired by organic architecture. Horizontal lines, natural materials, warm ambient glow.",
    image: "/collections/prairie-light.jpg",
  },
  "warm-geometry": {
    id: "warm-geometry",
    name: "Warm Geometry",
    subtitle: "Shape & Material",
    description: "Strong geometric forms softened by natural materials. Brass, ceramic, and stone in architectural silhouettes.",
    image: "/collections/warm-geometry.jpg",
  },
  "quiet-rituals": {
    id: "quiet-rituals",
    name: "Quiet Rituals",
    subtitle: "Wellness Objects",
    description: "Diffusers, candles, and scents for daily rituals. Objects that make ordinary moments feel intentional.",
    image: "/collections/quiet-rituals.jpg",
  },
  "sculptural-living": {
    id: "sculptural-living",
    name: "Sculptural Living",
    subtitle: "Art Objects for Home",
    description: "Furniture and decor that functions as sculpture. Statement pieces that define a space.",
    image: "/collections/sculptural-living.jpg",
  },
  "material-warmth": {
    id: "material-warmth",
    name: "Material Warmth",
    subtitle: "Natural & Honest",
    description: "Walnut, brass, linen, ceramic. Pieces defined by their materials. Honest construction, natural beauty.",
    image: "/collections/material-warmth.jpg",
  },
  "grounded-objects": {
    id: "grounded-objects",
    name: "Grounded Objects",
    subtitle: "Earthy & Organic",
    description: "Stoneware, woven baskets, clay vessels. Objects connected to the earth and handcraft traditions.",
    image: "/collections/grounded-objects.jpg",
  },
  "soft-utility": {
    id: "soft-utility",
    name: "Soft Utility",
    subtitle: "Functional Beauty",
    description: "Everyday objects elevated through design. Storage, organization, and tools that work beautifully.",
    image: "/collections/soft-utility.jpg",
  },
  "architectural-light": {
    id: "architectural-light",
    name: "Architectural Light",
    subtitle: "Light as Structure",
    description: "Pendant lights, sconces, and lamps that treat light as architectural element.",
    image: "/collections/architectural-light.jpg",
  },
  "reading-room": {
    id: "reading-room",
    name: "The Reading Room",
    subtitle: "Task & Ambient",
    description: "Table lamps and task lighting for focused work and quiet reading moments.",
    image: "/collections/reading-room.jpg",
  },
  "calm-bath": {
    id: "calm-bath",
    name: "Calm Bath",
    subtitle: "Spa Rituals",
    description: "Towels, accessories, and scents for the bathroom. Rituals of restoration.",
    image: "/collections/calm-bath.jpg",
  },
  "best-under-100": {
    id: "best-under-100",
    name: "Best Under $100",
    subtitle: "Accessible Design",
    description: "Well-designed objects at accessible prices. Entry points to better living.",
    image: "/collections/best-under-100.jpg",
  },
  "best-under-500": {
    id: "best-under-500",
    name: "Best Under $500",
    subtitle: "Investment Pieces",
    description: "Quality design that lasts. Investment pieces at reasonable price points.",
    image: "/collections/best-under-500.jpg",
  },
  "editors-picks": {
    id: "editors-picks",
    name: "Editor's Picks",
    subtitle: "Our Favorites",
    description: "The pieces we reach for ourselves. Chosen for quality, design, and lasting appeal.",
    image: "/collections/editors-picks.jpg",
  },
  "small-luxuries": {
    id: "small-luxuries",
    name: "Small Luxuries",
    subtitle: "Daily Indulgences",
    description: "Candles, oils, and small objects that elevate everyday moments.",
    image: "/collections/small-luxuries.jpg",
  },
  "most-loved": {
    id: "most-loved",
    name: "Most Loved",
    subtitle: "Reader Favorites",
    description: "The products our community returns to again and again. Proven quality, lasting appeal.",
    image: "/collections/most-loved.jpg",
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// RITUALS (Shop by Ritual)
// ═══════════════════════════════════════════════════════════════════════════

export const rituals = [
  {
    id: "slow-morning",
    name: "Slow Morning",
    description: "Start the day with intention. Coffee, light, quiet.",
    image: "/rituals/slow-morning.jpg",
  },
  {
    id: "evening-reset",
    name: "Evening Reset",
    description: "Wind down beautifully. Candles, calm, rest.",
    image: "/rituals/evening-reset.jpg",
  },
  {
    id: "focused-work",
    name: "Focused Work",
    description: "Deep work, good light, minimal distractions.",
    image: "/rituals/focused-work.jpg",
  },
  {
    id: "gathering",
    name: "Gathering",
    description: "Hosting essentials. Serveware, linens, ambiance.",
    image: "/rituals/gathering.jpg",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Format price with currency symbol
 */
export function formatPrice(price: number, currency: "USD" | "CAD" = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Get CTA text based on retailer
 */
export function getCtaText(retailerName: string): string {
  return `View at ${retailerName}`;
}

export const ctaText = {
  primary: "Shop Now",
  secondary: "View Details",
  explore: "Explore Collection",
};

// ═══════════════════════════════════════════════════════════════════════════
// JOURNAL CATEGORIES
// ═══════════════════════════════════════════════════════════════════════════

export const journalCategories = [
  { id: "design-classics", name: "Design Classics", description: "The icons and their stories" },
  { id: "material-focus", name: "Material Focus", description: "Deep dives into craft and material" },
  { id: "room-guides", name: "Room Guides", description: "Space-by-space inspiration" },
  { id: "designer-profiles", name: "Designer Profiles", description: "The makers behind the objects" },
  { id: "gift-guides", name: "Gift Guides", description: "Thoughtful giving ideas" },
];

// ═══════════════════════════════════════════════════════════════════════════
// FEATURED RETAILERS
// ═══════════════════════════════════════════════════════════════════════════

export const featuredRetailers = [
  { name: "Design Within Reach", url: "https://www.dwr.com", description: "Authentic modern design" },
  { name: "Herman Miller", url: "https://www.hermanmiller.com", description: "Mid-century icons" },
  { name: "Muuto", url: "https://www.muuto.com", description: "New Nordic design" },
  { name: "Ferm Living", url: "https://fermliving.us", description: "Danish contemporary" },
  { name: "HAY", url: "https://www.hay.com", description: "Scandinavian modern" },
  { name: "Schoolhouse", url: "https://schoolhouse.com", description: "American-made lighting" },
  { name: "Article", url: "https://www.article.com", description: "Modern furniture direct" },
  { name: "CB2", url: "https://www.cb2.com", description: "Bold modern design" },
  { name: "Parachute", url: "https://parachutehome.com", description: "Premium bedding & bath" },
  { name: "The Citizenry", url: "https://www.the-citizenry.com", description: "Artisan handmade" },
  { name: "Hawkins New York", url: "https://www.hawkinsnewyork.com", description: "Modern tabletop" },
  { name: "Vitruvi", url: "https://vitruvi.com", description: "Design-forward wellness" },
  { name: "P.F. Candle Co.", url: "https://pfcandleco.com", description: "California candles" },
  { name: "Le Labo", url: "https://www.lelabofragrances.com", description: "Luxury home fragrance" },
  { name: "Aesop", url: "https://www.aesop.com", description: "Considered home care" },
  { name: "Modernica", url: "https://modernica.net", description: "Case Study ceramics" },
  { name: "West Elm", url: "https://www.westelm.com", description: "Modern home design" },
];
