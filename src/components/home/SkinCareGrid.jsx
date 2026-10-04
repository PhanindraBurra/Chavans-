import React from 'react';
import { motion } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Sparkles, ArrowRight, CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';

export default function SkinCareGrid({ onSelectTreatment, onOpenAppointment }) {
  const { skinCareServices } = clinicConfig;

  return (
    <section id="skin-care" className="relative py-20 md:py-28 bg-[#FAFCFA] overflow-hidden">
      {/* Background ambient lighting in mint and emerald */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#DCFCE7]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
            <span>CLINICAL AESTHETICS &amp; DERMATOLOGY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414] leading-tight">
            Advanced Skin Care &amp; Melasma Treatments
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#067C24] to-[#10B981] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-[#23422C] max-w-2xl mx-auto font-normal">
            Specialized laser toning, Melasma pigment correction, and medical-grade rejuvenation therapies tailored for radiant clarity and enduring dermal health.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skinCareServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-3xl glass-card bg-white/85 backdrop-blur-md border border-white/90 shadow-luxury hover:shadow-2xl hover:border-[#067C24]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shimmer-sweep"
            >
              <div>
                {/* Card Header with Service Image and Tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-[#E8F8EC]/40 to-[#FAFCFA]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Badge: SPECIALIZED / BEST / NEW / POPULAR */}
                  {service.tag && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md bg-[#067C24] text-white border border-emerald-400">
                        {service.tag}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white font-medium drop-shadow-md">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>Dermatologist Approved</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#0B2414] group-hover:text-[#067C24] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#23422C] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Mini feature checkmarks */}
                  <div className="pt-3 space-y-1.5 border-t border-[#DCFCE7]">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#0B2414]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#067C24] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    if (onSelectTreatment) onSelectTreatment(service.name);
                    if (onOpenAppointment) onOpenAppointment();
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#067C24] group-hover:text-white bg-[#E8F8EC] group-hover:bg-[#067C24] border border-[#067C24]/30 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Skin Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
