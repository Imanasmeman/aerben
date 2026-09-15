import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import type { ComponentType } from "react";
import { siteConfig, socialLabels, type SocialKey } from "@/lib/siteConfig";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.9 2H22l-6.9 7.9L22.8 22h-6.4l-4.6-6.1L6.3 22H3.2l7.2-8.2L2.1 2h6.5l4.3 5.7L18.9 2Zm-1.1 18h1.7L7.4 3.8H5.6L17.8 20Z" />
    </svg>
  );
}

const icons: Record<SocialKey, ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  x: XIcon,
};

type Props = {
  /** "icons" for compact icon row, "list" for a text list (footer column) */
  variant?: "icons" | "list";
};

/** Renders only the social profiles configured in siteConfig. */
export function SocialLinks({ variant = "icons" }: Props) {
  const entries = (Object.keys(siteConfig.social) as SocialKey[]).filter(
    (key) => siteConfig.social[key],
  );

  if (entries.length === 0) {
    return <p className="text-sm text-muted-foreground">Social profiles coming soon.</p>;
  }

  if (variant === "list") {
    return (
      <ul className="space-y-2.5">
        {entries.map((key) => (
          <li key={key}>
            <a
              href={siteConfig.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {socialLabels[key]}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-wrap items-center gap-2">
      {entries.map((key) => {
        const Icon = icons[key];
        return (
          <li key={key}>
            <a
              href={siteConfig.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLabels[key]}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
