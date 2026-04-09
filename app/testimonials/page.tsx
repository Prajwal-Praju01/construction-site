import type { Metadata } from "next";
import Image from "next/image";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: "What our clients say about Kushi Groups Tavarekere. Real reviews from real homeowners.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" alt="Happy clients" fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Client Reviews</p>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight">
            Words From Our <span className="text-accent">Clients</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from the families and developers who trusted us with their most important investment.
          </p>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}
