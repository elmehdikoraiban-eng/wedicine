// Types partagés entre le serveur et le navigateur.

export const CITIES = ["Casablanca", "Rabat", "Marrakech", "Tanger", "Fès", "Agadir"] as const;
export type City = (typeof CITIES)[number];

export type Review = {
  author: string;
  rating: number;
  date: string;
  text: string;
};

export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  city: string;
  address: string;
  distanceKm: number;
  languages: string[];
  priceMad: number;
  nextSlot: string;
  initials: string;
  reviews: Review[];
};

export function averageRating(d: Doctor) {
  return Math.round((d.reviews.reduce((s, r) => s + r.rating, 0) / d.reviews.length) * 10) / 10;
}
