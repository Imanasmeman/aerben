import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { breadcrumbSchema, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: pageMeta({
      title: "Aerben Insights | Home Comfort & Indoor Air Notes",
      description:
        "Aerben Insights is our upcoming blog on indoor air quality in India, home comfort, baby sleep and practical product-care guides.",
      path: "/blog",
    }),
    links: canonical("/blog"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Aerben Insights", path: "/blog" },
      ]),
    ],
  }),
  component: BlogPage,
});

/**
 * Placeholder index for future articles.
 * To add a blog with real posts later, create src/routes/blog.$slug.tsx and
 * render a list of posts here.
 */
const plannedTopics = [
  "Indoor air quality in Indian homes",
  "Air pollution and everyday living",
  "How to choose an air purifier",
  "HEPA filtration, explained simply",
  "Baby sleep and comfortable bedding",
  "Caring for bedding and home textiles",
];

function BlogPage() {
  return (
    <>
      <section className="bg-gradient-brand border-b border-border">
        <div className="container py-14 md:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Aerben Insights"
            title="Useful reading, launching soon"
            description="We're preparing a small library of practical, carefully researched articles about home comfort and indoor air. Nothing is published yet."
          />
        </div>
      </section>

      <section className="container section-y">
        <SectionHeading title="Topics we plan to cover" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {plannedTopics.map((topic) => (
            <li key={topic} className="card-surface p-5 text-base text-foreground">
              {topic}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          We will only publish health-related information with reliable sources, and we will not make
          medical claims.
        </p>
      </section>

      <CTASection
        title="Something you'd like us to write about?"
        description="Send us your question and we may cover it in one of our first articles."
        primary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
