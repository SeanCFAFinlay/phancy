export const siteConfig = {
  siteName: "Affiliate Template",
  domain: "localhost:3000",
  niche: "Starter Amazon Affiliate Site",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Coffee", href: "/category/coffee" },
    { label: "Tools", href: "/category/tools" },
    { label: "Camping", href: "/category/camping" },
    { label: "Disclosure", href: "/affiliate-disclosure" },
  ],
  categories: [
    { name: "Coffee", slug: "coffee" },
    { name: "Tools", slug: "tools" },
    { name: "Camping", slug: "camping" },
  ],
  defaultMeta: {
    title: "Affiliate Template",
    description: "Buyer-intent guides and reviews with clear disclosures.",
  },
} as const;
