"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
}

interface ApiErrorResponse {
  error?: string;
  fieldErrors?: Partial<FormData>;
}

const SERVICES_OPTIONS = [
  "Basement Construction",
  "Structural Construction",
  "Electrical Installation",
  "Plumbing Systems",
  "Interior Finishing",
  "Turnkey House Construction",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitError, setSubmitError] = useState("");

  const WHATSAPP_NUMBER = "919845447449";

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitError("");
    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as ApiErrorResponse;

      if (!response.ok) {
        if (result.fieldErrors) {
          setErrors(result.fieldErrors);
        }

        setSubmitError(
          result.error || "Unable to submit right now. Please try again shortly."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Network issue while sending your request. Please call or WhatsApp us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  const whatsappText = encodeURIComponent(
    `Hello Kushi Groups Tavarekere, I want a quote. Name: ${formData.name || ""}, Service: ${formData.service || "General"}, Location: ${formData.location || "Not shared"}.`
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-construction-border bg-white text-construction-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-sm";
  const labelClass = "block text-sm font-semibold text-primary mb-1.5";
  const errorClass = "text-red-500 text-xs mt-1";

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center h-full py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="font-heading font-bold text-2xl text-primary mb-2">
          Message Received!
        </h3>
        <p className="text-gray-500 max-w-xs">
          Thank you, {formData.name.split(" ")[0]}. Our team will contact you within 24 hours.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
        >
          Continue on WhatsApp
        </a>
        <button
          onClick={() => {
            setSubmitted(false);
            setSubmitError("");
            setErrors({});
            setFormData({
              name: "",
              phone: "",
              email: "",
              location: "",
              service: "",
              message: "",
            });
          }}
          className="mt-6 text-accent font-semibold text-sm underline underline-offset-4 hover:text-primary transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {submitError && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert" aria-live="polite">
          {submitError}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            type="text"
            placeholder="John Smith"
            className={inputClass}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            autoComplete="name"
            required
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number *</label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClass}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            autoComplete="tel"
            required
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className={inputClass}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            autoComplete="email"
            required
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        {/* Location */}
        <div>
          <label htmlFor="location" className={labelClass}>Project Location</label>
          <input
            id="location"
            type="text"
            placeholder="City, State"
            className={inputClass}
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>Service Needed</label>
        <select
          id="service"
          className={inputClass}
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="">Select a service...</option>
          {SERVICES_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Project Details *</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your project — size, timeline, special requirements..."
          className={`${inputClass} resize-none`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          minLength={12}
          required
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        loading={loading}
        className="w-full justify-center"
      >
        <Send className="w-5 h-5" />
        Send Message & Get Free Quote
      </Button>

      <p className="text-center text-xs text-gray-400">
        By submitting, you agree to our privacy policy. We never share your data.
      </p>
    </form>
  );
}
