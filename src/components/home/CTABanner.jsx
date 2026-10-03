import React from 'react';
import { motion } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Calendar, MessageCircle, Gift, ArrowRight } from 'lucide-react';

export default function CTABanner({ onOpenAppointment }) {
  const { ctaBanner, contacts } = clinicConfig;

  return (
    <section className="relative py-16 md:py-24 bg-[#FAFCFA] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#032B0E] via-[#065A1C] to-[#032B0E] text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-[#067C24]/50">
          {/* Decorative ambient gradients inside banner */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#067C24]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#10B981]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Shimmer sweep effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none animate-shimmer" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#067C24]/50 border border-emerald-400/50 shadow-md"
            >
              <Gift className="w-3.5 h-3.5 text-emerald-300" />
              <span>{ctaBanner.tag} • COMPLIMENTARY OFFER</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight"
            >
              {ctaBanner.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-emerald-100 leading-relaxed font-light"
            >
              {ctaBanner.subhead}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-[#032B0E] font-bold text-sm md:text-base bg-white hover:bg-emerald-50 shadow-[0_4px_25px_rgba(255,255,255,0.35)] hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-[#067C24]" />
                <span>Claim Free Test &amp; Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#067C24] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${contacts.whatsappClean}?text=Hello%20Chavanss%20Clinic,%20I%20would%20like%20to%20claim%20the%20FREE%20Hair%20Analysis%20Test%20and%20book%20my%20appointment%20at%20Rajahmundry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-full text-white font-semibold text-sm md:text-base bg-[#25D366] hover:bg-emerald-400 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: {contacts.whatsapp}</span>
              </a>
            </motion.div>

            {/* Direct Phone Assistance */}
            <div className="pt-2 text-xs sm:text-sm text-white/80">
              Immediate Phone Assistance: <a href="tel:+918309657861" className="text-white font-bold underline underline-offset-4 hover:text-emerald-300">+91 83096 57861</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
