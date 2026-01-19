import React from 'react';
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-pizza-red shrink-0" />
                <span>
                  Bahnhofstraße 9<br />
                  37242 Bad Sooden-Allendorf
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-pizza-red shrink-0" />
                <a href="tel:056529269926" className="hover:text-white transition">05652 - 926 9 926</a>
              </li>
              <li className="mt-6">
                <a
                  href="tel:056529269926"
                  className="inline-block bg-pizza-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
                >
                  Jetzt anrufen
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Mo - So</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Feiertage</span>
                <span>11:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Folge uns</h3>
            <div className="flex gap-4 mb-8">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 hover:text-white transition">
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-500">
                Beispielseite für Hugo's Pizza Express.<br/>
                Erstellt von deinem AI Webentwickler.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hugo's Pizza Express. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-400">Impressum</a>
            <a href="#" className="hover:text-gray-400">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};