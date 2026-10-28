import React from 'react';
import { Link } from 'react-router-dom';
import { clinicInfo, doctors } from '../config/clinicData';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-12 lg:gap-16">
      
      {/* Hero Header */}
      <section className="bg-surface-container-low py-12 lg:py-16 border-b border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Our Mission & Philosophy
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mt-3">
            Painless Modern Dentistry for Hanamkonda
          </h1>
          <p className="text-base text-secondary mt-3 leading-relaxed">
            Sunshine Dental Clinic was established with a singular vision: to liberate dental care from fear and clinical gloom, replacing it with sterile perfection, warm hospitality, and gentle precision.
          </p>
        </div>
      </section>

      {/* Visual Identity & Clinical Standards */}
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-surface-container">
            <img
              src="/images/stitch/stitch_img_5.jpg"
              alt="Sunshine Dental Clinic reception lounge"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Airy Studio Aesthetics
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface">
              Rejecting Dark Hospital Layouts for a Welcoming Space
            </h2>
            <p className="text-sm text-secondary leading-relaxed">
              We believe your emotional state directly impacts your healing and recovery. Sunshine Dental was custom-designed around calming porcelain whites, gentle natural sunlight, and soothing acoustic dampening. From our reception lounge to private treatment suites, every detail is engineered to soothe dental anxiety.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-surface-container shadow-sm">
                <span className="material-symbols-outlined text-primary text-[24px]">sanitizer</span>
                <p className="font-headline font-bold text-sm text-on-surface mt-1">100% Autoclaved</p>
                <p className="text-xs text-secondary mt-0.5">Sealed pouches opened in front of you</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-surface-container shadow-sm">
                <span className="material-symbols-outlined text-primary text-[24px]">sentiment_satisfied</span>
                <p className="font-headline font-bold text-sm text-on-surface mt-1">Zero Pain Protocol</p>
                <p className="text-xs text-secondary mt-0.5">Gentle anesthesia & anxiety relief</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full bg-white py-12 lg:py-16 border-y border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Clinical Leadership
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mt-3">
              Founded & Practiced by Certified Specialists
            </h2>
            <p className="text-sm text-secondary mt-2">
              No rotating temporary trainees. Your consultations, diagnostics, and procedures are handled directly by our lead doctors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((doc) => (
              <div key={doc.id} className="bg-surface rounded-2xl p-6 border border-surface-container flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-white shadow-md"
                    />
                    <div>
                      <h3 className="font-headline font-bold text-xl text-on-surface">{doc.name}</h3>
                      <p className="text-xs font-semibold text-primary">{doc.role}</p>
                      <p className="text-[11px] text-secondary">{doc.qualification}</p>
                      <p className="text-[11px] font-bold text-primary mt-0.5">Registration No.: {doc.registrationNumber}</p>
                    </div>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed mb-4">
                    {doc.focus}
                  </p>
                </div>
                <Link
                  to={`/doctors/${doc.id}`}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Read Full Credentials & Bio</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-8">
        <div className="brand-gradient rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold">
              Ready to Experience Gentle Dental Care?
            </h2>
            <p className="text-sm text-white/90 mt-1">
              Book a consultation with Dr. Bhanuja or Dr. Madhuri today in Hanamkonda.
            </p>
          </div>
          <Link
            to="/book-appointment"
            className="shrink-0 bg-white text-primary hover:bg-surface-container font-bold px-8 py-3.5 rounded-xl text-sm shadow-md transition-all transform active:scale-95"
          >
            Book Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};
