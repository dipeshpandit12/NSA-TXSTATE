import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Auto-served at /manifest.webmanifest and linked in <head> by Next.
// Icons live in public/ (predictable URLs). Colors use the brand palette.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7f0", // paper (matches --background)
    theme_color: "#5a1a1b", // maroon (matches --primary)
    icons: [
      { src: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
