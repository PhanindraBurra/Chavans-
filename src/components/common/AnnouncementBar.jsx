import React from 'react';
import { clinicConfig } from '../../data/clinic';
import { Sparkles, MessageCircle, Phone } from 'lucide-react';

export default function AnnouncementBar() {
  const { announcement } = clinicConfig;

  return (
    <div className="relative z-40 bg-gradient-to-r from-[#032B0E] via-[#065A1C] to-[#032B0E] text-white py-2 px-3 sm:px-4 text-xs md:text-sm font-medium border-b border-[#067C24]/40">
      <div className="max-w-[1440px] mx-auto px-1 sm:px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left: Announcement text with pulse indicator */}
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#067C24]"></span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-white font-semibold">{announcement.text}</span>
          </span>
        </div>

        {/* Right: WhatsApp CTA & Rajahmundry Phone */}
        <div className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0 whitespace-nowrap">
          <a
            href={announcement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-white hover:text-emerald-200 transition-colors py-0.5 px-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 whitespace-nowrap flex-shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
            <span>WhatsApp:</span>
            <span className="font-semibold tracking-wider text-emerald-200 whitespace-nowrap">
              {announcement.phone}
            </span>
          </a>

          <span className="hidden sm:inline text-white/30">|</span>

          <span className="hidden sm:inline text-[11px] sm:text-xs text-emerald-100 whitespace-nowrap flex-shrink-0">
            Direct Line:{' '}
            <a
              href={`tel:${clinicConfig.contacts.phonePrimary}`}
              className="hover:text-white font-semibold underline underline-offset-2 whitespace-nowrap"
            >
              {clinicConfig.contacts.phonePrimary}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
