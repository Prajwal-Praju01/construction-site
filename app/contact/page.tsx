import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Khushi Construction & Land Developers for a free quote on your construction project.",
};

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "9845447449", href: "tel:9845447449" },
  { icon: Mail, label: "Email", value: "info@khushiconstruction.com", href: "mailto:info@khushiconstruction.com" },
  { icon: MapPin, label: "Office", value: "Khushi Construction Office (See on map)", href: "https://maps.app.goo.gl/7HEz5N1QLD3rtB316" },
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
          <div className="max-w-2xl mx-auto space-y-6">
              {/* Contact cards */}
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="bg-white rounded-2xl p-5 shadow-card flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-primary font-semibold text-sm hover:text-accent transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-primary font-semibold text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-card h-56 bg-construction-border">
                <iframe
                  src="https://www.google.com/maps?q=12.9654252,77.392188&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Khushi Construction & Land Developers office location"
                />
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
