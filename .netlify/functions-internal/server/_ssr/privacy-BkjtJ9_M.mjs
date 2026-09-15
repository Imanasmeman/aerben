import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-CK5JXIkp.mjs";
import { i as siteConfig } from "./siteConfig-CWnTf3kB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-BkjtJ9_M.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container section-y",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			as: "h1",
			eyebrow: "Legal",
			title: "Privacy Policy",
			description: "How Aerben handles information when you visit this website or contact us."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Information you share"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "If you contact Aerben by email, we receive the details you choose to include, such as your name, email address, phone number and message. We use this information only to respond to your enquiry and continue the conversation you requested."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Website forms"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "The contact form prepares an email on your device. It is not connected to a storage service, so typing into or submitting the form does not store your message on this website."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "External websites"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "Links to marketplaces or social platforms lead to services operated by other companies. Their privacy policies apply when you visit those services."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Your questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3",
					children: [
						"For a privacy-related question, or to ask us to delete an email you sent, write to",
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
export { PrivacyPage as component };
