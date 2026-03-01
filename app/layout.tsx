 param($m) $m.Value + "`nimport { Inter } from `"next/font/google`";`n`nconst inter = Inter({ subsets: [`"latin`"], weight: [`"400`", `"500`", `"600`", `"700`", `"800`", `"900`"] });`n" export const metadata: Metadata = {
  title: {
    default: config.defaultMeta.title,
    template: `%s | ${config.siteName}`,
  },
  description: config.defaultMeta.description,
  metadataBase: new URL(config.domain),
  openGraph: {
    type: "website",
    locale: config.locale,
    url: config.domain,
    siteName: config.siteName,
    title: config.defaultMeta.title,
    description: config.defaultMeta.description,
    images: [
      {
        url: config.defaultMeta.ogImage,
        width: 1200,
        height: 630,
        alt: config.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.defaultMeta.title,
    description: config.defaultMeta.description,
    images: [config.defaultMeta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={config.language} className="scroll-smooth">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

