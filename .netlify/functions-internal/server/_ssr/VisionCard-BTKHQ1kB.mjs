import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VisionCard-BTKHQ1kB.js
var import_jsx_runtime = require_jsx_runtime();
function VisionCard({ title, description, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card-surface p-6 sm:p-7",
		children: [
			icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary",
				"aria-hidden": "true",
				children: icon
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base",
				children: description
			})
		]
	});
}
//#endregion
export { VisionCard as t };
