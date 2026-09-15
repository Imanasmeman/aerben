import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Linkedin, d as Instagram, h as Facebook, t as Youtube } from "../_libs/lucide-react.mjs";
import { a as socialLabels, i as siteConfig } from "./siteConfig-CWnTf3kB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SocialLinks-gwm5--3y.js
var import_jsx_runtime = require_jsx_runtime();
function XIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.9 2H22l-6.9 7.9L22.8 22h-6.4l-4.6-6.1L6.3 22H3.2l7.2-8.2L2.1 2h6.5l4.3 5.7L18.9 2Zm-1.1 18h1.7L7.4 3.8H5.6L17.8 20Z" })
	});
}
var icons = {
	instagram: Instagram,
	facebook: Facebook,
	linkedin: Linkedin,
	youtube: Youtube,
	x: XIcon
};
/** Renders only the social profiles configured in siteConfig. */
function SocialLinks({ variant = "icons" }) {
	const entries = Object.keys(siteConfig.social).filter((key) => siteConfig.social[key]);
	if (entries.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Social profiles coming soon."
	});
	if (variant === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2.5",
		children: entries.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: siteConfig.social[key],
			target: "_blank",
			rel: "noopener noreferrer",
			className: "footer-link",
			children: socialLabels[key]
		}) }, key))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-wrap items-center gap-2",
		children: entries.map((key) => {
			const Icon = icons[key];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: siteConfig.social[key],
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": socialLabels[key],
				className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}) }, key);
		})
	});
}
//#endregion
export { SocialLinks as t };
