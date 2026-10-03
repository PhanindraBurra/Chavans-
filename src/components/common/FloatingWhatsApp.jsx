import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { clinicConfig } from '../../data/clinic';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const { whatsappClean } = clinicConfig.contacts;
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=Hello%20Chavanss%20Clinic,%20I%20would%20like%20to%20consult%20for%20Hair%20Transplant%20/%20Permanent%20Makeup%20at%20Rajahmundry.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="relative glass-card bg-white/95 px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-100 max-w-xs text-xs text-[#0B2414] flex items-start gap-2"
          >
            <div>
              <p className="font-semibold text-emerald-800 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                Chat with Dr. Swetha &amp; Team
              </p>
              <p className="text-[11px] text-neutral-600 mt-0.5">
                Questions about Hair Restoration or Permanent Makeup? We're online!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-neutral-600 p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Down arrow triangle */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-emerald-100 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Chat on WhatsApp with Chavanss Clinic"
      >
        {/* Animated outer ripples */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <span className="absolute -inset-2.5 rounded-full bg-[#25D366] opacity-15 animate-pulse pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </div>
  );
}
