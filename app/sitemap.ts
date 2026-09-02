import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yatinduawrites.com";
  const lastModified = new Date("2026-09-01");

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/writing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/writing/important-sentence`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/writing/vancouver-election-question`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/writing/pass-rate`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/writing/community-care`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/cv`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
