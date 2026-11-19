import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export const WhatsAppConcierge: React.FC = () => {
  const cleanPhone = BRAND.social.whatsappNumber.replace(/[^0-9]/g, '');
  const welcomeMessage = `¡Hola! Me gustaría conocer más sobre las creaciones botánicas de BIOJÄSI ® y recibir acompañamiento personal.`;
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(welcomeMessage)}`;

  return (
    <aside
      aria-label="Atención personalizada por WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atención personalizada por WhatsApp"
        className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-antigravity-float hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group focus:outline-none"
      >
        <MessageCircle className="w-5 h-5 text-white animate-pulse" />
        <span className="text-xs font-sub uppercase font-bold tracking-wider hidden sm:inline">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
