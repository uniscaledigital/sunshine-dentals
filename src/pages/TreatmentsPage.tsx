import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../config/clinicData';

export const TreatmentsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Surgical Care', 'Endodontics', 'Aesthetic Dentistry', 'Orthodontics', 'Implantology', 'Pediatric & Preventive'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="w-full flex flex-col gap-12 lg:gap-16">
      
      {/* Header */}
      <section className="bg-surface-container-low py-12 lg:py-16 border-b border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Clinical Matrix
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mt-3">
            Comprehensive Dental Treatments
          </h1>
          <p className="text-base text-secondary mt-3 leading-relaxed">
            Every procedure at Sunshine Dental is performed with sterile hospital protocols, digital chairside imaging, and customized pain-free anesthetic management.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-secondary hover:bg-surface-container border border-surface-container'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-container shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-md">
                    {service.category}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                  </div>
                </div>

                <h2 className="font-headline font-bold text-2xl text-on-surface mb-3">
                  {service.name}
                </h2>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Conversion Trigger Box */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-3.5 mb-6">
                  <p className="text-[11px] font-extrabold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    {service.keyTrigger}
                  </p>
                </div>

                {/* Key Clinical Features */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2.5">
                    Treatment Highlights:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-secondary">
                        <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container">
                <Link
                  to={`/book-appointment?treatment=${service.id}`}
                  className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-xs bg-primary hover:bg-primary-container text-white shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                  <span>Consult Specialist for {service.name}</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
