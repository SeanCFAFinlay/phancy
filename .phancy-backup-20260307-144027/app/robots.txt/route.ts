import { NextResponse } from "next/server";
import { absUrl } from "@/lib/seo";

export const runtime = "nodejs";

export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${absUrl("/sitemap.xml")}
`;
  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
