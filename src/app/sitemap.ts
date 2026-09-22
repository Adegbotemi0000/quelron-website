import type { MetadataRoute } from "next";
import { subsidiaries } from "@/data/subsidiaries";

const base = "https://www.quelrongroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/book-session"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const subsidiaryRoutes = subsidiaries.map((s) => ({
    url: `${base}/subsidiaries/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...subsidiaryRoutes];
}
