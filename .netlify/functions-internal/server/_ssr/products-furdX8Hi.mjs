import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-CK5JXIkp.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CTASection } from "./CTASection-XCWXZEe6.mjs";
import { r as Wind, y as Baby } from "../_libs/lucide-react.mjs";
import { t as EcommerceLinks } from "./EcommerceLinks-BBTvtJ-o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-furdX8Hi.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-brand border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					as: "h1",
					eyebrow: "Products",
					title: "What we sell today, and what we're building",
					description: "We keep this page honest: available products are clearly separated from products still in development."
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container section-y",
			"aria-labelledby": "current-products",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "current-products",
				className: "font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
				children: "Current Products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-surface mt-8 p-7 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Baby, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "badge-available",
							children: "Available Now"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl",
						children: "Baby Bedding & Home Comfort"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Aerben currently offers baby bedding and home comfort products through e-commerce channels. These are thoughtfully selected and designed for comfortable, peaceful and practical everyday use." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Full listings, sizes and pricing are available on the marketplaces where we sell." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcommerceLinks, {})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container pb-4",
			"aria-labelledby": "future-products",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "future-products",
				className: "font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
				children: "Future Products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-surface mt-8 p-7 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "badge-soon",
							children: "Coming Soon"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl",
						children: "Air Purification"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
						children: "Aerben is developing affordable air-purification solutions designed with Indian homes and everyday use in mind. No specifications, models or pricing have been announced yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "btn-outline mt-7",
						children: "Join the Journey"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
				title: "Not sure where to start?",
				description: "Tell us what you're looking for and we'll point you to the right product or marketplace listing.",
				primary: {
					label: "Contact Us",
					to: "/contact"
				},
				secondary: {
					label: "Our Vision",
					to: "/our-vision"
				}
			})
		})
	] });
}
//#endregion
export { ProductsPage as component };
