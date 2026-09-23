"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import type { ContactFormData, FormStatus } from "@/types";

const serviceOptions = [
  "Website",
  "SEO",
  "Google Business",
  "Meta Ads",
  "Social Media",
  "Not sure",
];

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceSelection: "",
    message: "",
    website: "", // honeypot
  });

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot check
    if (formData.website) return;

    setStatus("submitting");

    // Simulate form submission (replace with actual endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto rounded-full bg-surface-2 border border-border flex items-center justify-center mb-6 text-text-muted">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-text">Form in Setup Mode</h3>
        <p className="mt-3 text-text-secondary max-w-md mx-auto">
          Our contact form backend is currently being configured. Please use the WhatsApp links in the footer to reach out to us directly!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot — hidden from users */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => handleChange("website", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] opacity-0 h-0 w-0"
        aria-hidden="true"
      />

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-text mb-2">
          Name <span className="text-error">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={cn(
            "w-full px-4 py-3 bg-surface border rounded-md text-text placeholder:text-text-muted transition-colors focus:outline-none focus:border-accent",
            errors.name ? "border-error" : "border-border"
          )}
          placeholder="Your name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error" className="mt-1.5 text-sm text-error" role="alert">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-text mb-2">
          Email <span className="text-error">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={cn(
            "w-full px-4 py-3 bg-surface border rounded-md text-text placeholder:text-text-muted transition-colors focus:outline-none focus:border-accent",
            errors.email ? "border-error" : "border-border"
          )}
          placeholder="you@example.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error" className="mt-1.5 text-sm text-error" role="alert">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-text mb-2">
            Phone <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text placeholder:text-text-muted transition-colors focus:outline-none focus:border-accent"
            placeholder="Your phone number"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-text mb-2">
            Company <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="contact-company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text placeholder:text-text-muted transition-colors focus:outline-none focus:border-accent"
            placeholder="Your company"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium text-text mb-2">
          What do you need help with?
        </label>
        <select
          id="contact-service"
          value={formData.serviceSelection}
          onChange={(e) => handleChange("serviceSelection", e.target.value)}
          className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text transition-colors focus:outline-none focus:border-accent appearance-none cursor-pointer"
        >
          <option value="">Select...</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-text mb-2">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={cn(
            "w-full px-4 py-3 bg-surface border rounded-md text-text placeholder:text-text-muted transition-colors focus:outline-none focus:border-accent resize-y",
            errors.message ? "border-error" : "border-border"
          )}
          placeholder="Tell us about your project..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className="mt-1.5 text-sm text-error" role="alert">{errors.message}</p>}
      </div>

      {/* Error state */}
      {status === "error" && (
        <div className="p-4 rounded-md bg-error/10 border border-error/20" role="alert">
          <p className="text-sm text-error">Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-hover transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
