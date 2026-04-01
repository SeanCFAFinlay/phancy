import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Phancy | Curated Wellness & Homewares",
  description: "A curated destination for wellness essentials and design-forward homewares. Objects for calmer living, chosen for aesthetics, utility, and warmth.",
  keywords: ["wellness", "homewares", "home decor", "interior design", "lifestyle", "curated", "design"],
  authors: [{ name: "Phancy" }],
  openGraph: {
    title: "Phancy | Curated Wellness & Homewares",
    description: "Objects for calmer living. A curated destination for wellness essentials and design-forward homewares.",
    type: "website",
    locale: "en_CA",
    siteName: "Phancy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
