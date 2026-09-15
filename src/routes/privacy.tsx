import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/SectionHeading";
import { canonical, pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: pageMeta({
      title: "Privacy Policy | Aerben",
      description:
        "Learn how Aerben handles information you share when visiting our website or contacting our team.",
      path: "/privacy",
    }),
    links: canonical("/privacy"),
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="container section-y">
      <SectionHeading
        as="h1"
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Aerben handles information when you visit this website or contact us."
      />
      <div className="mt-8 max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Information you share</h2>
          <p className="mt-3">
            If you contact Aerben by email, we receive the details you choose to include, such as your
            name, email address, phone number and message. We use this information only to respond to
            your enquiry and continue the conversation you requested.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Website forms</h2>
          <p className="mt-3">
            The contact form prepares an email on your device. It is not connected to a storage
            service, so typing into or submitting the form does not store your message on this website.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">External websites</h2>
          <p className="mt-3">
            Links to marketplaces or social platforms lead to services operated by other companies.
            Their privacy policies apply when you visit those services.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Your questions</h2>
          <p className="mt-3">
            For a privacy-related question, or to ask us to delete an email you sent, write to{" "}
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
