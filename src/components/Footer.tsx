import React from 'react';
import { Link } from 'react-router-dom';
import { clinicInfo, services, doctors } from '../config/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-on-surface border-t border-surface-container shadow-[0_-1px_12px_rgba(0,0,0,0.03)]">
      <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/sunshine-dental-logo.png"
                alt="Sunshine Dental Clinic"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-secondary font-medium italic">
              "{clinicInfo.tagline}"
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm">
              Advanced, painless dental care in Hanamkonda. Operating with hospital-grade Class-B autoclave sterilization, precision digital diagnostics, and empathetic clinical care for every smile.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs font-semibold bg-surface-container-low text-primary px-3 py-1 rounded-full border border-primary/20">
                100% Autoclaved
              </span>
              <span className="text-xs font-semibold bg-surface-container-low text-primary px-3 py-1 rounded-full border border-primary/20">
                Zero Pain Protocol
              </span>
              <span className="text-xs font-semibold bg-surface-container-low text-primary px-3 py-1 rounded-full border border-primary/20">
                Certified Specialists
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline font-bold text-base text-on-surface border-b border-surface-container pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant font-medium">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Our Clinic</Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-primary transition-colors">All Treatments</Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-primary transition-colors">Our Lead Doctors</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">Smile Transformations</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Directions & Contact</Link>
              </li>
              <li>
                <Link to="/book-appointment" className="hover:text-primary font-bold text-primary">Book Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Treatments */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline font-bold text-base text-on-surface border-b border-surface-container pb-2">
              Treatments
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/book-appointment?treatment=${s.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Timings & Location */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline font-bold text-base text-on-surface border-b border-surface-container pb-2">
              Clinic & Timings
            </h4>
            <div className="text-sm space-y-3 text-on-surface-variant">
              <div>
                <p className="font-bold text-on-surface">Monday – Saturday</p>
                <p className="text-xs text-primary font-semibold">{clinicInfo.timings.weekdays}</p>
              </div>
              <div>
                <p className="font-bold text-on-surface">Sunday</p>
                <p className="text-xs text-secondary">{clinicInfo.timings.sunday}</p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-on-surface flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                  Hanamkonda Central
                </p>
                <p className="text-xs text-secondary mt-0.5">{clinicInfo.address}</p>
              </div>
              <div>
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  {clinicInfo.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-6 border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <p>© {new Date().getFullYear()} Sunshine Dental Clinic. All rights reserved. Hanamkonda, Telangana.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Care</Link>
            <span className="hidden sm:inline">|</span>
            <span className="text-[11px] text-secondary/80">Reg: TS-DENT-8419 & TS-DDC-8492</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
