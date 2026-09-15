import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-CK5JXIkp.mjs";
import { i as siteConfig } from "./siteConfig-CWnTf3kB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-Jjlv5nid.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container section-y",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			as: "h1",
			eyebrow: "Legal",
			title: "Terms & Conditions",
			description: "The terms that apply when you use the Aerben website."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Website information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "This website provides general information about Aerben, its current product direction and products in development. We aim to keep it accurate, but information may change as our work progresses."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Products in development"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "Items marked “Coming Soon” or “In development” are not offers for sale. Any descriptions are statements of direction, not final specifications, prices or launch commitments."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Marketplace purchases"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "Purchases of Aerben products are currently completed on third-party marketplaces, and those marketplaces' own terms, shipping and returns policies apply to your order."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3",
					children: [
						"Questions? Write to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${siteConfig.email}`,
							className: "text-primary hover:underline",
							children: siteConfig.email
						}),
						"."
					]
				})] })
			]
		})]
	});
}
//#endregion
export { TermsPage as component };
