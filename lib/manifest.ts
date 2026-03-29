export interface Product {
  id: string;
  title: string;
  price: number;
  category: "The Morning Ritual" | "The Modern Home";
  editorNote: string;
  affiliateLink: string;
  imageCategory: string;
}

export const ProductManifest: Product[] = [
  // The Morning Ritual (Nutrition)
  {
    id: "m-1",
    title: "Grass-Fed Collagen Peptides",
    price: 54.00,
    category: "The Morning Ritual",
    editorNote: "A foundation for your daily ritual; the invisible glue of a high-performance morning.",
    affiliateLink: "#",
    imageCategory: "wellness"
  },
  {
    id: "m-2",
    title: "Liposomal Vitamin C",
    price: 42.00,
    category: "The Morning Ritual",
    editorNote: "Superior delivery for the discerning entrepreneur. Biohacking, simplified.",
    affiliateLink: "#",
    imageCategory: "supplement"
  },
  {
    id: "m-3",
    title: "Ceremonial Grade Matcha",
    price: 38.00,
    category: "The Morning Ritual",
    editorNote: "Stone-ground in Uji, Japan. A meditative transition from sleep to focus.",
    affiliateLink: "#",
    imageCategory: "tea"
  },
  {
    id: "m-4",
    title: "Plant-Based Nootropic Stack",
    price: 89.00,
    category: "The Morning Ritual",
    editorNote: "Cognitive clarity without the crash. Orchestrated for deep work.",
    affiliateLink: "#",
    imageCategory: "nootropic"
  },
  {
    id: "m-5",
    title: "Magnesium Glycinate Night Caps",
    price: 32.00,
    category: "The Morning Ritual",
    editorNote: "The essential wind-down. Because restorative sleep is a competitive advantage.",
    affiliateLink: "#",
    imageCategory: "sleep"
  },
  {
    id: "m-6",
    title: "Ancestral Beef Liver Capsules",
    price: 44.00,
    category: "The Morning Ritual",
    editorNote: "Nature's multi-vitamin. Curated for those who demand raw nutrient density.",
    affiliateLink: "#",
    imageCategory: "organ-meat"
  },
  {
    id: "m-7",
    title: "Hydration Electrolyte Salts",
    price: 45.00,
    category: "The Morning Ritual",
    editorNote: "Zero-sugar hydration for optimal cellular conductance.",
    affiliateLink: "#",
    imageCategory: "hydration"
  },
  {
    id: "m-8",
    title: "Probiotic Daily Ritual",
    price: 49.00,
    category: "The Morning Ritual",
    editorNote: "A synbiotic relationship for your microbiome. The interior architect of health.",
    affiliateLink: "#",
    imageCategory: "probiotic"
  },
  {
    id: "m-9",
    title: "Marine Collagen Blend",
    price: 58.00,
    category: "The Morning Ritual",
    editorNote: "Sustainably sourced. The architectural support for skin and spirit.",
    affiliateLink: "#",
    imageCategory: "skin"
  },
  {
    id: "m-10",
    title: "Lion's Mane Extract",
    price: 35.00,
    category: "The Morning Ritual",
    editorNote: "The intellectual fuel for your next venture. Sharpen your focus.",
    affiliateLink: "#",
    imageCategory: "mushroom"
  },

  // The Modern Home (Wares)
  {
    id: "h-11",
    title: "Matte Ceramic Pour-Over",
    price: 64.00,
    category: "The Modern Home",
    editorNote: "The architectural vessel for your morning brew. Minimalism meets utility.",
    affiliateLink: "#",
    imageCategory: "coffee"
  },
  {
    id: "h-12",
    title: "Ribbed Amber Glass Tumbler",
    price: 58.00,
    category: "The Modern Home",
    editorNote: "Mid-century lines that catch the light. Elevate the simple act of hydration.",
    affiliateLink: "#",
    imageCategory: "glassware"
  },
  {
    id: "h-13",
    title: "Solid Walnut Serving Tray",
    price: 89.00,
    category: "The Modern Home",
    editorNote: "Organic textures that ground your workspace. A piece of the forest, indoors.",
    affiliateLink: "#",
    imageCategory: "wood"
  },
  {
    id: "h-14",
    title: "Brass & Marble Oil Diffuser",
    price: 119.00,
    category: "The Modern Home",
    editorNote: "An olfactory sculpture. Define the atmosphere of your environment.",
    affiliateLink: "#",
    imageCategory: "scent"
  },
  {
    id: "h-15",
    title: "Linen Waffle-Weave Linens",
    price: 42.00,
    category: "The Modern Home",
    editorNote: "European flax, woven for texture. Softness with an editorial edge.",
    affiliateLink: "#",
    imageCategory: "textiles"
  },
  {
    id: "h-16",
    title: "Architectural Ceramic Fruit Bowl",
    price: 78.00,
    category: "The Modern Home",
    editorNote: "A pedestal for nature's bounty. Functional art for the kitchen island.",
    affiliateLink: "#",
    imageCategory: "decor"
  },
  {
    id: "h-17",
    title: "Hand-Blown Glass Carafe",
    price: 68.00,
    category: "The Modern Home",
    editorNote: "Fluid geometry in glass. For the boardroom or the bedside.",
    affiliateLink: "#",
    imageCategory: "carafe"
  },
  {
    id: "h-18",
    title: "Sustainable Cork Yoga Mat",
    price: 129.00,
    category: "The Modern Home",
    editorNote: "Non-toxic antimicrobial grip. The foundation of your movement practice.",
    affiliateLink: "#",
    imageCategory: "movement"
  },
  {
    id: "h-19",
    title: "Brushed Gold Wellness Journal",
    price: 38.00,
    category: "The Modern Home",
    editorNote: "The physical repository for your thoughts and progress. Linen-bound luxury.",
    affiliateLink: "#",
    imageCategory: "stationery"
  },
  {
    id: "h-20",
    title: "Sandstone Mortar and Pestle",
    price: 54.00,
    category: "The Modern Home",
    editorNote: "Ancient utility for modern rituals. Grinding intention into your day.",
    affiliateLink: "#",
    imageCategory: "kitchen"
  }
];
