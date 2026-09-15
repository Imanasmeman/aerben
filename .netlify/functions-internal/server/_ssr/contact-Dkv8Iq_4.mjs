import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-CK5JXIkp.mjs";
import { o as MapPin, s as Mail } from "../_libs/lucide-react.mjs";
import { i as siteConfig } from "./siteConfig-CWnTf3kB.mjs";
import { t as SocialLinks } from "./SocialLinks-gwm5--3y.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dkv8Iq_4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* EMAIL SETTINGS (EmailJS)
* ------------------------
* Paste the three values from your EmailJS dashboard here (or set them as
* VITE_EMAILJS_* environment variables). Until all three are filled in, the
* contact form falls back to opening the visitor's email app.
*
* Your EmailJS email template should use these variable names:
* {{name}} {{email}} {{phone}} {{subject}} {{message}}
*/
var emailConfig = {
	serviceId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_EMAILJS_SERVICE_ID"] ?? "",
	templateId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_EMAILJS_TEMPLATE_ID"] ?? "",
	publicKey: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_EMAILJS_PUBLIC_KEY"] ?? ""
};
var isEmailConfigured = Boolean(emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey);
var empty = {
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: ""
};
function validate(values) {
	const errors = {};
	if (!values.name.trim()) errors.name = "Please enter your name.";
	if (!values.email.trim()) errors.email = "Please enter your email address.";
	else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
	if (values.phone.trim() && !/^[+\d][\d\s-]{6,15}$/.test(values.phone.trim())) errors.phone = "Please enter a valid phone number, or leave it blank.";
	if (!values.subject.trim()) errors.subject = "Please add a subject.";
	if (values.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
	return errors;
}
/**
* Contact form. Sends through EmailJS once src/lib/emailConfig.ts is filled in;
* until then it validates and offers a mailto fallback.
*/
function ContactForm() {
	const [values, setValues] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [validated, setValidated] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("idle");
	function update(field, value) {
		setValues((v) => ({
			...v,
			[field]: value
		}));
		setValidated(false);
		setStatus("idle");
	}
	async function onSubmit(event) {
		event.preventDefault();
		const found = validate(values);
		setErrors(found);
		const ok = Object.keys(found).length === 0;
		setValidated(ok);
		if (!ok || !isEmailConfigured) return;
		setStatus("sending");
		try {
			await es_default.send(emailConfig.serviceId, emailConfig.templateId, {
				name: values.name,
				email: values.email,
				phone: values.phone,
				subject: values.subject,
				message: values.message
			}, { publicKey: emailConfig.publicKey });
			setStatus("sent");
			setValues(empty);
			setValidated(false);
		} catch {
			setStatus("error");
		}
	}
	const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(values.subject || `Enquiry for ${siteConfig.name}`)}&body=${encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\n${values.message}`)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "card-surface p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "name",
						label: "Name",
						required: true,
						value: values.name,
						error: errors.name,
						onChange: (v) => update("name", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "email",
						label: "Email",
						type: "email",
						required: true,
						value: values.email,
						error: errors.email,
						onChange: (v) => update("email", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "phone",
						label: "Phone",
						hint: "Optional",
						type: "tel",
						value: values.phone,
						error: errors.phone,
						onChange: (v) => update("phone", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "subject",
						label: "Subject",
						required: true,
						value: values.subject,
						error: errors.subject,
						onChange: (v) => update("subject", v)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "message",
						className: "field-label",
						children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "message",
						name: "message",
						rows: 5,
						required: true,
						value: values.message,
						onChange: (e) => update("message", e.target.value),
						"aria-invalid": errors.message ? true : void 0,
						"aria-describedby": errors.message ? "message-error" : void 0,
						className: "field-input"
					}),
					errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "message-error",
						className: "field-error",
						children: errors.message
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "btn-primary",
					disabled: status === "sending",
					children: status === "sending" ? "Sending…" : isEmailConfigured ? "Send message" : "Check details"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-live": "polite",
				children: status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-relaxed text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Thank you — your message has been sent."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground",
						children: "We'll get back to you by email soon."
					})]
				}) : status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm leading-relaxed text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "Your message couldn't be sent just now."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground",
							children: "Please try again, or email us directly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: mailto,
							className: "btn-primary mt-4",
							children: "Send by email"
						})
					]
				}) : validated && !isEmailConfigured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-relaxed text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "Your details look good."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground",
							children: "Email sending isn't switched on yet, so nothing has been sent. You can send the same message directly to us instead."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: mailto,
							className: "btn-primary mt-4",
							children: "Send by email"
						})
					]
				}) : null
			})
		]
	});
}
function Field({ id, label, value, onChange, error, type = "text", required, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: id,
			className: "field-label",
			children: [
				label,
				" ",
				required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: "*"
				}) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-normal text-muted-foreground",
					children: [
						"(",
						hint,
						")"
					]
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			name: id,
			type,
			value,
			required,
			onChange: (e) => onChange(e.target.value),
			"aria-invalid": error ? true : void 0,
			"aria-describedby": error ? `${id}-error` : void 0,
			className: "field-input"
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `${id}-error`,
			className: "field-error",
			children: error
		}) : null
	] });
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-brand border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				as: "h1",
				eyebrow: "Contact",
				title: "Let's Connect",
				description: "Have a question about Aerben, our products, partnerships or upcoming products? We'd love to hear from you."
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold text-foreground",
				children: "Send us a message"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Business Enquiries"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "mt-0.5 h-5 w-5 text-primary",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${siteConfig.email}`,
							className: "text-sm break-all text-muted-foreground hover:text-primary",
							children: siteConfig.email
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "mt-0.5 h-5 w-5 text-primary",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: "Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: siteConfig.location
						})] })]
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Follow Aerben"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {})
				})] })]
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
