import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-CK5JXIkp.mjs";
import { t as CTASection } from "./CTASection-XCWXZEe6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-DP0hMPwX.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Placeholder index for future articles.
* To add a blog with real posts later, create src/routes/blog.$slug.tsx and
* render a list of posts here.
*/
var plannedTopics = [
	"Indoor air quality in Indian homes",
	"Air pollution and everyday living",
	"How to choose an air purifier",
	"HEPA filtration, explained simply",
	"Baby sleep and comfortable bedding",
	"Caring for bedding and home textiles"
];
function BlogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-brand border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					as: "h1",
					eyebrow: "Aerben Insights",
					title: "Useful reading, launching soon",
					description: "We're preparing a small library of practical, carefully researched articles about home comfort and indoor air. Nothing is published yet."
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container section-y",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Topics we plan to cover" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: plannedTopics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "card-surface p-5 text-base text-foreground",
						children: topic
					}, topic))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground",
					children: "We will only publish health-related information with reliable sources, and we will not make medical claims."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Something you'd like us to write about?",
			description: "Send us your question and we may cover it in one of our first articles.",
			primary: {
				label: "Contact Us",
				to: "/contact"
			}
		})
	] });
}
//#endregion
export { BlogPage as component };
