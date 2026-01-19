import { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
  {
    id: 'doener',
    name: 'Döner-Gerichte',
    image: '/category-doener.webp',
    items: [
      { id: 1, name: 'Döner im Fladenbrot', description: 'mit Kalb- oder Hähnchenfleisch, Salat und Soßen', price: 6.50 },
      { id: 2, name: 'Döner im Fladenbrot (groß)', description: 'mit mehr Fleisch, Salat und Soßen', price: 7.50 },
      { id: 3, name: 'Döner-Teller', description: 'mit Pommes oder Reis und Salat', price: 12.00 },
      { id: 4, name: 'Döner-Teller (groß)', description: 'mit mehr Fleisch, Pommes oder Reis und Salat', price: 14.00 },
      { id: 5, name: 'Döner-Box', description: 'mit Pommes oder Reis oder Salat', price: 6.50 },
      { id: 6, name: 'Döner-Box (groß)', description: 'mit mehr Fleisch, Pommes oder Reis oder Salat', price: 7.50 },
      { id: 7, name: 'Döner-Burger', description: 'Burger-Brötchen mit Dönerfleisch', price: 5.00 },
      { id: 8, name: 'Döner vegetarisch', description: 'mit Schafskäse', price: 5.00 },
      { id: 9, name: 'Dürüm vegetarisch', description: 'Teigrolle mit Schafskäse', price: 5.50 },
      { id: 10, name: 'Dürüm mit Fleisch', description: 'Teigrolle mit Dönerfleisch', price: 7.00 },
      { id: 11, name: 'Lahmacun ohne Fleisch', description: 'türkische Pizza-Teigrolle mit Schafskäse', price: 6.00 },
      { id: 12, name: 'Lahmacun mit Fleisch', description: 'türkische Pizza-Teigrolle mit Dönerfleisch', price: 8.00 }
    ]
  },
  {
    id: 'falafel',
    name: 'Falafel',
    image: '/category-falafel.webp',
    items: [
      { id: 20, name: 'Falafel im Fladenbrot', description: 'Salat, Soßen', price: 6.00 },
      { id: 21, name: 'Falafel im Dürüm', description: 'Salat, Soßen', price: 7.00 },
      { id: 22, name: 'Falafel-Teller', description: 'mit Pommes oder Reis, Salat, Soßen', price: 12.00 }
    ]
  },
  {
    id: 'burger-chicken',
    name: 'Burger & Chicken',
    image: '/category-burger.webp',
    items: [
      { id: 30, name: 'Hamburger', description: '', price: 5.50 },
      { id: 31, name: 'Cheeseburger', description: '', price: 6.00 },
      { id: 32, name: 'Chickenburger', description: 'paniert im Burger-Brötchen, Salat, Soßen', price: 5.00 },
      { id: 33, name: 'Chicken Nuggets (10 St.)', description: '', price: 6.00 },
      { id: 34, name: 'Chicken Wings (8 St.)', description: '', price: 7.50 }
    ]
  },
  {
    id: 'currywurst-pommes',
    name: 'Currywurst & Pommes',
    image: '/category-currywurst.webp',
    items: [
      { id: 40, name: 'Riesen-Currywurst mit Pommes', description: '', price: 6.00 },
      { id: 41, name: 'Pommes klein', description: '', price: 3.50 },
      { id: 42, name: 'Pommes groß', description: '', price: 5.00 }
    ]
  },
  {
    id: 'calamari',
    name: 'Calamari',
    image: '/category-calamari.webp',
    items: [
      { id: 50, name: 'Calamari-Teller', description: 'panierte Tintenfischringe mit Pommes, Salat, Soße', price: 12.00 }
    ]
  },
  {
    id: 'salate',
    name: 'Salate',
    image: '/category-salat.webp',
    items: [
      { id: 60, name: 'Gemischter Salat klein', description: 'Eisberg, Rot- und Weißkraut, Tomate, Gurke, Zwiebeln, Mais', price: 5.00 },
      { id: 61, name: 'Gemischter Salat groß', description: '', price: 7.00 },
      { id: 62, name: 'Krautsalat klein', description: 'Weiß- und Rotkraut, Zwiebeln, Mais', price: 5.00 },
      { id: 63, name: 'Krautsalat groß', description: '', price: 7.00 },
      { id: 64, name: 'Bauernsalat klein', description: 'Eisberg, Tomate, Gurke, Mais, Zwiebeln, Paprika, Schafskäse', price: 6.00 },
      { id: 65, name: 'Bauernsalat groß', description: '', price: 8.00 },
      { id: 66, name: 'Thunfischsalat klein', description: 'Eisberg, Tomate, Gurke, Zwiebeln, Mais, Thunfisch', price: 6.50 },
      { id: 67, name: 'Thunfischsalat groß', description: '', price: 8.50 },
      { id: 68, name: 'Döner-Salat klein', description: 'Eisberg, Weiß- und Rotkraut, Tomate, Gurke, Zwiebeln, Mais, Hähnchen- oder Kalbfleisch', price: 6.50 },
      { id: 69, name: 'Döner-Salat groß', description: '', price: 8.50 }
    ]
  },
  {
    id: 'menues',
    name: 'Menüs',
    image: '/category-menue.webp',
    items: [
      { id: 80, name: 'Menü 1 – Chickenburger', description: 'mit Pommes und Getränk', price: 10.00 },
      { id: 81, name: 'Menü 2 – Dönerburger', description: 'mit Pommes und Getränk', price: 10.00 },
      { id: 82, name: 'Menü 4 – Chicken Nuggets', description: 'mit Pommes und Getränk', price: 10.00 },
      { id: 83, name: 'Menü 5 – Calamari', description: 'mit Pommes, Salat und Getränk', price: 12.00 },
      { id: 84, name: 'Menü 6 – Chicken Wings', description: 'mit Pommes und Getränk', price: 13.00 },
      { id: 85, name: 'Menü 7 – Hamburg/Cheeseburger', description: 'mit Pommes und Getränk', price: 10.00 },
      { id: 86, name: 'Menü 8 – Currywurst', description: 'mit Pommes und Getränk', price: 7.50 }
    ]
  },
  {
    id: 'kids',
    name: 'Für Kinder',
    image: '/category-kids.webp',
    items: [
      { id: 90, name: 'Kiddy Box', description: 'Überraschungsspielzeug, Lolli, Luftballon, Capri-Sonne, Dönerfleisch oder Chicken Nuggets mit Pommes, Soße nach Wunsch', price: 7.50 }
    ]
  },
  {
    id: 'getraenke',
    name: 'Getränke',
    image: '/category-drinks.webp',
    items: [
      { id: 100, name: 'Cola / Cola Zero / Cola Light', description: '0,5 l', price: 2.50 },
      { id: 101, name: 'Fanta / Fanta exotic / Sprite', description: '0,5 l', price: 2.50 },
      { id: 102, name: 'Mezzo Mix / Uludag', description: '0,5 l', price: 2.50 },
      { id: 103, name: 'Ayran', description: '', price: 2.50 },
      { id: 104, name: 'Eistee', description: '', price: 2.50 },
      { id: 105, name: 'Wasser mit und ohne Kohlensäure', description: '', price: 2.50 },
      { id: 106, name: 'Red Bull', description: '', price: 2.50 }
    ]
  }
];
