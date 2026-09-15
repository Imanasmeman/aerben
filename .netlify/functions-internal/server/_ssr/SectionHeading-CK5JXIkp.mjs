import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-CK5JXIkp.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "left", as: Tag = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				className: Tag === "h1" ? "font-display text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl" : "font-display text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: description
			}) : null
		]
	});
}
//#endregion
export { SectionHeading as t };
