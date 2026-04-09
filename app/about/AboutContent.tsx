"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Building2, ShieldCheck, CheckCircle } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { StatsSection } from "@/components/sections/StatsSection";
import SectionHeader from "@/components/ui/SectionHeader";

const VALUES = [
  { icon: ShieldCheck, title: "Integrity First", desc: "Transparent pricing, honest timelines, and no surprises — ever." },
  { icon: Award, title: "Unmatched Quality", desc: "Premium materials and senior engineers on every single project." },
  { icon: Users, title: "Client-Centered", desc: "A dedicated project manager keeps you informed at every milestone." },
  { icon: Building2, title: "Full-Service", desc: "From permits to punch list — we handle everything under one roof." },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1541976590-713941681591?w=1920&q=80" alt="Construction team" fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            Who We Are
          </motion.p>
          <motion.h1
            className="font-heading font-black text-5xl md:text-6xl text-white leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building Excellence <span className="text-accent">Since 2006</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kushi Groups Tavarekere was founded on a simple belief — every family deserves a home built with the same care and precision as a monument. Eighteen years and 340+ projects later, that belief hasn&apos;t changed.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="font-heading font-bold text-4xl text-primary mb-6">From One Crew to 45 Specialists</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Marcus Reid started Kushi Groups Tavarekere with a 3-person crew, a pickup truck, and an obsession with quality that his early clients still talk about. Every nail, every beam, every pipe was treated as part of something that would last generations.</p>
                <p>Word spread. Referrals turned into a waitlist. By 2012, the crew had grown to 20. By 2018, we had completed our 200th home and expanded into full turnkey construction — handling everything from basement excavation to interior finish out.</p>
                <p>Today, Kushi Groups Tavarekere employs 45 licensed professionals across architecture, engineering, plumbing, electrical, and design. We remain privately owned and hands-on. Marcus still walks every job site, every week.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Licensed & Insured", "OSHA Certified", "Green Build Certified", "Award Winning"].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 bg-primary/5 text-primary text-sm font-medium px-4 py-2 rounded-full border border-primary/10">
                    <CheckCircle className="w-4 h-4 text-accent" /> {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction team at work" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-2xl p-6 shadow-xl">
                <p className="font-heading font-black text-4xl">18+</p>
                <p className="font-medium text-white/90 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-construction-light">
        <div className="container-custom">
          <SectionHeader eyebrow="Core Values" title='What We <span class="text-accent">Stand For</span>' subtitle="These principles guide every decision we make, from how we source materials to how we communicate with clients." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-card text-center group hover:shadow-card-hover transition-shadow"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-accent flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      <CTASection />
    </>
  );
}
