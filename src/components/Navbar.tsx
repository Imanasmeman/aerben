import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/siteConfig";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4 sm:h-18">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link" activeProps={{ "data-active": "true" }}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/products" className="btn-primary">
            Explore Products
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Main" className="container flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                activeProps={{ "data-active": "true" }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/products" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">
              Explore Products
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
