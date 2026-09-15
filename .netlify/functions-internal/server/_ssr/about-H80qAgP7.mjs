import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-CK5JXIkp.mjs";
import { t as VisionCard } from "./VisionCard-BTKHQ1kB.mjs";
import { t as CTASection } from "./CTASection-XCWXZEe6.mjs";
import { i as ShieldCheck, l as Lightbulb, m as HandCoins, u as Leaf } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-H80qAgP7.js
var import_jsx_runtime = require_jsx_runtime();
function Timeline({ steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-6 border-l border-border pl-6 sm:space-y-8 sm:pl-8",
		children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-primary sm:-left-[calc(2rem+5px)]",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold text-foreground",
					children: step.stage
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: step.description
				})
			]
		}, step.stage))
	});
}
var values = [
	{
		title: "Affordability",
		description: "Useful products should be accessible to more people.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCoins, { className: "h-5 w-5" })
	},
	{
		title: "Practical Innovation",
		description: "Technology should solve real problems rather than simply add complexity.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-5 w-5" })
	},
	{
		title: "Quality",
		description: "Affordable should never mean careless.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
	},
	{
		title: "Responsible Thinking",
		description: "We consider product longevity, materials, energy use and environmental impact.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5" })
	}
];
var journey = [
	{
		stage: "Today",
		description: "Baby bedding and home comfort products."
	},
	{
		stage: "Next",
		description: "Product development and expansion."
	},
	{
		stage: "Future",
		description: "Affordable air purification solutions."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-brand border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					as: "h1",
					eyebrow: "About us",
					title: "A consumer brand built on practical thinking",
					description: "Aerben is an Indian consumer brand focused on creating practical products that improve everyday living."
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Who We Are" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Aerben is an Indian consumer-products company focused on practical innovation and affordability. We are based in Ahmedabad, Gujarat." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We believe good products should not be unnecessarily expensive or complicated. Our goal is to combine thoughtful design, useful technology and responsible manufacturing to create products that are accessible to more Indian households." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today we operate in consumer and home products — primarily baby bedding and home comfort — sold through e-commerce channels. Alongside this, we are expanding our work toward indoor air quality and affordable air purification." })
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our principles",
				title: "What We Believe"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: values.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisionCard, { ...value }, value.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Where we are heading",
				title: "Our Journey",
				description: "A simple, honest view of our direction — without invented milestones."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { steps: journey })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Want to work with us?",
			description: "We're open to conversations about products, retail partnerships and manufacturing.",
			primary: {
				label: "Contact Us",
				to: "/contact"
			},
			secondary: {
				label: "See Our Products",
				to: "/products"
			}
		})
	] });
}
//#endregion
export { AboutPage as component };
