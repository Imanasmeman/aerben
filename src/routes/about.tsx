import { createFileRoute } from "@tanstack/react-router";
import { HandCoins, Lightbulb, Leaf, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { VisionCard } from "@/components/VisionCard";
import { Timeline } from "@/components/Timeline";
import { CTASection } from "@/components/CTASection";
import { breadcrumbSchema, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({
      title: "About Aerben | Indian Consumer Products Brand",
      description:
        "Aerben is an Indian consumer-products company from Ahmedabad focused on affordability, practical innovation, quality and responsible thinking for modern homes.",
      path: "/about",
    }),
    links: canonical("/about"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
      ]),
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Affordability",
    description: "Useful products should be accessible to more people.",
    icon: <HandCoins className="h-5 w-5" />,
  },
  {
    title: "Practical Innovation",
    description:
      "Technology should solve real problems rather than simply add complexity.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    title: "Quality",
    description: "Affordable should never mean careless.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Responsible Thinking",
    description:
      "We consider product longevity, materials, energy use and environmental impact.",
    icon: <Leaf className="h-5 w-5" />,
  },
];

const journey = [
  { stage: "Today", description: "Baby bedding and home comfort products." },
  { stage: "Next", description: "Product development and expansion." },
  { stage: "Future", description: "Affordable air purification solutions." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-brand border-b border-border">
        <div className="container py-14 md:py-20">
          <SectionHeading
            as="h1"
            eyebrow="About us"
            title="A consumer brand built on practical thinking"
            description="Aerben is an Indian consumer brand focused on creating practical products that improve everyday living."
          />
        </div>
      </section>

      <section className="container section-y">
        <SectionHeading title="Who We Are" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Aerben is an Indian consumer-products company focused on practical innovation and
            affordability. We are based in Ahmedabad, Gujarat.
          </p>
          <p>
            We believe good products should not be unnecessarily expensive or complicated. Our goal
            is to combine thoughtful design, useful technology and responsible manufacturing to
            create products that are accessible to more Indian households.
          </p>
          <p>
            Today we operate in consumer and home products — primarily baby bedding and home comfort
            — sold through e-commerce channels. Alongside this, we are expanding our work toward
            indoor air quality and affordable air purification.
          </p>
        </div>
      </section>

      <section className="container pb-4">
        <SectionHeading eyebrow="Our principles" title="What We Believe" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <VisionCard key={value.title} {...value} />
          ))}
        </div>
      </section>

      <section className="container section-y">
        <SectionHeading
          eyebrow="Where we are heading"
          title="Our Journey"
          description="A simple, honest view of our direction — without invented milestones."
        />
        <div className="mt-10 max-w-2xl">
          <Timeline steps={journey} />
        </div>
      </section>

      <CTASection
        title="Want to work with us?"
        description="We're open to conversations about products, retail partnerships and manufacturing."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "See Our Products", to: "/products" }}
      />
    </>
  );
}
