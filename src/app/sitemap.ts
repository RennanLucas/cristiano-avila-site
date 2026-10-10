import type { MetadataRoute } from "next";
import { ARTICLES_DATA, SPECIALTIES_DATA } from "@/data/content";
import { isPublicSpecialty, SITE_URL } from "@/lib/site-policy";

function articleDate(date: string) {
  const [day, month, year] = date.split("/");
  return new Date(`${year}-${month}-${day}T00:00:00-03:00`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/sobre",
    "/unidades",
    "/contato",
    "/blog",
    "/politica-de-privacidade",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const specialtyPages: MetadataRoute.Sitemap = SPECIALTIES_DATA
    .filter((item) => isPublicSpecialty(item.id))
    .map((item) => ({
      url: `${SITE_URL}/especialidades/${item.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const articlePages: MetadataRoute.Sitemap = ARTICLES_DATA.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: articleDate(article.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...specialtyPages, ...articlePages];
}
