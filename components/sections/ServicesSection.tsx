"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Fuel, Boxes, Layers, Truck, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import type { Service } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Fuel, Boxes, Layers, Truck,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICON_MAP[service.icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/95 backdrop-blur-sm shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent/95 flex items-center justify-center shadow-lg ring-4 ring-white/20">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
        <ul className="space-y-1 mb-5">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors duration-200 group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-accent/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="services">
      <div className="absolute inset-0 section-grid-bg opacity-40" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="What We Build"
          title='Our <span class="text-accent">Services</span>'
          subtitle="From the first shovel to the final coat of paint, we handle every phase of your project with expert craftsmanship."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
