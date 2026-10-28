import React from 'react';
import { Link } from 'react-router-dom';
import { clinicInfo } from '../config/clinicData';

export const TermsPage: React.FC = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-surface-container shadow-md">
        
        <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
          Patient Guidelines & Terms
        </span>

        <h1 className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface mt-3 mb-6">
          Terms & Conditions of Care
        </h1>

        <div className="space-y-6 text-xs sm:text-sm text-secondary leading-relaxed">
          <p>
            Welcome to <strong>Sunshine Dental Clinic</strong>. By accessing our website or utilizing our clinical booking channels, you agree to comply with our patient policies outlined below.
          </p>

          <div>
            <h2 className="font-headline font-bold text-base text-on-surface mb-2">1. Consultation Requests & Confirmation</h2>
            <p>
              Submitting an online booking form constitutes a consultation request. Slots are officially reserved once confirmed by telephone or WhatsApp notification from our official clinic numbers.
            </p>
          </div>

          <div>
            <h2 className="font-headline font-bold text-base text-on-surface mb-2">2. Single Central Location</h2>
            <p>
              Sunshine Dental operates exclusively at its primary facility above Satyam’s Diabetic Clinic at Chowrastha, Hanamkonda, Warangal, Telangana. We do not operate secondary branches or franchise kiosks.
            </p>
          </div>

          <div>
            <h2 className="font-headline font-bold text-base text-on-surface mb-2">3. Medical Examinations & Treatment Plans</h2>
            <p>
              Information on this website serves educational purposes. Definite clinical recommendations, root canal feasibility, wisdom tooth extractions, and smile design treatment timelines are determined following clinical diagnosis and digital radiography at our clinic.
            </p>
          </div>

          <div>
            <h2 className="font-headline font-bold text-base text-on-surface mb-2">4. Cancellations & Rescheduling</h2>
            <p>
              If you are unable to attend your scheduled time slot, we kindly request at least 2 hours prior notice so that emergency SOS patients in acute dental pain can be accommodated.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-container">
          <Link to="/" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};
