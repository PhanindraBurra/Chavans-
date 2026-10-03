import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import confetti from 'canvas-confetti';
import {
  Calendar,
  MessageCircle,
  Phone,
  User,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronDown,
} from 'lucide-react';

export default function AppointmentSection({ initialTreatment = '', isModal = false, onClose }) {
  const { contacts, branches } = clinicConfig;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: initialTreatment || 'Biotech FUE Hair Transplant',
    branch: 'Rajahmundry',
    date: '',
    timeSlot: 'Morning (9 AM - 1 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const treatmentsList = [
    // Hair Care
    'Biotech FUE Hair Transplant (BEST)',
    'Revolutionary Instant FUE (NEW)',
    'Direct Pen Implanter (DPI)',
    'Thicker Grafts Hair Restoration',
    'Female Hair Restoration (NEW)',
    'No White Dots Hair Restoration',
    'Eyebrow Transplant (BEST)',
    'Beard & Mustache Transplant',
    'Designer Hairline Restoration (NEW)',
    'PRP / PRF / GFC / MesoTherapy',
    'Laser Hair Therapy (BEST)',
    'Body to Scalp Transplant',
    // Permanent Makeup
    'Eyebrows Microblading (Signature)',
    'Lip Blush Treatment (Popular)',
    'Permanent Lip Color',
    'Lip Neutralization (Corrective)',
    'BB Glow Radiance Treatment',
    // Consultation
    'Comprehensive Hair & Scalp Analysis (FREE)',
    'General Medical Cosmetology Consultation',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // Trigger celebration confetti in logo colors (green & white & mint)
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#067C24', '#0B9E31', '#10B981', '#FFFFFF', '#DCFCE7'],
      });
    } catch (err) {}

    // Format prefilled WhatsApp message
    const messageText = `*New Appointment Request - Chavanss Clinic*\n\n` +
      `👤 *Patient Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✨ *Requested Treatment:* ${formData.treatment}\n` +
      `📍 *Preferred Branch:* ${formData.branch}\n` +
      `📅 *Preferred Date:* ${formData.date || 'Earliest Available'}\n` +
      `⏰ *Time Slot:* ${formData.timeSlot}\n` +
      (formData.message ? `💬 *Notes/Concerns:* ${formData.message}\n` : '') +
      `\n_Sent via Chavanss Clinic Online Portal_`;

    const whatsappUrl = `https://wa.me/${contacts.whatsappClean}?text=${encodeURIComponent(messageText)}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 700);
  };

  return (
    <section id="appointment" className={`relative py-16 md:py-24 bg-[#FAFCFA] overflow-hidden ${isModal ? 'py-0' : ''}`}>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-card bg-white/90 backdrop-blur-xl border border-white shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle background glow blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#DCFCE7]/60 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
              <Calendar className="w-3.5 h-3.5 text-[#067C24]" />
              <span>ONLINE APPOINTMENT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2414]">
              Book Your Consultation
            </h2>

            <p className="text-sm sm:text-base text-[#23422C] max-w-lg mx-auto">
              Fill in your details below. Your request will open immediately on WhatsApp for instant confirmation with our clinic staff.
            </p>
          </div>

          {/* Confirmation Message if submitted */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#E8F8EC] text-[#067C24] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0B2414]">
                Opening WhatsApp to Confirm...
              </h3>
              <p className="text-sm text-[#23422C] max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>! Your appointment request for <strong>{formData.treatment}</strong> at <strong>{formData.branch}</strong> is ready.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#067C24] border border-[#067C24] hover:bg-[#E8F8EC] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                    Full Name <span className="text-[#067C24]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Rao"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                    Phone Number (WhatsApp) <span className="text-[#067C24]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Treatment Selection Dropdown */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                    Preferred Treatment
                  </label>
                  <div className="relative">
                    <Sparkles className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none appearance-none cursor-pointer transition-all"
                    >
                      {treatmentsList.map((t, idx) => (
                        <option key={idx} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Preferred Branch Dropdown (Rajahmundry Flagship Default) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                    Clinic Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#067C24] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none appearance-none cursor-pointer font-medium transition-all"
                    >
                      <option value="Rajahmundry (Flagship Clinic)">
                        Rajahmundry (Flagship - Danavaipeta)
                      </option>
                      <option value="Hyderabad (Banjara Hills)">
                        Hyderabad (New Branch - Banjara Hills)
                      </option>
                      <option value="Vijayawada">
                        Vijayawada (Chavadi Residency)
                      </option>
                      <option value="Visakhapatnam">
                        Visakhapatnam (MVP Colony)
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date Picker */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none transition-all cursor-pointer"
                  />
                </div>

                {/* Time Slot */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none appearance-none cursor-pointer transition-all"
                    >
                      <option value="Morning (9 AM - 1 PM)">
                        Morning (9:00 AM – 1:00 PM)
                      </option>
                      <option value="Afternoon (2 PM - 5 PM)">
                        Afternoon (2:00 PM – 5:00 PM)
                      </option>
                      <option value="Evening (5 PM - 8 PM)">
                        Evening (5:00 PM – 8:00 PM)
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message / Concerns */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                  Your Questions / Current Concerns (Optional)
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your hair goals, eyebrow shape preferences, or specific questions..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl text-white font-bold text-sm sm:text-base bg-gradient-to-r from-[#067C24] via-[#0A912C] to-[#067C24] shadow-[0_4px_20px_rgba(6,124,36,0.35)] hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Confirm &amp; Send to WhatsApp (+91 91774 25999)</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-[#23422C] pt-1">
                🔒 Your personal information is strictly confidential and protected by doctor-patient discretion.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
