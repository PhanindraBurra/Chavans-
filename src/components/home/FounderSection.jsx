import React from 'react';
import { motion } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Award, ShieldCheck, Sparkles, CheckCircle2, Calendar, MessageCircle } from 'lucide-react';

export default function FounderSection({ onOpenAppointment, onOpenCertificates }) {
  const { founder, contacts } = clinicConfig;

  return (
    <section id="founder" className="relative py-20 md:py-28 bg-[#FAFCFA] overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#DCFCE7]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait with Luxury Glassmorphic Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer Logo Green Glow Border */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#DCFCE7] via-[#067C24]/20 to-[#A7F3D0] opacity-60 blur-lg" />

              {/* Main Image Container with Soft Shadow */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-3.5 bg-white/90 shadow-2xl border border-white">
                <div className="relative aspect-[3/3.8] rounded-2xl overflow-hidden bg-[#E8F8EC]/40">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022109]/60 via-transparent to-transparent" />

                  {/* German Fellowship Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card bg-white/95 backdrop-blur-md border border-white/80 text-xs shadow-md">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#067C24] flex-shrink-0" />
                      <div>
                        <p className="font-bold text-[#0B2414]">Fellowship in Medical Cosmetology</p>
                        <p className="text-[11px] text-[#067C24] font-semibold">Germany Certified Specialist</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tag */}
                <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-[#DCFCE7] text-[11px] font-bold text-[#067C24] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
                  <span>Founder</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Story, Credentials & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8F8EC] text-[#067C24] border border-[#067C24]/20">
                <Sparkles className="w-3 h-3 text-[#067C24]" />
                Meet The Founder
              </span>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414] leading-tight">
                {founder.name}
              </h2>

              <p className="mt-1 text-base sm:text-lg font-serif italic text-[#067C24] font-semibold">
                {founder.credentials}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#23422C] leading-relaxed font-normal">
              {founder.description}
            </p>

            {/* Founder Quote Card */}
            <div className="p-5 rounded-2xl glass-card bg-white/80 border-l-4 border-[#067C24] shadow-sm">
              <p className="font-serif italic text-sm sm:text-base text-[#0B2414] leading-relaxed">
                "{founder.quote}"
              </p>
            </div>

            {/* Clinical Highlights */}
            <div className="space-y-2.5 pt-2">
              {founder.achievements.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-[#0B2414]">
                  <div className="w-5 h-5 rounded-full bg-[#E8F8EC] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#067C24]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3.5 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#067C24] to-[#0B9E31] shadow-[0_4px_20px_rgba(6,124,36,0.35)] hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Direct with Dr. Swetha</span>
              </button>

              <button
                onClick={onOpenCertificates}
                className="px-5 py-3.5 rounded-full text-[#0B2414] font-semibold text-sm bg-white hover:bg-[#E8F8EC] border border-[#067C24]/30 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-[#067C24]" />
                <span>View Certificates &amp; Credentials</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
