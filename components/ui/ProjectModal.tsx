"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Maximize2, Clock } from "lucide-react";
import type { Project } from "@/types";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Image */}
            <div className="relative h-72 md:h-96">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {project.category}
              </span>
              <div className="absolute bottom-4 left-6">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">{project.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-gray-600 text-base leading-relaxed mb-6">{project.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: MapPin, label: "Location", value: project.location },
                  { icon: Calendar, label: "Year", value: project.year.toString() },
                  { icon: Maximize2, label: "Area", value: project.area ?? "N/A" },
                  { icon: Clock, label: "Duration", value: project.duration ?? "N/A" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-construction-light rounded-xl p-4">
                    <Icon className="w-5 h-5 text-accent mb-1" />
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                    <p className="font-semibold text-primary text-sm mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
