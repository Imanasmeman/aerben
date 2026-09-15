import { configuredSocialUrls, siteConfig } from "./siteConfig";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

/** Builds a consistent per-page meta array (title, description, OG, Twitter). */
export function pageMeta({ title, description, path, type = "website" }: MetaInput) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:site_name", content: siteConfig.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export function canonical(path: string) {
  return [{ rel: "canonical", href: path }];
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.path,
      })),
    }),
  };
}

export const organizationSchema = {
  type: "application/ld+json" as const,
  children: JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        description: siteConfig.description,
        logo: siteConfig.logo.light,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        ...(siteConfig.url ? { url: siteConfig.url } : {}),
        ...(configuredSocialUrls.length ? { sameAs: configuredSocialUrls } : {}),
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        description: siteConfig.description,
        ...(siteConfig.url ? { url: siteConfig.url } : {}),
      },
    ],
  }),
};
