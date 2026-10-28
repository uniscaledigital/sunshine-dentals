import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { clinicInfo } from '../config/clinicData';

export const BookingConfirmationPage: React.FC = () => {
  const [booking, setBooking] = useState<{
    fullName?: string;
    phone?: string;
    treatment?: string;
    preferredDoctor?: string;
    preferredDate?: string;
    preferredTime?: string;
  } | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('lastBookingRequest');
    if (stored) {
      try {
        setBooking(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse booking from storage', e);
      }
    }
  }, []);

  return (
    <div className="w-full max-w-[800px] mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-surface-container shadow-xl text-center">
        
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-green-100 text-green-700 mx-auto flex items-center justify-center mb-6 shadow-inner">
          <span className="material-symbols-outlined text-[44px]">check_circle</span>
        </div>

        <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
          Request Received
        </span>

        <h1 className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface mt-3 mb-2">
          Appointment Request Received!
        </h1>

        <p className="text-sm text-secondary max-w-lg mx-auto leading-relaxed mb-6">
          Thank you{booking?.fullName ? `, ${booking.fullName}` : ''}. Your consultation request has been dispatched to the front desk at Sunshine Dental Clinic in Hanamkonda.
        </p>

        {/* Clear truthful status note per instructions */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-left max-w-md mx-auto mb-8 text-xs text-amber-900 flex items-start gap-3">
          <span className="material-symbols-outlined text-amber-600 text-[22px] shrink-0 mt-0.5">info</span>
          <div>
            <strong className="block font-bold mb-0.5">Please Note:</strong>
            This is a <em>request submission</em>. Our clinical care coordinator will call or WhatsApp your number (<strong>{booking?.phone || 'provided'}</strong>) within 30 minutes to confirm your scheduled slot and doctor availability.
          </div>
        </div>

        {/* Booking Summary Box */}
        {booking && (
          <div className="bg-surface-container-low rounded-2xl p-5 border border-surface-container text-left max-w-md mx-auto mb-8 text-xs space-y-2">
            <p className="font-bold text-on-surface text-sm border-b border-surface-container pb-2 mb-3">
              Consultation Details Summary:
            </p>
            <div className="flex justify-between py-1">
              <span className="text-secondary">Patient Name:</span>
              <span className="font-bold text-on-surface">{booking.fullName}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-secondary">Phone Number:</span>
              <span className="font-bold text-on-surface">{booking.phone}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-secondary">Concern:</span>
              <span className="font-bold text-primary capitalize">{booking.treatment?.replace('-', ' ')}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-secondary">Requested Date:</span>
              <span className="font-bold text-on-surface">{booking.preferredDate}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-secondary">Preferred Time:</span>
              <span className="font-bold text-on-surface">{booking.preferredTime}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 gap-1">
              <span className="text-secondary shrink-0">Location:</span>
              <span className="font-bold text-on-surface text-left sm:text-right text-[11px] leading-tight">{clinicInfo.address}</span>
            </div>
          </div>
        )}

        {/* Directions & Route Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={clinicInfo.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-white px-6 py-3.5 rounded-xl font-bold text-xs shadow-md transition-all"
            id="confirmation-maps-btn"
          >
            <span className="material-symbols-outlined text-[18px]">directions</span>
            <span>Get Directions in Google Maps</span>
          </a>

          <a
            href={`https://wa.me/${clinicInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello Sunshine Dental, I submitted an appointment request for ${booking?.fullName || 'myself'}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-xl font-bold text-xs shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Message Front Desk on WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-container">
          <Link to="/" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            Return to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
};
