import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { site } from "@/lib/site";

export const metadata = {
  title: site.title,
  description: site.description,
  applicationName: "Phancy",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Phancy"
  },
  icons: {
    icon: "/products/placeholder-product.svg",
    apple: "/products/placeholder-product.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="phancy-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}