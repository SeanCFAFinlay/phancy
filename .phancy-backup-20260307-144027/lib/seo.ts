import { siteConfig } from "@/lib/config";

function normalizeDomain(domain: string) {
  const d = domain.trim();
  if (d.startsWith("http://") || d.startsWith("https://")) return d.replace(/\/+$/, "");
  // allow localhost:3000 while local
  if (d.startsWith("localhost")) return `http://${d.replace(/\/+$/, "")}`;
  return `https://${d.replace(/\/+$/, "")}`;
}

export function siteBaseUrl(): string {
  return normalizeDomain(siteConfig.domain);
}

export function absUrl(pathname: string): string {
  const base = siteBaseUrl();
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${p}`;
}
