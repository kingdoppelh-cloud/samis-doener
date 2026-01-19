import React from 'react';
import { X, Trash2, Send } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (uniqueId: string) => void;
  onUpdateQuantity: (uniqueId: string, delta: number) => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemove,
  onUpdateQuantity
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSendOrder = () => {
    if (cartItems.length === 0) return;

    let message = "Hallo Hugo's Pizza Express Team, ich möchte folgende Bestellung aufgeben:\n\n";
    cartItems.forEach(item => {
        message += `${item.quantity}x ${item.name} (${item.selectedSize}) - ${(item.price * item.quantity).toFixed(2).replace('.', ',')}€\n`;
    });
    message += `\nGesamtbetrag: ${subtotal.toFixed(2).replace('.', ',')}€`;
    message += "\n\nBitte bestätigen Sie meine Bestellung. Danke!";

    const encodedMessage = encodeURIComponent(message);
    // Using WhatsApp link as requested
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            onClick={onClose}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 bg-pizza-red text-white flex justify-between items-center shadow-md">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Dein Warenkorb 🛒
          </h2>
          <button onClick={onClose} className="hover:bg-red-700 p-1 rounded transition">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <p className="text-6xl mb-4">🍕</p>
              <p>Der Warenkorb ist noch leer.</p>
              <button onClick={onClose} className="mt-4 text-pizza-red underline font-medium">
                Zur Speisekarte
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.uniqueId} className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-xs bg-gray-200 text-gray-700 px-1 rounded mr-2">#{item.id}</span>
                        <span className="font-bold text-gray-800">{item.name}</span>
                        <div className="text-sm text-gray-500">{item.selectedSize}</div>
                    </div>
                    <div className="font-bold text-gray-800">
                        {(item.price * item.quantity).toFixed(2).replace('.', ',')}€
                    </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-md px-2 py-1">
                        <button
                            onClick={() => onUpdateQuantity(item.uniqueId, -1)}
                            className="text-gray-500 hover:text-pizza-red font-bold text-lg w-6 h-6 flex items-center justify-center"
                        >
                            -
                        </button>
                        <span className="font-medium w-4 text-center">{item.quantity}</span>
                        <button
                            onClick={() => onUpdateQuantity(item.uniqueId, 1)}
                            className="text-gray-500 hover:text-pizza-green font-bold text-lg w-6 h-6 flex items-center justify-center"
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={() => onRemove(item.uniqueId)}
                        className="text-gray-400 hover:text-red-500 transition"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Zwischensumme:</span>
            <span className="font-bold text-xl">{subtotal.toFixed(2).replace('.', ',')} €</span>
          </div>
          <p className="text-xs text-gray-400 mb-4 text-center">
            *Zahlung erfolgt bei Lieferung oder Abholung.
          </p>
          <button
            onClick={handleSendOrder}
            disabled={cartItems.length === 0}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg ${
                cartItems.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white animate-pulse-subtle'
            }`}
          >
            <Send size={20} />
            Bestellanfrage senden
          </button>
        </div>
      </div>
    </>
  );
};