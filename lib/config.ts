export const siteConfig = {
  siteName: "Affiliate Template",
  domain: "example.com",
  niche: "General",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" }
  ],
  categories: [
    { name: "Coffee", slug: "coffee" },
    { name: "Tools", slug: "tools" },
    { name: "Camping", slug: "camping" }
  ],
  defaultMeta: {
    title: "Affiliate Template",
    description: "Buyer guides and reviews with clear disclosures."
  }
} as const;
