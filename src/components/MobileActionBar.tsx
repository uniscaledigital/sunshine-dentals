import React from 'react';
import { clinicInfo } from '../config/clinicData';

export const MobileActionBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hello Sunshine Dental, I would like to book an appointment.')}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-surface-container p-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.12)]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${clinicInfo.phone}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 bg-surface-container text-on-surface font-bold text-xs rounded-xl shadow-sm active:scale-95 transition-transform border border-outline-variant/30"
          id="mobile-call-btn"
        >
          <span className="material-symbols-outlined text-[18px] text-primary">call</span>
          <span>Call Clinic</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 bg-[#25D366] text-white font-bold text-xs rounded-xl shadow-sm active:scale-95 transition-transform"
          id="mobile-whatsapp-btn"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};
