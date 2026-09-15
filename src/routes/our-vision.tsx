import { createFileRoute } from "@tanstack/react-router";
import { Clock, Home, IndianRupee, Wind } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { VisionCard } from "@/components/VisionCard";
import { CTASection } from "@/components/CTASection";
import { breadcrumbSchema, canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/our-vision")({
  head: () => ({
    meta: pageMeta({
      title: "Aerben Vision | Affordable Clean Air for Indian Homes",
      description:
        "Aerben's long-term vision is to make better living more accessible, including affordable and practical indoor air purification designed for Indian homes.",
      path: "/our-vision",
    }),
    links: canonical("/our-vision"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Our Vision", path: "/our-vision" },
      ]),
    ],
  }),
  component: VisionPage,
});

const problemPoints = [
  {
    title: "Indoor air quality matters",
    description:
      "The air inside our homes is part of daily living, not a seasonal concern.",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "We spend a lot of time indoors",
    description:
      "Homes, offices and classrooms are where most of our day is actually spent.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Pollution isn't only outdoors",
    description:
      "Outdoor pollution, dust and everyday household activity all affect indoor air.",
    icon: <Wind className="h-5 w-5" />,
  },
  {
    title: "Purification can be expensive",
    description:
      "Devices and replacement filters put ongoing purification out of reach for many homes.",
    icon: <IndianRupee className="h-5 w-5" />,
  },
];

function VisionPage() {
  return (
    <>
      <section className="bg-gradient-brand border-b border-border">
        <div className="container py-14 md:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Our vision"
            title="Making Better Living More Accessible"
            description="Aerben exists to bring genuinely useful products to more Indian households — starting with everyday home comfort and moving toward cleaner indoor air."
          />
        </div>
      </section>

      <section className="container section-y">
        <div className="card-surface p-7 sm:p-10">
          <span className="badge-soon">In development</span>
          <h2 className="font-display mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Our goal is to make clean, healthy indoor air affordable and accessible to everyone in
            India.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            This is a direction we are actively working on, not a product on sale today. We would
            rather share our thinking openly than announce something before it is ready.
          </p>
        </div>
      </section>

      <section className="container pb-4">
        <SectionHeading
          eyebrow="The problem we're studying"
          title="Why indoor air is worth our attention"
          description="We're approaching this carefully and without exaggerated claims."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {problemPoints.map((point) => (
            <VisionCard key={point.title} {...point} />
          ))}
        </div>
      </section>

      <section className="container section-y">
        <SectionHeading
          eyebrow="How we work"
          title="Practical, affordable, responsible"
          description="Affordable clean air for every Indian home is our long-term ambition. Getting there means designing for real running costs, real room sizes and real maintenance habits — not just a spec sheet."
        />
        <div className="mt-8 max-w-3xl rounded-2xl border border-border bg-secondary/60 p-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            <strong className="text-foreground">A note on claims:</strong> Aerben does not make
            medical claims. Air purification can help reduce certain airborne particles, but it is
            not a treatment for any medical condition. For health concerns, please consult a
            qualified medical professional.
          </p>
        </div>
      </section>

      <CTASection
        title="Want to follow this journey?"
        description="Get in touch and we'll keep you posted as our air purification work progresses."
        primary={{ label: "Join the Journey", to: "/contact" }}
        secondary={{ label: "See Current Products", to: "/products" }}
      />
    </>
  );
}
