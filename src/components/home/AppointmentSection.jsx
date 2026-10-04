import React, { useState, useEffect } from 'react';
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
  Stethoscope,
} from 'lucide-react';

// Doctors List with their clinical specialties & treatments
export const doctorsList = [
  {
    id: 'dr-swetha',
    name: 'Dr. Swetha Chavan',
    role: 'Founder & Chief Medical Cosmetologist',
    qualification: 'FMC (Fellowship in Medical Cosmetology, Germany)',
    treatments: [
      'Melasma Treatment (Dual Laser / Pigment Clearance)',
      'Skin Whitening & Glow Therapy (Glutathione)',
      'Carbon Laser Peel (Hollywood Porcelain Peel)',
      'HydraFacial Deep Pore Detox & Dermal Infusion',
      'Chemical Peels & Acne Scar Care',
      'BB Glow Radiance Treatment',
      'Eyebrows Microblading (Signature)',
      'Lip Blush Treatment (Popular)',
      'Permanent Lip Color',
      'Lip Neutralization (Corrective)',
      'Advanced Skin & Melasma Consultation',
      'General Cosmetic & Aesthetic Consultation',
    ],
  },
  {
    id: 'dr-ramachandra',
    name: 'Dr. Ramachandra Rao',
    role: 'Maxillofacial Surgeon & Hair Transplant Director',
    qualification: 'MDS, FIBOMS',
    treatments: [
      'Biotech FUE Hair Transplant (BEST)',
      'Revolutionary Instant FUE (NEW)',
      'Direct Pen Implanter (DPI)',
      'Thicker Grafts Hair Restoration',
      'Female Hair Restoration (NEW)',
      'No White Dots Hair Restoration',
      'Eyebrow Transplant (BEST)',
      'Beard & Mustache Transplant',
      'Designer Hairline Restoration (NEW)',
      'Body to Scalp Transplant',
      'Comprehensive Hair & Scalp Analysis (FREE)',
    ],
  },
  {
    id: 'dr-cvnr-prasad',
    name: 'Dr. CVNR Prasad',
    role: 'Senior Trichology & Scalp Wellness Specialist',
    qualification: 'M.D (Hom)',
    treatments: [
      'PRP / PRF / GFC / MesoTherapy',
      'Laser Hair Therapy (BEST)',
      'Cellular Scalp Revitalization & Anti-Hairfall',
      'Pre & Post Transplant Graft Support Care',
      'Comprehensive Hair & Scalp Analysis (FREE)',
    ],
  },
  {
    id: 'any-specialist',
    name: 'Any Available Specialist Doctor',
    role: 'Senior Clinical Team / General Cosmetology',
    qualification: 'Clinical Specialists',
    treatments: [
      'Biotech FUE Hair Transplant (BEST)',
      'Melasma Treatment (Dual Laser / Pigment Clearance)',
      'Skin Whitening & Glow Therapy (Glutathione)',
      'Revolutionary Instant FUE (NEW)',
      'Carbon Laser Peel (Hollywood Porcelain Peel)',
      'HydraFacial Deep Pore Detox & Dermal Infusion',
      'Eyebrows Microblading (Signature)',
      'Lip Blush Treatment (Popular)',
      'PRP / PRF / GFC / MesoTherapy',
      'Laser Hair Therapy (BEST)',
      'Direct Pen Implanter (DPI)',
      'Eyebrow Transplant (BEST)',
      'Female Hair Restoration (NEW)',
      'Designer Hairline Restoration (NEW)',
      'Chemical Peels & Acne Scar Care',
      'BB Glow Radiance Treatment',
      'Comprehensive Hair & Scalp Analysis (FREE)',
      'General Medical Cosmetology Consultation',
    ],
  },
];

// Helper to find the doctor who specializes in a given treatment
const findDoctorForTreatment = (treatmentName) => {
  if (!treatmentName) return doctorsList[0].id;
  for (const doc of doctorsList) {
    if (
      doc.treatments.some(
        (t) =>
          t.toLowerCase().includes(treatmentName.toLowerCase()) ||
          treatmentName.toLowerCase().includes(t.toLowerCase())
      )
    ) {
      return doc.id;
    }
  }
  return doctorsList[0].id;
};

