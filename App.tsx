import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Bestsellers } from './components/Bestsellers';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { MenuItem } from './types';
import { X, ShoppingCart, Phone, MessageCircle } from 'lucide-react';

interface CartItem extends MenuItem {
  cartId: string;
  selectedSize: string;
  selectedPrice: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem, size: string, price: number) => {
    const newItem = {
      ...item,
      cartId: Math.random().toString(36).substr(2, 9),
      selectedSize: size,
      selectedPrice: price
    };
    setCartItems(prev => [...prev, newItem]);
    setIsCartOpen(true); // Öffnet Warenkorb automatisch beim Hinzufügen
  };

  const handleRemoveFromCart = (cartId: string) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.selectedPrice, 0);

  // WHATSAPP NACHRICHT GENERIEREN
  const createWhatsAppMessage = () => {
    const itemsList = cartItems
      .map(item => `• 1x ${item.name} (${item.selectedSize}) - ${item.selectedPrice.toFixed(2)}€`)
      .join('%0A');

    const total = `Gesamt: ${totalPrice.toFixed(2)}€`;

    // HIER IST DER FIX: Sami's Döner statt Hugo's Pizza
    return `Hallo Sami's Döner Team,%0Aich möchte gerne eine Bestellung aufgeben:%0A%0A${itemsList}%0A%0A----------------%0A${total}%0A%0ALieferadresse:%0AName: [Name]%0AStraße: [Straße + Nr.]%0AOrt: [Ort]%0A%0ABitte bestätigen Sie meine Bestellung.`;
  };

  // DIE RICHTIGE NUMMER VON SAMI
  const whatsappNumber = "4917632070968"; 

  return (
    <div className="min-h-screen bg-[#050816] text-white font-sans selection:bg-orange-500 selection:text-white">
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="bestseller">
          <Bestsellers onAddToCart={handleAddToCart} />
        </div>
        <div id="menu">
          <Menu onAddToCart={handleAddToCart} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* WARENKORB DRAWER */}
      {isCartOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Slide-Over Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0f111a] z-[70] shadow-2xl transform transition-transform border-l border-white/10 flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#050816]">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-orange-500" />
                <h2 className="text-xl font-bold">Dein Warenkorb</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4 opacity-60">
                  <ShoppingCart size={64} />
                  <p className="text-lg font-medium">Dein Warenkorb ist leer</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-orange-500 hover:text-orange-400 underline"
                  >
                    Zur Speisekarte
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.cartId} className="bg-[#1a1d2d] p-4 rounded-xl flex justify-between items-center border border-white/5 group hover:border-orange-500/30 transition-all">
                    <div>
                      <h4 className="font-bold text-white">{item.name}</h4>
                      <p className="text-sm text-gray-400">{item.selectedSize}</p>
                      <p className="text-orange-500 font-bold mt-1">{item.selectedPrice.toFixed(2)} €</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.cartId)}
                      className="text-gray-500 hover:text-red-500 p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer & Actions */}
            <div className="p-6 bg-[#050816] border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-gray-300">Gesamtsumme:</span>
                <span className="text-orange-500 text-2xl">{totalPrice.toFixed(2)} €</span>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${createWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/20 ${
                  cartItems.length === 0 
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-500 text-white hover:-translate-y-1'
                }`}
                onClick={(e) => cartItems.length === 0 && e.preventDefault()}
              >
                <MessageCircle size={24} />
                Bestellung per WhatsApp senden
              </a>

              <button
                onClick={handleClearCart}
                className="w-full text-sm text-gray-500 hover:text-red-400 transition-colors"
                disabled={cartItems.length === 0}
              >
                Warenkorb leeren
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
