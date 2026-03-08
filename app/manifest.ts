import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phancy",
    short_name: "Phancy",
    description: "Canadian wellness, vitamins, supplements, and beauty-health picks.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff8fb",
    theme_color: "#e91e63",
    orientation: "portrait",
    icons: [
      {
        src: "/products/placeholder-product.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ]
  };
}