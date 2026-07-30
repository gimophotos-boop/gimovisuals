import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gimovisuals.es",
      priority: 1,
    },
    {
      url: "https://gimovisuals.es/automocion",
      priority: 0.9,
    },
    {
      url: "https://gimovisuals.es/inmobiliarias",
      priority: 0.9,
    },
    {
      url: "https://gimovisuals.es/bodas",
      priority: 0.9,
    },
    {
      url: "https://gimovisuals.es/retratos",
      priority: 0.8,
    },
    {
      url: "https://gimovisuals.es/deporte",
      priority: 0.8,
    },
    {
      url: "https://gimovisuals.es/negocios",
      priority: 0.8,
    },
  ];
}