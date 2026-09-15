import { createFileRoute } from "@tanstack/react-router";

/** Public pages included in the sitemap. Add new routes here. */
const pages = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/products", priority: "0.9" },
  { path: "/our-vision", priority: "0.8" },
  { path: "/contact", priority: "0.7" },
  { path: "/blog", priority: "0.5" },
  { path: "/privacy", priority: "0.3" },
  { path: "/terms", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        // Origin is derived from the incoming request, so the sitemap stays
        // correct on preview, on the Lovable domain and on a custom domain.
        const origin = new URL(request.url).origin;

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) =>
      `  <url>\n    <loc>${origin}${page.path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
