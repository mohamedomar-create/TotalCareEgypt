import { Image } from 'expo-image';
import { router, type Href } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, View, type StyleProp, type ViewStyle } from 'react-native';

import { useLocale } from '@/hooks/use-locale';
import { colors } from '@/theme/tokens';

import { Icon } from './ds/icon';

/** Screen root: white page laid out in the current reading direction. */
export function Screen({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const { dir } = useLocale();
  return <View style={[{ flex: 1, backgroundColor: '#fff', direction: dir }, style]}>{children}</View>;
}

/** Goes back when there is history, otherwise to a sensible parent screen. */
export function goBack(fallback: Href) {
  if (router.canGoBack()) router.back();
  else router.replace(fallback);
}

export function BackButton({
  fallback,
  size = 44,
  height,
  color = colors.ink,
  style,
}: {
  fallback: Href;
  size?: number;
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const { back, t } = useLocale();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t.a11y_back}
      hitSlop={4}
      onPress={() => goBack(fallback)}
      style={[{ width: size, height: height ?? size, alignItems: 'center', justifyContent: 'center' }, style]}>
      <Icon name={back} size={20} color={color} />
    </Pressable>
  );
}

/** Nurse photo with the red play button, used for the how-to video cards. */
export function VideoThumb({
  width,
  height,
  playSize,
  iconSize,
}: {
  width: number | `${number}%`;
  height: number;
  playSize: number;
  iconSize: number;
}) {
  return (
    <View style={{ width, height, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Image source={require('@/assets/images/nurse-gloves.jpg')} style={{ position: 'absolute', inset: 0 }} contentFit="cover" />
      <PlayDot size={playSize} iconSize={iconSize} />
    </View>
  );
}

export function PlayDot({ size, iconSize }: { size: number; iconSize: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center' }}>
      <Icon name="play" size={iconSize} color="#fff" />
    </View>
  );
}

/** Square light-grey tile holding a product icon (stand-in for product photos). */
export function ProductTile({ icon, size, iconSize }: { icon: Parameters<typeof Icon>[0]['name']; size: number; iconSize: number }) {
  return (
    <View style={{ width: size, height: size, backgroundColor: colors.mist, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon name={icon} size={iconSize} color={colors.blue} />
    </View>
  );
}
