export type Category = "coffee" | "tools" | "camping";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  priceUSD: number; // mock
  priceNote?: string; // e.g. "Usually under $50" or "Guide page"
  image: string; // placeholder image
  affiliateUrl: string; // placeholder link
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  badges?: string[];
  type: "best" | "review";
  updatedAt: string; // ISO date
};

const img = (seed: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/900/600`;

export const products: Product[] = [
  // COFFEE (7)
  {
    id: "p-cof-001",
    slug: "goblin-grinder-mini",
    name: "Goblin Grinder Mini",
    category: "coffee",
    tagline: "A hand grinder that sounds like it’s judging you.",
    description:
      "Tiny burr grinder with an aggressively enthusiastic crank. Makes espresso-fine grinds and existential dread.",
    priceUSD: 39.99,
    priceNote: "Usually under $45",
    image: img("Goblin Grinder Mini"),
    affiliateUrl: "https://example.com/affiliate/goblin-grinder-mini",
    pros: ["Surprisingly consistent grind", "Pocketable", "Feels indestructible"],
    cons: ["Crank squeaks like a haunted violin", "Small capacity"],
    specs: { Burr: "Steel conical", Capacity: "18g", Weight: "410g" },
    badges: ["Weirdly Good", "Budget Pick"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cof-002",
    slug: "espresso-sumo-tamper",
    name: "Espresso Sumo Tamper",
    category: "coffee",
    tagline: "Overbuilt. Overconfident. Over-tamped.",
    description:
      "A heavyweight tamper that makes you feel like you’re bench-pressing crema. Ridiculously satisfying.",
    priceUSD: 29.5,
    image: img("Espresso Sumo Tamper"),
    affiliateUrl: "https://example.com/affiliate/espresso-sumo-tamper",
    pros: ["Perfectly flat base", "Comfortable grip", "Feels premium"],
    cons: ["Too heavy for sleepy mornings", "No stand included"],
    specs: { Size: "58mm", Material: "Stainless + wood", Weight: "780g" },
    badges: ["Editor’s Pick"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cof-003",
    slug: "barista-bunny-scale",
    name: "Barista Bunny Scale",
    category: "coffee",
    tagline: "It beeps like a polite rabbit.",
    description:
      "Fast response coffee scale with timer. The ‘bunny beep’ is strangely encouraging.",
    priceUSD: 24.99,
    image: img("Barista Bunny Scale"),
    affiliateUrl: "https://example.com/affiliate/barista-bunny-scale",
    pros: ["Quick refresh rate", "Built-in timer", "Easy to read"],
    cons: ["Bunny beep cannot be silenced (why would you?)"],
    specs: { Max: "3kg", Resolution: "0.1g", Power: "USB-C" },
    badges: ["Best Value"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cof-004",
    slug: "mug-of-doom-thermal",
    name: "Mug of Doom (Thermal)",
    category: "coffee",
    tagline: "Keeps coffee hot. Keeps feelings cold.",
    description:
      "Vacuum insulated mug with a lid that seals tighter than your group chat secrets.",
    priceUSD: 19.99,
    image: img("Mug of Doom Thermal"),
    affiliateUrl: "https://example.com/affiliate/mug-of-doom-thermal",
    pros: ["Great heat retention", "Leak resistant", "Easy cleanup"],
    cons: ["Lid requires a physics degree at first"],
    specs: { Volume: "16 oz", Insulation: "Double-wall", Lid: "Locking" },
    badges: ["Commute King"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cof-005",
    slug: "space-owl-milk-frother",
    name: "Space Owl Milk Frother",
    category: "coffee",
    tagline: "Whirs like a UFO landing in your latte.",
    description:
      "Handheld frother that turns any milk into suspiciously fluffy clouds.",
    priceUSD: 14.99,
    image: img("Space Owl Milk Frother"),
    affiliateUrl: "https://example.com/affiliate/space-owl-milk-frother",
    pros: ["Cheap and effective", "Easy storage", "Strong motor"],
    cons: ["Eats batteries like popcorn"],
    specs: { Speed: "1 mode (chaos)", Power: "AA batteries", Use: "Milk / matcha" },
    badges: ["Cheap Thrills"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cof-006",
    slug: "drip-wizard-kettle",
    name: "Drip Wizard Kettle",
    category: "coffee",
    tagline: "Gooseneck precision for dramatic pours.",
    description:
      "Temperature control kettle with a spout that pours like it’s doing calligraphy.",
    priceUSD: 69.0,
    image: img("Drip Wizard Kettle"),
    affiliateUrl: "https://example.com/affiliate/drip-wizard-kettle",
    pros: ["Great pour control", "Temp hold", "Looks slick on counter"],
    cons: ["Slow to heat max volume"],
    specs: { Capacity: "1.0L", Control: "±1°C", Hold: "60 min" },
    badges: ["Best for Pour-Over"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cof-007",
    slug: "best-espresso-grinders-2026",
    name: "Best Espresso Grinders (2026)",
    category: "coffee",
    tagline: "Money page: pick the right grinder without crying.",
    description:
      "A practical, buyer-intent list of grinders at different budgets (mock items included).",
    priceUSD: 0,
    priceNote: "Guide page",
    image: img("Best Espresso Grinders 2026"),
    affiliateUrl: "#",
    pros: ["Clear picks by budget", "What to avoid", "Checklist included"],
    cons: ["You’ll want to buy three grinders"],
    specs: { Format: "Top 10 list", Updated: "Monthly", Notes: "No fake Amazon ratings" },
    badges: ["Best Guide"],
    type: "best",
    updatedAt: "2026-03-01",
  },

  // TOOLS (7)
  {
    id: "p-tol-001",
    slug: "ratchet-sandwich-9000",
    name: "Ratchet Sandwich 9000",
    category: "tools",
    tagline: "A multitool that *should not* be near lunch.",
    description:
      "Fold-out multitool with suspicious ‘crumb-friendly’ grooves. Actually handy, morally questionable.",
    priceUSD: 22.0,
    image: img("Ratchet Sandwich 9000"),
    affiliateUrl: "https://example.com/affiliate/ratchet-sandwich-9000",
    pros: ["Lots of bits", "Solid build", "Great for quick fixes"],
    cons: ["Looks like food", "Pinch hazard for the brave"],
    specs: { Bits: "24", Material: "Stainless", Lock: "Liner lock" },
    badges: ["Chaos Utility"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-tol-002",
    slug: "laser-level-of-truth",
    name: "Laser Level of Truth",
    category: "tools",
    tagline: "It judges your walls and your life choices.",
    description:
      "Self-leveling laser that reveals every crooked shelf you’ve ever installed.",
    priceUSD: 49.99,
    image: img("Laser Level of Truth"),
    affiliateUrl: "https://example.com/affiliate/laser-level-of-truth",
    pros: ["Bright line", "Self-leveling", "Good battery life"],
    cons: ["Makes you notice everything is not square"],
    specs: { Range: "30m", Mode: "Cross-line", Mount: "Tripod thread" },
    badges: ["DIY Saver"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-tol-003",
    slug: "hamster-impact-driver",
    name: "Hamster Impact Driver",
    category: "tools",
    tagline: "Tiny torque, huge attitude.",
    description:
      "Compact impact driver that feels like a toy until it rips a screw into next week.",
    priceUSD: 79.0,
    image: img("Hamster Impact Driver"),
    affiliateUrl: "https://example.com/affiliate/hamster-impact-driver",
    pros: ["Compact", "Plenty of torque", "Great ergonomics"],
    cons: ["Loud enough to summon neighbors"],
    specs: { Voltage: "12V", Torque: "140 Nm", Weight: "1.1 kg" },
    badges: ["Best Compact"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-tol-004",
    slug: "duct-tape-tuxedo-roll",
    name: "Duct Tape Tuxedo Roll",
    category: "tools",
    tagline: "Classy repairs only.",
    description:
      "Black-on-black duct tape for when you want your emergency fix to look intentional.",
    priceUSD: 9.99,
    image: img("Duct Tape Tuxedo Roll"),
    affiliateUrl: "https://example.com/affiliate/duct-tape-tuxedo-roll",
    pros: ["Strong adhesive", "Looks clean", "Weather resistant"],
    cons: ["Will make you tape everything"],
    specs: { Width: "2 in", Length: "30 yd", Finish: "Matte" },
    badges: ["Budget Fix"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-tol-005",
    slug: "wrench-wizard-set",
    name: "Wrench Wizard Set",
    category: "tools",
    tagline: "Sockets for every bolt… including the cursed ones.",
    description:
      "A neatly labeled socket kit that makes you feel competent even when you aren’t.",
    priceUSD: 34.5,
    image: img("Wrench Wizard Set"),
    affiliateUrl: "https://example.com/affiliate/wrench-wizard-set",
    pros: ["Well organized", "Good coverage", "Nice case"],
    cons: ["Case latch is dramatic"],
    specs: { Pieces: "64", Drive: "1/4 + 3/8", Case: "Molded" },
    badges: ["Starter Kit"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-tol-006",
    slug: "saw-of-small-regrets",
    name: "Saw of Small Regrets",
    category: "tools",
    tagline: "Cuts clean. Regrets optional.",
    description:
      "Compact pull saw that slices wood like butter and your weekend plans like paper.",
    priceUSD: 18.75,
    image: img("Saw of Small Regrets"),
    affiliateUrl: "https://example.com/affiliate/saw-of-small-regrets",
    pros: ["Clean cuts", "Great control", "Sharp out of box"],
    cons: ["Blade cover feels flimsy"],
    specs: { Blade: "10 in", Teeth: "Fine", Style: "Pull saw" },
    badges: ["Best for Trim"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-tol-007",
    slug: "best-diy-tools-starter-kit",
    name: "Best DIY Tools Starter Kit",
    category: "tools",
    tagline: "Money page: start fixing stuff without overbuying.",
    description:
      "A buyer-intent list of tools you’ll actually use (and what to skip).",
    priceUSD: 0,
    priceNote: "Guide page",
    image: img("Best DIY Tools Starter Kit"),
    affiliateUrl: "#",
    pros: ["Essentials only", "Budget tiers", "Checklist included"],
    cons: ["May cause sudden home improvement confidence"],
    specs: { Format: "Top 10 list", Updated: "Monthly", Notes: "No fake store reviews" },
    badges: ["Best Guide"],
    type: "best",
    updatedAt: "2026-03-01",
  },

  // CAMPING (6)
  {
    id: "p-cam-001",
    slug: "tent-of-mild-anxiety",
    name: "Tent of Mild Anxiety",
    category: "camping",
    tagline: "Sets up fast. Sleeps… with trust issues.",
    description:
      "Quick-pitch tent that’s solid in good weather and emotionally supportive in bad weather (mostly).",
    priceUSD: 89.99,
    image: img("Tent of Mild Anxiety"),
    affiliateUrl: "https://example.com/affiliate/tent-of-mild-anxiety",
    pros: ["Fast setup", "Good ventilation", "Spacious for 2"],
    cons: ["Rainfly instructions read like riddles"],
    specs: { Capacity: "2–3", Setup: "3 min", Weight: "3.2 kg" },
    badges: ["Best Quick-Pitch"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cam-002",
    slug: "marshmallow-flamethrower-stick",
    name: "Marshmallow Flamethrower Stick",
    category: "camping",
    tagline: "For people who hate waiting politely.",
    description:
      "Telescoping roasting stick with a heat reflector that toasts marshmallows at suspicious speed.",
    priceUSD: 12.99,
    image: img("Marshmallow Flamethrower Stick"),
    affiliateUrl: "https://example.com/affiliate/marshmallow-flamethrower-stick",
    pros: ["Fun", "Adjustable length", "Easy clean"],
    cons: ["Kids become fire wizards"],
    specs: { Length: "12–34 in", Material: "Steel", Tip: "Dual prong" },
    badges: ["Camp Comedy"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cam-003",
    slug: "sleeping-bag-burrito-pro",
    name: "Sleeping Bag Burrito Pro",
    category: "camping",
    tagline: "Wrap yourself like a confident tortilla.",
    description:
      "Warm sleeping bag with a snug hood. You will wake up as a human burrito. No refunds.",
    priceUSD: 59.0,
    image: img("Sleeping Bag Burrito Pro"),
    affiliateUrl: "https://example.com/affiliate/sleeping-bag-burrito-pro",
    pros: ["Warm for the price", "Soft lining", "Compresses well"],
    cons: ["Zipper occasionally wrestles you"],
    specs: { Rating: "20°F / -6°C", Fill: "Synthetic", Weight: "1.6 kg" },
    badges: ["Best Budget Warmth"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cam-004",
    slug: "lantern-of-unnecessary-drama",
    name: "Lantern of Unnecessary Drama",
    category: "camping",
    tagline: "It has a ‘thunderstorm’ mode. Why.",
    description:
      "Rechargeable lantern with brightness levels and a silly lightning flicker. Still a great lantern.",
    priceUSD: 21.25,
    image: img("Lantern of Unnecessary Drama"),
    affiliateUrl: "https://example.com/affiliate/lantern-of-unnecessary-drama",
    pros: ["Very bright", "Long battery life", "USB-C"],
    cons: ["Lightning mode scares dogs"],
    specs: { Brightness: "600 lm", Battery: "4000 mAh", Modes: "5" },
    badges: ["Best Lantern"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cam-005",
    slug: "pocket-stove-gremlin",
    name: "Pocket Stove Gremlin",
    category: "camping",
    tagline: "Tiny stove. Big ‘I can survive’ energy.",
    description:
      "Ultralight canister stove that boils fast and looks like a metal spider.",
    priceUSD: 17.5,
    image: img("Pocket Stove Gremlin"),
    affiliateUrl: "https://example.com/affiliate/pocket-stove-gremlin",
    pros: ["Lightweight", "Fast boil", "Stable supports"],
    cons: ["Wind hates it (use a shield)"],
    specs: { Weight: "90g", Output: "3000W", Fuel: "Isobutane" },
    badges: ["Ultralight Pick"],
    type: "review",
    updatedAt: "2026-03-01",
  },
  {
    id: "p-cam-006",
    slug: "best-camping-gadgets-2026",
    name: "Best Camping Gadgets (2026)",
    category: "camping",
    tagline: "Money page: fun gear that’s actually useful.",
    description:
      "A buyer-intent guide of camping gear that improves comfort without packing a whole house.",
    priceUSD: 0,
    priceNote: "Guide page",
    image: img("Best Camping Gadgets 2026"),
    affiliateUrl: "#",
    pros: ["Comfort-focused picks", "Budget tiers", "Packing notes"],
    cons: ["You’ll want to camp immediately"],
    specs: { Format: "Top 10 list", Updated: "Monthly", Notes: "No fake marketplace ratings" },
    badges: ["Best Guide"],
    type: "best",
    updatedAt: "2026-03-01",
  },
];

export const categories = [
  { slug: "coffee" as const, name: "Coffee", description: "Grinders, kettles, gadgets, and chaotic mugs." },
  { slug: "tools" as const, name: "Tools", description: "DIY essentials and questionable inventions." },
  { slug: "camping" as const, name: "Camping", description: "Gear for outdoorsy legends and indoor people." },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const getByCategory = (cat: Category) => products.filter((p) => p.category === cat);

export const getBestGuides = () => products.filter((p) => p.type === "best");
export const getReviews = () => products.filter((p) => p.type === "review");
