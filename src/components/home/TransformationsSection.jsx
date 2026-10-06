import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Sparkles, MoveHorizontal, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

export default function TransformationsSection({ onOpenAppointment }) {
  const { transformations } = clinicConfig;
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeItem = transformations[activeTab] || transformations[0];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="relative py-20 md:py-28 bg-[#FAFCFA] overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-gradient-to-tr from-[#DCFCE7]/50 via-[#067C24]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
            <span>BEFORE / AFTER</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414] leading-tight">
            Real Clinical Transformations
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#067C24] to-[#10B981] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-[#23422C] max-w-xl mx-auto font-normal">
            Explore authentic, verified clinical results achieved at Chavanss Cosmetic Clinic.
          </p>
        </div>

        {/* Treatment Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-10 mb-12">
          {transformations.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm ${
                activeTab === idx
                  ? 'bg-[#067C24] text-white shadow-[0_4px_16px_rgba(6,124,36,0.35)] scale-105'
                  : 'bg-white/85 hover:bg-white text-[#0B2414] border border-[#DCFCE7]'
              }`}
            >
              <span>{item.title}</span>
              {item.tag && (
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    activeTab === idx
                      ? 'bg-white text-[#067C24]'
                      : 'bg-[#E8F8EC] text-[#067C24]'
                  }`}
                >
                  {item.tag}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Side-by-Side Before & After Photo Display (No Dragging) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Clear Side-by-Side Full Photos */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* BEFORE Photo Card */}
              <div className="relative rounded-3xl overflow-hidden glass-card shadow-xl border-2 border-[#DCFCE7] bg-[#021A08] min-h-[300px] sm:min-h-[360px] flex items-center justify-center p-2 group">
                <img
                  src={activeItem.beforeImage}
                  alt={`${activeItem.title} - Before`}
                  className="w-full max-h-[420px] object-contain rounded-2xl"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-rose-600/90 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md border border-white/20 z-10">
                  BEFORE
                </div>
              </div>

              {/* AFTER Photo Card */}
              <div className="relative rounded-3xl overflow-hidden glass-card shadow-xl border-2 border-[#DCFCE7] bg-[#021A08] min-h-[300px] sm:min-h-[360px] flex items-center justify-center p-2 group">
                <img
                  src={activeItem.afterImage}
                  alt={`${activeItem.title} - After`}
                  className="w-full max-h-[420px] object-contain rounded-2xl"
                />
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#067C24]/90 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md border border-white/20 z-10">
                  AFTER
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Case Information */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#E8F8EC] text-[#067C24] border border-[#A7F3D0]">
                  <span>{activeItem.treatmentType}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2414]">
                  {activeItem.title}
                </h3>

                <p className="text-sm sm:text-base text-[#23422C] leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="p-4 rounded-2xl glass-card bg-white/80 border border-[#DCFCE7] space-y-2">
                  <p className="text-xs font-bold text-[#067C24] uppercase tracking-wider">
                    Key Result
                  </p>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#0B2414] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#067C24] flex-shrink-0 mt-0.5" />
                    <span>{activeItem.result}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenAppointment}
                    className="w-full py-3.5 px-6 rounded-full text-white font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#067C24] to-[#0B9E31] shadow-[0_4px_20px_rgba(6,124,36,0.35)] hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book Your Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Authentic Client Case Studies Grid (Featuring All User-Provided Images) */}
        <div className="mt-20 pt-14 border-t border-[#DCFCE7]">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] px-3.5 py-1 rounded-full border border-[#067C24]/20">
              REAL CLIENT GALLERY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2414]">
              Authentic Patient Results from Chavanss Cosmetic Clinic
            </h3>
            <p className="text-xs sm:text-sm text-[#23422C]">
              High-density follicular survival, precision hairline design, and life-changing aesthetic confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: '/images/client-transformation-1.jpg',
                title: 'Frontal Hairline Reconstruction',
                badge: 'Biotech FUE',
                desc: 'Full natural curly density and sculpted hairline alignment.',
              },
              {
                src: '/images/client-transformation-4.jpg',
                title: 'High-Density Crown & Temples',
                badge: 'Happy Client',
                desc: 'Complete coverage with zero white dots and maximum survival.',
              },
              {
                src: '/images/client-transformation-3.jpg',
                title: 'Micro-Surgical Graft Alignment',
                badge: '100% Graft Survival',
                desc: 'Precision donor extraction to lifelong permanent regrowth.',
              },
              {
                src: '/images/client-transformation-2.jpg',
                title: 'Volumetric Follicular Revival',
                badge: 'High Density',
                desc: 'Rejuvenated thick crown coverage and restored confidence.',
              },
            ].map((card, cIdx) => (
              <motion.div
                key={cIdx}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-3xl overflow-hidden glass-card bg-white/90 border border-[#DCFCE7] shadow-luxury hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-[#021A08] p-1 flex items-center justify-center">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#067C24] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    {card.badge}
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <h4 className="font-serif text-base font-bold text-[#0B2414] group-hover:text-[#067C24] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#23422C] leading-relaxed">
                    {card.desc}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={onOpenAppointment}
                      className="w-full py-2 px-3 rounded-xl bg-[#E8F8EC] group-hover:bg-[#067C24] text-[#067C24] group-hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Get Similar Results</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
