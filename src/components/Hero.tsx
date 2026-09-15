import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-home.jpg";

export function Hero() {
  return (
    <section className="bg-gradient-brand border-b border-border">
      <div className="container grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="fade-up">
          <p className="eyebrow">An Indian consumer brand</p>
          <h1 className="font-display text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Better Products for Better Living.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aerben creates practical, affordable products designed to make everyday life better for
            modern Indian homes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="btn-primary">
              Explore Our Products
            </Link>
            <Link to="/about" className="btn-outline">
              Learn About Aerben
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/70 px-4 py-3">
              <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Available now
              </dt>
              <dd className="font-display mt-1 text-base font-semibold text-foreground">
                Baby &amp; home comfort
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-card/70 px-4 py-3">
              <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                In development
              </dt>
              <dd className="font-display mt-1 text-base font-semibold text-foreground">
                Affordable air purification
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Parents sitting with their baby in a bright, airy Indian home beside a cot with soft cotton bedding"
            width={1600}
            height={1200}
            className="aspect-4/3 w-full rounded-3xl border border-border object-cover shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}
