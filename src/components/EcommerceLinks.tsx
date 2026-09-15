import { ExternalLink } from "lucide-react";
import { ecommerceLabels, siteConfig, type EcommerceKey } from "@/lib/siteConfig";

const order: EcommerceKey[] = ["amazon", "flipkart", "website"];

type Props = {
  /** Show a note when no marketplace link is configured yet */
  showPendingNote?: boolean;
};

/**
 * Marketplace buttons. URLs come from siteConfig.ecommerce.
 * Unconfigured marketplaces render as a clearly labelled inactive state
 * instead of a broken link.
 */
export function EcommerceLinks({ showPendingNote = true }: Props) {
  const configured = order.filter((key) => siteConfig.ecommerce[key]);
  const pending = order.filter((key) => !siteConfig.ecommerce[key]);

  return (
    <div className="space-y-4">
      {configured.length > 0 ? (
        <ul className="flex flex-wrap gap-3">
          {configured.map((key) => (
            <li key={key}>
              <a
                href={siteConfig.ecommerce[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {ecommerceLabels[key]}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      {pending.length > 0 ? (
        <ul className="flex flex-wrap gap-3">
          {pending.map((key) => (
            <li key={key}>
              <span className="btn-disabled" aria-disabled="true">
                {ecommerceLabels[key]}
                <span className="text-xs font-normal opacity-70">(link coming soon)</span>
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {showPendingNote && pending.length > 0 ? (
        <p className="text-sm text-muted-foreground">
          Marketplace links will appear here as soon as our listings are ready.
        </p>
      ) : null}
    </div>
  );
}
