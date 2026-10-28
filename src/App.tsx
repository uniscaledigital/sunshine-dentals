import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LogoIntro } from './components/LogoIntro';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { DoctorBhanujaPage } from './pages/DoctorBhanujaPage';
import { DoctorMadhuriPage } from './pages/DoctorMadhuriPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { BookingConfirmationPage } from './pages/BookingConfirmationPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

// Scroll to top helper on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LogoIntro />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-surface text-on-surface">
        <Navbar />
        
        <main className="flex-1 pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/bhanuja" element={<DoctorBhanujaPage />} />
            <Route path="/doctors/madhuri" element={<DoctorMadhuriPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
            <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
        <MobileActionBar />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
