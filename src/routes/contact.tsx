import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { breadcrumbSchema, canonical, pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({
      title: "Contact Aerben | Ahmedabad, India",
      description:
        "Contact Aerben in Ahmedabad, Gujarat for questions about our baby comfort products, partnerships or upcoming air purification products.",
      path: "/contact",
    }),
    links: canonical("/contact"),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact Us", path: "/contact" },
      ]),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-brand border-b border-border">
        <div className="container py-14 md:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Let's Connect"
            description="Have a question about Aerben, our products, partnerships or upcoming products? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="container section-y">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Send us a message</h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Business Enquiries
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm break-all text-muted-foreground hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Follow Aerben</h2>
              <div className="mt-5">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
