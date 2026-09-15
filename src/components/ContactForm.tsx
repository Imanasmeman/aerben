import { useState } from "react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/lib/siteConfig";
import { emailConfig, isEmailConfigured } from "@/lib/emailConfig";

type Fields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const empty: Fields = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.phone.trim() && !/^[+\d][\d\s-]{6,15}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number, or leave it blank.";
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (values.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
}

/**
 * Contact form. Sends through EmailJS once src/lib/emailConfig.ts is filled in;
 * until then it validates and offers a mailto fallback.
 */
export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update(field: keyof Fields, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setValidated(false);
    setStatus("idle");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const ok = Object.keys(found).length === 0;
    setValidated(ok);
    if (!ok || !isEmailConfigured) return;

    setStatus("sending");
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
        },
        { publicKey: emailConfig.publicKey },
      );
      setStatus("sent");
      setValues(empty);
      setValidated(false);
    } catch {
      setStatus("error");
    }
  }

  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    values.subject || `Enquiry for ${siteConfig.name}`,
  )}&body=${encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\n${values.message}`,
  )}`;

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          value={values.name}
          error={errors.name}
          onChange={(v) => update("name", v)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(v) => update("email", v)}
        />
        <Field
          id="phone"
          label="Phone"
          hint="Optional"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(v) => update("phone", v)}
        />
        <Field
          id="subject"
          label="Subject"
          required
          value={values.subject}
          error={errors.subject}
          onChange={(v) => update("subject", v)}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="field-label">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="field-input"
        />
        {errors.message ? (
          <p id="message-error" className="field-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : isEmailConfigured ? "Send message" : "Check details"}
        </button>
      </div>

      <div aria-live="polite">
        {status === "sent" ? (
          <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-relaxed text-foreground">
            <p className="font-medium">Thank you — your message has been sent.</p>
            <p className="mt-1 text-muted-foreground">We'll get back to you by email soon.</p>
          </div>
        ) : status === "error" ? (
          <div className="mt-5 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm leading-relaxed text-foreground">
            <p className="font-medium">Your message couldn't be sent just now.</p>
            <p className="mt-1 text-muted-foreground">Please try again, or email us directly.</p>
            <a href={mailto} className="btn-primary mt-4">
              Send by email
            </a>
          </div>
        ) : validated && !isEmailConfigured ? (
          <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-relaxed text-foreground">
            <p className="font-medium">Your details look good.</p>
            <p className="mt-1 text-muted-foreground">
              Email sending isn't switched on yet, so nothing has been sent. You can send the same
              message directly to us instead.
            </p>
            <a href={mailto} className="btn-primary mt-4">
              Send by email
            </a>
          </div>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  hint,
}: {
  id: keyof Fields;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  type?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}{" "}
        {required ? (
          <span aria-hidden="true">*</span>
        ) : hint ? (
          <span className="font-normal text-muted-foreground">({hint})</span>
        ) : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="field-input"
      />
      {error ? (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
