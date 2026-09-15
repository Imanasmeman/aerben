import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, n as X } from "../_libs/lucide-react.mjs";
import { i as siteConfig, n as ecommerceLabels, r as navLinks, t as configuredSocialUrls } from "./siteConfig-CWnTf3kB.mjs";
import { t as SocialLinks } from "./SocialLinks-gwm5--3y.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BH-kC6ZR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BoRY7jeF.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function Logo({ variant = "light", className, asLink = true }) {
	const img = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: variant === "dark" ? siteConfig.logo.dark : siteConfig.logo.light,
		alt: `${siteConfig.name} logo`,
		width: 224,
		height: 111,
		className: className ?? "h-10 w-auto"
	});
	if (!asLink) return img;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		"aria-label": `${siteConfig.name} — home`,
		className: "inline-flex items-center",
		children: img
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container flex h-16 items-center justify-between gap-4 sm:h-18",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main",
					className: "hidden items-center gap-1 lg:flex",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "nav-link",
						activeProps: { "data-active": "true" },
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: "btn-primary",
						children: "Explore Products"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					className: "inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Main",
				className: "container flex flex-col py-3",
				children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: link.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary",
					activeProps: { "data-active": "true" },
					children: link.label
				}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					onClick: () => setOpen(false),
					className: "btn-primary mt-3 justify-center",
					children: "Explore Products"
				})]
			})
		}) : null]
	});
}
var shopKeys = [
	"amazon",
	"flipkart",
	"website"
];
function Footer() {
	const shops = shopKeys.filter((key) => siteConfig.ecommerce[key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-secondary/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: siteConfig.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Footer navigation",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "footer-heading",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5",
						children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "footer-link",
							children: link.label
						}) }, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "footer-link",
							children: "Aerben Insights"
						}) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "footer-heading",
					children: "Shopping"
				}), shops.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2.5",
					children: shops.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: siteConfig.ecommerce[key],
						target: "_blank",
						rel: "noopener noreferrer",
						className: "footer-link",
						children: ecommerceLabels[key]
					}) }, key))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Marketplace links coming soon."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "footer-heading",
						children: "Company"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-foreground",
						children: siteConfig.legalName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: siteConfig.location
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${siteConfig.email}`,
						className: "footer-link mt-3 inline-block",
						children: siteConfig.email
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					siteConfig.legalName,
					" All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex flex-wrap gap-x-6 gap-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "footer-link",
						children: "Privacy Policy"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "footer-link",
						children: "Terms & Conditions"
					}) })]
				})]
			})
		})]
	});
}
/** Builds a consistent per-page meta array (title, description, OG, Twitter). */
function pageMeta({ title, description, path, type = "website" }) {
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: type
		},
		{
			property: "og:url",
			content: path
		},
		{
			property: "og:site_name",
			content: siteConfig.name
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		}
	];
}
function canonical(path) {
	return [{
		rel: "canonical",
		href: path
	}];
}
function breadcrumbSchema(items) {
	return {
		type: "application/ld+json",
		children: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: items.map((item, index) => ({
				"@type": "ListItem",
				position: index + 1,
				name: item.name,
				item: item.path
			}))
		})
	};
}
var organizationSchema = {
	type: "application/ld+json",
	children: JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "Organization",
			name: siteConfig.name,
			legalName: siteConfig.legalName,
			description: siteConfig.description,
			logo: siteConfig.logo.light,
			email: siteConfig.email,
			address: {
				"@type": "PostalAddress",
				addressLocality: "Ahmedabad",
				addressRegion: "Gujarat",
				addressCountry: "IN"
			},
			...siteConfig.url ? { url: siteConfig.url } : {},
			...configuredSocialUrls.length ? { sameAs: configuredSocialUrls } : {}
		}, {
			"@type": "WebSite",
			name: siteConfig.name,
			description: siteConfig.description,
			...siteConfig.url ? { url: siteConfig.url } : {}
		}]
	})
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-6xl font-semibold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-primary",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-outline",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${siteConfig.name} | Better Products for Better Living` },
			{
				name: "description",
				content: siteConfig.description
			},
			{
				property: "og:site_name",
				content: siteConfig.name
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#129fd3"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [organizationSchema]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en-IN",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$7 = () => import("./routes-BNKDwduz.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({
		meta: pageMeta({
			title: "Aerben | Better Products for Better Living",
			description: "Aerben is an Indian consumer brand creating practical, affordable products for modern homes, with baby comfort products available today and affordable air purification solutions coming soon.",
			path: "/"
		}),
		links: canonical("/")
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-H80qAgP7.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({
		meta: pageMeta({
			title: "About Aerben | Indian Consumer Products Brand",
			description: "Aerben is an Indian consumer-products company from Ahmedabad focused on affordability, practical innovation, quality and responsible thinking for modern homes.",
			path: "/about"
		}),
		links: canonical("/about"),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "About Us",
			path: "/about"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./blog-DP0hMPwX.mjs");
var Route$6 = createFileRoute("/blog")({
	head: () => ({
		meta: pageMeta({
			title: "Aerben Insights | Home Comfort & Indoor Air Notes",
			description: "Aerben Insights is our upcoming blog on indoor air quality in India, home comfort, baby sleep and practical product-care guides.",
			path: "/blog"
		}),
		links: canonical("/blog"),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Aerben Insights",
			path: "/blog"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
/**
* Placeholder index for future articles.
* To add a blog with real posts later, create src/routes/blog.$slug.tsx and
* render a list of posts here.
*/
var $$splitComponentImporter$4 = () => import("./contact-Dkv8Iq_4.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: pageMeta({
			title: "Contact Aerben | Ahmedabad, India",
			description: "Contact Aerben in Ahmedabad, Gujarat for questions about our baby comfort products, partnerships or upcoming air purification products.",
			path: "/contact"
		}),
		links: canonical("/contact"),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Contact Us",
			path: "/contact"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./our-vision-DpItMHOt.mjs");
var Route$4 = createFileRoute("/our-vision")({
	head: () => ({
		meta: pageMeta({
			title: "Aerben Vision | Affordable Clean Air for Indian Homes",
			description: "Aerben's long-term vision is to make better living more accessible, including affordable and practical indoor air purification designed for Indian homes.",
			path: "/our-vision"
		}),
		links: canonical("/our-vision"),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Our Vision",
			path: "/our-vision"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./privacy-BkjtJ9_M.mjs");
var Route$3 = createFileRoute("/privacy")({
	head: () => ({
		meta: pageMeta({
			title: "Privacy Policy | Aerben",
			description: "Learn how Aerben handles information you share when visiting our website or contacting our team.",
			path: "/privacy"
		}),
		links: canonical("/privacy")
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./products-furdX8Hi.mjs");
var Route$2 = createFileRoute("/products")({
	head: () => ({
		meta: pageMeta({
			title: "Aerben Products | Baby Bedding & Future Air Purification",
			description: "Explore Aerben's current baby bedding and home comfort products available on e-commerce marketplaces, plus the affordable air purification range in development.",
			path: "/products"
		}),
		links: canonical("/products"),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Products",
			path: "/products"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
/** Public pages included in the sitemap. Add new routes here. */
var pages = [
	{
		path: "/",
		priority: "1.0"
	},
	{
		path: "/about",
		priority: "0.8"
	},
	{
		path: "/products",
		priority: "0.9"
	},
	{
		path: "/our-vision",
		priority: "0.8"
	},
	{
		path: "/contact",
		priority: "0.7"
	},
	{
		path: "/blog",
		priority: "0.5"
	},
	{
		path: "/privacy",
		priority: "0.3"
	},
	{
		path: "/terms",
		priority: "0.3"
	}
];
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: ({ request }) => {
	const origin = new URL(request.url).origin;
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>\n    <loc>${origin}${page.path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`).join("\n")}
</urlset>
`;
	return new Response(body, { headers: {
		"content-type": "application/xml; charset=utf-8",
		"cache-control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("./terms-Jjlv5nid.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({
		meta: pageMeta({
			title: "Terms & Conditions | Aerben",
			description: "Read the terms that apply when using the Aerben website and following links to marketplace product listings.",
			path: "/terms"
		}),
		links: canonical("/terms")
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	BlogRoute: Route$6.update({
		id: "/blog",
		path: "/blog",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	OurVisionRoute: Route$4.update({
		id: "/our-vision",
		path: "/our-vision",
		getParentRoute: () => Route$9
	}),
	PrivacyRoute: Route$3.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$9
	}),
	ProductsRoute: Route$2.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$9
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$9
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