export default function AppointmentSection({ initialTreatment = '', isModal = false, onClose }) {
  const { contacts } = clinicConfig;

  const initialDocId = findDoctorForTreatment(initialTreatment);
  const [selectedDoctorId, setSelectedDoctorId] = useState(initialDocId);

  const activeDoctor =
    doctorsList.find((d) => d.id === selectedDoctorId) || doctorsList[0];
  const availableTreatments = activeDoctor.treatments;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctorId: initialDocId,
    treatment: initialTreatment || availableTreatments[0],
    branch: 'Rajahmundry (Flagship - Danavaipeta)',
    date: '',
    timeSlot: 'Morning (10 AM - 1 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // If initialTreatment prop changes from parent (e.g. clicking service cards)
  useEffect(() => {
    if (initialTreatment) {
      const docId = findDoctorForTreatment(initialTreatment);
      setSelectedDoctorId(docId);
      setFormData((prev) => ({
        ...prev,
        doctorId: docId,
        treatment: initialTreatment,
      }));
    }
  }, [initialTreatment]);

  // When Doctor is changed in dropdown, update treatment according to that doctor
  const handleDoctorChange = (newDoctorId) => {
    setSelectedDoctorId(newDoctorId);
    const doc = doctorsList.find((d) => d.id === newDoctorId) || doctorsList[0];
    const isCurrentValid = doc.treatments.includes(formData.treatment);
    setFormData((prev) => ({
      ...prev,
      doctorId: newDoctorId,
      treatment: isCurrentValid ? prev.treatment : doc.treatments[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // Trigger celebration confetti in clinic colors
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#067C24', '#0B9E31', '#10B981', '#FFFFFF', '#DCFCE7'],
      });
    } catch (err) {}

    const chosenDoctor =
      doctorsList.find((d) => d.id === formData.doctorId) || activeDoctor;

    // Format standard, professional WhatsApp message with Doctor Specification
    const messageLines = [
      '*New Appointment Request - Chavanss Cosmetic Clinic*',
      '',
      `*Patient Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Doctor Specification:* ${chosenDoctor.name} (${chosenDoctor.role})`,
      `*Requested Treatment:* ${formData.treatment}`,
      `*Preferred Branch:* ${formData.branch}`,
      `*Preferred Date:* ${formData.date || 'Earliest Available'}`,
      `*Time Slot:* ${formData.timeSlot}`,
    ];

    if (formData.message && formData.message.trim()) {
      messageLines.push(`*Notes/Concerns:* ${formData.message.trim()}`);
    }

    messageLines.push('');
    messageLines.push('_Sent via Chavanss Cosmetic Clinic Online Portal_');

    const messageText = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/${contacts.whatsappClean}?text=${encodeURIComponent(messageText)}`;

    setSubmitted(true);

    // Open WhatsApp in new tab directly
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <section
      id="appointment"
      className={`relative py-16 md:py-24 bg-[#FAFCFA] overflow-hidden ${
        isModal ? 'py-0' : ''
      }`}
    >
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
              Select your consulting doctor, requested treatment, and preferred branch. Your request will open immediately on WhatsApp with our clinic team.
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
                Thank you, <strong>{formData.name}</strong>! Your appointment request for <strong>{formData.treatment}</strong> with <strong>{activeDoctor.name}</strong> at <strong>{formData.branch}</strong> is being processed.
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
              {/* Row 1: Name & Phone */}
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
                      placeholder="e.g. +91 99089 50119"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Doctor Specification & Treatments (dynamically updated) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Doctor Specification Selection */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414] flex items-center justify-between">
                    <span>Doctor Specification</span>
                    <span className="text-[10px] text-[#067C24] font-medium lowercase">specialist</span>
                  </label>
                  <div className="relative">
                    <Stethoscope className="w-4 h-4 text-[#067C24] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.doctorId}
                      onChange={(e) => handleDoctorChange(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] font-semibold outline-none appearance-none cursor-pointer transition-all"
                    >
                      {doctorsList.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} – {doc.role}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Treatment Selection Dropdown (Dynamically updated according to selected doctor) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414] flex items-center justify-between">
                    <span>Requested Treatment</span>
                    <span className="text-[10px] text-[#067C24] font-medium">
                      {availableTreatments.length} therapies
                    </span>
                  </label>
                  <div className="relative">
                    <Sparkles className="w-4 h-4 text-[#067C24] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none appearance-none cursor-pointer transition-all"
                    >
                      {availableTreatments.map((t, idx) => (
                        <option key={idx} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Clinic Location (Rajahmundry FIRST, then Hyderabad) & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Branch Dropdown: Rajahmundry FIRST, then Hyderabad */}
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
                      <option value="Rajahmundry (Flagship - Danavaipeta)">
                        Rajahmundry (Flagship - Danavaipeta)
                      </option>
                      <option value="Hyderabad (Banjara Hills)">
                        Hyderabad (Banjara Hills)
                      </option>
                      <option value="Vijayawada (Chavadi Residency)">
                        Vijayawada (Chavadi Residency)
                      </option>
                      <option value="Visakhapatnam (MVP Colony)">
                        Visakhapatnam (MVP Colony)
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

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
              </div>

              {/* Row 4: Time Slot & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Time Slot - 10 AM to 7 PM */}
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
                      <option value="Morning (10 AM - 1 PM)">
                        Morning (10:00 AM – 01:00 PM)
                      </option>
                      <option value="Afternoon (1 PM - 4 PM)">
                        Afternoon (01:00 PM – 04:00 PM)
                      </option>
                      <option value="Evening (4 PM - 7 PM)">
                        Evening (04:00 PM – 07:00 PM)
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Notes / Concerns */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                    Notes / Concerns (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Hairline density check, Melasma patch"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#067C24] via-[#0A912C] to-[#067C24] text-white font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(6,124,36,0.4)] hover:shadow-[0_6px_28px_rgba(6,124,36,0.55)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Confirm on WhatsApp ({contacts.whatsapp})</span>
                </button>
                <p className="text-center text-[11px] text-[#23422C] mt-2">
                  Instant confirmation &bull; Direct consultation with {activeDoctor.name} &bull; Open 7 Days: 10:00 AM – 7:00 PM
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
