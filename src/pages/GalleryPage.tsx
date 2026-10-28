import React from 'react';
import { Link } from 'react-router-dom';
import { clinicalGallery } from '../config/clinicData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const GalleryPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-12 lg:gap-16">
      
      {/* Header */}
      <section className="bg-surface-container-low py-12 lg:py-16 border-b border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Clinical Proof & Smile Architecture
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mt-3">
            Real Patient Smile Transformations
          </h1>
          <p className="text-base text-secondary mt-3 leading-relaxed">
            All cases showcased below represent actual procedures diagnosed and completed by Dr. Bhanuja and Dr. Madhuri at Sunshine Dental Clinic in Hanamkonda.
          </p>
        </div>
      </section>

      {/* Featured Interactive Comparison */}
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Interactive Slider Comparison
            </span>
            <h2 className="font-headline font-bold text-2xl text-on-surface mt-1">
              Slide to Compare Real Orthodontic Results
            </h2>
          </div>
          <BeforeAfterSlider
            beforeImage="/images/clinical/case-5-orthodontic-crowding-before.jpg"
            afterImage="/images/clinical/case-5-orthodontic-crowding-after.jpg"
            title="Severe Anterior Crowding Resolved with Clear Aligners"
            subtitle="7-month discreet aligner journey without invasive premolar extractions."
            beforeLabel="Pre-Treatment Crowding"
            afterLabel="Completed Smile Alignment"
          />
        </div>
      </section>

      {/* Grid of Verified Clinical Cases */}
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-12">
        <div className="mb-8">
          <h2 className="font-headline font-bold text-2xl sm:text-3xl text-on-surface">
            Documented Clinical Cases
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-1">
            Browse through cosmetic restorations, ultrasonic plaque scaling, and orthodontic bite closures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicalGallery.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-3xl overflow-hidden border border-surface-container shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-surface-container overflow-hidden group">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm">
                    {c.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-sm">
                    {c.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-headline font-bold text-lg text-on-surface mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/book-appointment"
                  className="w-full text-center py-2.5 px-4 rounded-xl font-bold text-xs bg-surface-container-low hover:bg-primary hover:text-white text-primary border border-primary/20 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Book Similar Consultation</span>
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
