import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-CK5JXIkp.mjs";
import { t as VisionCard } from "./VisionCard-BTKHQ1kB.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CTASection } from "./CTASection-XCWXZEe6.mjs";
import { m as HandCoins, p as House, r as Wind, u as Leaf, v as BadgeCheck, y as Baby } from "../_libs/lucide-react.mjs";
import { t as EcommerceLinks } from "./EcommerceLinks-BBTvtJ-o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BNKDwduz.js
var import_jsx_runtime = require_jsx_runtime();
var hero_home_default = "/assets/hero-home-44uwKAVU.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-brand border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "An Indian consumer brand"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
						children: "Better Products for Better Living."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Aerben creates practical, affordable products designed to make everyday life better for modern Indian homes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "btn-primary",
							children: "Explore Our Products"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "btn-outline",
							children: "Learn About Aerben"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card/70 px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
								children: "Available now"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-display mt-1 text-base font-semibold text-foreground",
								children: "Baby & home comfort"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card/70 px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
								children: "In development"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-display mt-1 text-base font-semibold text-foreground",
								children: "Affordable air purification"
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_home_default,
					alt: "Parents sitting with their baby in a bright, airy Indian home beside a cot with soft cotton bedding",
					width: 1600,
					height: 1200,
					className: "aspect-4/3 w-full rounded-3xl border border-border object-cover shadow-soft"
				})
			})]
		})
	});
}
function ProductDirection({ title, description, status, statusLabel, cta, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card-surface flex flex-col p-7 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: status === "available" ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary" : "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground",
					"aria-hidden": "true",
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: status === "available" ? "badge-available" : "badge-soon",
					children: statusLabel
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-base leading-relaxed text-muted-foreground",
				children: description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: cta.to,
				className: status === "available" ? "btn-primary mt-7 self-start" : "btn-outline mt-7 self-start",
				children: cta.label
			})
		]
	});
}
var trustSignals = [
	{
		title: "Designed with Purpose",
		description: "Every product starts with a real need in an Indian home, not with a feature list.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-5 w-5" })
	},
	{
		title: "Built Around Real Everyday Needs",
		description: "Simple to use, easy to maintain and made for daily family life.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" })
	},
	{
		title: "Focused on Affordability",
		description: "We work to keep useful products within reach of more households.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCoins, { className: "h-5 w-5" })
	},
	{
		title: "Responsible Thinking",
		description: "We consider materials, product longevity and energy use while developing products.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5" })
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Who we are",
				title: "A practical Indian brand for everyday living",
				description: "Aerben is an Indian consumer brand focused on creating practical products that improve everyday living. We currently work in baby and home comfort products, and we are developing solutions for cleaner indoor air."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container pb-4",
			"aria-labelledby": "directions-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our product directions",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					id: "directions-heading",
					children: "Building for Today's Homes. Designing for Tomorrow."
				}),
				description: "We are clear about what you can buy today and what we are still building."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDirection, {
					title: "Baby & Home Comfort",
					description: "Thoughtfully selected and designed products for comfortable, peaceful and practical homes.",
					status: "available",
					statusLabel: "Available Now",
					cta: {
						label: "Shop Products",
						to: "/products"
					},
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Baby, { className: "h-6 w-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDirection, {
					title: "Affordable Air Purification",
					description: "We're working toward making clean, healthy indoor air more affordable and accessible for Indian homes.",
					status: "coming-soon",
					statusLabel: "Coming Soon",
					cta: {
						label: "Explore Our Vision",
						to: "/our-vision"
					},
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "h-6 w-6" })
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why Aerben",
				title: "Made for Indian homes",
				description: "We are a young brand, so instead of big claims we would rather tell you how we work."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: trustSignals.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisionCard, { ...item }, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface grid gap-8 p-7 sm:p-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "badge-soon",
						children: "Coming Soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
						children: "Affordable clean air for every Indian home."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: "Families spend a large part of their day indoors, and indoor air quality matters year round. Good air purification is often expensive, so we are exploring practical and affordable approaches designed for Indian homes and everyday use."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/our-vision",
						className: "btn-primary mt-7",
						children: "Read our vision"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-2xl border border-border bg-secondary/60 p-4",
							children: "Air pollution is not only an outdoor problem — it follows us indoors."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-2xl border border-border bg-secondary/60 p-4",
							children: "Purification products are often priced beyond many households."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-2xl border border-border bg-secondary/60 p-4",
							children: "No product specifications or pricing are announced yet. We'll share details when the product is genuinely ready."
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container section-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Shop today",
				title: "Buy our current products online",
				description: "Our baby bedding and home comfort range is sold through e-commerce marketplaces."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcommerceLinks, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Have a question or an idea?",
			description: "Whether it's about our current products, partnerships or what we're building next, we'd love to hear from you.",
			primary: {
				label: "Contact Us",
				to: "/contact"
			},
			secondary: {
				label: "Read Our Story",
				to: "/about"
			}
		})
	] });
}
//#endregion
export { Index as component };
