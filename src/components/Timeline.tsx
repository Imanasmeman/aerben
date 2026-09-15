type Step = {
  stage: string;
  description: string;
};

export function Timeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-6 sm:space-y-8 sm:pl-8">
      {steps.map((step) => (
        <li key={step.stage} className="relative">
          <span
            className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-primary sm:-left-[calc(2rem+5px)]"
            aria-hidden="true"
          />
          <h3 className="font-display text-lg font-semibold text-foreground">{step.stage}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
