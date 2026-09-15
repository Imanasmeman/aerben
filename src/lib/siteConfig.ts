import aerbenLogo from "@/assets/aerben-logo.png";

/**
 * CENTRAL CONFIGURATION
 * ---------------------
 * This is the only file you need to edit to update links, contact details
 * or brand info across the whole website.
 *
 * Leave a value as an empty string ("") and the website will automatically
 * hide that link instead of showing a broken one.
 */

export const siteConfig = {
  name: "Aerben",
  legalName: "Aerben Solutions Pvt. Ltd.",
  tagline: "Better Products for Better Living.",
  description:
    "Aerben is an Indian consumer brand creating practical, affordable products for modern homes.",

  // Public website URL. Leave "" until a custom domain is connected.
  url: "",

  email: "info@aerben.com",
  location: "Ahmedabad, Gujarat, India",

  logo: {
    light: aerbenLogo,
    dark: aerbenLogo,
  },

  // Social profiles — paste full URLs (https://...) when accounts are ready.
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    x: "",
  },

  // Marketplace / store links — paste full URLs when listings are live.
  ecommerce: {
    amazon: "",
    flipkart: "",
    website: "",
  },
} as const;

export type SocialKey = keyof typeof siteConfig.social;
export type EcommerceKey = keyof typeof siteConfig.ecommerce;

export const socialLabels: Record<SocialKey, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  x: "X (Twitter)",
};

export const ecommerceLabels: Record<EcommerceKey, string> = {
  amazon: "Shop on Amazon",
  flipkart: "Shop on Flipkart",
  website: "Shop Online",
};

/** Social URLs that are actually configured — used for Organization sameAs. */
export const configuredSocialUrls = (Object.values(siteConfig.social) as string[]).filter(
  (url) => url.length > 0,
);

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Our Vision", to: "/our-vision" },
  { label: "Contact Us", to: "/contact" },
] as const;
