import { router } from 'expo-router';
import { Pressable, View } from 'react-native';

import { useLocale } from '@/hooks/use-locale';
import { useAppState } from '@/state/app-state';
import { colors } from '@/theme/tokens';

import { Icon } from './ds/icon';
import { Txt } from './ds/text';

/**
 * Not in the design: the prototype has no way to reach the cart (1e), so the
 * catalogue and product page get a cart button with an item count.
 */
export function CartButton({ background }: { background?: string }) {
  const { t } = useLocale();
  const { cart } = useAppState();
  const count = Object.values(cart).reduce((a, n) => a + n, 0);
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${t.a11y_cart}, ${count}`}
      onPress={() => router.push('/cart')}
      style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: background }}>
      <Icon name="shopping-cart" size={22} />
      {count > 0 ? (
        <View
          style={{
            position: 'absolute',
            top: 3,
            end: 1,
            minWidth: 17,
            height: 17,
            paddingHorizontal: 4,
            borderRadius: 9,
            backgroundColor: colors.red,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Txt weight={700} style={{ fontSize: 10, color: '#fff', textAlign: 'center' }}>{String(count)}</Txt>
        </View>
      ) : null}
    </Pressable>
  );
}
