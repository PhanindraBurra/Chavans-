import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/common/Preloader';
import AnnouncementBar from './components/common/AnnouncementBar';
import Navbar from './components/common/Navbar';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import LightboxModal from './components/common/LightboxModal';

// Home Sections
import HeroSection from './components/home/HeroSection';
import IntroPMUSection from './components/home/IntroPMUSection';
import FounderSection from './components/home/FounderSection';
import TransformationsSection from './components/home/TransformationsSection';
import DoctorsSection from './components/home/DoctorsSection';
import StatsSection from './components/home/StatsSection';
import HairCareGrid from './components/home/HairCareGrid';
import PermanentMakeupGrid from './components/home/PermanentMakeupGrid';
import TimingsSection from './components/home/TimingsSection';
import CTABanner from './components/home/CTABanner';
import AppointmentSection from './components/home/AppointmentSection';
import RajahmundryBranch from './components/home/RajahmundryBranch';
import Footer from './components/layout/Footer';
import { X } from 'lucide-react';

export default function App() {
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  const handleOpenAppointment = (treatmentName = '') => {
    if (treatmentName && typeof treatmentName === 'string') {
      setSelectedTreatment(treatmentName);
    }
    // Also scroll smoothly to appointment section or open modal
    const section = document.getElementById('appointment');
    if (section && window.innerWidth > 768) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsAppointmentModalOpen(true);
    }
  };

  const handleSelectTreatment = (name) => {
    setSelectedTreatment(name);
    const section = document.getElementById('appointment');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFCFA] text-[#0B2414] font-poppins relative selection:bg-[#DCFCE7] selection:text-[#067C24]">
      {/* 1. Page Load Logo Shimmer Preloader */}
      <Preloader />

      {/* 2. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 3. Sticky Glass Navbar */}
      <Navbar
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenCertificates={() => setIsCertificatesOpen(true)}
      />

      <main>
        {/* 4. Hero Section with Ken Burns and Word Reveal */}
        <HeroSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* 5. Permanent Makeup Intro ("Effortless beauty, every day") */}
        <IntroPMUSection onOpenAppointment={() => handleOpenAppointment('Permanent Makeup')} />

        {/* 6. Meet The Founder – Dr. Swetha Chavan (FMC, Germany) */}
        <FounderSection
          onOpenAppointment={() => handleOpenAppointment('Doctor Consultation')}
          onOpenCertificates={() => setIsCertificatesOpen(true)}
        />

        {/* 7. Clinical Transformations – Draggable Before/After */}
        <TransformationsSection onOpenAppointment={() => handleOpenAppointment('Permanent Makeup / Skin')} />

        {/* 8. Our Team (Doctors) */}
        <DoctorsSection
          onOpenAppointment={() => handleOpenAppointment('Specialist Consultation')}
          onOpenCertificates={() => setIsCertificatesOpen(true)}
        />

        {/* 9. At Your Service Stats (Progress Rings & Counters) */}
        <StatsSection />

        {/* 10. Hair Care Services (12 Cards with BEST / NEW badges) */}
        <HairCareGrid
          onSelectTreatment={handleSelectTreatment}
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 11. Permanent Makeup Grid (5 Cards) */}
        <PermanentMakeupGrid
          onSelectTreatment={handleSelectTreatment}
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 12. Convenient Hours For Your Care (Rajahmundry Timings) */}
        <TimingsSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* 13. High Impact CTA Banner (Free Hair Analysis Test) */}
        <CTABanner onOpenAppointment={() => handleOpenAppointment('Comprehensive Hair Analysis Test')} />

        {/* 14. Primary Rajahmundry Branch Showcase & Map */}
        <RajahmundryBranch onOpenAppointment={() => handleOpenAppointment()} />

        {/* 15. On-page Appointment Booking Form */}
        <AppointmentSection initialTreatment={selectedTreatment} />
      </main>

      {/* 16. Footer with Multi-Branch Directory (Rajahmundry First) */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* 17. Floating WhatsApp Button with Ripple Wave */}
      <FloatingWhatsApp />

      {/* 18. Certificates Lightbox Modal */}
      <LightboxModal
        isOpen={isCertificatesOpen}
        onClose={() => setIsCertificatesOpen(false)}
      />

      {/* 19. Quick Appointment Modal for Mobile / Header CTA */}
      <AnimatePresence>
        {isAppointmentModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAppointmentModalOpen(false)}
              className="absolute inset-0 bg-[#022109]/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl bg-[#FAFCFA] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-[#DCFCE7]"
            >
              <button
                onClick={() => setIsAppointmentModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                aria-label="Close Appointment Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AppointmentSection
                initialTreatment={selectedTreatment}
                isModal={true}
                onClose={() => setIsAppointmentModalOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
