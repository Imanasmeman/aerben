import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/lib/siteConfig";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  /** Render as a link to the homepage (default: true) */
  asLink?: boolean;
};

export function Logo({ variant = "light", className, asLink = true }: LogoProps) {
  const img = (
    <img
      src={variant === "dark" ? siteConfig.logo.dark : siteConfig.logo.light}
      alt={`${siteConfig.name} logo`}
      width={224}
      height={111}
      className={className ?? "h-10 w-auto"}
    />
  );

  if (!asLink) return img;

  return (
    <Link to="/" aria-label={`${siteConfig.name} — home`} className="inline-flex items-center">
      {img}
    </Link>
  );
}
