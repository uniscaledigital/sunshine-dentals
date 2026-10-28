import React from 'react';
import { Link } from 'react-router-dom';
import { clinicInfo, doctors, services, googleReviews } from '../config/clinicData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { InstagramReelsSection } from '../components/InstagramReelsSection';

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
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-primary shadow-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      <span>Registration No.: {doctor.registrationNumber}</span>
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
        </div>

        {/* Centered Image Comparison */}
        <div className="max-w-3xl mx-auto">
          <BeforeAfterSlider
            beforeImage="/images/clinical/case-5-orthodontic-crowding-before.jpg"
            afterImage="/images/clinical/case-5-orthodontic-crowding-after.jpg"
            title="Orthodontic Alignment & Arch Correction"
            beforeLabel="Before Alignment"
            afterLabel="After Clear Aligners"
          />

          {/* Redirect to full clinical gallery */}
          <div className="text-center mt-6">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-primary hover:bg-primary-container px-6 py-3 rounded-full transition-all shadow-md"
            >
              <span>View Full Clinical Smile Gallery</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 6. WHAT OUR PATIENTS SAY (AUTHENTIC GOOGLE REVIEWS) */}
        <div className="mt-16 pt-12 border-t border-surface-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-surface-container px-3.5 py-1.5 rounded-full shadow-xs mb-3">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span className="text-xs font-bold text-on-surface tracking-wide">
                Patient Reviews
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface">
              What Our Patients Say
            </h2>
            <p className="text-sm sm:text-base text-secondary mt-2.5 leading-relaxed">
              Real experiences from patients who trust Sunshine Dental Clinic with their smiles.
            </p>
          </div>

          {/* Authentic Google Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {googleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-surface-container shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Top: Avatar, Name, Metadata & Subtle Google G Icon */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-base text-white shadow-xs flex-shrink-0 select-none"
                        style={{ backgroundColor: review.avatarBg }}
                        aria-hidden="true"
                      >
                        {review.avatarLetter}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-on-surface leading-snug">
                          {review.name}
                        </h3>
                        <p className="text-xs text-secondary-dim font-medium">
                          {review.reviewerMeta}
                        </p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 flex-shrink-0 opacity-80" viewBox="0 0 24 24" aria-label="Google Review">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>

                  {/* Rating Stars & Relative Date */}
                  <div className="flex items-center gap-2 mb-3.5">
                    <div className="flex items-center gap-0.5 text-[#FBBC04]" aria-label="5 out of 5 stars">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-[#FBBC04]" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-secondary-dim font-medium">
                      {review.timeAgo}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    "{review.reviewText}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA: More Reviews on Google Button */}
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/SUNSHINE+DENTAL+CLINIC/@18.0062638,79.572622,17z/data=!3m1!5s0x3a33459cdbf21753:0x6843682872eb6a55!4m8!3m7!1s0x3a3345c246e700e9:0x7d5418ab93def97b!8m2!3d18.0062638!4d79.572622!9m1!1b1!16s%2Fg%2F11m5nvbjpf?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-surface-container-low text-on-surface border border-surface-container px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-xs hover:shadow-md active:scale-95"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>More Reviews on Google</span>
              <span className="material-symbols-outlined text-[18px] text-secondary">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. FOLLOW OUR SMILE JOURNEY (INSTAGRAM REELS) */}
      <InstagramReelsSection />


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
                Located conveniently at Hanamkonda Central in Warangal Urban District.
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
