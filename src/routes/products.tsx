import { createFileRoute, Link } from "@tanstack/react-router";
import { Baby, Wind } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { EcommerceLinks } from "@/components/EcommerceLinks";
import { CTASection } from "@/components/CTASection";
import { breadcrumbSchema, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: pageMeta({
      title: "Aerben Products | Baby Bedding & Future Air Purification",
      description:
        "Explore Aerben's current baby bedding and home comfort products available on e-commerce marketplaces, plus the affordable air purification range in development.",
      path: "/products",
    }),
    links: canonical("/products"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
      ]),
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-brand border-b border-border">
        <div className="container py-14 md:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Products"
            title="What we sell today, and what we're building"
            description="We keep this page honest: available products are clearly separated from products still in development."
          />
        </div>
      </section>

      <section className="container section-y" aria-labelledby="current-products">
        <h2
          id="current-products"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Current Products
        </h2>

        <article className="card-surface mt-8 p-7 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"
              aria-hidden="true"
            >
              <Baby className="h-6 w-6" />
            </span>
            <span className="badge-available">Available Now</span>
          </div>
          <h3 className="font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl">
            Baby Bedding &amp; Home Comfort
          </h3>
          <div className="mt-4 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground">
            <p>
              Aerben currently offers baby bedding and home comfort products through e-commerce
              channels. These are thoughtfully selected and designed for comfortable, peaceful and
              practical everyday use.
            </p>
            <p>
              Full listings, sizes and pricing are available on the marketplaces where we sell.
            </p>
          </div>
          <div className="mt-7">
            <EcommerceLinks />
          </div>
        </article>
      </section>

      <section className="container pb-4" aria-labelledby="future-products">
        <h2
          id="future-products"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Future Products
        </h2>

        <article className="card-surface mt-8 p-7 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground"
              aria-hidden="true"
            >
              <Wind className="h-6 w-6" />
            </span>
            <span className="badge-soon">Coming Soon</span>
          </div>
          <h3 className="font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl">
            Air Purification
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Aerben is developing affordable air-purification solutions designed with Indian homes and
            everyday use in mind. No specifications, models or pricing have been announced yet.
          </p>
          <Link to="/contact" className="btn-outline mt-7">
            Join the Journey
          </Link>
        </article>
      </section>

      <div className="section-y">
        <CTASection
          title="Not sure where to start?"
          description="Tell us what you're looking for and we'll point you to the right product or marketplace listing."
          primary={{ label: "Contact Us", to: "/contact" }}
          secondary={{ label: "Our Vision", to: "/our-vision" }}
        />
      </div>
    </>
  );
}
