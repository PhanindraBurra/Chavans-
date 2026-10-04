import React from 'react';
import { clinicConfig } from '../../data/clinic';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUp,
  Clock,
  Building,
} from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer({ onOpenAppointment }) {
  const { contacts, branches } = clinicConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const otherBranches = branches.filter((b) => b.id !== 'rajahmundry');

  return (
    <footer className="relative bg-[#03210B] text-white pt-20 pb-12 overflow-hidden border-t-2 border-[#067C24]/40">
      {/* Decorative ambient glows in footer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#067C24]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#10B981]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner: Primary Brand & Social Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-14 border-b border-white/10">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-3">
              <img
                src={clinicConfig.logo}
                alt="Chavanss Cosmetic Clinic Logo"
                className="h-12 w-auto bg-white/95 p-1 rounded-full shadow-md"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  Chavanss Cosmetic Clinic
                </h3>
                <p className="text-xs text-emerald-300 tracking-widest uppercase font-semibold">
                  Rajahmundry • Hyderabad • Vijayawada • Visakhapatnam
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              India's premier clinic specializing in Biotech FUE Hair Transplantation, Advanced Skin Care &amp; Melasma Treatments, and German Fellowship-certified Permanent Makeup aesthetics.
            </p>
          </div>

          {/* Social Channels & Contact Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-[#067C24] text-white transition-all duration-300 shadow-sm border border-white/15 hover:scale-105"
              aria-label="Follow Chavanss Clinic on Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href={contacts.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-red-600 text-white transition-all duration-300 shadow-sm border border-white/15 hover:scale-105"
              aria-label="Subscribe to Chavanss Clinic on YouTube"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${contacts.email}`}
              className="p-3 rounded-full bg-white/10 hover:bg-[#067C24] text-white transition-all duration-300 shadow-sm border border-white/15 hover:scale-105"
              aria-label="Email Chavanss Clinic"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={`https://wa.me/${contacts.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-emerald-400 text-white font-semibold text-xs transition-all shadow-md hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Branch Network Showcase (Rajahmundry FIRST and Highlighted) */}
        <div className="py-12 border-b border-white/10">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-6 flex items-center gap-2">
            <Building className="w-4 h-4" />
            <span>Our Clinical Locations Across Andhra Pradesh &amp; Telangana</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. RAJAHMUNDRY FLAGSHIP BRANCH (HIGHLIGHTED FIRST) */}
            <div className="rounded-2xl p-5 bg-gradient-to-b from-[#063B14] to-[#03250C] border-2 border-[#067C24] shadow-xl relative overflow-hidden flex flex-col justify-between">
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#067C24] to-[#045217] text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                Flagship Branch
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                  <h4 className="font-serif text-lg font-bold text-white">
                    Rajahmundry
                  </h4>
                </div>

                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Flat no. 505, Mounica Plaza, Opp. Madhuram Sweets, Danavaipeta, Rajahmundry, Andhra Pradesh
                </p>

                <div className="space-y-1 text-xs text-emerald-200 font-medium pt-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>10:00 AM – 7:00 PM (All 7 Days)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/90">
                    <Phone className="w-3 h-3 text-emerald-400" />
                    <a href={`tel:${clinicConfig.contacts.phonePrimary}`} className="hover:underline">{clinicConfig.contacts.phonePrimary}</a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=Mounica+Plaza+Danavaipeta+Rajahmundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-[#067C24]/40 hover:bg-[#067C24] text-white border border-[#067C24]/60 text-xs font-semibold transition-all flex items-center justify-center gap-1"
                >
                  <MapPin className="w-3 h-3" /> Get Directions
                </a>
              </div>
            </div>

            {/* Other Branches */}
            {otherBranches.map((branch) => (
              <div
                key={branch.id}
                className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-[#067C24]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <h4 className="font-serif text-lg font-bold">
                        {branch.city}
                      </h4>
                    </div>
                    {branch.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#067C24]/30 text-emerald-300 border border-[#067C24]/50">
                        {branch.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {branch.address}
                  </p>

                  <div className="space-y-1 text-xs text-white/80 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-emerald-400/70" />
                      <span>{branch.timing}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-emerald-400/70" />
                      <span>{branch.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenAppointment}
                    className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-[#067C24] text-white text-xs font-medium transition-colors"
                  >
                    Inquire for {branch.city}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sub-Footer & Medical Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Chavanss Cosmetic Clinic. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Medical Director: Dr. Swetha Chavan (FMC, Germany)</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
