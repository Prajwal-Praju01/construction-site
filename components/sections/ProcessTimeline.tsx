"use client";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/data";

export default function ProcessTimeline() {
  const iconMap = LucideIcons as unknown as Record<string, LucideIcon>;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="How We Work"
          title='Our Integrated <span class="text-accent">Process</span>'
          subtitle="A transparent, structured journey across all 5 divisions — from first consultation through to project handover and ongoing support."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary/30 to-transparent -translate-x-1/2" />

          <div className="space-y-10 md:space-y-0">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = iconMap[step.icon];

              return (
                <motion.div
                  key={step.id}
                  className={`relative md:flex md:items-center md:gap-10 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } mb-10`}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Content card — takes 45% */}
                  <div className="md:w-[45%]">
                    <div className="bg-white border border-construction-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                          {IconComponent && (
                            <IconComponent className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-heading font-bold text-lg text-primary">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {step.description}
                          </p>
                          {step.duration && (
                            <span className="inline-block mt-3 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                              ⏱ {step.duration}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center node — only on md+ */}
                  <div className="hidden md:flex w-[10%] justify-center relative z-10">
                    <div className="w-14 h-14 rounded-full bg-accent text-white font-heading font-bold text-lg flex items-center justify-center shadow-lg ring-4 ring-white">
                      {step.id}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Mobile step number */}
                  <div className="md:hidden absolute -left-3 top-6 w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center shadow-md">
                    {step.id}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
