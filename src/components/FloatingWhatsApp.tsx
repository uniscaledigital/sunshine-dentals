import React from 'react';
import { clinicInfo } from '../config/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Sunshine Dental Clinic, I would like to consult with a doctor.')}`;

  return (
    <aside aria-label="Quick contact" className="hidden md:block fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        id="floating-whatsapp-btn"
        aria-label="Chat with Sunshine Dental on WhatsApp"
      >
        <span className="material-symbols-outlined text-[24px]">chat</span>
        <span className="text-xs font-bold tracking-wide pr-1">Chat with Doctor</span>
      </a>
    </aside>
  );
};
