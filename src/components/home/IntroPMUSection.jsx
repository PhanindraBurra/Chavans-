import React from 'react';
import { motion } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Sparkles, Heart, Sun, Feather, CheckCircle2 } from 'lucide-react';

export default function IntroPMUSection({ onOpenAppointment }) {
  const { pmuIntro } = clinicConfig;

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#FAFCFA] via-[#E8F8EC]/35 to-[#FAFCFA] overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#DCFCE7]/60 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
            <span>{pmuIntro.category}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414] leading-tight"
          >
            {pmuIntro.headline}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#067C24] to-[#10B981] rounded-full mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base sm:text-lg text-[#23422C] leading-relaxed pt-2 font-normal"
          >
            {pmuIntro.lead}
          </motion.p>
        </div>

        {/* Feature Quote & Pillars */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Callout Card with Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white shadow-luxury relative overflow-hidden"
          >
            <div className="relative z-10 space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EC] flex items-center justify-center text-[#067C24]">
                <Heart className="w-6 h-6 fill-[#067C24]/20" />
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl text-[#0B2414] font-semibold leading-relaxed italic border-l-4 border-[#067C24] pl-4">
                "{pmuIntro.quote}"
              </blockquote>

              <p className="text-sm sm:text-base text-[#23422C] leading-relaxed">
                {pmuIntro.body}
              </p>

              {/* Highlights Pill List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#DCFCE7]">
                {pmuIntro.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B2414]">
                    <CheckCircle2 className="w-4 h-4 text-[#067C24] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle decorative stamp */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-[#DCFCE7]/40 blur-2xl pointer-events-none" />
          </motion.div>

          {/* Right Column: Visual Experience Cards */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="glass-card bg-white/70 p-6 rounded-2xl border border-white shadow-sm flex items-center gap-4 hover:border-[#067C24]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8F8EC] border border-[#A7F3D0] flex items-center justify-center text-[#067C24] flex-shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#0B2414]">
                  Wake Up Ready &amp; Polished
                </h4>
                <p className="text-xs text-[#23422C] mt-0.5">
                  Never worry about uneven eyeliners, faded brows, or smudged lipstick throughout your day.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card bg-white/70 p-6 rounded-2xl border border-white shadow-sm flex items-center gap-4 hover:border-[#067C24]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8F8EC] border border-[#A7F3D0] flex items-center justify-center text-[#067C24] flex-shrink-0">
                <Feather className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#0B2414]">
                  Gentle, Micro-Pigment Artistry
                </h4>
                <p className="text-xs text-[#23422C] mt-0.5">
                  German medical pigment formulations that gently harmonize with your skin undertones.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#067C24] via-[#05661E] to-[#045217] text-white shadow-[0_8px_30px_rgba(6,124,36,0.3)] flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                  Ready for Effortless Beauty?
                </p>
                <h4 className="font-serif text-lg font-bold mt-1">
                  Book Your Permanent Makeup Consultation
                </h4>
              </div>
              <button
                onClick={onOpenAppointment}
                className="mt-4 px-5 py-2.5 rounded-full bg-white text-[#045217] font-semibold text-xs tracking-wide hover:bg-[#E8F8EC] transition-colors self-start shadow-md"
              >
                Schedule Appointment
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
