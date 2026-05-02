"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { CheckCircle, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import ServiceStepsModal from "@/components/ui/ServiceStepsModal";
import { SERVICES } from "@/lib/data";
import type { Service } from "@/types";

export default function ServicesContent() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const iconMap = LucideIcons as unknown as Record<string, LucideIcon>;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=1920&q=80" alt="Construction" fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            What We Do
          </motion.p>
          <motion.h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Our 5 Business <span className="text-accent">Divisions</span>
          </motion.h1>
          <motion.p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Construction · Petroleum · Concrete Blocks · Ready Mix Concrete · Transport — all under one trusted group.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-primary/10 shadow-card hover:shadow-card-hover transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent/95 flex items-center justify-center shadow-lg ring-4 ring-white/20">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-2">
                      Service 0{index + 1}
                    </p>
                    <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors duration-200 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent/10 text-accent font-semibold text-sm hover:bg-accent/20 transition-all duration-200 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Steps Modal */}
      {selectedService && (
        <ServiceStepsModal
          service={selectedService}
          open={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      <CTASection />
    </>
  );
}
