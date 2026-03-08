import { NextResponse } from "next/server";
import { getAllPosts, getCategorySlugs } from "@/lib/content";
import { absUrl } from "@/lib/seo";

export const runtime = "nodejs";

export async function GET() {
  const posts = getAllPosts();
  const categories = getCategorySlugs();

  const urls = [
    "/",
    "/affiliate-disclosure",
    "/privacy",
    "/terms",
    ...categories.map((c) => `/category/${c}`),
    ...posts.map((p) => `/${p.type}/${p.slug}`),
  ];

  const lastMod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${absUrl(u)}</loc><lastmod>${lastMod}</lastmod></url>`).join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
