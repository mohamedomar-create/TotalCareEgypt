import { Image } from 'expo-image';
import type { StyleProp, ImageStyle } from 'react-native';

import { colors } from '@/theme/tokens';

// logo.png is pre-cropped to the same 1.86:1 lock-up box the web Logo component uses.
export function Logo({ height = 64 }: { height?: number }) {
  return (
    <Image
      source={require('@/assets/brand/logo.png')}
      style={{ height, width: height * 1.86 }}
      contentFit="contain"
      accessibilityLabel="Total Care"
    />
  );
}

/** The heartbeat line from the logo's "A", tinted to any brand colour. */
export function PulseLine({
  color = colors.red,
  height = 60,
  opacity = 1,
  style,
}: {
  color?: string;
  height?: number;
  opacity?: number;
  style?: StyleProp<ImageStyle>;
}) {
  return (
    <Image
      source={require('@/assets/brand/pulse.png')}
      tintColor={color}
      contentFit="contain"
      style={[{ height, width: height * 1.858, opacity }, style]}
      accessible={false}
    />
  );
}
