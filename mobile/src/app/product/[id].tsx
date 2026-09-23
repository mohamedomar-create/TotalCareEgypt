import { Redirect, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';

import { CartButton } from '@/components/cart-button';
import { BackButton, Screen } from '@/components/common';
import { Badge, Button, Eyebrow, Toast, ToastSlot } from '@/components/ds/controls';
import { Icon, type IconName } from '@/components/ds/icon';
import { em, Txt } from '@/components/ds/text';
import { DURATIONS, findProduct, formatMoney, productNameKey, unitPrice } from '@/data/catalog';
import { useFlash } from '@/hooks/use-flash';
import { useScreenInsets } from '@/hooks/use-insets';
import { useLocale } from '@/hooks/use-locale';
import type { StringKey } from '@/i18n/strings';
import { useAppState } from '@/state/app-state';
import { colors } from '@/theme/tokens';

const INCLUDES: { icon: IconName; label: StringKey }[] = [
  { icon: 'wrench', label: 'inc1' },
  { icon: 'headphones', label: 'inc2' },
  { icon: 'refresh-cw', label: 'inc3' },
];

// 1d · Product detail. The design only specifies the oxygen concentrator; other
// products reuse the layout and leave out sections they have no content for.
export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = findProduct(id);
  const { t, lang } = useLocale();
  const { dur, setDur, addToCart } = useAppState();
  const { padTopBtn, padBottomCta } = useScreenInsets();
  const [added, flashAdded] = useFlash();

  if (!product) return <Redirect href="/shop" />;
  const rent = product.mode === 'rent';
  const price = formatMoney(unitPrice(product, dur), lang) + (rent && !product.durations ? t.per_mo : '');

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 300, backgroundColor: colors.mist, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <BackButton fallback="/shop" size={40} style={{ position: 'absolute', top: padTopBtn, start: 16, backgroundColor: '#fff' }} />
          <View style={{ position: 'absolute', top: padTopBtn, end: 16 }}>
            <CartButton background="#fff" />
          </View>
          <Icon name={product.icon} size={64} color={colors.blue} />
          {/* Placeholder until product photography is supplied. */}
          <Txt weight={700} style={{ fontSize: 11, letterSpacing: em(11, 0.12), textTransform: 'uppercase', color: colors.grey500, textAlign: 'center' }}>
            {t.pd_photo}
          </Txt>
        </View>

        <View style={{ padding: 20, gap: 16 }}>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <Badge tone={rent ? 'blue' : 'grey'}>{rent ? t.rent : t.buy}</Badge>
            <Badge tone="grey" variant="outline">{t[`cat_${product.cat}`]}</Badge>
          </View>
          <Txt weight={700} style={{ fontSize: 24, lineHeight: 24 * 1.2 }}>{t[productNameKey(product)]}</Txt>
          {product.descKey ? (
            <Txt style={{ fontSize: 14, lineHeight: 14 * 1.55, color: colors.grey700 }}>{t[product.descKey]}</Txt>
          ) : null}

          {product.durations ? (
            <View style={{ gap: 10 }}>
              <Eyebrow>{t.pd_duration}</Eyebrow>
              <View style={{ flexDirection: 'row', gap: 8 }}>
                {DURATIONS.map((k) => {
                  const on = dur === k;
                  return (
                    <Pressable
                      key={k}
                      accessibilityRole="radio"
                      accessibilityState={{ checked: on }}
                      onPress={() => setDur(k)}
                      style={{
                        flex: 1,
                        paddingVertical: on ? 11 : 12,
                        paddingHorizontal: 8,
                        borderWidth: on ? 2 : 1,
                        borderColor: on ? colors.blue : colors.border,
                        backgroundColor: on ? colors.blueTint : '#fff',
                        alignItems: 'center',
                        gap: 4,
                      }}>
                      <Txt weight={700} style={{ fontSize: 13, textAlign: 'center' }}>{t[`d_${k}`]}</Txt>
                      <Txt style={{ fontSize: 13, color: colors.grey700, textAlign: 'center' }}>{formatMoney(product.durations![k], lang)}</Txt>
                      <Txt weight={700} style={{ fontSize: 10.5, color: colors.teal, minHeight: 13, textAlign: 'center' }}>
                        {k === '3m' ? t.save : ''}
                      </Txt>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          ) : null}

          {rent ? (
            <View style={{ gap: 10 }}>
              <Eyebrow>{t.pd_includes}</Eyebrow>
              {INCLUDES.map((i) => (
                <View key={i.label} style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                  <Icon name={i.icon} size={18} color={colors.blue} />
                  <Txt style={{ fontSize: 14, flex: 1 }}>{t[i.label]}</Txt>
                </View>
              ))}
            </View>
          ) : null}

          <View style={{ backgroundColor: colors.blueTint, paddingVertical: 12, paddingHorizontal: 14, flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Icon name="truck" size={18} color={colors.blueDark} />
            <Txt style={{ fontSize: 13, color: colors.blueDark, flex: 1 }}>{t.pd_free}</Txt>
          </View>
        </View>
      </ScrollView>

      <ToastSlot visible={added} bottom={120}>
        <Toast tone="success" title={t.added} />
      </ToastSlot>

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingTop: 12,
          paddingHorizontal: 20,
          paddingBottom: padBottomCta,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 14,
        }}>
        <View style={{ gap: 2 }}>
          <Txt weight={700} style={{ fontSize: 18 }}>{price}</Txt>
          {product.deposit ? (
            <Txt style={{ fontSize: 11, color: colors.grey500 }}>{`+ ${t.deposit} ${formatMoney(product.deposit, lang)}`}</Txt>
          ) : null}
        </View>
        <Button
          size="lg"
          style={{ flex: 1 }}
          onPress={() => {
            addToCart(product.id);
            flashAdded();
          }}>
          {t.add_cart}
        </Button>
      </View>
    </Screen>
  );
}
