"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {eyebrow && (
        <motion.span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] mb-4",
            light
              ? "border-white/25 bg-white/10 text-accent"
              : "border-primary/15 bg-white text-primary/70"
          )}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-5 h-px bg-accent inline-block" />
          {eyebrow}
          <span className="w-5 h-px bg-accent inline-block" />
        </motion.span>
      )}
      <motion.h2
        className={cn(
          "font-heading font-bold text-4xl md:text-5xl lg:text-[3.35rem] leading-[1.04]",
          centered && "max-w-4xl mx-auto",
          light ? "text-white" : "text-primary"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <motion.p
          className={cn(
            "mt-5 text-lg max-w-3xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/75" : "text-gray-600"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
