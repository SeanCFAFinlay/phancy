import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Phancy | Curated for Modern Living",
  description: "A premium lifestyle brand bridging Nutrition and Home Wares for the modern Canadian entrepreneur. Experience curated wellness and biohacking aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${playfair.variable} bg-phancy-cream text-phancy-black antialiased font-editorial`}
      >
        {children}
      </body>
    </html>
  );
}
