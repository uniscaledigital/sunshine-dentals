import React from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../config/clinicData';

export const DoctorsPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-12 lg:gap-16">
      
      {/* Header */}
      <section className="bg-surface-container-low py-12 lg:py-16 border-b border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Clinical Faculty & Specialists
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mt-3">
            Our Lead Dental Surgeons
          </h1>
          <p className="text-base text-secondary mt-3 leading-relaxed">
            Meet the primary practitioners behind Sunshine Dental Clinic. Practicing with full surgical precision, compassionate bed/chairside bedside manner, and specialized endodontic and aesthetic qualifications.
          </p>
        </div>
      </section>

      {/* Doctor Directory Cards */}
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-surface-container shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/5] sm:aspect-[3/3.8] overflow-hidden bg-surface-container">
                  <img
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.role}`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    {doctor.registrationNumber}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {doctor.role}
                  </span>
                  <h2 className="font-headline font-bold text-2xl sm:text-3xl text-on-surface mt-1">
                    {doctor.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-secondary mb-4">
                    {doctor.qualification}
                  </p>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {doctor.focus}
                  </p>

                  <div className="bg-surface-container-low rounded-2xl p-4 border border-surface-container mb-6">
                    <p className="text-xs font-bold text-on-surface mb-2 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">psychiatry</span>
                      Key Clinical Focus:
                    </p>
                    <ul className="space-y-1.5">
                      {doctor.specialties.slice(0, 3).map((spec, i) => (
                        <li key={i} className="text-xs text-secondary flex items-start gap-1.5">
                          <span className="text-primary font-bold">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-secondary flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                    <span>OPD Hours: <strong className="text-on-surface">{doctor.schedule}</strong></span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 sm:p-8 pt-0">
                <Link
                  to={`/doctors/${doctor.id}`}
                  className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-xs bg-primary hover:bg-primary-container text-white shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Specialist Profile</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
