import { Link } from "@tanstack/react-router";

type Props = {
  title: string;
  description: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
};

export function CTASection({ title, description, primary, secondary }: Props) {
  return (
    <section className="container">
      <div className="rounded-3xl border border-border bg-gradient-brand px-6 py-12 text-center shadow-soft sm:px-12 sm:py-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to={primary.to} className="btn-primary">
            {primary.label}
          </Link>
          {secondary ? (
            <Link to={secondary.to} className="btn-outline">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
