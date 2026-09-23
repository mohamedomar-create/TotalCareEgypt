import type { IconName } from '@/components/ds/icon';
import type { Lang, StringKey } from '@/i18n/strings';

// Mock catalogue from the design. Prices are EGP; rental prices are per month.
export type CategoryId = 'resp' | 'mob' | 'diab' | 'mon';
export type DurationId = '1w' | '1m' | '3m';

export type Product = {
  id: string;
  cat: CategoryId;
  icon: IconName;
  mode: 'rent' | 'buy';
  price: number;
  /** Rental-period pricing; only the oxygen concentrator has it in the design. */
  durations?: Record<DurationId, number>;
  /** Refundable deposit per unit. */
  deposit?: number;
  /** String key for the long description on the product page. */
  descKey?: StringKey;
};

export const PRODUCTS: Product[] = [
  { id: 'o2', cat: 'resp', icon: 'wind', mode: 'rent', price: 2400, durations: { '1w': 900, '1m': 2400, '3m': 6300 }, deposit: 5000, descKey: 'pd_o2' },
  { id: 'cpap', cat: 'resp', icon: 'moon', mode: 'rent', price: 3200 },
  { id: 'neb', cat: 'resp', icon: 'cloud-fog', mode: 'buy', price: 1950 },
  { id: 'wc', cat: 'mob', icon: 'accessibility', mode: 'rent', price: 900 },
  { id: 'bed', cat: 'mob', icon: 'bed', mode: 'rent', price: 4500 },
  { id: 'gluc', cat: 'diab', icon: 'droplet', mode: 'buy', price: 850 },
  { id: 'strips', cat: 'diab', icon: 'droplets', mode: 'buy', price: 420 },
  { id: 'oxi', cat: 'mon', icon: 'activity', mode: 'buy', price: 650 },
];

export const CATEGORIES: ('all' | CategoryId)[] = ['all', 'resp', 'mob', 'diab', 'mon'];
export const DURATIONS: DurationId[] = ['1w', '1m', '3m'];

export const findProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
export const productNameKey = (p: Product) => `p_${p.id}` as StringKey;

/** Unit price for a cart line: rentals with period pricing use the chosen period. */
export const unitPrice = (p: Product, dur: DurationId) => (p.durations ? p.durations[dur] : p.price);

export const formatMoney = (n: number, lang: Lang) =>
  lang === 'ar' ? `${n.toLocaleString('en-US')} ج.م` : `EGP ${n.toLocaleString('en-US')}`;

export const VISIT_SLOTS = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
export const UNAVAILABLE_SLOTS = new Set(['12:00', '20:00']);

export const SERVICES: { id: 'setup' | 'nurse' | 'maint'; icon: IconName; label: StringKey; price: number | null }[] = [
  { id: 'setup', icon: 'wrench', label: 'svc1', price: null },
  { id: 'nurse', icon: 'stethoscope', label: 'svc2', price: 450 },
  { id: 'maint', icon: 'settings', label: 'svc3', price: 300 },
];
