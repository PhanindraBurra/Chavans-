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

          {/* Single Daily Timing Slot */}
          <div className="mt-8 max-w-xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 sm:p-8 rounded-3xl glass-card bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/60 border-2 border-[#067C24]/30 shadow-luxury flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#067C24] text-white shadow-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
                  Daily Consultation &amp; Surgery Hours
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2414]">
                  Morning 10:00 AM to Evening 7:00 PM
                </h4>
                <p className="text-xs sm:text-sm text-[#23422C] font-medium">
                  Open 7 Days a Week • Monday to Sunday
                </p>
              </div>
            </motion.div>
          </div>

          {/* Overall Timing Badge & Quick Phone */}
          <div className="mt-8 pt-6 border-t border-[#DCFCE7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#0B2414]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#067C24]" />
              <span className="font-semibold">{timings.days} • 10:00 AM – 7:00 PM</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${clinicConfig.contacts.phonePrimary}`}
                className="flex items-center gap-1.5 font-bold text-[#067C24] hover:underline"
              >
                <Phone className="w-4 h-4 text-[#067C24]" />
                <span>Call: {clinicConfig.contacts.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
