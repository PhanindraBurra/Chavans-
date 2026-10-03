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
            Slide horizontally to explore authentic, clinical results achieved at Chavanss Cosmetic Clinic.
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

        {/* Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: The Draggable Slider Box */}
          <div className="lg:col-span-8">
            <div className="relative mx-auto max-w-2xl">
              {/* Outer decorative card frame */}
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-3xl overflow-hidden glass-card shadow-2xl border-2 border-white select-none cursor-ew-resize bg-neutral-900"
              >
                {/* AFTER IMAGE (Base image underneath) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={activeItem.afterImage}
                    alt={`${activeItem.title} - After`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#022109]/80 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md border border-white/20">
                    After
                  </div>
                </div>

                {/* BEFORE IMAGE (Clipped overlay on top) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
                    <img
                      src={activeItem.beforeImage}
                      alt={`${activeItem.title} - Before`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                        maxWidth: 'none',
                      }}
                      draggable={false}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#022109]/80 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md border border-white/20">
                      Before
                    </div>
                  </div>
                </div>

                {/* Draggable Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Circular Draggable Button with logo green */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#067C24] shadow-xl flex items-center justify-center border-2 border-[#067C24] pointer-events-auto">
                    <MoveHorizontal className="w-5 h-5 animate-pulse" />
                  </div>
                </div>

                {/* Instruction banner bottom */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-white/90 flex items-center gap-1.5 pointer-events-none">
                  <MoveHorizontal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Drag slider left or right to compare</span>
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
      </div>
    </section>
  );
}
