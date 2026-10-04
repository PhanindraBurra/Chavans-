import React from 'react';
import { motion } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Award, ShieldCheck, Sparkles, CheckCircle2, Calendar, FileText } from 'lucide-react';

export default function DoctorsSection({ onOpenAppointment, onOpenCertificates }) {
  const { doctors } = clinicConfig;

  return (
    <section id="doctors" className="relative py-20 md:py-28 bg-gradient-to-b from-[#FAFCFA] via-[#E8F8EC]/30 to-[#FAFCFA] overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#DCFCE7]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Certificates Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DCFCE7]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
              <span>Medical Leadership</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414]">
              Our Team of Specialists
            </h2>

            <p className="text-base text-[#23422C] max-w-xl font-normal">
              Experienced medical cosmetologists, maxillofacial surgeons, and trichologists committed to patient safety and natural aesthetics.
            </p>
          </div>

          {/* Certificates Lightbox Trigger Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onOpenCertificates}
              className="group px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#0B2414] bg-white hover:bg-[#E8F8EC] border-2 border-[#067C24]/40 shadow-luxury hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5"
            >
              <Award className="w-4 h-4 text-[#067C24] group-hover:scale-110 transition-transform" />
              <span>CERTIFICATES &amp; ACCREDITATIONS</span>
            </button>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group glass-card rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/90 shadow-luxury hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Doctor Portrait with Soft Parallax Container */}
                <div className="relative aspect-[3/3.4] overflow-hidden bg-gradient-to-b from-[#E8F8EC]/50 to-[#FAFCFA]">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022109]/80 via-transparent to-transparent" />

                  {/* Doctor badge overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[11px] font-medium text-[#DCFCE7] tracking-wide">
                      {doc.role}
                    </p>
                    <h3 className="font-serif text-xl font-bold tracking-tight">
                      {doc.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E8F8EC] text-[#067C24] border border-[#067C24]/20">
                      {doc.qualification}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#23422C] leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Doctor Specialties */}
                  <div className="pt-2 border-t border-[#DCFCE7] space-y-1.5">
                    {doc.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-[#0B2414]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#067C24] flex-shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation CTA on each card */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenAppointment && onOpenAppointment(doc.specialties[0])}
                  className="w-full py-2.5 rounded-full text-xs font-semibold text-[#067C24] bg-[#E8F8EC] hover:bg-[#067C24] hover:text-white transition-colors duration-300 border border-[#067C24]/30 flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Consult with {doc.name.split(' ')[1] || 'Doctor'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
