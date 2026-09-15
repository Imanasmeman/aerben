import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-CK5JXIkp.mjs";
import { t as VisionCard } from "./VisionCard-BTKHQ1kB.mjs";
import { t as CTASection } from "./CTASection-XCWXZEe6.mjs";
import { _ as Clock, f as IndianRupee, p as House, r as Wind } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-vision-DpItMHOt.js
var import_jsx_runtime = require_jsx_runtime();
var problemPoints = [
	{
		title: "Indoor air quality matters",
		description: "The air inside our homes is part of daily living, not a seasonal concern.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" })
	},
	{
		title: "We spend a lot of time indoors",
		description: "Homes, offices and classrooms are where most of our day is actually spent.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" })
	},
	{
		title: "Pollution isn't only outdoors",
		description: "Outdoor pollution, dust and everyday household activity all affect indoor air.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "h-5 w-5" })
	},
	{
		title: "Purification can be expensive",
		description: "Devices and replacement filters put ongoing purification out of reach for many homes.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-5 w-5" })
	}
];
function VisionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-brand border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					as: "h1",
					eyebrow: "Our vision",
					title: "Making Better Living More Accessible",
					description: "Aerben exists to bring genuinely useful products to more Indian households — starting with everyday home comfort and moving toward cleaner indoor air."
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface p-7 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "badge-soon",
						children: "In development"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
						children: "Our goal is to make clean, healthy indoor air affordable and accessible to everyone in India."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "This is a direction we are actively working on, not a product on sale today. We would rather share our thinking openly than announce something before it is ready."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "The problem we're studying",
				title: "Why indoor air is worth our attention",
				description: "We're approaching this carefully and without exaggerated claims."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: problemPoints.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisionCard, { ...point }, point.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "How we work",
				title: "Practical, affordable, responsible",
				description: "Affordable clean air for every Indian home is our long-term ambition. Getting there means designing for real running costs, real room sizes and real maintenance habits — not just a spec sheet."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 max-w-3xl rounded-2xl border border-border bg-secondary/60 p-6 text-sm leading-relaxed text-muted-foreground sm:text-base",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: "A note on claims:"
				}), " Aerben does not make medical claims. Air purification can help reduce certain airborne particles, but it is not a treatment for any medical condition. For health concerns, please consult a qualified medical professional."] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Want to follow this journey?",
			description: "Get in touch and we'll keep you posted as our air purification work progresses.",
			primary: {
				label: "Join the Journey",
				to: "/contact"
			},
			secondary: {
				label: "See Current Products",
				to: "/products"
			}
		})
	] });
}
//#endregion
export { VisionPage as component };
