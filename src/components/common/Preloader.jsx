import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFCFA] pointer-events-none"
        >
          {/* Subtle glowing logo green background orb */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#DCFCE7] via-[#067C24]/20 to-[#045217]/15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo container with shimmer */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-luxury border border-[#DCFCE7]"
            >
              <img
                src="/images/logo.png"
                alt="Chavanss Cosmetic Clinic"
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-2xl font-serif text-[#0B2414] font-bold tracking-wider">
                CHAVANSS
              </span>

              {/* Shimmer sweep line */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>

            {/* Clinic Title & Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-4 font-outfit text-xl md:text-2xl font-bold text-[#0B2414] tracking-tight"
            >
              Chavanss Cosmetic Clinic
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-[#067C24] font-semibold"
            >
              Rajahmundry • Hair Transplant &amp; Permanent Makeup
            </motion.p>

            {/* Elegant progress line */}
            <div className="w-36 h-1 mt-5 bg-[#DCFCE7] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#045217] via-[#067C24] to-[#10B981]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
