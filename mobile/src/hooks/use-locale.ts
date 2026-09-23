import { useAppState } from '@/state/app-state';

/** Language plus the direction-dependent bits every screen needs. */
export function useLocale() {
  const { lang, t } = useAppState();
  const ar = lang === 'ar';
  return {
    lang,
    t,
    ar,
    dir: ar ? ('rtl' as const) : ('ltr' as const),
    chev: ar ? ('chevron-left' as const) : ('chevron-right' as const),
    back: ar ? ('arrow-right' as const) : ('arrow-left' as const),
  };
}
