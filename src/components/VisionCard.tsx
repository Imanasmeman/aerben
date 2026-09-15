import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function VisionCard({ title, description, icon }: Props) {
  return (
    <article className="card-surface p-6 sm:p-7">
      {icon ? (
        <span
          className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </article>
  );
}
