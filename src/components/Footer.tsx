import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { ecommerceLabels, navLinks, siteConfig, type EcommerceKey } from "@/lib/siteConfig";

const shopKeys: EcommerceKey[] = ["amazon", "flipkart", "website"];

export function Footer() {
  const shops = shopKeys.filter((key) => siteConfig.ecommerce[key]);

  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{siteConfig.tagline}</p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="footer-heading">Explore</h2>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/blog" className="footer-link">
                Aerben Insights
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">Shopping</h2>
          {shops.length > 0 ? (
            <ul className="space-y-2.5">
              {shops.map((key) => (
                <li key={key}>
                  <a
                    href={siteConfig.ecommerce[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {ecommerceLabels[key]}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              Marketplace links coming soon.
            </p>
          )}
        </div>

        <div>
          <h2 className="footer-heading">Company</h2>
          <p className="text-sm text-foreground">{siteConfig.legalName}</p>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.location}</p>
          <a href={`mailto:${siteConfig.email}`} className="footer-link mt-3 inline-block">
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="footer-link">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
