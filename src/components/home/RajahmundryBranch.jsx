import React from 'react';
import { motion } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import {
  MapPin,
  Phone,
  Navigation,
  Clock,
  ShieldCheck,
  Building,
} from 'lucide-react';

export default function RajahmundryBranch({ onOpenAppointment }) {
  const { rajahmundryBranch } = clinicConfig;

  return (
    <section id="rajahmundry" className="relative py-20 md:py-28 bg-[#FAFCFA] overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#DCFCE7]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
            <Building className="w-3.5 h-3.5 text-[#067C24]" />
            <span>PRIMARY FLAGSHIP CLINIC</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414] leading-tight">
            Rajahmundry Center of Excellence
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#067C24] to-[#10B981] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-[#23422C] max-w-2xl mx-auto font-normal">
            Located in the heart of Danavaipeta, our Rajahmundry flagship facility features modern micro-surgical suites, high-density graft preservation, and private consultation lounges.
          </p>
        </div>

        {/* Main Location Card */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl glass-card bg-white/85 backdrop-blur-xl border border-white shadow-luxury p-8 sm:p-10 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Branch Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8F8EC] text-[#067C24] border border-[#A7F3D0]">
                  Flagship Branch
                </span>
                <span className="text-xs text-[#067C24] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#067C24]" />
                  NABH Compliant Standards
                </span>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#0B2414]">
                  Chavanss Cosmetic Clinic
                </h3>
                <div className="flex items-start gap-3 text-sm text-[#23422C] leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#067C24] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0B2414]">
                      {rajahmundryBranch.address.line1}
                    </p>
                    <p>{rajahmundryBranch.address.line2}</p>
                    <p>
                      {rajahmundryBranch.address.city}, {rajahmundryBranch.address.state} – {rajahmundryBranch.address.pincode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="p-4 rounded-2xl bg-[#E8F8EC]/50 border border-[#DCFCE7] space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold text-[#0B2414]">
                  <Clock className="w-4 h-4 text-[#067C24]" />
                  <span>Clinic Timings:</span>
                </div>
                <div className="pl-6 space-y-1 text-xs text-[#23422C]">
                  <p>• Morning: <span className="font-semibold text-[#0B2414]">{rajahmundryBranch.timings.morning}</span></p>
                  <p>• Afternoon / Evening: <span className="font-semibold text-[#0B2414]">{rajahmundryBranch.timings.afternoon}</span></p>
                  <p className="text-[11px] text-[#067C24] font-semibold pt-1">
                    {rajahmundryBranch.timings.days}
                  </p>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="space-y-2 pt-2 border-t border-[#DCFCE7]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                  Direct Clinic Lines:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+918309657861"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#067C24]/30 text-xs font-bold text-[#0B2414] hover:border-[#067C24] hover:text-[#067C24] shadow-sm transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#067C24]" />
                    <span>+91 83096 57861</span>
                  </a>
                  <a
                    href="tel:+917032299223"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#067C24]/30 text-xs font-bold text-[#0B2414] hover:border-[#067C24] hover:text-[#067C24] shadow-sm transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#067C24]" />
                    <span>+91 70322 99223</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-[#DCFCE7] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={rajahmundryBranch.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full bg-white hover:bg-neutral-50 text-[#0B2414] border border-[#067C24]/40 text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4 text-[#067C24]" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:+918309657861"
                className="py-3 px-4 rounded-full bg-gradient-to-r from-[#067C24] to-[#0B9E31] text-white text-xs font-bold shadow-[0_4px_16px_rgba(6,124,36,0.35)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Embedded Google Maps & Facility Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl glass-card bg-white/80 backdrop-blur-xl border border-white shadow-luxury overflow-hidden flex flex-col min-h-[420px]"
          >
            {/* Embedded Google Map */}
            <div className="relative flex-1 w-full min-h-[350px] bg-neutral-100">
              <iframe
                title="Chavanss Cosmetic Clinic Rajahmundry Location Map"
                src="https://maps.google.com/maps?q=Mounica+Plaza+Danavaipeta+Rajahmundry+Andhra+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-2xl glass-card bg-white/95 backdrop-blur-md shadow-lg border border-white text-xs space-y-1">
                <p className="font-serif font-bold text-[#0B2414] text-sm">
                  Danavaipeta, Rajahmundry
                </p>
                <p className="text-[11px] text-[#23422C]">
                  Opposite Madhuram Sweets, Mounica Plaza (5th Floor, Suite 505)
                </p>
                <div className="pt-1">
                  <a
                    href={rajahmundryBranch.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#067C24] hover:underline"
                  >
                    <Navigation className="w-3 h-3 text-[#067C24]" /> Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Facility Snippet Bar */}
            <div className="p-4 bg-white/95 border-t border-[#DCFCE7] flex flex-wrap items-center justify-between gap-3 text-xs text-[#23422C]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#067C24] animate-pulse" />
                <span className="font-medium text-[#0B2414]">Walk-ins &amp; Appointments Welcomed</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Free Dedicated Parking Available</span>
                <span>•</span>
                <span className="font-semibold text-[#067C24]">Flat No. 505, Mounica Plaza</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
