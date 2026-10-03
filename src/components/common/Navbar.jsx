import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  Scissors,
  Eye,
  CheckCircle2,
} from 'lucide-react';

export default function Navbar({ onOpenAppointment, onOpenCertificates }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#founder' },
    {
      name: 'Hair Care',
      href: '#hair-care',
      dropdown: [
        { name: 'Biotech FUE Hair Transplant', badge: 'BEST', href: '#hair-care' },
        { name: 'Revolutionary Instant FUE', badge: 'NEW', href: '#hair-care' },
        { name: 'Direct Pen Implanter (DPI)', href: '#hair-care' },
        { name: 'Eyebrow Transplant', badge: 'BEST', href: '#hair-care' },
        { name: 'Female Hair Restoration', badge: 'NEW', href: '#hair-care' },
        { name: 'Designer Hairline', badge: 'NEW', href: '#hair-care' },
        { name: 'PRP / PRF / GFC Meso', href: '#hair-care' },
        { name: 'Laser Hair Therapy', badge: 'BEST', href: '#hair-care' },
      ],
    },
    {
      name: 'Permanent Makeup',
      href: '#permanent-makeup',
      dropdown: [
        { name: 'Eyebrows Microblading', badge: 'Signature', href: '#permanent-makeup' },
        { name: 'Lip Blush & Tint', badge: 'Popular', href: '#permanent-makeup' },
        { name: 'Lip Neutralization', href: '#permanent-makeup' },
        { name: 'BB Glow Skin Radiance', href: '#permanent-makeup' },
        { name: 'Permanent Lip Color', href: '#permanent-makeup' },
      ],
    },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Rajahmundry Clinic', href: '#rajahmundry' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'glass-navbar shadow-luxury py-2.5'
          : 'bg-[#FAFCFA]/95 backdrop-blur-md py-4 border-b border-[#DCFCE7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
          >
            <div className="relative">
              <img
                src={clinicConfig.logo}
                alt="Chavanss Cosmetic Clinic"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-[#0B2414] tracking-tight group-hover:text-[#067C24] transition-colors">
                Chavanss <span className="text-[#067C24] font-normal">Clinic</span>
              </span>
              <span className="text-[10px] md:text-xs tracking-wider uppercase text-[#067C24] font-semibold flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-[#067C24]" /> Rajahmundry Flagship
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    activeDropdown === link.name
                      ? 'text-[#067C24] bg-[#E8F8EC]'
                      : 'text-[#0B2414] hover:text-[#067C24] hover:bg-[#E8F8EC]'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180 text-[#067C24]' : 'text-neutral-400'
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute left-0 mt-1 w-64 rounded-2xl glass-card p-2.5 shadow-luxury-hover border border-[#DCFCE7] z-50 bg-[#FAFCFA]/95"
                      >
                        <div className="space-y-1">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(item.href);
                              }}
                              className="flex items-center justify-between px-3 py-2 text-xs font-medium text-[#0B2414] hover:text-[#067C24] hover:bg-[#E8F8EC] rounded-xl transition-colors group"
                            >
                              <span className="truncate pr-2">{item.name}</span>
                              {item.badge && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-[#E8F8EC] text-[#067C24] border border-[#A7F3D0]">
                                  {item.badge}
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button: Book Appointment with magnetic pulse */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#067C24] via-[#0A912C] to-[#067C24] shadow-[0_4px_16px_rgba(6,124,36,0.35)] hover:shadow-[0_6px_24px_rgba(6,124,36,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden"
            >
              {/* Shimmer sweep inside button */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAppointment}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[#067C24] shadow-sm flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0B2414] hover:bg-[#E8F8EC] focus:outline-none transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-[#DCFCE7] bg-[#FAFCFA]/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="py-1">
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-[#0B2414] hover:bg-[#E8F8EC] hover:text-[#067C24] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    {link.dropdown && <ChevronDown className="w-4 h-4 text-neutral-400" />}
                  </button>

                  {link.dropdown && (
                    <div className="pl-6 pr-2 py-1 space-y-1 bg-white/70 rounded-xl my-1 border border-[#DCFCE7]">
                      {link.dropdown.slice(0, 4).map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleLinkClick(sub.href)}
                          className="w-full text-left text-xs py-1.5 px-2 text-[#23422C] hover:text-[#067C24] flex items-center justify-between"
                        >
                          <span>{sub.name}</span>
                          {sub.badge && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-[#E8F8EC] text-[#067C24]">
                              {sub.badge}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Appointment CTA */}
              <div className="pt-3 border-t border-[#DCFCE7] space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#067C24] to-[#0B9E31] text-white text-sm font-semibold shadow-[0_4px_16px_rgba(6,124,36,0.35)] flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation &amp; Free Test</span>
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-[#23422C] pt-1">
                  <a href="tel:+918309657861" className="flex items-center gap-1 font-semibold text-[#067C24]">
                    <Phone className="w-3.5 h-3.5" /> Call: +91 83096 57861
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
