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
          subtitle="Over 290 families trust us with their most important investment. Here's what they have to say."
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
            { value: "4.9/5", label: "Average Rating", sub: "Across all reviews" },
            { value: "98%", label: "Client Satisfaction", sub: "Post-project surveys" },
            { value: "85%", label: "Repeat Business", sub: "Return & refer clients" },
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
