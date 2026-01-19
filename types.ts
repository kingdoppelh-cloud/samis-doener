export interface PriceOption {
  size: string;
  price: number;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  prices: PriceOption[];
  category: string;
  isPopular?: boolean; // For filtering bestsellers if needed dynamically, though specific list is provided
}

export interface CartItem {
  uniqueId: string; // Composite ID (itemId + size)
  id: number;
  name: string;
  selectedSize: string;
  price: number;
  quantity: number;
}

export const CATEGORIES = [
  "Drehfleisch",
  "Salate",
  "Nudeln",
  "Überbacken",
  "Schnitzel",
  "Fisch & Chicken",
  "Pizza",
  "Getränke"
] as const;

export type Category = typeof CATEGORIES[number] | "Alle";