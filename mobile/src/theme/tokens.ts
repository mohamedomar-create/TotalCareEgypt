// Total Care design tokens (mirrors project/_ds/.../tokens/*.css).
export const colors = {
  red: '#EE2F35',
  redDark: '#C9232A',
  redTint: '#FDE7E8',
  blue: '#438EAB',
  blueDark: '#357590',
  blueTint: '#E3EFF4',
  black: '#171717',
  white: '#FFFFFF',
  orange: '#ED722E',
  ink: '#1A1A1A',
  grey700: '#595959',
  grey500: '#666666',
  grey300: '#BDBDBD',
  mist: '#E9EDEE',
  paper: '#F6F7F7',
  sky: '#6AA4C8',
  teal: '#1A9988',
  border: '#D5DBDD',
} as const;

export const shadowFloat = '0px 6px 24px rgba(23,23,23,0.14)';

// Brand fonts (Circular Std, Code Pro, Omar) are not licensed yet; these are the
// Google Fonts substitutes the design system names in its token stacks.
export const fontFamilies = {
  en: { 400: 'Figtree_400Regular', 500: 'Figtree_500Medium', 700: 'Figtree_700Bold' },
  ar: { 400: 'Tajawal_400Regular', 500: 'Tajawal_500Medium', 700: 'Tajawal_700Bold' },
  display: 'Questrial_400Regular',
} as const;

export type FontWeight = 400 | 500 | 700;
