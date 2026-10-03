import React from 'react';
import { motion } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Sparkles, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PermanentMakeupGrid({ onSelectTreatment, onOpenAppointment }) {
  const { permanentMakeupServices } = clinicConfig;

  return (
    <section id="permanent-makeup" className="relative py-20 md:py-28 bg-gradient-to-b from-[#FAFCFA] via-[#E8F8EC]/35 to-[#FAFCFA] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#DCFCE7]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
            <span>SEMI-PERMANENT AESTHETICS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414] leading-tight">
            Permanent Makeup Treatments
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#067C24] to-[#10B981] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-[#23422C] max-w-2xl mx-auto font-normal">
            Elevate your natural facial contours with German-certified micro-pigment infusion. Wake up radiant and effortlessly poised every day.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {permanentMakeupServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl glass-card bg-white/85 backdrop-blur-xl border border-white/90 shadow-luxury hover:shadow-2xl hover:border-[#067C24]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shimmer-sweep"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8F8EC]/40">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022109]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#067C24] shadow-md border border-[#DCFCE7]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title overlay on bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#23422C] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Meta Specs: Duration & Longevity */}
                  <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-[#E8F8EC]/50 border border-[#DCFCE7] text-[#0B2414]">
                    <div className="flex items-center gap-1.5 font-medium text-[#067C24]">
                      <Clock className="w-3.5 h-3.5 text-[#067C24]" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-[#067C24]">
                      <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
                      <span>Lasts: {service.longevity}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {service.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#0B2414]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#067C24] flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    if (onSelectTreatment) onSelectTreatment(service.title);
                    if (onOpenAppointment) onOpenAppointment();
                  }}
                  className="w-full py-3 px-5 rounded-2xl text-xs font-semibold text-white bg-gradient-to-r from-[#067C24] to-[#0B9E31] shadow-[0_4px_16px_rgba(6,124,36,0.35)] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Reserve Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
