import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react';

export default function HeroSection({ onOpenAppointment }) {
  const { heroSlides, contacts } = clinicConfig;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const slide = heroSlides[currentSlide];

  // Word-by-word reveal helper with natural text flow and clean word spacing
  const renderAnimatedWords = (text) => {
    const words = text.split(' ');
    return (
      <span className="inline">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
            className="inline-block mr-2 sm:mr-3 last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden bg-[#FAFCFA]">
      {/* Background Animated Glow Blobs & Gradient Mesh in Logo Green */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft mint green glowing blob */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#DCFCE7]/70 blur-3xl"
        />

        {/* Logo green subtle ambient blob */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#067C24]/10 blur-3xl"
        />

        {/* Forest green subtle base glow */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, 35, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#A7F3D0]/20 blur-3xl"
        />

        {/* Subtle decorative grid/mesh dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#067C24_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Category & Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8F8EC] text-[#067C24] border border-[#067C24]/20 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
                    {slide.category}
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#0B2414] border border-[#DCFCE7] shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-[#067C24] text-[#067C24]" />
                    <span>{slide.badge}</span>
                  </span>
                </div>

                {/* Animated Headline */}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2414] leading-[1.15] tracking-tight">
                  {renderAnimatedWords(slide.title)}
                </h1>

                {/* Subtitle / Real website copy */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-base sm:text-lg text-[#23422C] leading-relaxed max-w-2xl font-normal"
                >
                  {slide.description}
                </motion.p>

                {/* Highlights List */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-[#0B2414] font-medium"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#067C24]" />
                    <span>20,000+ Restorations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#067C24]" />
                    <span>German Fellowship Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#067C24]" />
                    <span>Zero Post-FUE White Dots</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
                >
                  <button
                    onClick={onOpenAppointment}
                    className="relative group px-7 py-4 rounded-full text-white font-semibold text-sm md:text-base bg-gradient-to-r from-[#067C24] via-[#0A912C] to-[#067C24] shadow-[0_4px_20px_rgba(6,124,36,0.35)] hover:shadow-[0_8px_30px_rgba(6,124,36,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>{slide.primaryCta} • Free Hair Test</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>

                  <a
                    href={`https://wa.me/${contacts.whatsappClean}?text=Hello%20Chavanss%20Cosmetic%20Clinic,%20I%20am%20interested%20in%20${encodeURIComponent(
                      slide.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 rounded-full text-[#0B2414] font-semibold text-sm md:text-base bg-white hover:bg-[#E8F8EC]/40 border border-[#067C24]/30 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#067C24]" />
                    <span>WhatsApp Direct</span>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation Dots & Arrows */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex items-center gap-2">
                {heroSlides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'w-8 bg-[#067C24]'
                        : 'w-2 bg-[#067C24]/25 hover:bg-[#067C24]/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <span className="text-xs text-neutral-300 font-medium">|</span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
                    )
                  }
                  className="p-1.5 rounded-full border border-[#067C24]/30 text-[#0B2414] hover:bg-[#E8F8EC] transition-colors"
                  aria-label="Previous Hero Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
                  }
                  className="p-1.5 rounded-full border border-[#067C24]/30 text-[#0B2414] hover:bg-[#E8F8EC] transition-colors"
                  aria-label="Next Hero Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Gentle Ken Burns Zoom */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#DCFCE7] via-[#067C24]/20 to-[#A7F3D0]/30 blur-xl opacity-75" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl p-3 bg-white/80 backdrop-blur-xl border border-white shadow-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-[#E8F8EC]/40"
                  >
                    {/* Ken Burns Zoom Effect */}
                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 7, ease: 'easeOut' }}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#022109]/75 via-transparent to-transparent" />

                    {/* Floating Overlay Badge on Image */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card bg-white/90 backdrop-blur-md border border-white/80 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#067C24]">
                            {slide.category}
                          </p>
                          <p className="text-sm font-serif font-bold text-[#0B2414]">
                            {slide.highlightText}
                          </p>
                        </div>
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8F8EC] flex items-center justify-center text-[#067C24]">
                          <Sparkles className="w-4 h-4 text-[#067C24]" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Floating Aesthetic Pill: Flagship Rajahmundry */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-[#DCFCE7] flex items-center gap-1.5 text-xs font-semibold text-[#0B2414]"
                >
                  <Award className="w-4 h-4 text-[#067C24]" />
                  <span>Rajahmundry Center</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
