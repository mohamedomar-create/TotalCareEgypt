import { Text, type TextProps, type TextStyle } from 'react-native';

import { useAppState } from '@/state/app-state';
import { colors, fontFamilies, type FontWeight } from '@/theme/tokens';

type Props = TextProps & {
  weight?: FontWeight;
  /** Display face (Code Pro substitute) in English; the Arabic face in Arabic. */
  display?: boolean;
  /** Force a direction for text that must not be reordered (phone codes, times). */
  dir?: 'ltr' | 'rtl';
};

/**
 * Brand text. Picks the font file for the weight and language, and aligns to the
 * reading direction so screens flip cleanly when switching to Arabic.
 */
export function Txt({ weight = 400, display, dir, style, ...rest }: Props) {
  const { lang } = useAppState();
  const rtl = (dir ?? (lang === 'ar' ? 'rtl' : 'ltr')) === 'rtl';
  const fontFamily = display && lang === 'en' ? fontFamilies.display : fontFamilies[lang][weight];
  const base: TextStyle = {
    fontFamily,
    color: colors.ink,
    textAlign: rtl ? 'right' : 'left',
    writingDirection: rtl ? 'rtl' : 'ltr',
  };
  return <Text {...rest} style={[base, style]} />;
}

/** Tracking in the design is given in em; React Native needs points. */
export const em = (fontSize: number, value: number) => fontSize * value;
