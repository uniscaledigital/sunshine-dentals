import React, { useState, useEffect } from 'react';
import { clinicalGallery, ClinicalCase } from '../config/clinicData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const GalleryPage: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Keyboard navigation & body scroll lock for lightbox modal
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % clinicalGallery.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + clinicalGallery.length) % clinicalGallery.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeImageIndex]);

  const activeCase: ClinicalCase | null =
    activeImageIndex !== null ? clinicalGallery[activeImageIndex] : null;

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
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="font-headline font-bold text-2xl sm:text-3xl text-on-surface">
            Documented Clinical Cases
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-1">
            Browse through cosmetic restorations, ultrasonic plaque scaling, and orthodontic bite closures. Click any image to view in full resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicalGallery.map((c, index) => (
            <div
              key={c.id}
              onClick={() => setActiveImageIndex(index)}
              className="bg-white rounded-3xl overflow-hidden border border-surface-container shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] bg-surface-container overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm pointer-events-none">
                  {c.tag}
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-sm pointer-events-none">
                  {c.category}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-on-surface text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                    View Full Image
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline font-bold text-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-surface-container-low flex items-center justify-between text-xs font-bold text-primary">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                    Click to enlarge photo
                  </span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Full Image Viewing */}
      {activeCase !== null && activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-5xl mx-auto flex items-center justify-between text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                {activeCase.category}
              </span>
              <span className="text-xs text-white/70">
                Case {activeImageIndex + 1} of {clinicalGallery.length}
              </span>
            </div>

            <button
              onClick={() => setActiveImageIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close image modal"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Center Stage with Prev / Next Buttons */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev !== null
                    ? (prev - 1 + clinicalGallery.length) % clinicalGallery.length
                    : null
                )
              }
              className="absolute left-2 sm:left-6 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-105"
              aria-label="Previous case image"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_left</span>
            </button>

            {/* Full Image */}
            <div className="max-w-4xl max-h-[72vh] flex items-center justify-center p-2">
              <img
                src={activeCase.image}
                alt={activeCase.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/15"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev !== null ? (prev + 1) % clinicalGallery.length : null
                )
              }
              className="absolute right-2 sm:right-6 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-105"
              aria-label="Next case image"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_right</span>
            </button>
          </div>

          {/* Bottom Bar: Title & Description */}
          <div
            className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 text-white text-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-headline font-bold text-base sm:text-lg">
              {activeCase.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
              {activeCase.description}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
