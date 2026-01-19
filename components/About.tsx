import React from 'react';
import { Clock, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    // Hintergrund TIEFSCHWARZ
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* BILD */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
            <img 
              src="/SamisImbiss.webp" 
              alt="Sami's Döner Imbiss am Rewe Parkplatz" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.png'; 
                (e.target as HTMLImageElement).style.objectFit = 'contain';
                (e.target as HTMLImageElement).style.padding = '40px';
                (e.target as HTMLImageElement).style.backgroundColor = '#000';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-orange-500 font-bold uppercase tracking-wider mb-1">Willkommen bei uns</p>
              <h3 className="text-2xl font-bold">Frisch. Schnell. Lecker.</h3>
            </div>
          </div>

          {/* TEXT - Hell auf Schwarz */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Über <span className="text-orange-500">Sami's Döner</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Direkt am <span className="text-white font-semibold">Parkplatz Rewe / Hagebaumarkt</span> im Städtersweg versorgen wir Bad Sooden-Allendorf mit frischen Döner-Spezialitäten, Pizza und mehr.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ob schnelle Mittagspause, gemütliches Abendessen oder Lieferung direkt nach Hause – bei Sami's steht Qualität und Frische an erster Stelle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <Clock className="text-orange-500 mb-2" size={28} />
                <h4 className="text-white font-bold mb-1">Öffnungszeiten</h4>
                <p className="text-gray-400 text-sm">Mo - Sa: 11:00 - 20:00 Uhr</p>
                <p className="text-red-500 text-xs mt-1">So & Feiertag geschlossen</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <MapPin className="text-orange-500 mb-2" size={28} />
                <h4 className="text-white font-bold mb-1">Standort</h4>
                <p className="text-gray-400 text-sm">Städtersweg 1-3 (Rewe Parkplatz)</p>
              </div>
            </div>

            <div className="pt-4">
               <a href="#menu" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition transform hover:-translate-y-1">
                 Zur Speisekarte
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
