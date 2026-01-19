import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#050816] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl">
          
          {/* TEXT */}
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Jetzt bestellen bei <span className="text-orange-500">Sami's Döner</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Sami's Döner ist dein Lieferservice und Abhol-Imbiss am Rewe Parkplatz – ideal für zuhause, Büro oder unterwegs.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href="tel:+4917632070968"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-orange-900/20"
            >
              <Phone size={20} />
              Jetzt anrufen
            </a>
            
            {/* WhatsApp Link (öffnet einfach WhatsApp Chat) */}
            <a 
              href="https://wa.me/4917632070968"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-green-900/20"
            >
              <MessageCircle size={20} />
              Über WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
