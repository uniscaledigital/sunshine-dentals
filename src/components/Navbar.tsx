import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clinicInfo } from '../config/clinicData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Doctors', path: '/doctors' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'Smile Gallery', path: '/gallery' },
    { label: 'Contact & Location', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-primary text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 text-center font-medium flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span className="flex items-center gap-1 sm:gap-1.5">
          <span className="material-symbols-outlined text-[14px] sm:text-[16px]">verified</span>
          <span className="whitespace-nowrap">100% Autoclaved & Sterile Tools</span>
        </span>
        <span className="hidden sm:inline opacity-60">|</span>
        <span className="hidden sm:flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          Mon–Sat: 10 AM – 8:30 PM
        </span>
        <span className="hidden md:inline opacity-60">|</span>
        <a href={`tel:${clinicInfo.phoneRaw || clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="hidden md:flex items-center gap-1 font-semibold hover:underline">
          <span className="material-symbols-outlined text-[16px]">call</span>
          {clinicInfo.phone}
        </a>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-surface-container">
        <div className="h-16 sm:h-20 w-full max-w-[1280px] mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/sunshine-dental-logo.png"
              alt="Sunshine Dental Clinic"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-on-surface">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors py-2 relative ${
                  isActive(link.path)
                    ? 'text-primary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-on-surface/80 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <a
              href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Sunshine Dental, I would like to consult with a specialist.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-[#075E54] bg-[#E8F5E9] px-3 py-2 rounded-lg hover:bg-[#C8E6C9] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp
            </a>

            <Link
              to="/book-appointment"
              className="flex items-center gap-2 bg-primary hover:bg-primary-container text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm shadow-sm transition-all transform active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Book Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface hover:text-primary rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-surface-container px-3 sm:px-4 py-3 sm:py-4 space-y-1 shadow-lg animate-fadeIn max-h-[75vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-semibold ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-on-surface/90 hover:bg-surface-container-low active:bg-surface-container'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-surface-container flex flex-col gap-2">
              <Link
                to="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-primary text-white py-3.5 rounded-lg font-bold text-sm shadow-sm active:scale-[0.98] transition-transform"
              >
                Book Appointment Online
              </Link>
              <a
                href={`tel:${clinicInfo.phoneRaw || clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full text-center border border-primary text-primary py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-1.5 active:bg-primary/5 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                Call Clinic ({clinicInfo.phone})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
