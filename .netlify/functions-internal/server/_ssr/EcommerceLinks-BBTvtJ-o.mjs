import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as ExternalLink } from "../_libs/lucide-react.mjs";
import { i as siteConfig, n as ecommerceLabels } from "./siteConfig-CWnTf3kB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EcommerceLinks-BBTvtJ-o.js
var import_jsx_runtime = require_jsx_runtime();
var order = [
	"amazon",
	"flipkart",
	"website"
];
/**
* Marketplace buttons. URLs come from siteConfig.ecommerce.
* Unconfigured marketplaces render as a clearly labelled inactive state
* instead of a broken link.
*/
function EcommerceLinks({ showPendingNote = true }) {
	const configured = order.filter((key) => siteConfig.ecommerce[key]);
	const pending = order.filter((key) => !siteConfig.ecommerce[key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			configured.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-3",
				children: configured.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: siteConfig.ecommerce[key],
					target: "_blank",
					rel: "noopener noreferrer",
					className: "btn-primary",
					children: [ecommerceLabels[key], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})]
				}) }, key))
			}) : null,
			pending.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-3",
				children: pending.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "btn-disabled",
					"aria-disabled": "true",
					children: [ecommerceLabels[key], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-normal opacity-70",
						children: "(link coming soon)"
					})]
				}) }, key))
			}) : null,
			showPendingNote && pending.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Marketplace links will appear here as soon as our listings are ready."
			}) : null
		]
	});
}
//#endregion
export { EcommerceLinks as t };
