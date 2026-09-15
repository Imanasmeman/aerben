import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  status: "available" | "coming-soon";
  statusLabel: string;
  cta: { label: string; to: string };
  icon: ReactNode;
};

export function ProductDirection({ title, description, status, statusLabel, cta, icon }: Props) {
  return (
    <article className="card-surface flex flex-col p-7 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span
          className={
            status === "available"
              ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"
              : "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground"
          }
          aria-hidden="true"
        >
          {icon}
        </span>
        <span className={status === "available" ? "badge-available" : "badge-soon"}>
          {statusLabel}
        </span>
      </div>

      <h3 className="font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{description}</p>

      <Link to={cta.to} className={status === "available" ? "btn-primary mt-7 self-start" : "btn-outline mt-7 self-start"}>
        {cta.label}
      </Link>
    </article>
  );
}
