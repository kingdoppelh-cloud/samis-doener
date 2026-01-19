import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Start', href: '#home' },
    { name: 'Bestseller', href: '#bestseller' },
    { name: 'Speisekarte', href: '#menu' },
    { name: 'Über uns', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24"> 
          
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <img 
              // HIER KORRIGIERT: logo.png
              src="/logo.png" 
              alt="Sami's Döner Logo" 
              // Logo schön groß: h-20 (mobil), h-28 (desktop)
              className="h-20 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(227,24,55,0.5)]"
            />
            <div className="hidden md:block">
              <h1 className="text-2xl font-black tracking-tighter uppercase text-white leading-none">
                Sami's <span className="text-orange-500">Döner</span>
              </h1>
              <p className="text-xs text-gray-400 tracking-widest font-medium">IMBISS & PIZZERIA</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-orange-500 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Warenkorb Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onCartClick}
              className="relative bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(234,88,12,0.4)] group"
            >
              <ShoppingCart size={24} className="group-hover:animate-bounce" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-orange-600 text-xs font-bold h-6 w-6 flex items-center justify-center rounded-full border-2 border-black">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-300 font-medium hover:text-white hover:bg-white/10 rounded px-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
