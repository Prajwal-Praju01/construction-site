"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/data";

export default function ServicesContent() {
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

      {/* Services detail */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-24">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-24`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${!isEven ? "lg:order-2" : ""}`}>
                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute top-5 left-5 w-14 h-14 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                    {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                  </div>
                </div>

                {/* Content */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Service 0{index + 1}</p>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div className="rounded-xl border border-primary/10 bg-primary/[0.03] p-3">
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mb-1">Best For</p>
                      <p className="text-sm text-primary font-medium leading-relaxed">{service.bestFor}</p>
                    </div>
                    <div className="rounded-xl border border-primary/10 bg-primary/[0.03] p-3">
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mb-1">Delivery Window</p>
                      <p className="text-sm text-primary font-medium leading-relaxed">{service.deliveryWindow}</p>
                    </div>
                    <div className="rounded-xl border border-primary/10 bg-primary/[0.03] p-3">
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mb-1">Capacity</p>
                      <p className="text-sm text-primary font-medium leading-relaxed">{service.monthlyCapacity}</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">
                    Scope Includes
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
