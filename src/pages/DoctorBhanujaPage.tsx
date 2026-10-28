import React from 'react';
import { Link } from 'react-router-dom';
import { doctors, services, clinicInfo } from '../config/clinicData';


export const DoctorBhanujaPage: React.FC = () => {
  const doctor = doctors.find((d) => d.id === 'bhanuja')!;

  const doctorServices = services.filter((s) =>
    ['wisdom-tooth', 'implants-bridges', 'kids-scaling'].includes(s.id)
  );

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-secondary mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <Link to="/doctors" className="hover:text-primary">Our Doctors</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-on-surface font-bold">{doctor.name}</span>
      </nav>

      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/doctors"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline bg-surface-container px-3 py-1.5 rounded-lg border border-surface-container"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to Our Doctors</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Main Profile Info */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              {doctor.role}
            </span>
            <span className="inline-flex items-center gap-1 bg-surface-container text-on-surface px-3 py-1 rounded-full text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">badge</span>
              Registration No.: {doctor.registrationNumber}
            </span>
            <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">event_available</span>
              Accepting Patients
            </span>
          </div>

          <div>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface">
              {doctor.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-primary mt-1">
              {doctor.qualification}
            </p>
          </div>



          {/* Full Bio */}
          <div>
            <h2 className="font-headline font-bold text-xl text-on-surface mb-3">
              Clinical Background & Philosophy
            </h2>
            <p className="text-sm text-secondary leading-relaxed mb-4">
              {doctor.bio}
            </p>
            <p className="text-sm text-secondary leading-relaxed">
              Dr. Bhanuja is particularly renowned for her clear, transparent chairside communication. Before performing any extraction or surgical restoration, she meticulously walks patients through digital low-dose radiography imagery, dispelling the intimidation typically associated with oral surgery and ensuring a swift, predictable 1-day recovery protocol.
            </p>
          </div>

          {/* Key Clinical Focus */}
          <div className="bg-white rounded-2xl p-6 border border-surface-container shadow-sm">
            <h2 className="font-headline font-bold text-lg text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">psychiatry</span>
              Key Areas of Clinical Focus
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {doctor.specialties.map((spec, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-semibold text-on-surface bg-surface-container-low p-3 rounded-xl border border-surface-container">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatments Administered */}
          <div>
            <h2 className="font-headline font-bold text-xl text-on-surface mb-4">
              Treatments Administered by {doctor.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {doctorServices.map((srv) => (
                <div key={srv.id} className="bg-white rounded-xl p-4 border border-surface-container shadow-sm">
                  <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded">
                    {srv.category}
                  </span>
                  <h3 className="font-headline font-bold text-base text-on-surface mt-2 mb-1">{srv.name}</h3>
                  <p className="text-xs text-secondary mb-3">{srv.description}</p>
                  <Link
                    to={`/book-appointment?treatment=${srv.id}&doctor=bhanuja`}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Consult with Dr. Bhanuja</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar: Portrait & Direct Booking */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-surface-container sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <p className="font-headline font-bold text-lg">{doctor.name}</p>
                <p className="text-xs opacity-90">{doctor.role} • Registered Dental Practitioner</p>
                <p className="text-[11px] text-green-300 font-semibold mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {doctor.schedule}
                </p>
              </div>
            </div>

            <div className="p-6 bg-white border-t border-surface-container">
              <a
                href={`tel:${clinicInfo.phone}`}
                className="w-full text-center py-3.5 px-4 bg-primary hover:bg-primary-container text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Clinic ({clinicInfo.phone})</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
