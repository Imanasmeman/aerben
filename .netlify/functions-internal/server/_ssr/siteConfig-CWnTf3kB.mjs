//#region node_modules/.nitro/vite/services/ssr/assets/siteConfig-CWnTf3kB.js
var aerben_logo_default = "/assets/aerben-logo-BBxw3qa5.png";
/**
* CENTRAL CONFIGURATION
* ---------------------
* This is the only file you need to edit to update links, contact details
* or brand info across the whole website.
*
* Leave a value as an empty string ("") and the website will automatically
* hide that link instead of showing a broken one.
*/
var siteConfig = {
	name: "Aerben",
	legalName: "Aerben Solutions Pvt. Ltd.",
	tagline: "Better Products for Better Living.",
	description: "Aerben is an Indian consumer brand creating practical, affordable products for modern homes.",
	url: "",
	email: "info@aerben.com",
	location: "Ahmedabad, Gujarat, India",
	logo: {
		light: aerben_logo_default,
		dark: aerben_logo_default
	},
	social: {
		instagram: "",
		facebook: "",
		linkedin: "",
		youtube: "",
		x: ""
	},
	ecommerce: {
		amazon: "",
		flipkart: "",
		website: ""
	}
};
var socialLabels = {
	instagram: "Instagram",
	facebook: "Facebook",
	linkedin: "LinkedIn",
	youtube: "YouTube",
	x: "X (Twitter)"
};
var ecommerceLabels = {
	amazon: "Shop on Amazon",
	flipkart: "Shop on Flipkart",
	website: "Shop Online"
};
/** Social URLs that are actually configured — used for Organization sameAs. */
var configuredSocialUrls = Object.values(siteConfig.social).filter((url) => url.length > 0);
var navLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "Products",
		to: "/products"
	},
	{
		label: "Our Vision",
		to: "/our-vision"
	},
	{
		label: "Contact Us",
		to: "/contact"
	}
];
//#endregion
export { socialLabels as a, siteConfig as i, ecommerceLabels as n, navLinks as r, configuredSocialUrls as t };
