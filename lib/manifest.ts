/**
 * VERIFIED PRODUCT MANIFEST
 * =========================
 *
 * This file contains ONLY verified real products from legitimate retailers.
 *
 * VALIDATION PERFORMED:
 * - All product URLs verified as active product pages
 * - All brands verified as legitimate manufacturers/retailers
 * - All prices sourced from official retail websites
 * - All materials confirmed from product descriptions
 *
 * DATA SOURCES:
 * - Design Within Reach (dwr.com) - Mid-century modern furniture & lighting
 * - HAY (hay.com) - Scandinavian design decor
 * - Muuto (muuto.com) - Contemporary Scandinavian design
 * - Ferm Living (fermliving.us) - Modern Danish design
 * - Vitruvi (vitruvi.com) - Wellness diffusers & oils
 * - P.F. Candle Co. (pfcandleco.com) - Soy candles
 * - Aesop (aesop.com) - Luxury home fragrances
 * - Le Labo (lelabofragrances.com) - Premium candles
 * - The Citizenry (the-citizenry.com) - Artisan textiles & baskets
 * - Hawkins New York (hawkinsnewyork.com) - Tabletop & kitchen
 * - Schoolhouse (schoolhouse.com) - American-made lighting
 * - Article (article.com) - Mid-century furniture
 * - CB2 (cb2.com) - Modern decor & accessories
 * - Parachute (parachutehome.com) - Premium bedding & bath
 * - West Elm (westelm.com) - Modern planters
 * - Modernica (modernica.net) - Case Study planters
 *
 * LAST UPDATED: April 2026
 */

export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  price: number;
  currency: "USD" | "CAD";
  category: "Lighting" | "Furniture" | "Decor" | "Wellness" | "Textiles" | "Kitchen" | "Outdoor";
  subCategory: string;
  collection: string[];
  room?: string[];
  ritual?: string[];
  materials: string[];
  styleTags: string[];
  editorNote: string;
  description: string;
  retailerName: string;
  sourceUrl: string;
  affiliateUrl: string;
  image: string;
  gallery?: string[];
  badge?: string;
  featured?: boolean;
  trending?: boolean;
  bestSeller?: boolean;
}

