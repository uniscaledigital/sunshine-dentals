import React from 'react';
import { Link } from 'react-router-dom';
import { clinicInfo, doctors, services } from '../config/clinicData';
import { AppointmentForm } from '../components/AppointmentForm';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-12 lg:gap-20">
      
      {/* 1. HERO SECTION (Matching Stitch Hero) */}
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 pt-8 lg:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clinic Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-surface-container-low group">
              <img
                src="/images/stitch/stitch_img_3.jpg"
                alt="Modern high-end dental operatory in Hanamkonda at Sunshine Dental"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold w-fit mb-2">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Sterile Operatory Suite
                </span>
                <p className="text-sm font-semibold opacity-90">
                  Hospital Grade Class-B Autoclaves & Low-Dose Digital Radiography
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & CTAs */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold w-fit">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Hanamkonda Central • Approved Lead Dental Clinic</span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface leading-[1.15]">
              Advanced, Painless Dental Care in Hanamkonda
            </h1>

            <p className="text-base sm:text-lg text-secondary font-medium leading-relaxed">
              Experience the pinnacle of sterile, compassionate, and pain-free modern dentistry. Spearheaded by certified dental surgeons utilizing microscope-guided diagnostics and gentle care.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/book-appointment"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95"
                id="hero-book-btn"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                Book Appointment Online
              </Link>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="flex items-center justify-center gap-2 bg-white hover:bg-surface-container-low text-on-surface border border-outline-variant px-6 py-4 rounded-xl font-bold text-base shadow-sm hover:shadow transition-all"
                id="hero-call-btn"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">call</span>
                Call Now ({clinicInfo.phone})
              </a>
            </div>



          </div>

        </div>
      </section>

      {/* 2. MEET YOUR DENTAL CARE EXPERTS (Dr. Bhanuja & Dr. Madhuri) */}
      <section id="doctors-section" className="w-full bg-surface-container-low py-12 lg:py-16 border-y border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Leadership & Care
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface mt-3">
              Meet Your Dental Care Experts
            </h2>
            <p className="text-sm text-secondary mt-2">
              Our clinic is led by two dedicated specialists committed to empathetic communication, clinical mastery, and gentle care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-3xl overflow-hidden border border-surface-container shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Doctor Portrait */}
                  <div className="relative aspect-[4/5] sm:aspect-[3/3.5] overflow-hidden bg-surface-container">
                    <img
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.role}`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm">
                      {doctor.registrationNumber}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {doctor.role}
                    </span>
                    <h3 className="font-headline font-bold text-2xl text-on-surface mt-1">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-secondary mb-3">
                      {doctor.qualification}
                    </p>
                    <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-4">
                      {doctor.focus}
                    </p>

                    <div className="bg-surface-container-low rounded-xl p-3 border border-surface-container text-xs text-secondary flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                      <span>OPD: {doctor.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="w-full text-center py-3 px-4 rounded-xl font-bold text-xs bg-primary hover:bg-primary-container text-white shadow-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Specialist Profile</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
            >
              <span>Read Full Doctor Directory & Qualifications</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION / FEATURES SECTION */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Painless Modern Care
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface mt-3">
              Thoughtful Dental Care, Designed Around You.
            </h2>
            <p className="text-sm text-secondary mt-2">
              We reject intimidating, cluttered clinic setups in favor of an airy, welcoming studio environment focused on your comfort and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">sanitizer</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface mb-2">
                Sterilized Operatories
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                Every single instrument undergoes rigid autoclave sterilization under hospital Class-B standards, sealed in tamper-evident pouches opened directly in your presence.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">radiology</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface mb-2">
                Digital Radiography
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                Ultra-low radiation chairside digital sensors capture crystal-clear dental anatomy instantaneously, displayed on high-definition patient monitors for complete clarity.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">handshake</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface mb-2">
                Transparent Consultations
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                No hidden costs or unnecessary procedures. You receive a structured, step-by-step treatment plan with transparent timeline and pricing before any treatment begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL SERVICES MATRIX */}
      <section id="treatments-section" className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface">
              Dental Treatments & Services
            </h2>
          </div>
          <Link
            to="/treatments"
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline shrink-0"
          >
            <span>Explore All Treatments</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              to="/treatments"
              key={service.id}
              className="bg-white rounded-2xl p-5 border border-surface-container hover:border-primary/50 hover:shadow-md transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-surface-container-low text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[22px]">{service.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
              </div>
              <span className="material-symbols-outlined text-secondary/50 group-hover:text-primary group-hover:translate-x-1 transition-all text-[18px]">
                arrow_forward
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE & AFTER SMILE TRANSFORMATIONS */}
      <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Real Patient Results
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface mt-3">
            Before & After Smile Transformations
          </h2>
          <p className="text-sm text-secondary mt-2">
            Authentic clinical cases treated directly by Dr. Bhanuja & Dr. Madhuri in Hanamkonda. Drag the slider to witness real orthodontic, restorative, and scaling results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <BeforeAfterSlider
            beforeImage="/images/clinical/case-5-orthodontic-crowding-before.jpg"
            afterImage="/images/clinical/case-5-orthodontic-crowding-after.jpg"
            title="Orthodontic Alignment & Arch Correction"
            subtitle="Anterior crowding and misaligned bite corrected over 7 months with clear aligners."
            beforeLabel="Before Alignment"
            afterLabel="After Clear Aligners"
          />

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-surface-container shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px] fill-current">star</span>
                ))}
                <span className="text-xs font-bold text-on-surface ml-2">5.0 Star Patient Rating</span>
              </div>
              <p className="text-sm text-on-surface italic leading-relaxed">
                "I was terrified of getting a root canal due to previous painful experiences. Dr. Madhuri completely changed my perspective! The single-sitting procedure was 100% painless and smooth. Best clinic in Hanamkonda."
              </p>
              <p className="text-xs font-bold text-primary mt-3">— S. Vardhan, Google Verified Patient</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-surface-container shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px] fill-current">star</span>
                ))}
                <span className="text-xs font-bold text-on-surface ml-2">5.0 Star Patient Rating</span>
              </div>
              <p className="text-sm text-on-surface italic leading-relaxed">
                "Dr. Bhanuja extracted my impacted wisdom tooth without any pain. Her reassurance and gentle technique made all the anxiety vanish. Highly sterile equipment and clear instructions for recovery."
              </p>
              <p className="text-xs font-bold text-primary mt-3">— Priyanka M., Hanamkonda</p>
            </div>

            <div className="text-center sm:text-left">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                <span>View Full Clinical Smile Gallery (6 Cases)</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* 7. SCHEDULE YOUR VISIT ONLINE (Embedded Appointment Form) */}
      <section id="appointment-booking" className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="teal-gradient rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                Instant OPD Booking
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold leading-tight">
                Schedule Your Visit Online
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Take the first step toward a healthier, more confident smile. Select your preferred date, time, and dental specialist. Our care team will confirm your slot immediately.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">lock_reset</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">1-Day Healing & Zero Pain Care</p>
                    <p className="text-[11px] text-white/80">Gentle treatment mapped around your comfort.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Single Location in Hanamkonda</p>
                    <p className="text-[11px] text-white/80">Centrally located with convenient parking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Direct WhatsApp Confirmation</p>
                    <p className="text-[11px] text-white/80">Automated slot reminder and directions sent straight to your phone.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-white/80">Need instant emergency relief right now?</p>
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:underline mt-1"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  Direct Emergency Line: {clinicInfo.phone}
                </a>
              </div>
            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

      {/* 8. VISIT SUNSHINE DENTAL / MAP & LOCATION */}
      <section className="w-full bg-surface-container-low py-12 lg:py-16 border-t border-surface-container">
        <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit">
                Location & Accessibility
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface">
                Visit Sunshine Dental Clinic
              </h2>
              <p className="text-sm text-secondary leading-relaxed">
                Located conveniently at Hanamkonda Central in Warangal Urban District, with hassle-free ground floor access and patient parking.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">location_on</span>
                  <div>
                    <p className="font-bold text-on-surface">Address</p>
                    <p className="text-xs text-secondary">{clinicInfo.address}</p>
                    <p className="text-xs text-primary font-semibold mt-0.5">Landmark: {clinicInfo.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">schedule</span>
                  <div>
                    <p className="font-bold text-on-surface">OPD Operating Hours</p>
                    <p className="text-xs text-secondary">Monday – Saturday: 10:00 AM – 8:30 PM</p>
                    <p className="text-xs text-secondary">Sunday: 10:00 AM – 1:30 PM (Consultation by Slot)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">phone_iphone</span>
                  <div>
                    <p className="font-bold text-on-surface">Primary Contact Channels</p>
                    <p className="text-xs text-secondary">Direct Line: {clinicInfo.phone}</p>
                    <p className="text-xs text-secondary">Official WhatsApp: {clinicInfo.whatsapp}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={clinicInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md hover:bg-primary-container transition-all"
                  id="navigate-maps-btn"
                >
                  <span className="material-symbols-outlined text-[18px]">directions</span>
                  Navigate to Sunshine Dental
                </a>
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="inline-flex items-center gap-2 bg-white text-on-surface border border-outline-variant px-5 py-3 rounded-xl font-bold text-xs hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">call</span>
                  Call Front Desk
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="lg:col-span-6">
              <div className="w-full h-[360px] rounded-3xl overflow-hidden shadow-lg border-2 border-white bg-surface-container relative">
                <iframe
                  title="Sunshine Dental Clinic Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.856956799042!2d79.559281!3d18.013715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f59e99a8b11%3A0x6b4ef82ec35a901!2sHanamkonda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-surface-container shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
                    <span className="text-xs font-bold text-on-surface">Sunshine Dental • Hanamkonda Central</span>
                  </div>
                  <a
                    href={clinicInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    Open in Maps
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
