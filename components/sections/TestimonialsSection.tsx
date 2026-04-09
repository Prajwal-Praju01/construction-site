"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-construction-light relative overflow-hidden">
      <div className="absolute inset-0 section-grid-bg opacity-30" />
      <div className="container-custom relative">
        <SectionHeader
          eyebrow="Client Stories"
          title='What Our <span class="text-accent">Clients Say</span>'
          subtitle="Real project experiences from Bengaluru clients across home construction, RMC, block supply, and transport logistics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Summary bar */}
        <motion.div
          className="mt-16 surface-panel-dark rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: "Bengaluru", label: "Primary Service Region", sub: "Projects across key city corridors" },
            { value: "On-site", label: "Milestone Tracking", sub: "Progress updates from start to handover" },
            { value: "End-to-end", label: "Single Partner Delivery", sub: "Build, materials, and transport under one team" },
          ].map(({ value, label, sub }) => (
            <div key={label}>
              <p className="font-heading font-bold text-4xl text-accent">{value}</p>
              <p className="text-white font-semibold mt-1">{label}</p>
              <p className="text-white/60 text-sm">{sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
