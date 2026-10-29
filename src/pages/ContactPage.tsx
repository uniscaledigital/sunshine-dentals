import React from 'react';
import { clinicInfo } from '../config/clinicData';

export const ContactPage: React.FC = () => {

  return (
    <div className="w-full flex flex-col gap-12 lg:gap-16">
      
      {/* Header */}
      <section className="bg-surface-container-low py-12 lg:py-16 border-b border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-3 sm:px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface mt-3">
            Clinic Contact & Location
          </h1>
          <p className="text-base text-secondary mt-3 leading-relaxed">
            Conveniently situated above Satyam’s Diabetic Clinic at Chowrastha, Hanamkonda. Walk in during our continuous OPD or connect with our front desk staff directly.
          </p>
        </div>
      </section>

      {/* Main Details and Map Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-3 sm:px-4 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-container shadow-md">
              <h2 className="font-headline font-bold text-2xl text-on-surface mb-6">
                Clinic Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">Clinic Address</h3>
                    <p className="text-xs text-secondary mt-1 leading-relaxed">
                      {clinicInfo.address}
                    </p>
                    <p className="text-xs text-primary font-semibold mt-1">
                      Landmark: {clinicInfo.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">schedule</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">Operating Timings</h3>
                    <p className="text-xs text-secondary mt-1">
                      <strong>Monday – Saturday:</strong> {clinicInfo.timings.weekdays}
                    </p>
                    <p className="text-xs text-secondary mt-1">
                      <strong>Sunday:</strong> {clinicInfo.timings.sunday}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">call</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">Phone & Emergency</h3>
                    <p className="text-xs text-secondary mt-1">
                      Direct Front Desk: <a href={`tel:${clinicInfo.phoneRaw || clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-primary font-bold hover:underline">{clinicInfo.phone}</a>
                    </p>
                    <p className="text-xs text-secondary mt-1">
                      {clinicInfo.timings.emergency}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">Official WhatsApp</h3>
                    <p className="text-xs text-secondary mt-1">
                      Instant chat routing for reports and appointment requests.
                    </p>
                    <a
                      href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Sunshine Dental Clinic')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-green-700 hover:underline mt-1"
                    >
                      <span>Chat on WhatsApp ({clinicInfo.whatsappFormatted || clinicInfo.phone})</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-surface-container">
                <a
                  href={clinicInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-xs bg-primary hover:bg-primary-container text-white shadow-md transition-all flex items-center justify-center gap-2"
                  id="navigate-google-maps"
                >
                  <span className="material-symbols-outlined text-[18px]">directions</span>
                  <span>Get Directions in Google Maps</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Map Frame */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-surface-container relative">
              <iframe
                title="Sunshine Dental Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15177.62923104924!2d79.57271449999999!3d18.006291400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345c246e700e9%3A0x7d5418ab93def97b!2sSUNSHINE%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1793217617964!5m2!1sen!2sin"
                className="w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>

              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-surface-container shadow-md flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-headline font-bold text-xs sm:text-sm text-on-surface truncate">Sunshine Dental Clinic</p>
                  <p className="text-[10px] sm:text-xs text-secondary truncate">Chowrastha, Hanamkonda, Warangal, Telangana – 506011</p>
                </div>
                <a
                  href={clinicInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-2 rounded-lg shadow-sm hover:bg-primary-container transition-all flex items-center gap-1 shrink-0"
                >
                  <span className="material-symbols-outlined text-[16px]">navigation</span>
                  Get Directions
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
