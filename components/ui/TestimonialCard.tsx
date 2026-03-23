"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      className="relative bg-white rounded-2xl p-7 border border-primary/10 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Quote icon */}
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 fill-primary/10" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-accent fill-accent" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      {/* Divider */}
      <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent/40 mb-5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/10 flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="font-heading font-bold text-primary text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.role}</p>
          {testimonial.project && (
            <p className="text-accent text-xs font-medium mt-0.5">{testimonial.project}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
