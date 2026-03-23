import type { Metadata } from "next";
import Image from "next/image";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Construction Process",
  description: "Our transparent 9-step construction process — from initial consultation to handover.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80" alt="Construction process" fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight">
            Our <span className="text-accent">9-Step</span> Process
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            No guesswork, no surprises. A proven, transparent process that delivers your home on time and on budget.
          </p>
        </div>
      </section>

      <ProcessTimeline />
      <CTASection />
    </>
  );
}
