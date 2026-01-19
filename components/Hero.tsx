import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* HINTERGRUNDBILD */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-doener-teller.webp" 
          alt="Frischer Döner Teller" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        
        <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm animate-fade-in-down">
          <Star size={16} className="text-orange-500 fill-orange-500" />
          <span className="text-orange-400 text-sm font-bold uppercase tracking-wider">Der beste Döner in der Stadt</span>
          <Star size={16} className="text-orange-500 fill-orange-500" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-tight leading-tight">
          ECHTER GESCHMACK <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            ECHTE QUALITÄT
          </span>
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Hausgemachte Saucen, frisches Brot und saftiges Fleisch. 
          Komm vorbei oder bestelle bequem online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#menu" 
            className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg shadow-orange-900/20"
          >
            Jetzt Bestellen
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#about" 
            className="px-8 py-4 rounded-xl text-lg font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Mehr über uns
          </a>
        </div>
      </div>
    </section>
  );
};
