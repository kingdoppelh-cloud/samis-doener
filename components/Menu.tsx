import React, { useState } from 'react';
import { menuData } from '../data';
import { MenuItem } from '../types';
import { Search, Plus } from 'lucide-react';

interface MenuProps {
  onAddToCart: (item: MenuItem, size: string, price: number) => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  // "all" ist der Standard, damit man alles sieht
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Wir holen uns alle Kategorien direkt aus den Daten
  const categories = [
    { id: 'all', name: 'Alle' },
    ...menuData.map(cat => ({ id: cat.id, name: cat.name }))
  ];

  // Filter-Logik
  const filteredCategories = menuData.map(category => {
    // 1. Suche filtern
    const filteredItems = category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toString().includes(searchQuery)
    );

    return {
      ...category,
      items: filteredItems
    };
  }).filter(category => {
    // 2. Kategorie-Tab filtern
    if (activeCategory === 'all') return category.items.length > 0;
    return category.id === activeCategory && category.items.length > 0;
  });

  return (
    <section id="menu" className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER & SEARCH (NICHT Sticky - Scrollt weg) */}
        <div className="mb-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Unsere <span className="text-orange-500">Speisekarte</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Frisch zubereitet für jeden Geschmack.
            </p>
            <p className="text-green-500 text-sm mt-2 font-medium">
              Alle Drehfleisch-Gerichte sind auch mit Falafel erhältlich.
            </p>
          </div>

          {/* Suchleiste (scrollt auch weg) */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Gericht oder Nummer suchen..."
                className="w-full bg-gray-900 text-white pl-12 pr-4 py-3 rounded-xl border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* KATEGORIE TABS (STICKY - Bleibt oben kleben!) */}
        <div className="sticky top-[70px] z-30 bg-black/95 backdrop-blur-md py-3 -mx-4 px-4 mb-8 border-b border-white/10 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    // Optional: Beim Klick leicht nach oben scrollen
                    window.scrollTo({ top: document.getElementById('menu')?.offsetTop ? document.getElementById('menu')!.offsetTop - 100 : 0, behavior: 'smooth' });
                  }}
                  className={`whitespace-nowrap px-5 py-2 rounded-full font-bold text-sm transition-all border ${
                    activeCategory === cat.id
                      ? 'bg-orange-600 border-orange-500 text-white shadow-lg shadow-orange-900/20 scale-105'
                      : 'bg-gray-900 border-white/10 text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MENU GRID */}
        <div className="space-y-16 pt-4">
          {filteredCategories.map((category) => (
            <div key={category.id} className="scroll-mt-40">
              
              {/* Kategorie Titel */}
              {activeCategory === 'all' && (
                <h3 className="text-2xl font-bold text-white mb-8 pl-4 border-l-4 border-orange-500">
                  {category.name}
                </h3>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-gray-900/50 border border-white/5 rounded-xl p-6 hover:border-orange-500/30 transition-all group flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                           <span className="text-xs font-mono text-gray-500">#{item.id}</span>
                           <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                             {item.name}
                           </h4>
                        </div>
                        <p className="text-gray-400 text-sm line-clamp-2 h-10">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-orange-500 whitespace-nowrap ml-3">
                        {item.price.toFixed(2)} €
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(item, 'Standard', item.price)}
                      className="mt-4 w-full bg-white/5 hover:bg-orange-600 text-white py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-orange-600"
                    >
                      <Plus size={18} />
                      In den Warenkorb
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Leerer Status */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl">Keine Gerichte gefunden.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                className="mt-4 text-orange-500 hover:text-orange-400 underline"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
