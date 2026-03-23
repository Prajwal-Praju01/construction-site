"use client";

import { useRef, useEffect, useState } from "react";
import type React from "react";
import { motion, useInView } from "framer-motion";
import { Award, Building2, Users, Layers } from "lucide-react";
import { STATS } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, Building2, Users, Layers,
};

function AnimatedNumber({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, value]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((stat, index) => {
            const Icon = ICON_MAP[stat.icon];
            return (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {Icon && (
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-accent flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                )}
                <div className="font-heading font-black text-primary leading-none mb-1" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} active={isInView} />
                </div>
                <p className="font-heading font-semibold text-construction-dark text-base">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
