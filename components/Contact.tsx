import React from 'react';
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    // Hintergrund DUNKELBLAU (passend zum "Jetzt bestellen" Banner)
    <section id="contact" className="py-20 bg-[#050816] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* ADRESSE */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold">Sami's Döner Imbiss</p>
                  <p>Städtersweg 1-3</p>
                  <p>37242 Bad Sooden-Allendorf</p>
                  <p className="text-xs text-gray-500 mt-1">(Parkplatz Rewe / Hagebaumarkt)</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-gray-400 mt-2">
                <div className="flex items-center gap-3">
                    <Phone className="text-orange-500 flex-shrink-0" size={18} />
                    <a href="tel:+4917632070968" className="hover:text-white transition">0176 - 320 70 968</a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="text-orange-500 flex-shrink-0" size={18} />
                    <a href="tel:+491749635085" className="hover:text-white transition">0174 - 963 50 85</a>
                </div>
              </div>
            </div>
          </div>

          {/* ÖFFNUNGSZEITEN */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Öffnungszeiten</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <Clock className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-medium text-white block">Montag - Samstag</span>
                  <span>11:00 - 20:00 Uhr</span>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Clock className="text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-medium text-white block">Sonntag & Feiertag</span>
                  <span className="text-red-400">Geschlossen</span>
                </div>
              </div>
            </div>
          </div>

          {/* LIEFERSERVICE */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Lieferservice</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <div>
                  <strong className="text-white">Bad Sooden-Allendorf</strong>
                  <br/>
                  <span className="text-sm">Ab 15,00 € Mindestbestellwert</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <div>
                  <strong className="text-white">Außerhalb</strong>
                  <br/>
                  <span className="text-sm">Auf Anfrage</span>
                </div>
              </li>
            </ul>
          </div>

          {/* SOCIAL / INFO */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Sami's Döner</h3>
            <p className="text-gray-500 text-sm mb-4">
              Frisch, lecker und direkt am Rewe/Hagebaumarkt Parkplatz.
              Komm vorbei oder lass dir dein Essen liefern!
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-gray-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-900 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors text-gray-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sami's Döner Imbiss. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Impressum</a>
            <a href="#" className="hover:text-white transition">Datenschutz</a>
          </div>
        </div>
      </div>
    </section>
  );
};
