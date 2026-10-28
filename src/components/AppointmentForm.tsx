import React, { useState } from 'react';
import { clinicInfo } from '../config/clinicData';

interface AppointmentFormProps {
  initialTreatment?: string;
  initialDoctor?: string;
  className?: string;
}

export const treatmentOptions = [
  { id: 'tooth-pain', label: 'Tooth Pain / Emergency SOS' },
  { id: 'cleaning', label: 'Cleaning & Ultrasonic Scaling' },
  { id: 'rct', label: 'Root Canal Treatment (RCT)' },
  { id: 'wisdom-tooth', label: 'Wisdom Tooth & Surgical Care' },
  { id: 'braces-aligners', label: 'Aligners / Braces Consultation' },
  { id: 'whitening-veneers', label: 'Teeth Whitening & Veneers' },
  { id: 'implants-bridges', label: 'Dental Implants & Bridges' },
  { id: 'kids-scaling', label: 'Kids Dental & Preventive Care' },
  { id: 'other', label: 'Other General Oral Health Checkup' },
];

export const timeSlots = [
  '10:30 AM',
  '11:30 AM',
  '12:30 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '07:00 PM',
  '08:00 PM'
];

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialTreatment = '',
  initialDoctor = '',
  className = ''
}) => {
  // Helper to format date as DD-MM-YYYY
  const formatPreferredDate = (dateStr: string): string => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const [year, month, day] = parts;
      return `${day}-${month}-${year}`;
    }
    return dateStr;
  };

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    treatment: initialTreatment || 'tooth-pain',
    preferredDoctor: initialDoctor || 'any',
    preferredDate: '',
    preferredTime: '10:30 AM',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappError, setWhatsappError] = useState<string | null>(null);
  const [whatsappOpened, setWhatsappOpened] = useState<string | null>(null);

  // Prevent past dates: get today in YYYY-MM-DD format
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.treatment) {
      errs.treatment = 'Please select a treatment.';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred appointment date.';
    } else if (formData.preferredDate < todayStr) {
      errs.preferredDate = 'Appointment date cannot be in the past.';
    }
    if (!formData.preferredTime) {
      errs.preferredTime = 'Please pick a preferred consultation slot.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setWhatsappError(null);
    setWhatsappOpened(null);

    const patientName = formData.fullName.trim();
    const phoneNumber = formData.phone.trim();
    const selectedTreatment = treatmentOptions.find(t => t.id === formData.treatment)?.label || formData.treatment;

    let doctorName = 'First Available Doctor';
    if (formData.preferredDoctor === 'bhanuja') {
      doctorName = 'Dr. Bhanuja';
    } else if (formData.preferredDoctor === 'madhuri') {
      doctorName = 'Dr. Madhuri';
    }

    const formattedDate = formatPreferredDate(formData.preferredDate);
    const preferredTime = formData.preferredTime;

    const message = [
      'Hello Sunshine Dental Clinic,',
      '',
      'I would like to request a dental appointment.',
      '',
      'APPOINTMENT DETAILS',
      '------------------------------',
      `Patient Name: ${patientName}`,
      `Phone Number: ${phoneNumber}`,
      `Treatment / Concern: ${selectedTreatment}`,
      `Consulting Specialist: ${doctorName}`,
      `Preferred Date: ${formattedDate}`,
      `Preferred Time: ${preferredTime}`,
      '',
      'Please confirm my appointment availability.',
      '',
      'Thank you.'
    ].join('\n');

    const cleanNumber = clinicInfo.whatsapp.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

    try {
      const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        setWhatsappError(whatsappUrl);
      } else {
        setWhatsappOpened(whatsappUrl);
      }
    } catch {
      setWhatsappError(whatsappUrl);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 400);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl shadow-xl border border-surface-container p-4 sm:p-6 lg:p-8 ${className}`}
      id="appointment-direct-form"
    >
      <div className="mb-6">
        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
          Single-Clinic Location • Hanamkonda
        </span>
        <h3 className="font-headline font-bold text-xl sm:text-2xl text-on-surface mt-2">
          Request an Appointment
        </h3>
        <p className="text-xs text-secondary mt-1">
          Our clinic care coordinator will review your preferred slot and call/WhatsApp you within 30 minutes to confirm your scheduled time.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="patient-name" className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
            Patient Full Name <span className="text-error">*</span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
              person
            </span>
            <input
              id="patient-name"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full pl-10 pr-4 py-3 text-base sm:text-sm rounded-xl border ${
                errors.fullName ? 'border-error bg-error-container/20' : 'border-outline-variant/60 focus:border-primary'
              } outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
            />
          </div>
          {errors.fullName && <p className="text-xs text-error mt-1">{errors.fullName}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="patient-phone" className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
            Phone Number (for SMS / WhatsApp Confirmation) <span className="text-error">*</span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
              phone
            </span>
            <input
              id="patient-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 98765 43210"
              className={`w-full pl-10 pr-4 py-3 text-base sm:text-sm rounded-xl border ${
                errors.phone ? 'border-error bg-error-container/20' : 'border-outline-variant/60 focus:border-primary'
              } outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
            />
          </div>
          {errors.phone && <p className="text-xs text-error mt-1">{errors.phone}</p>}
        </div>

        {/* Treatment Dropdown */}
        <div>
          <label htmlFor="treatment-select" className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
            Treatment / Dental Concern <span className="text-error">*</span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
              medical_services
            </span>
            <select
              id="treatment-select"
              required
              value={formData.treatment}
              onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
              className={`w-full pl-10 pr-10 py-3 text-base sm:text-sm rounded-xl border ${
                errors.treatment ? 'border-error bg-error-container/20' : 'border-outline-variant/60 focus:border-primary'
              } outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white appearance-none`}
            >
              {treatmentOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">
              expand_more
            </span>
          </div>
          {errors.treatment && <p className="text-xs text-error mt-1">{errors.treatment}</p>}
        </div>

        {/* Consulting Specialist Preference */}
        <div>
          <label htmlFor="doctor-select" className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
            Consulting Specialist
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
              stethoscope
            </span>
            <select
              id="doctor-select"
              value={formData.preferredDoctor}
              onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
              className="w-full pl-10 pr-10 py-3 text-base sm:text-sm rounded-xl border border-outline-variant/60 focus:border-primary outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white appearance-none"
            >
              <option value="any">First Available Doctor</option>
              <option value="bhanuja">Dr. Bhanuja (BDS, FMCD)</option>
              <option value="madhuri">Dr. Madhuri (BDS, FCD)</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">
              expand_more
            </span>
          </div>
        </div>

        {/* Date and Time Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferred-date" className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
              Preferred Date <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input
                id="preferred-date"
                type="date"
                required
                min={todayStr}
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className={`w-full px-4 py-3 text-base sm:text-sm rounded-xl border ${
                  errors.preferredDate ? 'border-error bg-error-container/20' : 'border-outline-variant/60 focus:border-primary'
                } outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
              />
            </div>
            {errors.preferredDate && <p className="text-xs text-error mt-1">{errors.preferredDate}</p>}
          </div>

          <div>
            <label htmlFor="preferred-time" className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1.5">
              Preferred Time <span className="text-error">*</span>
            </label>
            <div className="relative">
              <select
                id="preferred-time"
                required
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-3 text-base sm:text-sm rounded-xl border border-outline-variant/60 focus:border-primary outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white appearance-none"
              >
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">
                schedule
              </span>
            </div>
            {errors.preferredTime && <p className="text-xs text-error mt-1">{errors.preferredTime}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-primary hover:bg-primary-container text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] disabled:opacity-70 cursor-pointer"
            id="submit-booking-btn"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin material-symbols-outlined text-[20px]">progress_activity</span>
                <span>Opening WhatsApp...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Confirm Consultation Request</span>
              </>
            )}
          </button>

          {/* Inline Error if WhatsApp fails to open */}
          {whatsappError && (
            <div
              role="alert"
              className="mt-3.5 p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5"
              id="whatsapp-inline-error"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-600 text-[18px] shrink-0">
                  warning
                </span>
                <span>Unable to open WhatsApp automatically (browser pop-up may be blocked).</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={whatsappError}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-white bg-primary hover:bg-primary-container px-3 py-1.5 rounded-lg shadow-sm transition-colors text-xs"
                  id="whatsapp-retry-link"
                >
                  <span>Open WhatsApp</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>
          )}

          {/* Inline status when WhatsApp opened */}
          {whatsappOpened && (
            <div
              className="mt-3.5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5"
              id="whatsapp-opened-status"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0">
                  check_circle
                </span>
                <span>WhatsApp opened with prefilled details. Please press <strong>Send</strong> in WhatsApp.</span>
              </div>
              <a
                href={whatsappOpened}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950 underline shrink-0"
              >
                <span>Reopen</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
