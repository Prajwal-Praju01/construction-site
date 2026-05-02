"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import type { Service } from "@/types";
import { useEffect } from "react";

interface ServiceStepsModalProps {
  service: Service;
  open: boolean;
  onClose: () => void;
}

export default function ServiceStepsModal({
  service,
  open,
  onClose,
}: ServiceStepsModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
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
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Image Header */}
            <div className="relative h-72 md:h-96">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">
                  {service.title}
                </h2>
                <p className="text-white/80 text-sm mt-2">{service.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="mb-8">
                <h3 className="font-heading font-bold text-2xl text-primary mb-6">
                  Our Process
                </h3>
                <div className="space-y-6">
                  {service.steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-6"
                    >
                      {/* Step Number Circle */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-lg shadow-md">
                          {step.number}
                        </div>
                        {index !== service.steps.length - 1 && (
                          <div className="w-0.5 h-12 bg-accent/30 mx-auto mt-2 mb-2" />
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pt-1">
                        <h4 className="font-heading font-bold text-lg text-primary mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-construction-light rounded-2xl p-6 border border-primary/10">
                <h3 className="font-heading font-bold text-lg text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-1">
                      Best For
                    </p>
                    <p className="text-sm text-primary font-medium">{service.bestFor}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-1">
                      Delivery Window
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {service.deliveryWindow}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-1">
                      Monthly Capacity
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {service.monthlyCapacity}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-1">
                      Scope Includes
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {service.features.length} key features
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
