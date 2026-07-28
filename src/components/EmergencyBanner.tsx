"use client";

import { useState } from "react";
import { Phone, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-rose-600 text-white font-medium text-xs sm:text-sm py-2 px-4 flex justify-between items-center relative overflow-hidden z-50 border-b border-rose-700 shadow-sm"
        >
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center w-full px-8">
            <span className="flex items-center gap-1.5 font-bold">
              <AlertCircle className="h-4 w-4 animate-bounce text-rose-200" />
              <span>Same-Day Emergency Dental Appointments Available!</span>
            </span>
            <span className="hidden md:inline text-rose-100">|</span>
            <span className="flex items-center gap-1">
              <span>Severe pain, swelling, or a broken tooth?</span>
              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-1.5 bg-white text-rose-600 px-3 py-1 rounded-full text-xs font-black hover:bg-rose-50 transition-colors shadow-sm uppercase tracking-wider ml-1"
              >
                <Phone className="h-3 w-3 fill-rose-600 text-rose-600" />
                Call Now: (800) 555-0199
              </a>
            </span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 rounded-full text-rose-200 hover:text-white hover:bg-rose-700/50 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
