import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '../../data/clinic';

export default function LightboxModal({ isOpen, onClose, initialIndex = 0 }) {
  const { certificates } = clinicConfig;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const currentItem = certificates[currentIndex] || certificates[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#03210B]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-4xl bg-[#FAFCFA] rounded-3xl shadow-2xl border border-[#DCFCE7] overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCFCE7] bg-white/80">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#067C24]" />
              <h3 className="font-serif font-bold text-lg md:text-xl text-[#0B2414]">
                Official Accreditations &amp; Clinic Facilities
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-400 hover:text-[#0B2414] hover:bg-neutral-100 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Display Body */}
          <div className="relative flex-1 flex flex-col md:flex-row items-center bg-[#021A08] min-h-[340px] md:min-h-[460px] overflow-hidden">
            {/* Image display */}
            <div className="relative w-full h-[320px] md:h-full md:flex-1 flex items-center justify-center p-4">
              <motion.img
                key={currentItem.id}
                src={currentItem.image}
                alt={currentItem.title}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="max-h-[380px] md:max-h-[440px] w-auto max-w-full object-contain rounded-xl shadow-lg border border-white/10"
              />

              {/* Prev / Next navigation arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#067C24] text-white transition-all backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#067C24] text-white transition-all backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Sidebar Details */}
            <div className="w-full md:w-80 p-6 bg-[#04280E] text-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#067C24]/40 text-emerald-200 border border-[#067C24] mb-3">
                  {currentItem.category}
                </span>
                <h4 className="font-serif text-xl font-bold text-white mb-2 leading-tight">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed mb-4">
                  {currentItem.subtitle}
                </p>

                <div className="space-y-2 py-3 border-y border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-white/90">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified Medical Standard</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>German Fellowship Certified</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-xs text-white/60 flex items-center justify-between">
                <span>
                  {currentIndex + 1} of {certificates.length}
                </span>
                <span className="italic">Chavanss Cosmetic Clinic</span>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="p-3 bg-[#FAFCFA] border-t border-[#DCFCE7] flex items-center gap-2 overflow-x-auto">
            {certificates.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-[#067C24] scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
