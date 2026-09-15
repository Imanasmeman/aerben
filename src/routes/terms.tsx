import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/SectionHeading";
import { canonical, pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: pageMeta({
      title: "Terms & Conditions | Aerben",
      description:
        "Read the terms that apply when using the Aerben website and following links to marketplace product listings.",
      path: "/terms",
    }),
    links: canonical("/terms"),
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="container section-y">
      <SectionHeading
        as="h1"
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms that apply when you use the Aerben website."
      />
      <div className="mt-8 max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Website information</h2>
          <p className="mt-3">
            This website provides general information about Aerben, its current product direction and
            products in development. We aim to keep it accurate, but information may change as our work
            progresses.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Products in development</h2>
          <p className="mt-3">
            Items marked “Coming Soon” or “In development” are not offers for sale. Any descriptions
            are statements of direction, not final specifications, prices or launch commitments.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Marketplace purchases</h2>
          <p className="mt-3">
            Purchases of Aerben products are currently completed on third-party marketplaces, and those
            marketplaces&apos; own terms, shipping and returns policies apply to your order.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">
            Questions? Write to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
