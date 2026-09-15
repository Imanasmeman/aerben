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
export const emailConfig = {
  serviceId: import.meta.env["VITE_EMAILJS_SERVICE_ID"] ?? "",
  templateId: import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] ?? "",
  publicKey: import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] ?? "",
};

export const isEmailConfigured = Boolean(
  emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey,
);
