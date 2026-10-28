import React from 'react';
import { Link } from 'react-router-dom';
import { clinicInfo, services, doctors } from '../config/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white border-t border-primary/20 shadow-2xl">
      <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo/sunshine-dental-logo-white.png"
                alt="Sunshine Dental Clinic"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/80 font-medium italic">
              "{clinicInfo.tagline}"
            </p>
            {/* Follow Us / Instagram Link */}
            <div className="pt-2 flex flex-col gap-2.5">
              <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                Follow Us
              </p>
              <a
                href="https://www.instagram.com/sunshinedental.hanmakonda?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all group shadow-sm hover:scale-105 active:scale-95"
                aria-label="Follow Sunshine Dental Clinic on Instagram"
              >
                <svg
                  className="w-7 h-7 text-white fill-current transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline font-bold text-base text-white border-b border-white/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Our Clinic</Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-white transition-colors">All Treatments</Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-white transition-colors">Our Lead Doctors</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Smile Transformations</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Directions & Contact</Link>
              </li>
              <li>
                <Link to="/book-appointment" className="hover:text-white font-bold text-white underline underline-offset-4">Book Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Treatments */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline font-bold text-base text-white border-b border-white/20 pb-2">
              Treatments
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/book-appointment?treatment=${s.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Timings & Location */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline font-bold text-base text-white border-b border-white/20 pb-2">
              Clinic & Timings
            </h4>
            <div className="text-sm space-y-3 text-white/80">
              <div>
                <p className="font-bold text-white">Monday – Saturday</p>
                <p className="text-xs text-white/90 font-semibold">{clinicInfo.timings.weekdays}</p>
              </div>
              <div>
                <p className="font-bold text-white">Sunday</p>
                <p className="text-xs text-white/80">{clinicInfo.timings.sunday}</p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-white flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-white">location_on</span>
                  Hanamkonda Central
                </p>
                <p className="text-xs text-white/70 mt-0.5">{clinicInfo.address}</p>
              </div>
              <div>
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  {clinicInfo.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/70">
          <p>© {new Date().getFullYear()} Sunshine Dental Clinic. All rights reserved. Hanamkonda, Telangana.</p>
        </div>

      </div>
    </footer>
  );
};
