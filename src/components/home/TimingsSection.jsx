import React from 'react';
import { motion } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Clock, Sun, Moon, Calendar, Phone } from 'lucide-react';

export default function TimingsSection({ onOpenAppointment }) {
  const { rajahmundryBranch } = clinicConfig;
  const { timings } = rajahmundryBranch;

  return (
    <section className="relative py-16 md:py-24 bg-[#FAFCFA] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl glass-card bg-white/85 backdrop-blur-xl border border-white/90 shadow-2xl p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCFCE7]/60 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
              <Clock className="w-3.5 h-3.5 text-[#067C24]" />
              <span>SCHEDULE &amp; HOURS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2414]">
              Convenient Hours for Your Care
            </h2>

            <p className="text-sm sm:text-base text-[#23422C] max-w-xl mx-auto">
              At Chavanss Cosmetic Clinic, we value your time. Enjoy flexible hours that fit seamlessly into your busy schedule.
            </p>
          </div>

          {/* Time Slots Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Morning Slot */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl glass-card bg-gradient-to-br from-emerald-50/70 to-white/95 border border-emerald-200/60 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EC] border border-[#A7F3D0] flex items-center justify-center text-[#067C24] flex-shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#067C24]">
                  Morning Session
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#0B2414]">
                  {timings.morning}
                </h4>
                <p className="text-xs text-[#23422C]">
                  Ideal for detailed trichoscopy analysis and primary cosmetic consultations.
                </p>
              </div>
            </motion.div>

            {/* Afternoon / Evening Slot */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl glass-card bg-gradient-to-br from-green-50/70 to-white/95 border border-green-200/60 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EC] border border-[#A7F3D0] flex items-center justify-center text-[#067C24] flex-shrink-0">
                <Moon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#067C24]">
                  Afternoon &amp; Evening Session
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#0B2414]">
                  {timings.afternoon}
                </h4>
                <p className="text-xs text-[#23422C]">
                  Convenient post-work slots for procedures, follow-ups, and laser treatments.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Days open banner & quick phone */}
          <div className="mt-8 pt-6 border-t border-[#DCFCE7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#0B2414]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#067C24]" />
              <span className="font-semibold">{timings.days}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+918309657861"
                className="flex items-center gap-1.5 font-bold text-[#067C24] hover:underline"
              >
                <Phone className="w-4 h-4 text-[#067C24]" />
                <span>+91 83096 57861</span>
              </a>
              <span className="text-neutral-300">/</span>
              <a
                href="tel:+917032299223"
                className="flex items-center gap-1.5 font-bold text-[#067C24] hover:underline"
              >
                <span>+91 70322 99223</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
