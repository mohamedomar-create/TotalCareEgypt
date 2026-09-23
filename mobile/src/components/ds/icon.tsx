import {
  Accessibility, Activity, ArrowLeft, ArrowRight, Bed, Bell, CalendarCheck, CalendarPlus, Check,
  ChevronLeft, ChevronRight, CirclePlay, Clock, CloudFog, Droplet, Droplets, Headphones, House,
  Languages, MapPin, MessageCircle, Minus, Moon, Package, Phone, Play, Plus, RefreshCw, SendHorizontal,
  Settings, ShoppingBag, ShoppingCart, Stethoscope, Trash2, Truck, User, Wind, Wrench,
  type LucideIcon,
} from 'lucide-react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { colors } from '@/theme/tokens';

// The brand ships no icon set; the design system substitutes Lucide (2px stroke).
const ICONS = {
  accessibility: Accessibility, activity: Activity, 'arrow-left': ArrowLeft, 'arrow-right': ArrowRight,
  bed: Bed, bell: Bell, 'calendar-check': CalendarCheck, 'calendar-plus': CalendarPlus, check: Check,
  'chevron-left': ChevronLeft, 'chevron-right': ChevronRight, 'circle-play': CirclePlay, clock: Clock,
  'cloud-fog': CloudFog, droplet: Droplet, droplets: Droplets, headphones: Headphones, house: House,
  languages: Languages, 'map-pin': MapPin, 'message-circle': MessageCircle, minus: Minus, moon: Moon,
  package: Package, phone: Phone, play: Play, plus: Plus, 'refresh-cw': RefreshCw,
  'send-horizontal': SendHorizontal, settings: Settings, 'shopping-bag': ShoppingBag,
  'shopping-cart': ShoppingCart, stethoscope: Stethoscope, 'trash-2': Trash2, truck: Truck, user: User,
  wind: Wind, wrench: Wrench,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

type Props = { name: IconName; size?: number; color?: string; style?: StyleProp<ViewStyle> };

export function Icon({ name, size = 20, color = colors.ink, style }: Props) {
  const Cmp = ICONS[name];
  return <Cmp size={size} color={color} strokeWidth={2} style={style} />;
}
