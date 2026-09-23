import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Screen paddings from the design, derived from the device's safe area.
 * The prototype hard-codes iOS 54/56/26/30 and Android 8/12/6/12.
 */
export function useScreenInsets() {
  const insets = useSafeAreaInsets();
  return {
    padTop: Math.max(insets.top, 8),
    padTopBtn: Math.max(insets.top, 8) + 4,
    padBottom: Math.max(insets.bottom - 8, 6),
    padBottomCta: Math.max(insets.bottom - 4, 12),
  };
}
