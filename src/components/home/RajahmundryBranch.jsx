import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import {
  MapPin,
  Phone,
  Navigation,
  Clock,
  ShieldCheck,
  Building,
  Calendar,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export default function RajahmundryBranch({ onOpenAppointment }) {
  const { branches } = clinicConfig;
  const [activeBranchId, setActiveBranchId] = useState('rajahmundry');

  const activeBranch = branches.find((b) => b.id === activeBranchId) || branches[0];

  return (
    <section id="branches" className="relative py-20 md:py-28 bg-[#FAFCFA] overflow-hidden">
      <div id="rajahmundry" className="sr-only" />
      <div id="hyderabad" className="sr-only" />

      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#DCFCE7]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
            <Building className="w-3.5 h-3.5 text-[#067C24]" />
            <span>OUR CLINICAL BRANCHES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414] leading-tight">
            Centers of Clinical Excellence
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#067C24] to-[#10B981] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-[#23422C] max-w-2xl mx-auto font-normal">
            Equipped with state-of-the-art micro-surgical theaters, FDA-approved cosmetic lasers, and sterile consultation lounges across Andhra Pradesh and Telangana.
          </p>

          {/* Interactive Branch Switcher Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {branches.map((branch) => {
              const isActive = branch.id === activeBranchId;
              return (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#067C24] text-white shadow-[0_4px_16px_rgba(6,124,36,0.35)] scale-105'
                      : 'bg-white text-[#0B2414] border border-[#DCFCE7] hover:border-[#067C24] hover:bg-[#E8F8EC]'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#067C24]'}`} />
                  <span>{branch.city}</span>
                  {branch.badge && (
                    <span
                      className={`text-[9px] uppercase px-1.5 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#E8F8EC] text-[#067C24]'
                      }`}
                    >
                      {branch.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Branch Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBranch.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Details Card */}
            <div className="lg:col-span-5 rounded-3xl glass-card bg-white/90 backdrop-blur-xl border border-white shadow-luxury p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Branch Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8F8EC] text-[#067C24] border border-[#A7F3D0]">
                    {activeBranch.city} Branch • {activeBranch.badge || 'Center of Excellence'}
                  </span>
                  <span className="text-xs text-[#067C24] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#067C24]" />
                    NABH Standards
                  </span>
                </div>

                {/* Branch Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2414]">
                    Chavanss Cosmetic Clinic – {activeBranch.city}
                  </h3>
                  <p className="text-xs text-[#067C24] font-semibold tracking-wide uppercase">
                    {activeBranch.tagline}
                  </p>
                  <div className="flex items-start gap-3 text-sm text-[#23422C] leading-relaxed pt-2">
                    <MapPin className="w-5 h-5 text-[#067C24] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0B2414]">
                        {activeBranch.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="p-4 rounded-2xl bg-[#E8F8EC]/60 border border-[#DCFCE7] space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-[#0B2414]">
                    <Clock className="w-4 h-4 text-[#067C24]" />
                    <span>Working Hours:</span>
                  </div>
                  <div className="pl-6 space-y-1 text-xs text-[#23422C]">
                    <p>• Timings: <span className="font-semibold text-[#0B2414]">{activeBranch.timing}</span></p>
                    <p>• Prior Appointment &amp; Consultation: <span className="font-semibold text-[#067C24]">Recommended</span></p>
                  </div>
                </div>

                {/* Direct Phones */}
                <div className="space-y-2 pt-2 border-t border-[#DCFCE7]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                    Direct Clinic Line:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${activeBranch.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#067C24]/30 text-xs font-bold text-[#0B2414] hover:border-[#067C24] hover:text-[#067C24] shadow-sm transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#067C24]" />
                      <span>{activeBranch.phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-[#DCFCE7] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={activeBranch.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-full bg-white hover:bg-neutral-50 text-[#0B2414] border border-[#067C24]/40 text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <Navigation className="w-4 h-4 text-[#067C24]" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={() => onOpenAppointment && onOpenAppointment()}
                  className="py-3 px-4 rounded-full bg-gradient-to-r from-[#067C24] to-[#0B9E31] text-white text-xs font-bold shadow-[0_4px_16px_rgba(6,124,36,0.35)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book at {activeBranch.city}</span>
                </button>
              </div>
            </div>

            {/* Right: Embedded Google Map */}
            <div className="lg:col-span-7 rounded-3xl glass-card bg-white/80 backdrop-blur-xl border border-white shadow-luxury overflow-hidden flex flex-col min-h-[420px]">
              <div className="relative flex-1 w-full min-h-[350px] bg-neutral-100">
                <iframe
                  title={`Chavanss Cosmetic Clinic ${activeBranch.city} Location Map`}
                  src={activeBranch.mapEmbedUrl}
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
                    {activeBranch.city} Clinic
                  </p>
                  <p className="text-[11px] text-[#23422C] line-clamp-2">
                    {activeBranch.address}
                  </p>
                  <div className="pt-1">
                    <a
                      href={activeBranch.mapDirectionsUrl}
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
                <div className="flex items-center gap-3">
                  <span>Open 7 Days: 10:00 AM – 7:00 PM</span>
                  <span>•</span>
                  <a
                    href={`tel:${activeBranch.phone}`}
                    className="font-semibold text-[#067C24] hover:underline"
                  >
                    {activeBranch.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4-Branch Overview Grid */}
        <div className="mt-14 pt-10 border-t border-[#DCFCE7]">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-center text-[#0B2414] mb-8">
            Complete Branch Network Across AP &amp; Telangana
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {branches.map((branch) => {
              const isSelected = branch.id === activeBranchId;
              return (
                <div
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#E8F8EC] to-white border-2 border-[#067C24] shadow-md scale-[1.02]'
                      : 'bg-white border border-[#DCFCE7] hover:border-[#067C24]/50 hover:shadow-sm'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#0B2414] font-bold font-serif text-lg">
                        <MapPin className="w-4 h-4 text-[#067C24]" />
                        <span>{branch.city}</span>
                      </div>
                      {branch.badge && (
                        <span className="text-[9px] uppercase px-2 py-0.5 rounded-full font-bold bg-[#E8F8EC] text-[#067C24] border border-[#A7F3D0]">
                          {branch.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#23422C] leading-relaxed line-clamp-3">
                      {branch.address}
                    </p>

                    <div className="space-y-1 text-xs text-[#23422C] pt-1">
                      <div className="flex items-center gap-1.5 text-[11px] text-[#067C24] font-semibold">
                        <Clock className="w-3 h-3 text-[#067C24]" />
                        <span>{branch.timing}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveBranchId(branch.id);
                      }}
                      className="text-[#067C24] font-semibold hover:underline flex items-center gap-1 text-[11px]"
                    >
                      View on Map
                    </button>

                    <a
                      href={`tel:${branch.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-bold text-[#0B2414] hover:text-[#067C24] flex items-center gap-1 text-[11px]"
                    >
                      <Phone className="w-3 h-3 text-[#067C24]" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
