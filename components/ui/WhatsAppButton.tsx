"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your construction services.",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-green-300/40 focus:outline-none focus:ring-4 focus:ring-green-300 overflow-hidden group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-semibold text-sm pl-0 group-hover:pl-4 pr-0 group-hover:pr-2">
        Get Free Quote
      </span>
      <div className="w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0">
        <MessageCircle className="w-6 h-6" fill="white" />
      </div>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400" />
      </span>
    </motion.a>
  );
}
