"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
          alt="Modern house"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-2xl z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center surface-panel-dark rounded-3xl px-6 py-12 sm:px-10 sm:py-14">
        <motion.span
          className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-8 h-0.5 bg-accent" />
          Start Building Today
          <span className="w-8 h-0.5 bg-accent" />
        </motion.span>

        <motion.h2
          className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to Build Your{" "}
          <span className="text-accent">Dream Home?</span>
        </motion.h2>

        <motion.p
          className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get a free, no-obligation construction quote within 48 hours. Our experts will assess your project and provide a transparent breakdown with no hidden fees.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">
              Request Construction Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="tel:9845447449">
              <PhoneCall className="w-5 h-5" />
              Call Us Now
            </a>
          </Button>
        </motion.div>

        {/* Trust micro-copy */}
        <motion.p
          className="mt-8 text-white/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Free consultation · No commitment required · Response within 24 hours
        </motion.p>
      </div>
    </section>
  );
}
