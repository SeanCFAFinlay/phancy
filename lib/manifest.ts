import { AffiliateLink, AffiliateNetwork, resolveAffiliateLink, getPrimaryAffiliateUrl } from "./affiliates";

export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  price: number;
  category: "Wellness" | "Homewares";
  subCategory: string;
  collection: string[];
  room?: string[];
  ritual?: string[];
  editorNote: string;
  description: string;
  attributes: string[];
  affiliateLink: string; // Primary link (backwards compatible)
  affiliateLinks?: AffiliateLink[]; // Multiple network links
  image: string;
  badge?: string;
  featured?: boolean;
  trending?: boolean;
  bestSeller?: boolean;
}

export const ProductManifest: Product[] = [
  // ═══════════════════════════════════════════════════════════════
  // WELLNESS PRODUCTS (1-15)
  // ═══════════════════════════════════════════════════════════════

  // 1. Linen Robe
  {
    id: "linen-robe",
    slug: "linen-robe",
    title: "Stonewashed Linen Robe",
    brand: "Piglet in Bed",
    price: 189.00,
    category: "Wellness",
    subCategory: "Bath & Body",
    collection: ["editors-picks", "small-luxuries"],
    room: ["bedroom", "bathroom"],
    ritual: ["evening-reset", "slow-morning"],
    editorNote: "The robe you reach for every morning. Stonewashed Belgian linen that softens beautifully over time.",
    description: "Luxuriously soft stonewashed linen robe in a relaxed, unstructured silhouette. Features a tie waist, patch pockets, and a shawl collar. Gets softer with every wash.",
    attributes: ["Belgian Linen", "Stonewashed", "Unisex", "OEKO-TEX Certified"],
    affiliateLink: "https://www.amazon.ca/dp/B0BKJF8VQN?tag=phcfastore-20",
    image: "/products/linen-robe.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 2. Ceramic Diffuser
  {
    id: "ceramic-diffuser",
    slug: "ceramic-diffuser",
    title: "Stone Ceramic Oil Diffuser",
    brand: "Vitruvi",
    price: 119.00,
    category: "Wellness",
    subCategory: "Scent",
    collection: ["editors-picks", "design-classics"],
    room: ["living-room", "bedroom"],
    ritual: ["evening-reset"],
    editorNote: "An architectural piece that happens to be a diffuser. Matte ceramic finish that disappears into any room.",
    description: "Ultrasonic essential oil diffuser crafted from matte porcelain ceramic. Whisper-quiet operation with 7-hour runtime. The diffuser that finally looks like furniture.",
    attributes: ["Porcelain Ceramic", "Ultrasonic", "7hr Runtime", "BPA-Free"],
    affiliateLink: "https://www.amazon.ca/dp/B01N0S0Y9G?tag=phcfastore-20",
    image: "/products/ceramic-diffuser.jpg",
    badge: "Design Classic",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 3. Natural Candle
  {
    id: "natural-candle",
    slug: "natural-candle",
    title: "Hand-Poured Soy Candle",
    brand: "P.F. Candle Co.",
    price: 32.00,
    category: "Wellness",
    subCategory: "Scent",
    collection: ["best-under-100", "small-luxuries"],
    room: ["living-room", "bedroom", "bathroom"],
    ritual: ["evening-reset", "bath-ritual"],
    editorNote: "Amber jar, cotton wick, no synthetic fragrance. The small luxury that transforms any space.",
    description: "Soy wax candle hand-poured in Los Angeles. Notes of teakwood, orange, and geranium. 50-hour burn time in the signature amber glass vessel.",
    attributes: ["Soy Wax", "Cotton Wick", "50hr Burn", "Phthalate-Free"],
    affiliateLink: "https://www.amazon.ca/dp/B07MDHF2CL?tag=phcfastore-20",
    image: "/products/natural-candle.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // 4. Bath Soak
  {
    id: "mineral-bath-soak",
    slug: "mineral-bath-soak",
    title: "Dead Sea Mineral Bath Soak",
    brand: "OSEA",
    price: 48.00,
    category: "Wellness",
    subCategory: "Bath & Body",
    collection: ["best-under-100", "small-luxuries"],
    room: ["bathroom"],
    ritual: ["bath-ritual", "evening-reset"],
    editorNote: "The bath ritual you deserve. Mineral-rich Dead Sea salts with algae and essential oils.",
    description: "Therapeutic bath soak blending Dead Sea salts with undaria algae and pure essential oils. Detoxifies and softens skin while promoting deep relaxation.",
    attributes: ["Dead Sea Salts", "Algae Infused", "Vegan", "Clean Ingredients"],
    affiliateLink: "https://www.amazon.ca/dp/B075DHX5CS?tag=phcfastore-20",
    image: "/products/bath-soak.jpg",
    badge: "Small Luxury",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 5. Weighted Blanket
  {
    id: "weighted-blanket",
    slug: "weighted-blanket",
    title: "Organic Cotton Weighted Blanket",
    brand: "Baloo Living",
    price: 199.00,
    category: "Wellness",
    subCategory: "Sleep",
    collection: ["editors-picks", "most-loved"],
    room: ["bedroom", "living-room"],
    ritual: ["evening-reset"],
    editorNote: "15 lbs of calm. Chemical-free glass beads in GOTS-certified organic cotton. Sleep as it should be.",
    description: "Premium weighted blanket with chemical-free glass micro-beads evenly distributed in quilted organic cotton. Removable, machine-washable cover. Available in 12, 15, 20 lb options.",
    attributes: ["Organic Cotton", "Glass Beads", "Machine Washable", "GOTS Certified"],
    affiliateLink: "https://www.amazon.ca/dp/B07L2RPCDZ?tag=phcfastore-20",
    image: "/products/weighted-blanket.jpg",
    badge: "Most Loved",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 6. Herbal Tea Set
  {
    id: "herbal-tea-set",
    slug: "herbal-tea-set",
    title: "Artisan Herbal Tea Collection",
    brand: "Leaves and Flowers",
    price: 54.00,
    category: "Wellness",
    subCategory: "Rituals",
    collection: ["best-under-100", "small-luxuries"],
    room: ["kitchen"],
    ritual: ["slow-morning", "evening-reset"],
    editorNote: "Six single-origin herbal blends in apothecary-style tins. The tea collection that belongs on display.",
    description: "Curated collection of six organic herbal teas: chamomile lavender, peppermint, ginger turmeric, rooibos chai, hibiscus rose, and lemon balm. Loose leaf in reusable metal tins.",
    attributes: ["Organic", "Loose Leaf", "6 Varieties", "Caffeine-Free"],
    affiliateLink: "https://www.amazon.ca/dp/B07MCDQ7TZ?tag=phcfastore-20",
    image: "/products/herbal-tea-set.jpg",
    badge: "Curated Set",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 7. Meditation Cushion
  {
    id: "meditation-cushion",
    slug: "meditation-cushion",
    title: "Zafu Meditation Cushion",
    brand: "Samaya",
    price: 89.00,
    category: "Wellness",
    subCategory: "Mindful Living",
    collection: ["editors-picks", "best-under-100"],
    room: ["living-room", "bedroom"],
    ritual: ["slow-morning"],
    editorNote: "Traditional zafu form, modern materials. Buckwheat hull fill with organic cotton cover in warm neutrals.",
    description: "Round meditation cushion filled with organic buckwheat hulls that conform to your body. Removable, washable cover in GOTS-certified organic cotton. Designed to align your spine naturally.",
    attributes: ["Buckwheat Fill", "Organic Cotton", "Removable Cover", "15\" Diameter"],
    affiliateLink: "https://www.amazon.ca/dp/B01M0UVHCA?tag=phcfastore-20",
    image: "/products/meditation-cushion.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: false,
    bestSeller: false
  },

  // 8. Essential Oil Set
  {
    id: "essential-oil-set",
    slug: "essential-oil-set",
    title: "Pure Essential Oil Collection",
    brand: "Aesop",
    price: 85.00,
    category: "Wellness",
    subCategory: "Scent",
    collection: ["best-under-100", "small-luxuries"],
    room: ["bathroom", "bedroom"],
    ritual: ["bath-ritual", "evening-reset"],
    editorNote: "Four essential oils in amber glass. Lavender, eucalyptus, peppermint, and bergamot. The aromatherapy edit.",
    description: "Quartet of pure essential oils in signature amber glass bottles. Includes lavender for calm, eucalyptus for clarity, peppermint for energy, and bergamot for balance.",
    attributes: ["Pure Oils", "Amber Glass", "4 Varieties", "Therapeutic Grade"],
    affiliateLink: "https://www.amazon.ca/dp/B06XNQP1TY?tag=phcfastore-20",
    image: "/products/essential-oil-set.jpg",
    badge: "Small Luxury",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 9. Body Brush
  {
    id: "body-brush",
    slug: "body-brush",
    title: "Dry Body Brush",
    brand: "Province Apothecary",
    price: 38.00,
    category: "Wellness",
    subCategory: "Bath & Body",
    collection: ["best-under-100", "small-luxuries"],
    room: ["bathroom"],
    ritual: ["slow-morning", "bath-ritual"],
    editorNote: "The daily ritual that wakes up your lymphatic system. Natural bristles, beechwood handle, and an elegant loop for hanging.",
    description: "Traditional dry brush with firm natural sisal bristles and sustainably-harvested beechwood handle. Promotes lymphatic drainage and skin renewal. Cotton hanging loop included.",
    attributes: ["Sisal Bristles", "Beechwood Handle", "Vegan", "Sustainable"],
    affiliateLink: "https://www.amazon.ca/dp/B07CKBG6WN?tag=phcfastore-20",
    image: "/products/body-brush.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 10. Stoneware Mug
  {
    id: "stoneware-mug",
    slug: "stoneware-mug",
    title: "Handmade Stoneware Mug",
    brand: "East Fork",
    price: 42.00,
    category: "Wellness",
    subCategory: "Rituals",
    collection: ["best-under-100", "design-classics"],
    room: ["kitchen"],
    ritual: ["slow-morning"],
    editorNote: "The mug that makes every morning feel intentional. Hand-thrown in North Carolina with a perfect weighted base.",
    description: "Hand-thrown stoneware mug with comfortable handle and weighted base. Lead-free glaze in seasonal colors. Holds 12oz perfectly. Dishwasher and microwave safe.",
    attributes: ["Hand-Thrown", "Lead-Free Glaze", "12oz", "Made in USA"],
    affiliateLink: "https://www.amazon.ca/dp/B07PQKMPNV?tag=phcfastore-20",
    image: "/products/stoneware-mug.jpg",
    badge: "Design Classic",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // 11. Sleep Mask
  {
    id: "sleep-mask",
    slug: "sleep-mask",
    title: "Mulberry Silk Sleep Mask",
    brand: "Slip",
    price: 55.00,
    category: "Wellness",
    subCategory: "Sleep",
    collection: ["best-under-100", "small-luxuries"],
    room: ["bedroom"],
    ritual: ["evening-reset"],
    editorNote: "Grade 6A mulberry silk with zero pressure on your eyes. The sleep upgrade you did not know you needed.",
    description: "Pure mulberry silk sleep mask with adjustable elastic band. Hypoallergenic, breathable, and gentle on skin and hair. Complete darkness without pressure.",
    attributes: ["Mulberry Silk", "Adjustable Fit", "Hypoallergenic", "Grade 6A"],
    affiliateLink: "https://www.amazon.ca/dp/B07KCNK3H9?tag=phcfastore-20",
    image: "/products/sleep-mask.jpg",
    badge: "Small Luxury",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 12. Wellness Journal
  {
    id: "wellness-journal",
    slug: "wellness-journal",
    title: "Daily Ritual Journal",
    brand: "Intelligent Change",
    price: 35.00,
    category: "Wellness",
    subCategory: "Mindful Living",
    collection: ["best-under-100", "small-luxuries"],
    room: ["bedroom", "workspace"],
    ritual: ["slow-morning", "evening-reset"],
    editorNote: "Five minutes morning and night. Gratitude, intentions, and reflection in a linen-bound package.",
    description: "Guided journal for daily gratitude and mindfulness practice. Morning and evening prompts, weekly challenges, and inspirational quotes. Linen cover with gold foil details.",
    attributes: ["Linen Bound", "Guided Prompts", "6 Months", "Lay-Flat Binding"],
    affiliateLink: "https://www.amazon.ca/dp/B01HIEZ58Y?tag=phcfastore-20",
    image: "/products/wellness-journal.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 13. Humidifier
  {
    id: "humidifier",
    slug: "humidifier",
    title: "Ceramic Ultrasonic Humidifier",
    brand: "Objecto",
    price: 145.00,
    category: "Wellness",
    subCategory: "Sleep",
    collection: ["editors-picks", "design-classics"],
    room: ["bedroom", "living-room"],
    ritual: ["evening-reset"],
    editorNote: "Finally, a humidifier that looks like it belongs. Handmade ceramic with ultrasonic technology and auto shut-off.",
    description: "Sculptural ultrasonic humidifier in handmade ceramic. Whisper-quiet operation with adjustable mist and auto shut-off when water runs low. 1.5L tank for all-night use.",
    attributes: ["Ceramic", "Ultrasonic", "1.5L Tank", "Auto Shut-Off"],
    affiliateLink: "https://www.amazon.ca/dp/B07H2M2VRP?tag=phcfastore-20",
    image: "/products/humidifier.jpg",
    badge: "Design Classic",
    featured: true,
    trending: false,
    bestSeller: false
  },

  // 14. Recovery / Sauna Blanket
  {
    id: "sauna-blanket",
    slug: "sauna-blanket",
    title: "Infrared Sauna Blanket",
    brand: "HigherDOSE",
    price: 499.00,
    category: "Wellness",
    subCategory: "Recovery",
    collection: ["editors-picks"],
    room: ["bedroom"],
    ritual: ["evening-reset"],
    editorNote: "The at-home recovery ritual that actually delivers. Far infrared heat therapy in a portable, storable blanket.",
    description: "Professional-grade infrared sauna blanket with far infrared technology. Promotes detoxification, muscle recovery, and deep relaxation. Folds flat for storage, wipes clean.",
    attributes: ["Far Infrared", "8 Heat Levels", "Portable", "Auto Timer"],
    affiliateLink: "https://www.amazon.ca/dp/B08B5P9XJQ?tag=phcfastore-20",
    image: "/products/sauna-blanket.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: true,
    bestSeller: false
  },

  // 15. Minimalist Water Carafe
  {
    id: "water-carafe",
    slug: "water-carafe",
    title: "Hand-Blown Glass Carafe",
    brand: "LSA International",
    price: 68.00,
    category: "Wellness",
    subCategory: "Rituals",
    collection: ["best-under-100", "design-classics"],
    room: ["bedroom", "kitchen"],
    ritual: ["slow-morning", "evening-reset"],
    editorNote: "Mouth-blown glass with a cork stopper. On the bedside table or the dinner table, it is always right.",
    description: "Hand-blown glass carafe with natural cork stopper. Elegant pour spout and weighted base for stability. Perfect for bedside water or table service.",
    attributes: ["Hand-Blown", "Cork Stopper", "1L Capacity", "Lead-Free"],
    affiliateLink: "https://www.amazon.ca/dp/B01LYQXUG6?tag=phcfastore-20",
    image: "/products/water-carafe.jpg",
    badge: "Design Classic",
    featured: false,
    trending: false,
    bestSeller: true
  },

  // ═══════════════════════════════════════════════════════════════
  // HOMEWARES PRODUCTS (16-30)
  // ═══════════════════════════════════════════════════════════════

  // 16. Walnut Side Table
  {
    id: "walnut-side-table",
    slug: "walnut-side-table",
    title: "Solid Walnut Side Table",
    brand: "Article",
    price: 349.00,
    category: "Homewares",
    subCategory: "Decor",
    collection: ["editors-picks", "design-classics"],
    room: ["living-room", "bedroom"],
    editorNote: "Mid-century legs, solid walnut top, warm modern presence. The side table that anchors any seating arrangement.",
    description: "Solid American walnut side table with tapered legs and brass-tipped feet. Clean lines and warm grain patterns. Some assembly required.",
    attributes: ["Solid Walnut", "Brass Feet", "MCM Design", "17\" Height"],
    affiliateLink: "https://www.amazon.ca/dp/B07YNZV4JJ?tag=phcfastore-20",
    image: "/products/walnut-side-table.jpg",
    badge: "Design Classic",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 17. Boucle Accent Chair
  {
    id: "boucle-accent-chair",
    slug: "boucle-accent-chair",
    title: "Cream Boucle Accent Chair",
    brand: "Poly & Bark",
    price: 599.00,
    category: "Homewares",
    subCategory: "Decor",
    collection: ["editors-picks", "most-loved"],
    room: ["living-room", "bedroom"],
    editorNote: "The chair everyone asks about. Cream boucle, solid oak base, sculptural form that somehow works in every room.",
    description: "Sculptural accent chair upholstered in premium cream boucle fabric with solid oak legs. Generously padded seat and back for comfortable lounging.",
    attributes: ["Boucle Fabric", "Solid Oak Base", "31\" Width", "Foam Fill"],
    affiliateLink: "https://www.amazon.ca/dp/B08QMZR24B?tag=phcfastore-20",
    image: "/products/boucle-accent-chair.jpg",
    badge: "Most Loved",
    featured: true,
    trending: true,
    bestSeller: true
  },

  // 18. Sculptural Lamp
  {
    id: "sculptural-lamp",
    slug: "sculptural-lamp",
    title: "Sculptural Table Lamp",
    brand: "Menu",
    price: 289.00,
    category: "Homewares",
    subCategory: "Lighting",
    collection: ["editors-picks", "design-classics"],
    room: ["living-room", "bedroom", "workspace"],
    editorNote: "Light as sculpture. Organic ceramic form with linen shade. Warm ambient glow that makes any corner feel intentional.",
    description: "Sculptural table lamp with organic ceramic base in matte sand finish. Drum shade in natural linen. Inline dimmer switch for adjustable ambiance.",
    attributes: ["Ceramic Base", "Linen Shade", "Dimmable", "E26 Bulb"],
    affiliateLink: "https://www.amazon.ca/dp/B07Y3BQPDH?tag=phcfastore-20",
    image: "/products/sculptural-lamp.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: true,
    bestSeller: false
  },

  // 19. Throw Blanket
  {
    id: "throw-blanket",
    slug: "throw-blanket",
    title: "Merino Wool Throw",
    brand: "Tekla",
    price: 285.00,
    category: "Homewares",
    subCategory: "Textiles",
    collection: ["editors-picks", "most-loved"],
    room: ["living-room", "bedroom"],
    editorNote: "Portuguese merino wool in warm neutral. The throw you will actually use, on the sofa or the bed.",
    description: "Pure merino wool throw blanket woven in Portugal. Soft hand feel with subtle texture. Generous 51\" x 67\" size. Dry clean recommended.",
    attributes: ["Merino Wool", "Made in Portugal", "51x67\"", "OEKO-TEX"],
    affiliateLink: "https://www.amazon.ca/dp/B07PQYJNSS?tag=phcfastore-20",
    image: "/products/throw-blanket.jpg",
    badge: "Most Loved",
    featured: true,
    trending: false,
    bestSeller: true
  },

  // 20. Ceramic Vase
  {
    id: "ceramic-vase",
    slug: "ceramic-vase",
    title: "Organic Form Ceramic Vase",
    brand: "Ferm Living",
    price: 78.00,
    category: "Homewares",
    subCategory: "Decor",
    collection: ["best-under-100", "design-classics"],
    room: ["living-room", "entryway", "bedroom"],
    editorNote: "Sculptural curves in matte ceramic. Beautiful empty, even better with a single branch or dried stems.",
    description: "Sculptural ceramic vase with organic, asymmetrical form. Matte sand finish that complements any palette. Watertight for fresh flowers.",
    attributes: ["Ceramic", "Matte Finish", "Watertight", "10\" Height"],
    affiliateLink: "https://www.amazon.ca/dp/B08B5HT8G5?tag=phcfastore-20",
    image: "/products/ceramic-vase.jpg",
    badge: "Design Classic",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 21. Wood Serving Board
  {
    id: "wood-serving-board",
    slug: "wood-serving-board",
    title: "Live Edge Walnut Board",
    brand: "Crate & Barrel",
    price: 89.00,
    category: "Homewares",
    subCategory: "Kitchen",
    collection: ["best-under-100", "most-loved"],
    room: ["kitchen"],
    ritual: ["hosting-essentials"],
    editorNote: "Live edge, food-safe finish, and a form that makes even cheese and crackers look like an event.",
    description: "Solid walnut serving board with natural live edge. Food-safe mineral oil finish. Each piece is unique. Hand-wash and oil occasionally.",
    attributes: ["Solid Walnut", "Live Edge", "Food Safe", "18\" Length"],
    affiliateLink: "https://www.amazon.ca/dp/B07ZQSV3S2?tag=phcfastore-20",
    image: "/products/wood-serving-board.jpg",
    badge: "Most Loved",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // 22. Modern Bedding Set
  {
    id: "modern-bedding-set",
    slug: "modern-bedding-set",
    title: "Washed Linen Bedding Set",
    brand: "Cultiver",
    price: 395.00,
    category: "Homewares",
    subCategory: "Textiles",
    collection: ["editors-picks", "most-loved"],
    room: ["bedroom"],
    ritual: ["evening-reset"],
    editorNote: "French flax linen that gets better with every wash. Duvet cover and two shams in warm white.",
    description: "Complete bedding set in stonewashed French flax linen. Includes duvet cover and two standard shams. Button closure. Gets softer with every wash.",
    attributes: ["French Flax Linen", "Stonewashed", "Button Closure", "Queen Size"],
    affiliateLink: "https://www.amazon.ca/dp/B07VTHM8GX?tag=phcfastore-20",
    image: "/products/modern-bedding-set.jpg",
    badge: "Editor's Pick",
    featured: true,
    trending: false,
    bestSeller: true
  },

  // 23. Bathroom Towel Set
  {
    id: "bathroom-towel-set",
    slug: "bathroom-towel-set",
    title: "Organic Cotton Towel Set",
    brand: "Parachute",
    price: 149.00,
    category: "Homewares",
    subCategory: "Textiles",
    collection: ["best-under-100", "most-loved"],
    room: ["bathroom"],
    ritual: ["bath-ritual"],
    editorNote: "Long-staple Turkish cotton in warm white. The towel set that makes your bathroom feel like a boutique hotel.",
    description: "Set of four bath towels in plush long-staple Turkish cotton. 700 GSM weight for superior absorbency. OEKO-TEX certified. Gets softer with washing.",
    attributes: ["Turkish Cotton", "700 GSM", "Set of 4", "OEKO-TEX"],
    affiliateLink: "https://www.amazon.ca/dp/B07HNQC1D8?tag=phcfastore-20",
    image: "/products/bathroom-towel-set.jpg",
    badge: "Most Loved",
    featured: false,
    trending: true,
    bestSeller: true
  },

  // 24. Coffee Table Book
  {
    id: "coffee-table-book",
    slug: "coffee-table-book",
    title: "Kinfolk Home Interiors Book",
    brand: "Kinfolk",
    price: 45.00,
    category: "Homewares",
    subCategory: "Decor",
    collection: ["best-under-100", "small-luxuries"],
    room: ["living-room"],
    editorNote: "Slow living interiors from around the world. The book that started a movement, and still belongs on every coffee table.",
    description: "Beautifully photographed exploration of slow living spaces around the world. Hardcover with linen spine. 368 pages of interior inspiration.",
    attributes: ["Hardcover", "368 Pages", "Linen Spine", "Full Color"],
    affiliateLink: "https://www.amazon.ca/dp/1579657184?tag=phcfastore-20",
    image: "/products/coffee-table-book.jpg",
    badge: "Small Luxury",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 25. Storage Basket
  {
    id: "storage-basket",
    slug: "storage-basket",
    title: "Handwoven Seagrass Basket",
    brand: "The Citizenry",
    price: 98.00,
    category: "Homewares",
    subCategory: "Storage",
    collection: ["best-under-100", "most-loved"],
    room: ["living-room", "bedroom", "bathroom", "entryway"],
    editorNote: "Handwoven seagrass with leather handles. Blankets, magazines, towels, plants. Useful and beautiful.",
    description: "Handwoven basket in natural seagrass with genuine leather handles. Versatile size works for storage or as a planter. Each piece is unique.",
    attributes: ["Seagrass", "Leather Handles", "Handwoven", "14\" Diameter"],
    affiliateLink: "https://www.amazon.ca/dp/B07GVPJTRK?tag=phcfastore-20",
    image: "/products/storage-basket.jpg",
    badge: "Best Under $100",
    featured: false,
    trending: true,
    bestSeller: false
  },

  // 26. Entryway Mirror
  {
    id: "entryway-mirror",
    slug: "entryway-mirror",
    title: "Arched Oak Floor Mirror",
    brand: "West Elm",
    price: 499.00,
    category: "Homewares",
    subCategory: "Decor",
    collection: ["editors-picks", "design-classics"],
    room: ["entryway", "bedroom", "bathroom"],
    editorNote: "Arched silhouette, solid oak frame, floor-to-ceiling presence. The mirror that makes any room feel larger and more elegant.",
    description: "Full-length arched mirror in solid oak frame with natural finish. Leans against wall or mounts. Shatter-resistant glass. 68\" x 24\".",
    attributes: ["Solid Oak", "Arched Design", "68x24\"", "Shatter-Resistant"],
    affiliateLink: "https://www.amazon.ca/dp/B08GLPDMF6?tag=phcfastore-20",
    image: "/products/entryway-mirror.jpg",
    badge: "Design Classic",
    featured: true,
    trending: true,
    bestSeller: false
  },

  // 27. Decorative Tray
  {
    id: "decorative-tray",
    slug: "decorative-tray",
    title: "Travertine Stone Tray",
    brand: "CB2",
    price: 85.00,
    category: "Homewares",
    subCategory: "Tabletop",
    collection: ["best-under-100", "small-luxuries"],
    room: ["living-room", "bathroom", "bedroom"],
    editorNote: "Natural travertine with unique veining. On the coffee table, the vanity, or the nightstand. Endlessly useful.",
    description: "Rectangular tray carved from natural travertine stone. Each piece features unique veining. Felt pads protect surfaces. 14\" x 8\".",
    attributes: ["Travertine", "Felt Pads", "14x8\"", "Each Unique"],
    affiliateLink: "https://www.amazon.ca/dp/B07VRQXZYG?tag=phcfastore-20",
    image: "/products/decorative-tray.jpg",
    badge: "Small Luxury",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 28. Dining Chair
  {
    id: "dining-chair",
    slug: "dining-chair",
    title: "Wishbone Dining Chair",
    brand: "Carl Hansen",
    price: 695.00,
    category: "Homewares",
    subCategory: "Decor",
    collection: ["editors-picks", "design-classics"],
    room: ["kitchen"],
    editorNote: "The Hans Wegner icon. Solid oak, handwoven paper cord seat, century-tested design that never goes out of style.",
    description: "Iconic wishbone chair designed by Hans Wegner in 1949. Solid oak frame with handwoven natural paper cord seat. Made in Denmark.",
    attributes: ["Solid Oak", "Paper Cord Seat", "MCM Icon", "Made in Denmark"],
    affiliateLink: "https://www.amazon.ca/dp/B07QMQR49J?tag=phcfastore-20",
    image: "/products/dining-chair.jpg",
    badge: "Design Classic",
    featured: true,
    trending: false,
    bestSeller: false
  },

  // 29. Kitchen Canister Set
  {
    id: "kitchen-canister-set",
    slug: "kitchen-canister-set",
    title: "Stoneware Canister Set",
    brand: "Hasami Porcelain",
    price: 145.00,
    category: "Homewares",
    subCategory: "Kitchen",
    collection: ["editors-picks", "design-classics"],
    room: ["kitchen"],
    editorNote: "Three sizes in matte glaze stoneware. For coffee, tea, and sugar, or flour, salt, and spices. Kitchen storage, elevated.",
    description: "Set of three nesting canisters in matte stoneware with wooden lids. Stackable design. Hand-thrown in Japan. Sizes: small, medium, large.",
    attributes: ["Stoneware", "Wood Lids", "Set of 3", "Made in Japan"],
    affiliateLink: "https://www.amazon.ca/dp/B07DCMGBVD?tag=phcfastore-20",
    image: "/products/kitchen-canister-set.jpg",
    badge: "Design Classic",
    featured: false,
    trending: false,
    bestSeller: false
  },

  // 30. Minimalist Wall Clock
  {
    id: "minimalist-wall-clock",
    slug: "minimalist-wall-clock",
    title: "Minimal Dome Wall Clock",
    brand: "Menu",
    price: 129.00,
    category: "Homewares",
    subCategory: "Decor",
    collection: ["best-under-100", "design-classics"],
    room: ["living-room", "kitchen", "workspace"],
    editorNote: "Convex glass dome, brass hands, no numerals. Time-telling as an art form. Quiet sweep movement.",
    description: "Minimalist wall clock with convex glass dome and brushed brass hands. No numbers for clean aesthetic. Silent sweep movement. 12\" diameter.",
    attributes: ["Glass Dome", "Brass Hands", "Silent Movement", "12\" Diameter"],
    affiliateLink: "https://www.amazon.ca/dp/B07BF4QJQM?tag=phcfastore-20",
    image: "/products/minimalist-wall-clock.jpg",
    badge: "Design Classic",
    featured: false,
    trending: false,
    bestSeller: false
  }
];

// Helper functions
export function getProductsByCategory(category: "Wellness" | "Homewares"): Product[] {
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

export function getProductsByRitual(ritual: string): Product[] {
  return ProductManifest.filter(p => p.ritual?.includes(ritual));
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

/**
 * Get the best affiliate link for a product
 * Uses priority-based resolution if multiple links exist
 */
export function getProductAffiliateUrl(product: Product): string {
  // If product has multiple affiliate links, resolve the best one
  if (product.affiliateLinks && product.affiliateLinks.length > 0) {
    return getPrimaryAffiliateUrl(product.affiliateLinks);
  }
  // Fall back to the single affiliate link
  return product.affiliateLink || "#";
}

// Re-export affiliate utilities for convenience
export type { AffiliateNetwork, AffiliateLink, AffiliateConfig } from "./affiliates";
export {
  getEnabledNetworks,
  getConfiguredNetworks,
  buildAmazonLink,
  resolveAffiliateLink,
  getPrimaryAffiliateUrl
} from "./affiliates";
