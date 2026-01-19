import React from 'react';
import { Plus, Star } from 'lucide-react';
import { menuData } from '../data';
import { MenuItem } from '../types';

interface BestsellersProps {
  onAddToCart: (item: MenuItem, size: string, price: number) => void;
}

export const Bestsellers: React.FC<BestsellersProps> = ({ onAddToCart }) => {
  
  // 1. Wir definieren unsere Wunsch-Items mit EXAKTEN Namen oder eindeutigen Teilen
  const wishlist = [
    { name: 'Döner im Fladenbrot', image: '/category-doener.webp' },
    { name: 'Döner Teller',        image: '/category-teller.webp' }, // Achtung: Findet auch "nur Fleisch" -> müssen wir filtern
    { name: 'Hamburger',           image: '/category-burger.webp' },
    { name: 'Döner Box Groß',      image: '/category-box.webp' },
    { name: 'Falafel Teller',      image: '/category-falafel.webp' },
    { name: 'Calamari',            image: '/category-calamari.webp' }
  ];

  const bestsellerItems: (MenuItem & { image: string })[] = [];

  // 2. Wir suchen die echten Daten dazu
  menuData.forEach(category => {
    category.items.forEach(item => {
      
      // EXCLUDE: Wir wollen "nur Fleisch" NICHT in den Bestsellern haben
      if (item.name.includes('nur Fleisch')) return;

      // Wir prüfen, ob einer unserer Wunsch-Namen im Item-Namen VORKOMMT
      const foundWish = wishlist.find(wish => item.name.includes(wish.name));
      
      if (foundWish) {
        // Checken, ob wir das Item schon haben (vermeidet Dopplungen)
        const alreadyIn = bestsellerItems.find(i => i.id === item.id);
        
        // Zusatz-Check: Wenn wir schon einen "Döner Teller" haben, wollen wir keinen zweiten
        const hasTeller = bestsellerItems.some(i => i.name.includes('Döner Teller'));

        if (!alreadyIn) {
            // Spezialfall: Wenn es ein Döner Teller ist und wir schon einen haben -> überspringen
            if (item.name.includes('Döner Teller') && hasTeller) return;

            bestsellerItems.push({
            ...item,
            image: foundWish.image 
            });
        }
      }
    });
  });

  // 3. Sortieren nach unserer Wunschliste
  bestsellerItems.sort((a, b) => {
    const indexA = wishlist.findIndex(w => a.name.includes(w.name));
    const indexB = wishlist.findIndex(w => b.name.includes(w.name));
    return indexA - indexB;
  });

  // Zur Sicherheit auf 6 begrenzen
  const finalItems = bestsellerItems.slice(0, 6);

  return (
    <section id="bestseller" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Unsere <span className="text-orange-500">Favoriten</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Absoluter Genuss. Diese Klassiker gehen immer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalItems.map((item) => (
            <div key={item.id} className="bg-gray-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all group flex flex-col shadow-lg">
              
              <div className="h-60 overflow-hidden relative bg-gray-800">
                 <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = '/logo.png'; 
                        (e.target as HTMLImageElement).style.objectFit = 'contain';
                        (e.target as HTMLImageElement).style.padding = '20px';
                    }}
                 />
                 <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                   <Star size={12} fill="white" /> Bestseller
                 </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1">{item.name}</h3>
                  <span className="text-xl font-bold text-orange-500 whitespace-nowrap ml-2">{item.price.toFixed(2)} €</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 min-h-[40px]">
                  {item.description}
                </p>

                <div className="mt-auto">
                    <button
                    onClick={() => onAddToCart(item, 'Standard', item.price)}
                    className="w-full bg-white/10 hover:bg-orange-600 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-orange-600"
                    >
                    <Plus size={20} />
                    In den Warenkorb
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
