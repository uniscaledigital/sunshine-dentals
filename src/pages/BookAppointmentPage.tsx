import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { AppointmentForm } from '../components/AppointmentForm';
import { clinicInfo, doctors } from '../config/clinicData';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Form */}
          <div className="lg:col-span-7">
            <AppointmentForm
              initialTreatment={treatmentParam}
              initialDoctor={doctorParam}
            />
          </div>

          {/* Assurances & Doctor Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-container shadow-md">
              <h3 className="font-headline font-bold text-lg text-on-surface mb-4">
                What to Expect at Sunshine Dental
              </h3>

              <div className="space-y-4 text-xs text-secondary leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div>
                    <strong className="text-on-surface block font-semibold mb-0.5">Zero Waiting Protocol</strong>
                    Pre-scheduled appointments are allocated a dedicated 45-minute sterilized suite.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">sanitizer</span>
                  </div>
                  <div>
                    <strong className="text-on-surface block font-semibold mb-0.5">100% Sealed Instruments</strong>
                    Autoclave bags are unsealed in your presence for guaranteed biological sterility.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">chair</span>
                  </div>
                  <div>
                    <strong className="text-on-surface block font-semibold mb-0.5">Single Central Clinic</strong>
                    We operate exclusively at our prime Hanamkonda Central clinic. No franchise dilution.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                  </div>
                  <div>
                    <strong className="text-on-surface block font-semibold mb-0.5">Instant Confirmation Call</strong>
                    Our receptionist contacts you directly to confirm timing and provide parking guidance.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-container">
                <p className="text-xs font-bold text-on-surface mb-2">Our Lead Specialists:</p>
                <div className="flex flex-col gap-2">
                  {doctors.map(d => (
                    <Link
                      key={d.id}
                      to={`/doctors/${d.id}`}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container-low transition-colors"
                    >
                      <img src={d.image} alt={d.name} className="w-10 h-10 rounded-full object-cover object-top border border-primary/20" />
                      <div>
                        <p className="text-xs font-bold text-on-surface">{d.name}</p>
                        <p className="text-[11px] text-primary">{d.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-container">
                <p className="text-xs text-secondary">
                  Urgent acute toothache? Call our helpline:
                </p>
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline mt-1"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  {clinicInfo.phone}
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
