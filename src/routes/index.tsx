import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Baby, HandCoins, Home, Leaf, Wind } from "lucide-react";

import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductDirection } from "@/components/ProductDirection";
import { VisionCard } from "@/components/VisionCard";
import { EcommerceLinks } from "@/components/EcommerceLinks";
import { CTASection } from "@/components/CTASection";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Aerben | Better Products for Better Living",
      description:
        "Aerben is an Indian consumer brand creating practical, affordable products for modern homes, with baby comfort products available today and affordable air purification solutions coming soon.",
      path: "/",
    }),
    links: canonical("/"),
  }),
  component: Index,
});

const trustSignals = [
  {
    title: "Designed with Purpose",
    description:
      "Every product starts with a real need in an Indian home, not with a feature list.",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    title: "Built Around Real Everyday Needs",
    description: "Simple to use, easy to maintain and made for daily family life.",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Focused on Affordability",
    description: "We work to keep useful products within reach of more households.",
    icon: <HandCoins className="h-5 w-5" />,
  },
  {
    title: "Responsible Thinking",
    description:
      "We consider materials, product longevity and energy use while developing products.",
    icon: <Leaf className="h-5 w-5" />,
  },
];

function Index() {
  return (
    <>
      <Hero />

      <section className="container section-y">
        <SectionHeading
          eyebrow="Who we are"
          title="A practical Indian brand for everyday living"
          description="Aerben is an Indian consumer brand focused on creating practical products that improve everyday living. We currently work in baby and home comfort products, and we are developing solutions for cleaner indoor air."
        />
      </section>

      <section className="container pb-4" aria-labelledby="directions-heading">
        <SectionHeading
          eyebrow="Our product directions"
          title={<span id="directions-heading">Building for Today&apos;s Homes. Designing for Tomorrow.</span>}
          description="We are clear about what you can buy today and what we are still building."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ProductDirection
            title="Baby & Home Comfort"
            description="Thoughtfully selected and designed products for comfortable, peaceful and practical homes."
            status="available"
            statusLabel="Available Now"
            cta={{ label: "Shop Products", to: "/products" }}
            icon={<Baby className="h-6 w-6" />}
          />
          <ProductDirection
            title="Affordable Air Purification"
            description="We're working toward making clean, healthy indoor air more affordable and accessible for Indian homes."
            status="coming-soon"
            statusLabel="Coming Soon"
            cta={{ label: "Explore Our Vision", to: "/our-vision" }}
            icon={<Wind className="h-6 w-6" />}
          />
        </div>
      </section>

      <section className="container section-y">
        <SectionHeading
          eyebrow="Why Aerben"
          title="Made for Indian homes"
          description="We are a young brand, so instead of big claims we would rather tell you how we work."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((item) => (
            <VisionCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="container">
        <div className="card-surface grid gap-8 p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="badge-soon">Coming Soon</span>
            <h2 className="font-display mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Affordable clean air for every Indian home.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Families spend a large part of their day indoors, and indoor air quality matters year
              round. Good air purification is often expensive, so we are exploring practical and
              affordable approaches designed for Indian homes and everyday use.
            </p>
            <Link to="/our-vision" className="btn-primary mt-7">
              Read our vision
            </Link>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <li className="rounded-2xl border border-border bg-secondary/60 p-4">
              Air pollution is not only an outdoor problem — it follows us indoors.
            </li>
            <li className="rounded-2xl border border-border bg-secondary/60 p-4">
              Purification products are often priced beyond many households.
            </li>
            <li className="rounded-2xl border border-border bg-secondary/60 p-4">
              No product specifications or pricing are announced yet. We&apos;ll share details when
              the product is genuinely ready.
            </li>
          </ul>
        </div>
      </section>

      <section className="container section-y">
        <SectionHeading
          eyebrow="Shop today"
          title="Buy our current products online"
          description="Our baby bedding and home comfort range is sold through e-commerce marketplaces."
        />
        <div className="mt-8">
          <EcommerceLinks />
        </div>
      </section>

      <CTASection
        title="Have a question or an idea?"
        description="Whether it's about our current products, partnerships or what we're building next, we'd love to hear from you."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Read Our Story", to: "/about" }}
      />
    </>
  );
}
