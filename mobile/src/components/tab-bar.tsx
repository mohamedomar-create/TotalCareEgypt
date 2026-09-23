import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { router, type Href } from 'expo-router';
import { Pressable, View } from 'react-native';

import { useScreenInsets } from '@/hooks/use-insets';
import { useLocale } from '@/hooks/use-locale';
import type { StringKey } from '@/i18n/strings';
import { colors } from '@/theme/tokens';

import { Icon, type IconName } from './ds/icon';
import { Txt } from './ds/text';

// Support opens the full-screen chat and Profile goes to sign-in, as in the prototype;
// only Home, Rent & buy and Orders are real tabs.
const ITEMS: { key: string; icon: IconName; label: StringKey; href: Href; route?: string }[] = [
  { key: 'home', icon: 'house', label: 'tab_home', href: '/home', route: 'home' },
  { key: 'shop', icon: 'shopping-bag', label: 'tab_shop', href: '/shop', route: 'shop' },
  { key: 'orders', icon: 'package', label: 'tab_orders', href: '/orders', route: 'orders' },
  { key: 'chat', icon: 'message-circle', label: 'tab_chat', href: '/chat' },
  { key: 'profile', icon: 'user', label: 'tab_profile', href: '/' },
];

export function TabBar({ state, navigation }: BottomTabBarProps) {
  const { t, dir } = useLocale();
  const { padBottom } = useScreenInsets();
  const activeRoute = state.routes[state.index]?.name;

  return (
    <View
      accessibilityRole="tabbar"
      style={{
        direction: dir,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: colors.border,
        backgroundColor: '#fff',
        paddingTop: 8,
        paddingHorizontal: 4,
        paddingBottom: padBottom,
      }}>
      {ITEMS.map((item) => {
        const active = item.route === activeRoute;
        const color = active ? colors.red : colors.grey500;
        return (
          <Pressable
            key={item.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            onPress={() => {
              if (item.route) navigation.navigate(item.route);
              else router.push(item.href);
            }}
            style={{ flex: 1, alignItems: 'center', gap: 4, paddingVertical: 4 }}>
            <Icon name={item.icon} size={22} color={color} />
            <Txt weight={700} numberOfLines={1} style={{ fontSize: 10.5, color, textAlign: 'center' }}>
              {t[item.label]}
            </Txt>
          </Pressable>
        );
      })}
    </View>
  );
}
