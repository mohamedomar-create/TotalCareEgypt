import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

import type { DurationId } from '@/data/catalog';
import { strings, type Lang, type StringKey } from '@/i18n/strings';

export type ChatMessage = { me: boolean; time: string; text?: string; key?: StringKey; video?: boolean };
export type PayMethod = 'cod' | 'card' | 'insta';
export type ServiceId = 'setup' | 'nurse' | 'maint';

const INITIAL_MESSAGES: ChatMessage[] = [
  { me: false, key: 'm1', time: '13:20' },
  { me: true, key: 'm2', time: '13:21' },
  { me: false, key: 'm3', time: '13:22', video: true },
];

function useAppStateValue() {
  const [lang, setLang] = useState<Lang>('en');
  const [phone, setPhone] = useState('');
  const [cart, setCart] = useState<Record<string, number>>({ o2: 1, strips: 2 });
  const [dur, setDur] = useState<DurationId>('1m');
  const [pay, setPay] = useState<PayMethod>('cod');
  const [svc, setSvc] = useState<ServiceId>('setup');
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState('14:00');
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [typing, setTyping] = useState(false);
  const replyTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(replyTimer.current), []);

  const changeQty = (id: string, delta: number) =>
    setCart((c) => {
      const qty = Math.max(0, (c[id] ?? 0) + delta);
      const next = { ...c };
      if (qty === 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  const sendMessage = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages((m) => [...m, { me: true, text, time }]);
    setTyping(true);
    // Mock agent reply until the support backend exists.
    clearTimeout(replyTimer.current);
    replyTimer.current = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { me: false, key: 'reply', time }]);
    }, 1400);
  };

  return {
    lang,
    t: strings[lang],
    toggleLang: () => setLang((l) => (l === 'ar' ? 'en' : 'ar')),
    phone,
    setPhone,
    cart,
    addToCart: (id: string) => changeQty(id, 1),
    changeQty,
    dur,
    setDur,
    pay,
    setPay,
    svc,
    setSvc,
    day,
    setDay,
    slot,
    setSlot,
    messages,
    typing,
    sendMessage,
  };
}

type AppState = ReturnType<typeof useAppStateValue>;
const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const value = useAppStateValue();
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used inside AppStateProvider');
  return ctx;
}
