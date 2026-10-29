import React from 'react';
import { Link } from 'react-router-dom';
import { clinicInfo } from '../config/clinicData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-surface-container shadow-md">
        
        <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
          Patient Data & Privacy
        </span>

        <h1 className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface mt-3 mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-xs sm:text-sm text-secondary leading-relaxed">
          <p>
            At <strong>Sunshine Dental Clinic</strong> (Chowrastha, Hanamkonda, Warangal, Telangana), we hold patient confidentiality and medical record privacy to the highest ethical and regulatory standards.
          </p>

          <div>
            <h2 className="font-headline font-bold text-base text-on-surface mb-2">1. Collection of Patient Information</h2>
            <p>
              When you submit an appointment consultation request via our website, we collect your Full Name, Mobile Phone Number, Preferred Date/Time, and Dental Concern. This information is strictly utilized to coordinate your clinical visit, send SMS/WhatsApp appointment confirmation, and maintain your diagnostic history.
            </p>
          </div>

          <div>
            <h2 className="font-headline font-bold text-base text-on-surface mb-2">2. Digital Radiographs & Clinical Photography</h2>
            <p>
              Any clinical photographs or low-dose digital radiographs taken chairside during your diagnosis remain confidential medical assets. Any before-and-after smile transformation images displayed on our website or social media are completely anonymized and utilized solely with prior explicit patient consent.
            </p>
          </div>

          <div>
            <h2 className="font-headline font-bold text-base text-on-surface mb-2">3. Zero Third-Party Sharing</h2>
            <p>
              We do not sell, rent, lease, or monetize patient contact information to third-party commercial marketing entities under any circumstances.
            </p>
          </div>

          <div>
            <h2 className="font-headline font-bold text-base text-on-surface mb-2">4. Contact & Inquiries</h2>
            <p>
              For questions regarding your medical data or to update your contact preferences, please reach out to our clinic coordinator at <a href={`tel:${clinicInfo.phoneRaw || clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-primary font-bold hover:underline">{clinicInfo.phone}</a> or visit us directly at {clinicInfo.address}.
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
