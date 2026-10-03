import React from 'react';
import { motion } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Sparkles, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

export default function HairCareGrid({ onSelectTreatment, onOpenAppointment }) {
  const { hairCareServices } = clinicConfig;

  return (
    <section id="hair-care" className="relative py-20 md:py-28 bg-[#FAFCFA] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#DCFCE7]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
            <span>ADVANCED TRICHOLOGY &amp; SURGERY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414] leading-tight">
            Hair Care &amp; Restoration Services
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#067C24] to-[#10B981] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-[#23422C] max-w-2xl mx-auto font-normal">
            Specialized micro-surgical hair transplantation and therapeutic follicle stimulation tailored to your scalp density and natural hairline geometry.
          </p>
        </div>

        {/* 12 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hairCareServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-3xl glass-card bg-white/80 backdrop-blur-md border border-white/90 shadow-luxury hover:shadow-2xl hover:border-[#067C24]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shimmer-sweep"
            >
              {/* Card Header with Service Image and Tag */}
              <div>
                <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-b from-[#E8F8EC]/40 to-[#FAFCFA]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />

                  {/* Badge: BEST or NEW */}
                  {service.tag && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md bg-[#067C24] text-white border border-emerald-400">
                        {service.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-lg font-bold text-[#0B2414] group-hover:text-[#067C24] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#23422C] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Mini feature checkmarks */}
                  <div className="pt-2 space-y-1 border-t border-[#DCFCE7]">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-[#0B2414]">
                        <CheckCircle2 className="w-3 h-3 text-[#067C24] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    if (onSelectTreatment) onSelectTreatment(service.name);
                    if (onOpenAppointment) onOpenAppointment();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#067C24] group-hover:text-white bg-[#E8F8EC] group-hover:bg-[#067C24] border border-[#067C24]/30 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
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