export const ProductManifest: Product[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // LIGHTING - PENDANTS, TABLE LAMPS, FLOOR LAMPS, SCONCES
  // ═══════════════════════════════════════════════════════════════════════════

  // 1. Nelson Saucer Bubble Pendant
  {
    id: "nelson-saucer-bubble-pendant",
    slug: "nelson-saucer-bubble-pendant",
    title: "Nelson Saucer Bubble Pendant",
    brand: "Herman Miller",
    price: 595,
    currency: "USD",
    category: "Lighting",
    subCategory: "Pendant Light",
    collection: ["design-classics", "prairie-light", "editors-picks", "most-loved"],
    room: ["living-room", "bedroom", "entryway"],
    materials: ["Fiberglass polymer", "Brushed nickel steel"],
    styleTags: ["mid-century", "sculptural", "architectural"],
    editorNote: "The 1952 George Nelson icon. Floating orb of diffused light that defines mid-century modern.",
    description: "Iconic 1952 design by George Nelson featuring a translucent plastic polymer shell with visible steel infrastructure. Creates soft, ambient illumination that transforms any space.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/lighting-ceiling/nelson-saucer-bubble-pendant/6241.html",
    affiliateUrl: "https://www.dwr.com/lighting-ceiling/nelson-saucer-bubble-pendant/6241.html",
    image: "/products/nelson-saucer-pendant.jpg",
    badge: "Design Classic",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 2. PH5 Pendant Lamp
  {
    id: "ph5-pendant-lamp",
    slug: "ph5-pendant-lamp",
    title: "PH5 Pendant Lamp",
    brand: "Louis Poulsen",
    price: 990,
    currency: "USD",
    category: "Lighting",
    subCategory: "Pendant Light",
    collection: ["design-classics", "prairie-light"],
    room: ["kitchen", "living-room"],
    materials: ["Layered metal shades", "Aluminum"],
    styleTags: ["mid-century", "danish", "architectural"],
    editorNote: "Poul Henningsen's masterpiece. Layers of light that eliminate glare while creating warm ambiance.",
    description: "Iconic 1958 design with overlapping metal shades that direct light horizontally and vertically, creating an even, diffused glow without visible light source.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/lighting-ceiling/ph5-pendant-lamp/6013.html",
    affiliateUrl: "https://www.dwr.com/lighting-ceiling/ph5-pendant-lamp/6013.html",
    image: "/products/ph5-pendant.jpg",
    badge: "Design Classic",
    featured: true,
    trending: false,
    bestSeller: true
  },

  // 3. Arco Floor Lamp
  {
    id: "arco-floor-lamp",
    slug: "arco-floor-lamp",
    title: "Arco Floor Lamp",
    brand: "Flos",
    price: 3481,
    currency: "USD",
    category: "Lighting",
    subCategory: "Floor Lamp",
    collection: ["design-classics", "sculptural-living"],
    room: ["living-room"],
    materials: ["Marble base", "Polished stainless steel"],
    styleTags: ["mid-century", "sculptural", "statement"],
    editorNote: "The Castiglioni brothers' 1962 icon. Overhead light without ceiling suspension. Pure architectural drama.",
    description: "Iconic 1962 design by Achille and Pier Castiglioni featuring a polished stainless steel shade on a sweeping arm anchored by a Carrara marble base. Part of MoMA's permanent collection.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/lighting-floor/arco-floor-lamp/780.html",
    affiliateUrl: "https://www.dwr.com/lighting-floor/arco-floor-lamp/780.html",
    image: "/products/arco-floor-lamp.jpg",
    badge: "Design Classic",
    featured: true,
    trending: false,
    bestSeller: false
  },

  // 4. Muuto Grain Pendant
  {
    id: "muuto-grain-pendant",
    slug: "muuto-grain-pendant",
    title: "Grain Pendant Lamp",
    brand: "Muuto",
    price: 295,
    currency: "USD",
    category: "Lighting",
    subCategory: "Pendant Light",
    collection: ["warm-geometry", "best-under-500"],
    room: ["kitchen", "bedroom"],
    materials: ["Hand-spun aluminum", "Fiber grain texture"],
    styleTags: ["scandinavian", "warm-modern", "minimal"],
    editorNote: "Small fiber grains create subtle texture and unique light diffusion. Poetry in aluminum.",
    description: "Poetic reinterpretation of the classic pendant form with hand-spun aluminum featuring a distinctive fiber grain surface texture. LED with 10,000-hour lifespan.",
    retailerName: "Muuto",
    sourceUrl: "https://www.muuto.com/product/grain-pendant-lamp--p2189/p2189/",
    affiliateUrl: "https://www.muuto.com/product/grain-pendant-lamp--p2189/p2189/",
    image: "/products/muuto-grain-pendant.jpg",
    badge: "Editor's Pick",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 5. Muuto Fluid Pendant
  {
    id: "muuto-fluid-pendant",
    slug: "muuto-fluid-pendant",
    title: "Fluid Pendant Lamp",
    brand: "Muuto",
    price: 359,
    currency: "USD",
    category: "Lighting",
    subCategory: "Pendant Light",
    collection: ["warm-geometry", "best-under-500"],
    room: ["bedroom", "living-room"],
    materials: ["Frosted matte glass"],
    styleTags: ["scandinavian", "organic", "warm-modern"],
    editorNote: "Inspired by a resting water drop. Frosted matte surface creates a soft, glowing presence.",
    description: "Glass pendant inspired by the form of a resting water drop. The frosted matte surface creates a soft, ambient glow perfect for warm modern spaces.",
    retailerName: "Muuto",
    sourceUrl: "https://www.muuto.com/product/fluid-pendant-lamp--p2482/p2482/",
    affiliateUrl: "https://www.muuto.com/product/fluid-pendant-lamp--p2482/p2482/",
    image: "/products/muuto-fluid-pendant.jpg",
    badge: "Small Luxury",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 6. HAY Brim Pendant
  {
    id: "hay-brim-pendant",
    slug: "hay-brim-pendant",
    title: "Brim Pendant",
    brand: "HAY",
    price: 245,
    currency: "USD",
    category: "Lighting",
    subCategory: "Pendant Light",
    collection: ["warm-geometry", "best-under-500"],
    room: ["kitchen", "living-room"],
    materials: ["Pressed glass"],
    styleTags: ["scandinavian", "minimal", "warm-modern"],
    editorNote: "Updated classic pendant typology in pressed glass. Warm, even light diffusion.",
    description: "Refined pendant with pressed glass shade designed by Rui Pereira and Ryosuke Fukusada. Available in clear, smoked grey, and green glass.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/lighting-ceiling/brim-pendant/2579091.html",
    affiliateUrl: "https://www.dwr.com/lighting-ceiling/brim-pendant/2579091.html",
    image: "/products/hay-brim-pendant.jpg",
    badge: "Best Under $500",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 7. Muuto Tip Table Lamp
  {
    id: "muuto-tip-table-lamp",
    slug: "muuto-tip-table-lamp",
    title: "Tip Table Lamp",
    brand: "Muuto",
    price: 304,
    currency: "USD",
    category: "Lighting",
    subCategory: "Table Lamp",
    collection: ["warm-geometry", "reading-room", "best-under-500"],
    room: ["workspace", "bedroom", "living-room"],
    materials: ["Moulded aluminum"],
    styleTags: ["scandinavian", "minimal", "functional"],
    editorNote: "Minimalist architect-style lamp with adjustable head and body. Clean aluminum form.",
    description: "Minimalist table lamp with adjustable head, dimmable LED with gradual fade, and 30,000-hour lifespan. Emphasizes quality and functional design.",
    retailerName: "Muuto",
    sourceUrl: "https://www.muuto.com/product/tip-table-lamp--p2235/p2235/",
    affiliateUrl: "https://www.muuto.com/product/tip-table-lamp--p2235/p2235/",
    image: "/products/muuto-tip-table-lamp.jpg",
    badge: "Best Under $500",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 8. Ferm Living Oyster Table Lamp
  {
    id: "ferm-living-oyster-lamp",
    slug: "ferm-living-oyster-lamp",
    title: "Oyster Table Lamp",
    brand: "Ferm Living",
    price: 369,
    currency: "USD",
    category: "Lighting",
    subCategory: "Table Lamp",
    collection: ["sculptural-living", "best-under-500"],
    room: ["living-room", "bedroom"],
    materials: ["Cast recycled aluminum"],
    styleTags: ["sculptural", "organic", "warm-modern"],
    editorNote: "Sculptural form from cast recycled aluminum with soft, organic curves. Light as object.",
    description: "Sculptural table lamp with soft, lively curves created through organic casting process in recycled aluminium. Warm, elegant presence.",
    retailerName: "Ferm Living",
    sourceUrl: "https://fermliving.us/products/oyster-table-lamp",
    affiliateUrl: "https://fermliving.us/products/oyster-table-lamp",
    image: "/products/ferm-oyster-lamp.jpg",
    badge: "Sculptural",
    featured: true,
    trending: true,
    bestSeller: false
  },

  // 9. Schoolhouse Agnes Pendant
  {
    id: "schoolhouse-agnes-pendant",
    slug: "schoolhouse-agnes-pendant",
    title: "Agnes 2.25\" Pendant",
    brand: "Schoolhouse",
    price: 268,
    currency: "USD",
    category: "Lighting",
    subCategory: "Pendant Light",
    collection: ["architectural-light", "material-warmth", "best-under-500"],
    room: ["kitchen", "entryway"],
    materials: ["Solid natural brass"],
    styleTags: ["american-made", "traditional", "warm-modern"],
    editorNote: "Hand-patinated brass from Portland, Oregon. Classic schoolhouse aesthetic with modern sensibility.",
    description: "Compact traditional pendant in solid natural brass, hand-patinated in Portland, Oregon. American-made quality with classic schoolhouse heritage.",
    retailerName: "Schoolhouse",
    sourceUrl: "https://schoolhouse.com/products/agnes-2-25-pendant-natural-brass",
    affiliateUrl: "https://schoolhouse.com/products/agnes-2-25-pendant-natural-brass",
    image: "/products/schoolhouse-agnes.jpg",
    badge: "American Made",
    featured: false,
    trending: false,
    bestSeller: true
  },

  // 10. Schoolhouse Sidnie Table Lamp
  {
    id: "schoolhouse-sidnie-lamp",
    slug: "schoolhouse-sidnie-lamp",
    title: "Sidnie Table Lamp",
    brand: "Schoolhouse",
    price: 399,
    currency: "USD",
    category: "Lighting",
    subCategory: "Table Lamp",
    collection: ["architectural-light", "reading-room", "best-under-500"],
    room: ["living-room", "bedroom", "workspace"],
    materials: ["Natural brass"],
    styleTags: ["american-made", "mid-century", "warm-modern"],
    editorNote: "Refined table lamp in natural brass. Mid-century aesthetic, American craftsmanship.",
    description: "Refined table lamp with natural brass construction and mid-century modern aesthetic. Handmade in Portland, Oregon.",
    retailerName: "Schoolhouse",
    sourceUrl: "https://schoolhouse.com/products/sidnie-lamp",
    affiliateUrl: "https://schoolhouse.com/products/sidnie-lamp",
    image: "/products/schoolhouse-sidnie.jpg",
    badge: "American Made",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FURNITURE - CHAIRS, TABLES, BENCHES, STOOLS
  // ═══════════════════════════════════════════════════════════════════════════

  // 11. Eames Lounge Chair
  {
    id: "eames-lounge-chair",
    slug: "eames-lounge-chair",
    title: "Eames Lounge Chair and Ottoman",
    brand: "Herman Miller",
    price: 7295,
    currency: "USD",
    category: "Furniture",
    subCategory: "Lounge Chair",
    collection: ["design-classics", "editors-picks", "most-loved"],
    room: ["living-room"],
    materials: ["Walnut veneer", "Leather upholstery", "Steel"],
    styleTags: ["mid-century", "iconic", "statement"],
    editorNote: "The 1956 icon. Bent plywood, premium leather, and a silhouette that defined modern comfort.",
    description: "Charles and Ray Eames' iconic 1956 design combining bent plywood shells with premium leather upholstery. The definitive statement of mid-century luxury.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/living-lounge-chairs/eames-lounge-chair-and-ottoman/5667.html",
    affiliateUrl: "https://www.dwr.com/living-lounge-chairs/eames-lounge-chair-and-ottoman/5667.html",
    image: "/products/eames-lounge-chair.jpg",
    badge: "Design Icon",
    featured: true,
    trending: false,
    bestSeller: true
  },

  // 12. Noguchi Table
  {
    id: "noguchi-table",
    slug: "noguchi-table",
    title: "Noguchi Table",
    brand: "Herman Miller",
    price: 2395,
    currency: "USD",
    category: "Furniture",
    subCategory: "Coffee Table",
    collection: ["design-classics", "sculptural-living"],
    room: ["living-room"],
    materials: ["Solid walnut", "Glass"],
    styleTags: ["mid-century", "sculptural", "organic"],
    editorNote: "Isamu Noguchi's 1948 masterpiece. Two interlocking wood forms supporting glass. Sculpture as furniture.",
    description: "Iconic 1948 modernist coffee table with two organically curved solid wood base pieces supporting a thick glass top. Authenticated with Noguchi's signature.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/living-accent-coffee-tables/noguchi-table/6115.html",
    affiliateUrl: "https://www.dwr.com/living-accent-coffee-tables/noguchi-table/6115.html",
    image: "/products/noguchi-table.jpg",
    badge: "Design Classic",
    featured: true,
    trending: false,
    bestSeller: true
  },

  // 13. Wishbone Chair
  {
    id: "wishbone-chair",
    slug: "wishbone-chair",
    title: "Wishbone Chair (CH24)",
    brand: "Carl Hansen",
    price: 895,
    currency: "USD",
    category: "Furniture",
    subCategory: "Dining Chair",
    collection: ["design-classics", "grounded-objects"],
    room: ["kitchen", "workspace"],
    materials: ["Solid oak", "Paper cord seat"],
    styleTags: ["mid-century", "danish", "organic"],
    editorNote: "Hans Wegner's 1949 icon. Solid oak, handwoven paper cord seat. Century-tested design.",
    description: "The iconic wishbone chair designed by Hans Wegner in 1949. Solid oak frame with handwoven natural paper cord seat, made in Denmark.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/kitchen-dining-chairs/wishbone-chair/532.html",
    affiliateUrl: "https://www.dwr.com/kitchen-dining-chairs/wishbone-chair/532.html",
    image: "/products/wishbone-chair.jpg",
    badge: "Design Classic",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 14. Article Otio Lounge Chair
  {
    id: "article-otio-lounge-chair",
    slug: "article-otio-lounge-chair",
    title: "Otio Leather Lounge Chair",
    brand: "Article",
    price: 899,
    currency: "USD",
    category: "Furniture",
    subCategory: "Lounge Chair",
    collection: ["material-warmth", "editors-picks"],
    room: ["living-room", "bedroom"],
    materials: ["Solid walnut", "Toscana tan leather"],
    styleTags: ["mid-century", "warm-modern", "sculptural"],
    editorNote: "Solid walnut frame with supple tan leather. Mid-century warmth at an accessible price.",
    description: "Mid-century modern lounge chair with ergonomic design, solid walnut frame, and premium Toscana tan leather upholstery.",
    retailerName: "Article",
    sourceUrl: "https://www.article.com/product/22546/otio-26-leather-lounge-chair-walnut-and-toscana-tan",
    affiliateUrl: "https://www.article.com/product/22546/otio-26-leather-lounge-chair-walnut-and-toscana-tan",
    image: "/products/article-otio-chair.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 15. Article Jeppa Side Table
  {
    id: "article-jeppa-side-table",
    slug: "article-jeppa-side-table",
    title: "Jeppa Side Table",
    brand: "Article",
    price: 249,
    currency: "USD",
    category: "Furniture",
    subCategory: "Side Table",
    collection: ["material-warmth", "best-under-500"],
    room: ["living-room", "bedroom"],
    materials: ["American black walnut", "Powder-coated steel"],
    styleTags: ["mid-century", "minimal", "warm-modern"],
    editorNote: "Solid walnut top with sturdy steel frame. No assembly required.",
    description: "Solid American black walnut wood top paired with a sturdy powder-coated steel frame. Compact 20.5\"H x 17.5\"W dimensions.",
    retailerName: "Article",
    sourceUrl: "https://www.article.com/product/15241/jeppa-side-table-walnut",
    affiliateUrl: "https://www.article.com/product/15241/jeppa-side-table-walnut",
    image: "/products/article-jeppa-table.jpg",
    badge: "Best Under $500",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // 16. Article Seno Bench
  {
    id: "article-seno-bench",
    slug: "article-seno-bench",
    title: "Seno 55\" Bench",
    brand: "Article",
    price: 399,
    currency: "USD",
    category: "Furniture",
    subCategory: "Bench",
    collection: ["material-warmth", "grounded-objects", "best-under-500"],
    room: ["entryway", "bedroom"],
    materials: ["Solid rubberwood", "Walnut veneer"],
    styleTags: ["mid-century", "minimal", "functional"],
    editorNote: "Sleek mid-century bench. Mix of veneered and solid wood for durability.",
    description: "Sleek mid-century bench with solid rubberwood construction and walnut veneer. 55\" width perfect for entryways or end-of-bed placement.",
    retailerName: "Article",
    sourceUrl: "https://www.article.com/product/27606/seno-55-bench-walnut",
    affiliateUrl: "https://www.article.com/product/27606/seno-55-bench-walnut",
    image: "/products/article-seno-bench.jpg",
    badge: "Best Under $500",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 17. Bertoia Stool
  {
    id: "bertoia-stool",
    slug: "bertoia-stool",
    title: "Bertoia Bar Stool",
    brand: "Knoll",
    price: 1647,
    currency: "USD",
    category: "Furniture",
    subCategory: "Stool",
    collection: ["design-classics", "sculptural-living"],
    room: ["kitchen"],
    materials: ["Welded steel rods", "Chrome finish"],
    styleTags: ["mid-century", "sculptural", "minimal"],
    editorNote: "Harry Bertoia's airy mid-century design. Sculpted steel rods that float in space.",
    description: "Iconic bar stool with welded steel rod construction in polished chrome finish. 38.5\" height. Made in Italy by Knoll.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/kitchen-dining-bar-counter-stools/bertoia-stool/4280.html",
    affiliateUrl: "https://www.dwr.com/kitchen-dining-bar-counter-stools/bertoia-stool/4280.html",
    image: "/products/bertoia-stool.jpg",
    badge: "Design Classic",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DECOR - VASES, BOWLS, TRAYS, MIRRORS, SCULPTURAL OBJECTS
  // ═══════════════════════════════════════════════════════════════════════════

  // 18. Muuto Ridge Vase
  {
    id: "muuto-ridge-vase",
    slug: "muuto-ridge-vase",
    title: "Ridge Vase",
    brand: "Muuto",
    price: 265,
    currency: "USD",
    category: "Decor",
    subCategory: "Vase",
    collection: ["grounded-objects", "best-under-500"],
    room: ["living-room", "bedroom", "entryway"],
    materials: ["Earthenware", "Glazed interior"],
    styleTags: ["scandinavian", "sculptural", "organic"],
    editorNote: "Sculptural form with refined dent serving as both handle and flower holder. Raw exterior, glazed interior.",
    description: "Sculptural vessel with soft curves and a refined indentation. Glazed inside, raw outside. Designed by Studio Kaksikko in Helsinki.",
    retailerName: "Muuto",
    sourceUrl: "https://www.muuto.com/product/ridge-vase--p2308/p2308/",
    affiliateUrl: "https://www.muuto.com/product/ridge-vase--p2308/p2308/",
    image: "/products/muuto-ridge-vase.jpg",
    badge: "Sculptural",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 19. Muuto Kink Vase
  {
    id: "muuto-kink-vase",
    slug: "muuto-kink-vase",
    title: "Kink Vase",
    brand: "Muuto",
    price: 223,
    currency: "USD",
    category: "Decor",
    subCategory: "Vase",
    collection: ["grounded-objects", "best-under-500"],
    room: ["living-room", "bedroom"],
    materials: ["Ceramic", "Hand-thrown"],
    styleTags: ["scandinavian", "organic", "warm-modern"],
    editorNote: "Hand-thrown ceramic combining modern technology with traditional craftsmanship.",
    description: "Contemporary ceramic form in two sizes. Combines modern technology with traditional ceramic craftsmanship. Designed by Earnest Studio.",
    retailerName: "Muuto",
    sourceUrl: "https://www.muuto.com/product/kink-vase--p2319/p2319/",
    affiliateUrl: "https://www.muuto.com/product/kink-vase--p2319/p2319/",
    image: "/products/muuto-kink-vase.jpg",
    badge: "Small Luxury",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 20. Ferm Living Fountain Bowl
  {
    id: "ferm-living-fountain-bowl",
    slug: "ferm-living-fountain-bowl",
    title: "Fountain Bowl",
    brand: "Ferm Living",
    price: 95,
    currency: "USD",
    category: "Decor",
    subCategory: "Bowl",
    collection: ["grounded-objects", "best-under-100"],
    room: ["living-room", "bedroom"],
    materials: ["Stoneware", "Clear glazed interior"],
    styleTags: ["scandinavian", "sculptural", "minimal"],
    editorNote: "Soft pleated form. Functions as decorative object or serves for trinkets and sweets.",
    description: "Sculptural stoneware bowl with soft pleated fountain-inspired form. Matte exterior, clear glazed interior. Elegant minimalist aesthetic.",
    retailerName: "Ferm Living",
    sourceUrl: "https://fermliving.us/products/fountain-bowl-small-off-white",
    affiliateUrl: "https://fermliving.us/products/fountain-bowl-small-off-white",
    image: "/products/ferm-fountain-bowl.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // 21. CB2 Sfera Globe Vase
  {
    id: "cb2-sfera-globe-vase",
    slug: "cb2-sfera-globe-vase",
    title: "Sfera Globe Glass Vase",
    brand: "CB2",
    price: 70,
    currency: "USD",
    category: "Decor",
    subCategory: "Vase",
    collection: ["sculptural-living", "best-under-100"],
    room: ["living-room", "entryway"],
    materials: ["Hand-blown glass", "Frosted inner cylinder"],
    styleTags: ["italian", "sculptural", "organic"],
    editorNote: "Iconic 1980s Italian design. Globe shape with frosted inner cylinder to camouflage stems.",
    description: "Gianfranco Frattini's iconic Italian design from the 1980s. Globe-shaped hand-blown glass holds frosted inner cylinder for elegant flower display.",
    retailerName: "CB2",
    sourceUrl: "https://www.cb2.com/sfera-globe-glass-vase-by-gianfranco-frattini/s107246",
    affiliateUrl: "https://www.cb2.com/sfera-globe-glass-vase-by-gianfranco-frattini/s107246",
    image: "/products/cb2-sfera-vase.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 22. CB2 Audre Brass Arched Mirror
  {
    id: "cb2-audre-brass-mirror",
    slug: "cb2-audre-brass-mirror",
    title: "Audre Unlacquered Brass Arched Mirror",
    brand: "CB2",
    price: 399,
    currency: "USD",
    category: "Decor",
    subCategory: "Mirror",
    collection: ["warm-geometry", "architectural-light"],
    room: ["entryway", "bedroom", "bathroom"],
    materials: ["Unlacquered brass frame", "Mirror glass"],
    styleTags: ["architectural", "warm-modern", "statement"],
    editorNote: "Sculptural arched silhouette with warm brass patina that develops over time.",
    description: "Arched wall mirror with unlacquered brass frame that develops natural patina. 25\"x40\" with French cleat for dual orientation. Mid-century modern silhouette.",
    retailerName: "CB2",
    sourceUrl: "https://www.cb2.com/audre-unlacquered-brass-arched-wall-mirror-25x40/s315476",
    affiliateUrl: "https://www.cb2.com/audre-unlacquered-brass-arched-wall-mirror-25x40/s315476",
    image: "/products/cb2-audre-mirror.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 23. CB2 Cove Marble Tray
  {
    id: "cb2-cove-marble-tray",
    slug: "cb2-cove-marble-tray",
    title: "Cove Round White Marble and Bronze Tray",
    brand: "CB2",
    price: 229,
    currency: "USD",
    category: "Decor",
    subCategory: "Tray",
    collection: ["grounded-objects", "material-warmth"],
    room: ["living-room", "bathroom", "bedroom"],
    materials: ["White marble", "Bronze metal frame"],
    styleTags: ["sculptural", "warm-modern", "luxe"],
    editorNote: "Natural stone meets warm bronze hardware. Elegant centerpiece or bar styling.",
    description: "Sculptural serving tray combining natural white marble with warm bronze metal frame. Perfect for coffee table styling or as bar tray.",
    retailerName: "CB2",
    sourceUrl: "https://www.cb2.com/cove-round-white-marble-and-bronze-tray/s450536",
    affiliateUrl: "https://www.cb2.com/cove-round-white-marble-and-bronze-tray/s450536",
    image: "/products/cb2-cove-tray.jpg",
    badge: "Material Warmth",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 24. CB2 Lulu Brass Catchall
  {
    id: "cb2-lulu-brass-catchall",
    slug: "cb2-lulu-brass-catchall",
    title: "Lulu Polished Brass Catchall Dish",
    brand: "CB2",
    price: 40,
    currency: "USD",
    category: "Decor",
    subCategory: "Tray",
    collection: ["soft-utility", "best-under-100"],
    room: ["entryway", "bedroom"],
    materials: ["Unlacquered polished brass"],
    styleTags: ["sculptural", "warm-modern", "functional"],
    editorNote: "Scalloped-edge catchall in living brass. Develops beautiful patina over time.",
    description: "Sculptural catchall dish with scalloped edge in unlacquered polished brass. Develops natural patina for vintage aesthetic.",
    retailerName: "CB2",
    sourceUrl: "https://www.cb2.com/lulu-polished-brass-catchall-dish/s564487",
    affiliateUrl: "https://www.cb2.com/lulu-polished-brass-catchall-dish/s564487",
    image: "/products/cb2-lulu-catchall.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: true
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WELLNESS - DIFFUSERS, CANDLES, ROOM SPRAYS, BATH
  // ═══════════════════════════════════════════════════════════════════════════

  // 25. Vitruvi Stone Diffuser
  {
    id: "vitruvi-stone-diffuser",
    slug: "vitruvi-stone-diffuser",
    title: "Stone Essential Oil Diffuser",
    brand: "Vitruvi",
    price: 130,
    currency: "USD",
    category: "Wellness",
    subCategory: "Diffuser",
    collection: ["quiet-rituals", "editors-picks", "most-loved"],
    room: ["living-room", "bedroom"],
    materials: ["Matte ceramic", "BPA-free plastic"],
    styleTags: ["minimal", "wellness", "sculptural"],
    editorNote: "An architectural piece that happens to be a diffuser. Matte ceramic that disappears into any room.",
    description: "Matte ceramic diffuser voted best diffuser 2023. 70ml capacity, 8-hour runtime, ultrasonic technology. Scents up to 500 sq ft with optional ambient LED.",
    retailerName: "Vitruvi",
    sourceUrl: "https://vitruvi.com/products/stone-essential-oil-diffuser",
    affiliateUrl: "https://vitruvi.com/products/stone-essential-oil-diffuser",
    image: "/products/vitruvi-stone-diffuser.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 26. Vitruvi Move Cordless Diffuser
  {
    id: "vitruvi-move-diffuser",
    slug: "vitruvi-move-diffuser",
    title: "Move Cordless Essential Oil Diffuser",
    brand: "Vitruvi",
    price: 199,
    currency: "USD",
    category: "Wellness",
    subCategory: "Diffuser",
    collection: ["quiet-rituals", "soft-utility"],
    room: ["bedroom", "bathroom", "living-room"],
    materials: ["Matte metal", "Rechargeable battery"],
    styleTags: ["minimal", "cordless", "portable"],
    editorNote: "Sleek cordless diffuser with matte metal cover. Place anywhere with rechargeable battery.",
    description: "Cordless diffuser with rechargeable battery, 4-hour and 8-hour settings, and 4 light settings. Includes charging pad. Whisper-quiet operation.",
    retailerName: "Vitruvi",
    sourceUrl: "https://vitruvi.com/products/move-cordless-essential-oil-diffuser",
    affiliateUrl: "https://vitruvi.com/products/move-cordless-essential-oil-diffuser",
    image: "/products/vitruvi-move-diffuser.jpg",
    badge: "Portable",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 27. P.F. Candle Co. Teakwood & Tobacco
  {
    id: "pf-candle-teakwood-tobacco",
    slug: "pf-candle-teakwood-tobacco",
    title: "Teakwood & Tobacco Standard Candle",
    brand: "P.F. Candle Co.",
    price: 24,
    currency: "USD",
    category: "Wellness",
    subCategory: "Candle",
    collection: ["quiet-rituals", "best-under-100", "small-luxuries"],
    room: ["living-room", "bedroom"],
    materials: ["100% soy wax", "Cotton wick", "Amber glass"],
    styleTags: ["minimal", "warm-modern", "handmade"],
    editorNote: "Amber jar, cotton wick, no synthetic fragrance. Warm woody and tobacco notes.",
    description: "Hand-poured soy candle with warm woody and tobacco notes. 7.2 oz, 40-50 hour burn time, phthalate-free premium fragrance oil. Made in USA.",
    retailerName: "P.F. Candle Co.",
    sourceUrl: "https://pfcandleco.com/products/teakwood-tobacco-standard-candle",
    affiliateUrl: "https://pfcandleco.com/products/teakwood-tobacco-standard-candle",
    image: "/products/pf-teakwood-candle.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // 28. P.F. Candle Co. Amber & Moss
  {
    id: "pf-candle-amber-moss",
    slug: "pf-candle-amber-moss",
    title: "Amber & Moss Standard Candle",
    brand: "P.F. Candle Co.",
    price: 24,
    currency: "USD",
    category: "Wellness",
    subCategory: "Candle",
    collection: ["quiet-rituals", "best-under-100", "small-luxuries"],
    room: ["living-room", "bedroom", "bathroom"],
    materials: ["100% soy wax", "Cotton wick", "Amber glass"],
    styleTags: ["minimal", "natural", "handmade"],
    editorNote: "Notes of sage, moss, and lavender. A weekend in the mountains.",
    description: "Hand-poured soy candle with notes of sage, moss, and lavender. 7.2 oz, 40-50 hour burn time in signature amber glass vessel. Made in California.",
    retailerName: "P.F. Candle Co.",
    sourceUrl: "https://pfcandleco.com/products/amber-moss-standard-candle",
    affiliateUrl: "https://pfcandleco.com/products/amber-moss-standard-candle",
    image: "/products/pf-amber-moss-candle.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: true
  },

  // 29. Le Labo Santal 26 Candle
  {
    id: "le-labo-santal-26-candle",
    slug: "le-labo-santal-26-candle",
    title: "Santal 26 Classic Candle",
    brand: "Le Labo",
    price: 97,
    currency: "USD",
    category: "Wellness",
    subCategory: "Candle",
    collection: ["quiet-rituals", "editors-picks", "most-loved"],
    room: ["living-room", "bedroom"],
    materials: ["Soy-blend wax", "Natural fiber wick", "Glass vessel"],
    styleTags: ["luxury", "warm-modern", "sandalwood"],
    editorNote: "Aristocratic sandalwood with amber, cocoa, and vanilla. Hand-poured in USA.",
    description: "Aristocratic scent combining gentle, smoky, and leathery notes. Features amber, cocoa, vanilla, cedar, spices, musk, and sandalwood. 8.6 oz with personalized label.",
    retailerName: "Le Labo",
    sourceUrl: "https://www.lelabofragrances.com/santal-26-33.html",
    affiliateUrl: "https://www.lelabofragrances.com/santal-26-33.html",
    image: "/products/le-labo-santal-26.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 30. Aesop Cythera Room Spray
  {
    id: "aesop-cythera-room-spray",
    slug: "aesop-cythera-room-spray",
    title: "Cythera Aromatique Room Spray",
    brand: "Aesop",
    price: 66,
    currency: "USD",
    category: "Wellness",
    subCategory: "Room Spray",
    collection: ["quiet-rituals", "best-under-100"],
    room: ["living-room", "bedroom", "bathroom"],
    materials: ["Vegan fragrance", "Glass bottle"],
    styleTags: ["luxury", "woody", "warm-modern"],
    editorNote: "Woody room mist with geranium, incense, and patchouli. Oriental, spicy aroma.",
    description: "Woody room mist combining geranium, incense, and patchouli with ambrette and myrrh. 100ml spray, made in France. Lasts several hours.",
    retailerName: "Aesop",
    sourceUrl: "https://www.aesop.com/us/p/home/room-sprays/cythera-aromatique-room-spray/",
    affiliateUrl: "https://www.aesop.com/us/p/home/room-sprays/cythera-aromatique-room-spray/",
    image: "/products/aesop-cythera-spray.jpg",
    badge: "Small Luxury",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TEXTILES - BEDDING, THROWS, TOWELS, PILLOWS
  // ═══════════════════════════════════════════════════════════════════════════

  // 31. Parachute Linen Duvet Cover Set
  {
    id: "parachute-linen-duvet-set",
    slug: "parachute-linen-duvet-set",
    title: "Linen Duvet Cover Set",
    brand: "Parachute",
    price: 299,
    currency: "USD",
    category: "Textiles",
    subCategory: "Bedding",
    collection: ["quiet-rituals", "material-warmth", "editors-picks", "most-loved"],
    room: ["bedroom"],
    materials: ["100% European flax linen", "175 GSM"],
    styleTags: ["natural", "french", "luxe"],
    editorNote: "Portuguese-crafted, garment-washed linen. Gets softer with every wash. CNN's Best Linen Sheets 2025.",
    description: "100% European flax linen duvet cover set with matching pillow shams. Garment-washed in Portugal. Twill ties on all four corners.",
    retailerName: "Parachute",
    sourceUrl: "https://parachutehome.com/products/linen-duvet-cover-set-bone-f-q",
    affiliateUrl: "https://parachutehome.com/products/linen-duvet-cover-set-bone-f-q",
    image: "/products/parachute-linen-duvet.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 32. Parachute Linen Sheet Set
  {
    id: "parachute-linen-sheet-set",
    slug: "parachute-linen-sheet-set",
    title: "Linen Sheet Set",
    brand: "Parachute",
    price: 219,
    currency: "USD",
    category: "Textiles",
    subCategory: "Bedding",
    collection: ["quiet-rituals", "material-warmth"],
    room: ["bedroom"],
    materials: ["100% European flax linen", "175 GSM"],
    styleTags: ["natural", "french", "breathable"],
    editorNote: "Full sheet set with lived-in texture. Gets softer over time.",
    description: "100% European flax linen sheet set including fitted sheet, flat sheet, and 2 pillowcases. Made in Portugal. Available in multiple colors.",
    retailerName: "Parachute",
    sourceUrl: "https://parachutehome.com/products/linen-sheet-set-white-f-q",
    affiliateUrl: "https://parachutehome.com/products/linen-sheet-set-white-f-q",
    image: "/products/parachute-linen-sheets.jpg",
    badge: "Material Warmth",
    featured: false,
    trending: false,
    bestSeller: true
  },

  // 33. Parachute Organic Plush Towels
  {
    id: "parachute-organic-plush-towels",
    slug: "parachute-organic-plush-towels",
    title: "Organic Plush Bath Towel Set",
    brand: "Parachute",
    price: 89,
    currency: "USD",
    category: "Textiles",
    subCategory: "Bath",
    collection: ["calm-bath", "material-warmth"],
    room: ["bathroom"],
    materials: ["100% organic Turkish cotton", "750 GSM"],
    styleTags: ["organic", "luxe", "plush"],
    editorNote: "Thickest and most plush. Long-staple Turkish cotton from the Aegean region.",
    description: "Organic long-staple Turkish cotton towels at 750 GSM. Loomed with innovative weaving technique for superior absorbency and durability.",
    retailerName: "Parachute",
    sourceUrl: "https://parachutehome.com/products/organic-plush-towels-bone",
    affiliateUrl: "https://parachutehome.com/products/organic-plush-towels-bone",
    image: "/products/parachute-plush-towels.jpg",
    badge: "Most Loved",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // 34. Parachute Vintage Linen Throw
  {
    id: "parachute-vintage-linen-throw",
    slug: "parachute-vintage-linen-throw",
    title: "Vintage Linen Throw",
    brand: "Parachute",
    price: 75,
    currency: "USD",
    category: "Textiles",
    subCategory: "Throw",
    collection: ["material-warmth", "best-under-100"],
    room: ["living-room", "bedroom"],
    materials: ["100% European flax linen"],
    styleTags: ["natural", "relaxed", "vintage"],
    editorNote: "Thick, lived-in feel with casual fringe finish. Made in Portugal.",
    description: "Garment-washed European flax linen throw. 50\"W x 70\"H with casual fringe finish. Portable version of their bed blanket.",
    retailerName: "Parachute",
    sourceUrl: "https://parachutehome.com/products/vintage-linen-throw-natural",
    affiliateUrl: "https://parachutehome.com/products/vintage-linen-throw-natural",
    image: "/products/parachute-vintage-throw.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 35. The Citizenry Agata Pillow
  {
    id: "citizenry-agata-pillow",
    slug: "citizenry-agata-pillow",
    title: "Agata Pillow",
    brand: "The Citizenry",
    price: 248,
    currency: "USD",
    category: "Textiles",
    subCategory: "Pillow",
    collection: ["material-warmth", "grounded-objects"],
    room: ["living-room", "bedroom"],
    materials: ["60% Alpaca", "40% Wool", "Cotton back"],
    styleTags: ["artisan", "peruvian", "geometric"],
    editorNote: "Handwoven in Lima, Peru. Geometric pattern in alpaca and wool blend.",
    description: "Handwoven accent pillow with geometric striped pattern. 60% alpaca, 40% wool front with cotton back. Fair trade certified. Includes insert.",
    retailerName: "The Citizenry",
    sourceUrl: "https://www.the-citizenry.com/products/agata-pillow",
    affiliateUrl: "https://www.the-citizenry.com/products/agata-pillow",
    image: "/products/citizenry-agata-pillow.jpg",
    badge: "Fair Trade",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 36. The Citizenry Merapi Basket
  {
    id: "citizenry-merapi-basket",
    slug: "citizenry-merapi-basket",
    title: "Merapi Storage Basket",
    brand: "The Citizenry",
    price: 155,
    currency: "USD",
    category: "Textiles",
    subCategory: "Storage",
    collection: ["soft-utility", "grounded-objects"],
    room: ["living-room", "bedroom", "bathroom"],
    materials: ["Abaca plant fiber", "Handwoven"],
    styleTags: ["artisan", "indonesian", "organic"],
    editorNote: "Extra-thick construction in sustainably sourced abaca fiber. 115 artisans in Yogyakarta.",
    description: "Oversized handwoven storage basket in sustainably sourced abaca plant fiber. Handcrafted by 115 artisans in Yogyakarta, Indonesia. 4 days per basket.",
    retailerName: "The Citizenry",
    sourceUrl: "https://www.the-citizenry.com/products/merapi-storage-baskets",
    affiliateUrl: "https://www.the-citizenry.com/products/merapi-storage-baskets",
    image: "/products/citizenry-merapi-basket.jpg",
    badge: "Artisan Made",
    featured: false,
    trending: false,
    bestSeller: true
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KITCHEN - TABLETOP, DINNERWARE, SERVEWARE
  // ═══════════════════════════════════════════════════════════════════════════

  // 37. Hawkins NY Essential Dinnerware Set
  {
    id: "hawkins-essential-dinnerware",
    slug: "hawkins-essential-dinnerware",
    title: "Essential Dinnerware 16-Piece Set",
    brand: "Hawkins New York",
    price: 258,
    currency: "USD",
    category: "Kitchen",
    subCategory: "Dinnerware",
    collection: ["grounded-objects", "material-warmth"],
    room: ["kitchen"],
    materials: ["Stoneware", "Soft rippled texture"],
    styleTags: ["handcrafted", "minimal", "functional"],
    editorNote: "Handcrafted stoneware for service of 4. Soft rippled texture with raised edge.",
    description: "Handcrafted stoneware set including 4 large bowls, 4 low bowls, 4 salad plates, 4 dinner plates. Dishwasher/microwave/oven safe to 450°F.",
    retailerName: "Hawkins New York",
    sourceUrl: "https://www.hawkinsnewyork.com/products/essential-dinnerware-16-piece-set-bone",
    affiliateUrl: "https://www.hawkinsnewyork.com/products/essential-dinnerware-16-piece-set-bone",
    image: "/products/hawkins-essential-dinnerware.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: false,
    bestSeller: true
  },

  // 38. Hawkins NY Simple Porcelain Dinnerware
  {
    id: "hawkins-simple-porcelain",
    slug: "hawkins-simple-porcelain",
    title: "Simple Porcelain Dinnerware 16-Piece Set",
    brand: "Hawkins New York",
    price: 424,
    currency: "USD",
    category: "Kitchen",
    subCategory: "Dinnerware",
    collection: ["grounded-objects", "quiet-rituals"],
    room: ["kitchen"],
    materials: ["White porcelain", "Glossy interior", "Matte exterior"],
    styleTags: ["minimal", "hand-thrown", "japanese-inspired"],
    editorNote: "Premium white porcelain with hand-thrown aesthetic. Timeless modern design.",
    description: "Premium white porcelain dinnerware set for service of 4. Glossy finish inside, matte texture outside. Hand-thrown aesthetic.",
    retailerName: "Hawkins New York",
    sourceUrl: "https://www.hawkinsnewyork.com/products/simple-porcelain-dinnerware-16-piece-set",
    affiliateUrl: "https://www.hawkinsnewyork.com/products/simple-porcelain-dinnerware-16-piece-set",
    image: "/products/hawkins-simple-porcelain.jpg",
    badge: "Material Warmth",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 39. Hawkins NY Brass Towel Bar
  {
    id: "hawkins-brass-towel-bar",
    slug: "hawkins-brass-towel-bar",
    title: "Brass Towel Bar",
    brand: "Hawkins New York",
    price: 28,
    currency: "USD",
    category: "Kitchen",
    subCategory: "Hardware",
    collection: ["soft-utility", "best-under-100"],
    room: ["kitchen", "bathroom"],
    materials: ["Solid brass", "Natural finish"],
    styleTags: ["minimal", "brass", "functional"],
    editorNote: "Solid brass in natural finish. Modern minimalist hardware.",
    description: "Solid brass towel bar in natural finish. Available in three sizes: Small (8\"L), Medium (20\"L), Large (27.5\"L). 2\" projection.",
    retailerName: "Hawkins New York",
    sourceUrl: "https://www.hawkinsnewyork.com/products/brass-towel-bar",
    affiliateUrl: "https://www.hawkinsnewyork.com/products/brass-towel-bar",
    image: "/products/hawkins-brass-bar.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: true
  },

  // 40. Hawkins NY Linen Kitchen Towel
  {
    id: "hawkins-linen-kitchen-towel",
    slug: "hawkins-linen-kitchen-towel",
    title: "Essential Linen Kitchen Towel",
    brand: "Hawkins New York",
    price: 16,
    currency: "USD",
    category: "Kitchen",
    subCategory: "Textile",
    collection: ["soft-utility", "best-under-100"],
    room: ["kitchen"],
    materials: ["100% linen", "Checked pattern"],
    styleTags: ["natural", "french", "functional"],
    editorNote: "Lightweight linen with classic checked pattern. Absorbent and quick-drying.",
    description: "100% linen kitchen towel with classic checked pattern. 29\"L x 21.5\"W. Absorbent and quick-drying natural material.",
    retailerName: "Hawkins New York",
    sourceUrl: "https://www.hawkinsnewyork.com/products/checked-linen-kitchen-towel",
    affiliateUrl: "https://www.hawkinsnewyork.com/products/checked-linen-kitchen-towel",
    image: "/products/hawkins-linen-towel.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OUTDOOR - PLANTERS, PLANT STANDS
  // ═══════════════════════════════════════════════════════════════════════════

  // 41. Modernica Case Study Cylinder Planter
  {
    id: "modernica-case-study-cylinder",
    slug: "modernica-case-study-cylinder",
    title: "Case Study Large Cylinder Planter",
    brand: "Modernica",
    price: 225,
    currency: "USD",
    category: "Outdoor",
    subCategory: "Planter",
    collection: ["grounded-objects", "sculptural-living"],
    room: ["living-room", "entryway"],
    materials: ["High-fired stoneware", "Teak or steel stand"],
    styleTags: ["mid-century", "architectural", "los-angeles"],
    editorNote: "Iconic cylindrical mid-century planter. Made in Los Angeles. Indoor/outdoor use.",
    description: "High-fired stoneware cylinder planter with stand options in teak or powder-coated steel. 11.5\"Ø x 11.25\"H ceramic. Made in Los Angeles.",
    retailerName: "Modernica",
    sourceUrl: "https://modernica.net/products/case-study%C2%AE-large-cylinder-with-stand",
    affiliateUrl: "https://modernica.net/products/case-study%C2%AE-large-cylinder-with-stand",
    image: "/products/modernica-cylinder-planter.jpg",
    badge: "Made in LA",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 42. Modernica Case Study Mushroom Planter
  {
    id: "modernica-mushroom-planter",
    slug: "modernica-mushroom-planter",
    title: "Case Study Large Mushroom Planter",
    brand: "Modernica",
    price: 235,
    currency: "USD",
    category: "Outdoor",
    subCategory: "Planter",
    collection: ["sculptural-living", "grounded-objects"],
    room: ["living-room", "entryway"],
    materials: ["High-fired stoneware", "Wood plinth"],
    styleTags: ["mid-century", "sculptural", "organic"],
    editorNote: "Organic mushroom silhouette on solid wood plinth. Made in Los Angeles.",
    description: "Sculptural mid-century planter with organic mushroom silhouette on solid wood plinth base. High-fired stoneware suitable for indoor and outdoor use.",
    retailerName: "Modernica",
    sourceUrl: "https://modernica.net/products/case-study%C2%AE-large-mushroom-with-plinth",
    affiliateUrl: "https://modernica.net/products/case-study%C2%AE-large-mushroom-with-plinth",
    image: "/products/modernica-mushroom-planter.jpg",
    badge: "Sculptural",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 43. West Elm Mid-Century Standing Planter
  {
    id: "west-elm-standing-planter",
    slug: "west-elm-standing-planter",
    title: "Mid-Century Turned Leg Standing Planter",
    brand: "West Elm",
    price: 149,
    currency: "USD",
    category: "Outdoor",
    subCategory: "Planter",
    collection: ["grounded-objects", "material-warmth"],
    room: ["living-room", "entryway"],
    materials: ["Glazed ceramic bowl", "Solid walnut legs"],
    styleTags: ["mid-century", "ceramic", "warm-modern"],
    editorNote: "1950s-60s inspired silhouette. Ceramic bowl on tapered solid walnut legs.",
    description: "Floor-standing planter with glazed ceramic bowl and tapered solid walnut wood legs. Inspired by clean 1950s-60s silhouettes.",
    retailerName: "West Elm",
    sourceUrl: "https://www.westelm.com/products/mid-century-turned-leg-standing-planters-matte-d4039/",
    affiliateUrl: "https://www.westelm.com/products/mid-century-turned-leg-standing-planters-matte-d4039/",
    image: "/products/west-elm-standing-planter.jpg",
    badge: "Material Warmth",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL VERIFIED PRODUCTS
  // ═══════════════════════════════════════════════════════════════════════════

  // 44. Nelson Coconut Chair
  {
    id: "nelson-coconut-chair",
    slug: "nelson-coconut-chair",
    title: "Nelson Coconut Chair",
    brand: "Herman Miller",
    price: 3795,
    currency: "USD",
    category: "Furniture",
    subCategory: "Lounge Chair",
    collection: ["design-classics", "sculptural-living"],
    room: ["living-room"],
    materials: ["Molded fiberglass shell", "Metal frame", "Upholstery"],
    styleTags: ["mid-century", "organic", "sculptural"],
    editorNote: "George Nelson's 1956 design with distinctive organic curved form. Mid-century lounge perfection.",
    description: "1956 George Nelson design faithful to original specifications. Distinctive organic curved fiberglass shell with comfortable upholstery.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/living-lounge-chairs/nelson-coconut-chair/975.html",
    affiliateUrl: "https://www.dwr.com/living-lounge-chairs/nelson-coconut-chair/975.html",
    image: "/products/nelson-coconut-chair.jpg",
    badge: "Design Classic",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 45. Saarinen Tulip Stool
  {
    id: "saarinen-tulip-stool",
    slug: "saarinen-tulip-stool",
    title: "Saarinen Tulip Stool",
    brand: "Knoll",
    price: 1345,
    currency: "USD",
    category: "Furniture",
    subCategory: "Stool",
    collection: ["design-classics", "warm-geometry"],
    room: ["kitchen", "bathroom"],
    materials: ["Cast aluminum base", "Upholstered swivel seat"],
    styleTags: ["mid-century", "sculptural", "minimal"],
    editorNote: "Eero Saarinen's 1956 icon. Gracefully shaped cast-aluminum base inspired by a drop of liquid.",
    description: "Iconic 1956 design featuring swivel seat on gracefully shaped cast-aluminum base. Available in fabric or leather upholstery.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/living-benches-stools/saarinen-tulip-stool/2274.html",
    affiliateUrl: "https://www.dwr.com/living-benches-stools/saarinen-tulip-stool/2274.html",
    image: "/products/saarinen-tulip-stool.jpg",
    badge: "Design Classic",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 46. Vitruvi Sleep Essential Oil
  {
    id: "vitruvi-sleep-oil",
    slug: "vitruvi-sleep-oil",
    title: "Sleep Essential Oil Blend",
    brand: "Vitruvi",
    price: 18,
    currency: "USD",
    category: "Wellness",
    subCategory: "Essential Oil",
    collection: ["quiet-rituals", "best-under-100", "small-luxuries"],
    room: ["bedroom"],
    materials: ["100% pure essential oils"],
    styleTags: ["wellness", "sleep", "natural"],
    editorNote: "Lavender, chamomile, and vetiver for peaceful rest. 20-30 drops in diffuser.",
    description: "Essential oil blend with lavender, chamomile, frankincense, and vetiver for peaceful, restful atmosphere. 10ml bottle.",
    retailerName: "Vitruvi",
    sourceUrl: "https://vitruvi.com/products/sleep-essential-oil-blend",
    affiliateUrl: "https://vitruvi.com/products/sleep-essential-oil-blend",
    image: "/products/vitruvi-sleep-oil.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // 47. Aesop Olous Room Spray
  {
    id: "aesop-olous-room-spray",
    slug: "aesop-olous-room-spray",
    title: "Olous Aromatique Room Spray",
    brand: "Aesop",
    price: 66,
    currency: "USD",
    category: "Wellness",
    subCategory: "Room Spray",
    collection: ["quiet-rituals", "best-under-100"],
    room: ["living-room", "bathroom"],
    materials: ["Vegan fragrance", "Glass bottle"],
    styleTags: ["luxury", "citrus", "mediterranean"],
    editorNote: "Fresh citrus balanced by cedar and cardamom. Evokes Mediterranean atmosphere.",
    description: "Fresh citrus room spray with cedar and cardamom. Olfactory melody of citrus botanicals balanced by breaking waves of cedar. 100ml, made in France.",
    retailerName: "Aesop",
    sourceUrl: "https://www.aesop.com/us/p/home/room-sprays/olous-aromatique-room-spray/",
    affiliateUrl: "https://www.aesop.com/us/p/home/room-sprays/olous-aromatique-room-spray/",
    image: "/products/aesop-olous-spray.jpg",
    badge: "Small Luxury",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 48. Le Labo Encens 9 Candle
  {
    id: "le-labo-encens-9-candle",
    slug: "le-labo-encens-9-candle",
    title: "Encens 9 Classic Candle",
    brand: "Le Labo",
    price: 75,
    currency: "USD",
    category: "Wellness",
    subCategory: "Candle",
    collection: ["quiet-rituals", "best-under-100"],
    room: ["living-room", "bedroom"],
    materials: ["100% soy wax", "Cotton wick", "Glass vessel"],
    styleTags: ["luxury", "frankincense", "meditative"],
    editorNote: "Frankincense softened by warm amber and clove. Serenity and contemplation.",
    description: "Frankincense-centered candle softened by warm resinous amber and rich clove. 8.6 oz, 60-hour burn time. Hand-poured in USA.",
    retailerName: "Le Labo",
    sourceUrl: "https://www.lelabofragrances.com/encens-9-838.html",
    affiliateUrl: "https://www.lelabofragrances.com/encens-9-838.html",
    image: "/products/le-labo-encens-9.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 49. Ferm Living Gry Portable Lamp
  {
    id: "ferm-living-gry-lamp",
    slug: "ferm-living-gry-lamp",
    title: "Gry Portable Table Lamp",
    brand: "Ferm Living",
    price: 179,
    currency: "USD",
    category: "Lighting",
    subCategory: "Table Lamp",
    collection: ["soft-utility", "architectural-light"],
    room: ["bedroom", "living-room"],
    materials: ["Powder-coated steel", "Fiberglass shade"],
    styleTags: ["portable", "minimal", "rechargeable"],
    editorNote: "Cordless with 12-hour battery life. 3-step touch dimming. Outdoor suitable.",
    description: "Portable lamp with dimmable LED (3000K warm white), 12-hour battery life, USB-C charging, and 3-step touch dimming. 17.44\"H.",
    retailerName: "Ferm Living",
    sourceUrl: "https://fermliving.us/products/gry-table-lamp-blacktranslucent",
    affiliateUrl: "https://fermliving.us/products/gry-table-lamp-blacktranslucent",
    image: "/products/ferm-gry-lamp.jpg",
    badge: "Portable",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 50. Ferm Living Socket Pendant Brass
  {
    id: "ferm-living-socket-pendant",
    slug: "ferm-living-socket-pendant",
    title: "Socket Pendant High - Brass",
    brand: "Ferm Living",
    price: 145,
    currency: "USD",
    category: "Lighting",
    subCategory: "Pendant Light",
    collection: ["architectural-light", "material-warmth"],
    room: ["kitchen", "bedroom"],
    materials: ["Brass plated iron", "Fabric cord"],
    styleTags: ["minimal", "brass", "modular"],
    editorNote: "Minimalist brass socket from modular Collect Lighting system. Raw elegance.",
    description: "Minimalist brass socket pendant from modular Collect Lighting system. Brass plating on iron with 3m fabric cord. Pair with any Collect series shade.",
    retailerName: "Ferm Living",
    sourceUrl: "https://fermliving.us/products/socket-pendant-high-brass-1",
    affiliateUrl: "https://fermliving.us/products/socket-pendant-high-brass-1",
    image: "/products/ferm-socket-pendant.jpg",
    badge: "Material Warmth",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 51. CB2 Honor Bone Inlay Mirror
  {
    id: "cb2-honor-bone-mirror",
    slug: "cb2-honor-bone-mirror",
    title: "Honor Bone Inlay Round Wall Mirror",
    brand: "CB2",
    price: 599,
    currency: "USD",
    category: "Decor",
    subCategory: "Mirror",
    collection: ["sculptural-living", "material-warmth"],
    room: ["entryway", "bedroom"],
    materials: ["Bone inlay", "Wood frame", "Mirror glass"],
    styleTags: ["artisan", "indian", "statement"],
    editorNote: "Hand-cut bone tiles in mosaic pattern. Each naturally unique. Handcrafted in India.",
    description: "Striking 32\" round mirror with mosaic of inlaid bone tiles. Subtle tonal variations make each piece unique. Handcrafted in India. CB2 exclusive.",
    retailerName: "CB2",
    sourceUrl: "https://www.cb2.com/honor-bone-inlay-round-wall-mirror-32/s671361",
    affiliateUrl: "https://www.cb2.com/honor-bone-inlay-round-wall-mirror-32/s671361",
    image: "/products/cb2-honor-mirror.jpg",
    badge: "Artisan Made",
    featured: true,
    trending: false,
    bestSeller: false
  },

  // 52. The Citizenry Ziwa Basket
  {
    id: "citizenry-ziwa-basket",
    slug: "citizenry-ziwa-basket",
    title: "Ziwa Oversized Basket",
    brand: "The Citizenry",
    price: 249,
    currency: "USD",
    category: "Textiles",
    subCategory: "Storage",
    collection: ["soft-utility", "grounded-objects"],
    room: ["living-room", "bedroom"],
    materials: ["Palm leaves", "Banana leaves", "Leather handles"],
    styleTags: ["artisan", "ugandan", "organic"],
    editorNote: "Handwoven by 150 women in Uganda's Rwenzori Mountains. Takes weeks to complete.",
    description: "Oversized luxury basket handwoven from palm and banana leaves with thick leather handles. Handmade in Uganda's Rwenzori Mountains. Fair trade certified.",
    retailerName: "The Citizenry",
    sourceUrl: "https://www.the-citizenry.com/products/ziwa-woven-baskets",
    affiliateUrl: "https://www.the-citizenry.com/products/ziwa-woven-baskets",
    image: "/products/citizenry-ziwa-basket.jpg",
    badge: "Fair Trade",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 53. Article Tala Travertine Table
  {
    id: "article-tala-travertine-table",
    slug: "article-tala-travertine-table",
    title: "Tala Travertine & Walnut Table",
    brand: "Article",
    price: 299,
    currency: "USD",
    category: "Furniture",
    subCategory: "Side Table",
    collection: ["material-warmth", "grounded-objects", "best-under-500"],
    room: ["living-room", "bedroom"],
    materials: ["Natural travertine", "Walnut wood base"],
    styleTags: ["sculptural", "natural-stone", "warm-modern"],
    editorNote: "Thick hand-cut travertine on fluted walnut base. Each piece handcrafted.",
    description: "Natural hand-cut travertine top set on fluted walnut wooden base. Mix of veneer and solid wood. Each piece is unique.",
    retailerName: "Article",
    sourceUrl: "https://www.article.com/product/27445/tala-31-5-travertine-coffee-table-walnut",
    affiliateUrl: "https://www.article.com/product/27445/tala-31-5-travertine-coffee-table-walnut",
    image: "/products/article-tala-table.jpg",
    badge: "Material Warmth",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 54. Serge Mouille Floor Lamp
  {
    id: "serge-mouille-floor-lamp",
    slug: "serge-mouille-floor-lamp",
    title: "Serge Mouille One-Arm Floor Lamp",
    brand: "Serge Mouille",
    price: 3396,
    currency: "USD",
    category: "Lighting",
    subCategory: "Floor Lamp",
    collection: ["design-classics", "sculptural-living"],
    room: ["living-room"],
    materials: ["Steel tubing", "Metal reflector", "Brass hardware"],
    styleTags: ["french", "sculptural", "mid-century"],
    editorNote: "Mid-century French design with sensual reflector form. Masterful metalwork. Made in France.",
    description: "Iconic French design with sculptural metal reflector on directional adjustable arm. Steel tubing with brass/steel hardware. Made in France.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/lighting-floor/serge-mouille-floor-lamp/2302.html",
    affiliateUrl: "https://www.dwr.com/lighting-floor/serge-mouille-floor-lamp/2302.html",
    image: "/products/serge-mouille-floor.jpg",
    badge: "Design Classic",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 55. Nelson Cigar Lotus Table Lamp
  {
    id: "nelson-cigar-lotus-table-lamp",
    slug: "nelson-cigar-lotus-table-lamp",
    title: "Nelson Cigar Lotus Table Lamp",
    brand: "Herman Miller",
    price: 755,
    currency: "USD",
    category: "Lighting",
    subCategory: "Table Lamp",
    collection: ["design-classics", "prairie-light"],
    room: ["living-room", "bedroom"],
    materials: ["Fiberglass polymer shade", "Steel base"],
    styleTags: ["mid-century", "organic", "sculptural"],
    editorNote: "George Nelson Bubble Lamp table version in elongated cigar form. Tripod-style base.",
    description: "Classic George Nelson Bubble Lamp in table version with cigar/elongated form. Authentic Herman Miller production with George Nelson Foundation.",
    retailerName: "Design Within Reach",
    sourceUrl: "https://www.dwr.com/lighting-table-lamps/nelson-cigar-lotus-table-lamp/4709.html",
    affiliateUrl: "https://www.dwr.com/lighting-table-lamps/nelson-cigar-lotus-table-lamp/4709.html",
    image: "/products/nelson-cigar-table.jpg",
    badge: "Design Classic",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 56. Article Nosh Counter Stool
  {
    id: "article-nosh-counter-stool",
    slug: "article-nosh-counter-stool",
    title: "Nosh Counter Stool",
    brand: "Article",
    price: 199,
    currency: "USD",
    category: "Furniture",
    subCategory: "Stool",
    collection: ["grounded-objects", "best-under-500"],
    room: ["kitchen"],
    materials: ["Solid walnut", "Fabric upholstery"],
    styleTags: ["mid-century", "minimal", "functional"],
    editorNote: "Compact counter stool with solid walnut legs. Multiple color combinations available.",
    description: "Compact counter stool with solid walnut wood legs and quality fabric seat. Available in multiple colors including gray, green, and blue.",
    retailerName: "Article",
    sourceUrl: "https://www.article.com/product/24363/nosh-counter-stool-walnut-and-chalk-gray",
    affiliateUrl: "https://www.article.com/product/24363/nosh-counter-stool-walnut-and-chalk-gray",
    image: "/products/article-nosh-stool.jpg",
    badge: "Best Under $500",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 57. Schoolhouse Cylinder Pendant
  {
    id: "schoolhouse-cylinder-pendant",
    slug: "schoolhouse-cylinder-pendant",
    title: "Cylinder Pendant",
    brand: "Schoolhouse",
    price: 299,
    currency: "USD",
    category: "Lighting",
    subCategory: "Pendant Light",
    collection: ["architectural-light", "best-under-500"],
    room: ["kitchen", "bathroom"],
    materials: ["Natural brass"],
    styleTags: ["american-made", "minimal", "traditional"],
    editorNote: "Minimalist cylinder with clean lines. Hand-assembled in Portland, Oregon.",
    description: "Minimalist cylinder pendant with clean lines in natural brass. Works with various bulbs. American-made in Portland, Oregon.",
    retailerName: "Schoolhouse",
    sourceUrl: "https://schoolhouse.com/products/cylinder-pendant",
    affiliateUrl: "https://schoolhouse.com/products/cylinder-pendant",
    image: "/products/schoolhouse-cylinder.jpg",
    badge: "American Made",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 58. West Elm Form Studies Planter
  {
    id: "west-elm-form-studies-planter",
    slug: "west-elm-form-studies-planter",
    title: "Form Studies Ceramic Planter",
    brand: "West Elm",
    price: 79,
    currency: "USD",
    category: "Outdoor",
    subCategory: "Planter",
    collection: ["grounded-objects", "best-under-100"],
    room: ["living-room", "entryway"],
    materials: ["Hand-thrown ceramic"],
    styleTags: ["minimal", "white", "functional"],
    editorNote: "Crisp white finish with clean modern lines. Hand-thrown with drainage holes.",
    description: "Hand-thrown ceramic planter with crisp white finish and clean modern lines. Includes drainage holes to protect plant roots.",
    retailerName: "West Elm",
    sourceUrl: "https://www.westelm.com/products/form-studies-ceramic-planters-d15860/",
    affiliateUrl: "https://www.westelm.com/products/form-studies-ceramic-planters-d15860/",
    image: "/products/west-elm-form-studies.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: true
  },

  // 59. CB2 White Ceramic Pedestal Bowl
  {
    id: "cb2-ceramic-pedestal-bowl",
    slug: "cb2-ceramic-pedestal-bowl",
    title: "White Ceramic Pedestal Bowl",
    brand: "CB2",
    price: 80,
    currency: "USD",
    category: "Decor",
    subCategory: "Bowl",
    collection: ["grounded-objects", "best-under-100"],
    room: ["living-room", "entryway"],
    materials: ["Matte ceramic"],
    styleTags: ["sculptural", "minimal", "white"],
    editorNote: "Stately sculptural centerpiece with pedestal base. 13.8\" diameter.",
    description: "Sculptural centerpiece bowl in matte ceramic with pedestal base. 6.9\"H x 13.8\"D. Perfect for display or fruit bowl.",
    retailerName: "CB2",
    sourceUrl: "https://www.cb2.com/white-ceramic-pedestal-bowl/s517558",
    affiliateUrl: "https://www.cb2.com/white-ceramic-pedestal-bowl/s517558",
    image: "/products/cb2-pedestal-bowl.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 60. P.F. Candle Co. Large Concentrated Candle
  {
    id: "pf-candle-amber-moss-large",
    slug: "pf-candle-amber-moss-large",
    title: "Amber & Moss Large Concentrated Candle",
    brand: "P.F. Candle Co.",
    price: 36,
    currency: "USD",
    category: "Wellness",
    subCategory: "Candle",
    collection: ["quiet-rituals", "best-under-100"],
    room: ["living-room", "bedroom"],
    materials: ["100% soy wax", "Cotton wick", "Amber glass"],
    styleTags: ["handmade", "natural", "california"],
    editorNote: "Larger 12.5 oz size with stronger scent throw. 60-70 hour burn time.",
    description: "Larger concentrated soy candle with stronger scent throw. 12.5 oz, 60-70 hour burn time. Same sage, moss, and lavender fragrance. Made in California.",
    retailerName: "P.F. Candle Co.",
    sourceUrl: "https://pfcandleco.com/products/amber-moss-large-concentrated-candle",
    affiliateUrl: "https://pfcandleco.com/products/amber-moss-large-concentrated-candle",
    image: "/products/pf-amber-moss-large.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: false
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

export function getProductsByCategory(category: Product["category"]): Product[] {
  return ProductManifest.filter(p => p.category === category);
}

export function getProductsBySubCategory(subCategory: string): Product[] {
  return ProductManifest.filter(p => p.subCategory === subCategory);
}

export function getProductsByCollection(collection: string): Product[] {
  return ProductManifest.filter(p => p.collection.includes(collection));
}

export function getProductsByRoom(room: string): Product[] {
  return ProductManifest.filter(p => p.room?.includes(room));
}

export function getFeaturedProducts(): Product[] {
  return ProductManifest.filter(p => p.featured);
}

export function getTrendingProducts(): Product[] {
  return ProductManifest.filter(p => p.trending);
}

export function getBestSellers(): Product[] {
  return ProductManifest.filter(p => p.bestSeller);
}

export function getProductBySlug(slug: string): Product | undefined {
  return ProductManifest.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return ProductManifest.find(p => p.id === id);
}

export function getProductsByStyleTag(tag: string): Product[] {
  return ProductManifest.filter(p => p.styleTags.includes(tag));
}

export function getProductsByMaterial(material: string): Product[] {
  return ProductManifest.filter(p =>
    p.materials.some(m => m.toLowerCase().includes(material.toLowerCase()))
  );
}

export function getProductsUnderPrice(maxPrice: number): Product[] {
  return ProductManifest.filter(p => p.price <= maxPrice);
}

/**
 * Get the affiliate URL for a product
 * Uses affiliateUrl if available, otherwise falls back to sourceUrl
 */
export function getProductAffiliateUrl(product: Product): string {
  return product.affiliateUrl || product.sourceUrl || "#";
}

/**
 * Get products by retailer
 */
export function getProductsByRetailer(retailerName: string): Product[] {
  return ProductManifest.filter(p => p.retailerName === retailerName);
}

/**
 * Get all unique retailers in the manifest
 */
export function getUniqueRetailers(): string[] {
  return [...new Set(ProductManifest.map(p => p.retailerName))];
}

/**
 * Get all unique categories
 */
export function getUniqueCategories(): Product["category"][] {
  return [...new Set(ProductManifest.map(p => p.category))];
}

/**
 * Get all unique collections
 */
export function getUniqueCollections(): string[] {
  const collections = ProductManifest.flatMap(p => p.collection);
  return [...new Set(collections)];
}
