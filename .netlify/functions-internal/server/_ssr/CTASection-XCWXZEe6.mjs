import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTASection-XCWXZEe6.js
var import_jsx_runtime = require_jsx_runtime();
function CTASection({ title, description, primary, secondary }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border border-border bg-gradient-brand px-6 py-12 text-center shadow-soft sm:px-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: primary.to,
						className: "btn-primary",
						children: primary.label
					}), secondary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: secondary.to,
						className: "btn-outline",
						children: secondary.label
					}) : null]
				})
			]
		})
	});
}
//#endregion
export { CTASection as t };
