import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Kushi Groups Tavarekere and request a free quote for construction, RMC, block supply, petroleum infrastructure, and transport services.",
  alternates: {
    canonical: "/contact",
  },
};

const OFFICE_COORDS = "12.9654252,77.392188";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${OFFICE_COORDS}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_COORDS}`;

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "9845447449", href: "tel:9845447449" },
  { icon: Mail, label: "Email", value: "kushigroups2012@gmail.com", href: "mailto:kushigroups2012@gmail.com" },
  { icon: MapPin, label: "Office", value: "Kushi Groups Tavarekere Office (Get directions)", href: DIRECTIONS_URL },
  { icon: Clock, label: "Hours", value: "Mon–Fri 8AM–6PM · Sat 9AM–3PM", href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80" alt="Contact us" fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Reach Out</p>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight">
            Let&apos;s Build <span className="text-accent">Together</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Reach us directly by phone, email, or map location for a quick consultation.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-construction-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 xl:gap-10 items-start">
            <div className="surface-panel rounded-3xl p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-2">
                  Free Consultation
                </p>
                <h2 className="font-heading font-extrabold text-3xl text-primary leading-tight">
                  Tell Us About Your Project
                </h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Share your requirements and timeline. Our team will get back within 24 hours with the next steps.
                </p>
              </div>
              <ContactForm />
            </div>

            <div className="space-y-6">
              {/* Contact cards */}
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="bg-white rounded-2xl p-5 shadow-card flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary font-semibold text-sm hover:text-accent transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-primary font-semibold text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map embed */}
              <div className="relative rounded-2xl overflow-hidden shadow-card h-56 bg-construction-border">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  className="pointer-events-none"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kushi Groups Tavarekere office location"
                />
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to Kushi Groups Tavarekere office"
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">Open directions in Google Maps</span>
                </a>
                <div className="pointer-events-none absolute bottom-3 right-3 z-20 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow">
                  Get directions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
