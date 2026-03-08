import { site } from "./site";

export function withAffiliateTag(url: string) {
  if (!url || url === "#") return "#";

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("tag", site.affiliateTag);
    return parsed.toString();
  } catch {
    return url;
  }
}