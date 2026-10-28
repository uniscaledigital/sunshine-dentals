import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppointmentForm } from '../components/AppointmentForm';

export const BookAppointmentPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const treatmentParam = searchParams.get('treatment') || '';
  const doctorParam = searchParams.get('doctor') || '';

  return (
    <div className="w-full flex flex-col gap-12 lg:gap-16">
      
      {/* Header */}
      <section className="bg-surface-container-low py-12 lg:py-16 border-b border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Online OPD Booking
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mt-3">
            Schedule Your Dental Visit
          </h1>
          <p className="text-base text-secondary mt-3 leading-relaxed">
            Reserve your consultation with Dr. Bhanuja or Dr. Madhuri. We maintain strict time slots to minimize waiting time and uphold immaculate sterilization protocols between appointments.
          </p>
        </div>
      </section>

      {/* Main Booking Container */}
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-16">
        <div className="max-w-2xl mx-auto">
          <AppointmentForm
            initialTreatment={treatmentParam}
            initialDoctor={doctorParam}
          />
        </div>
      </section>

    </div>
  );
};
