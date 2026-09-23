import { router } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';

import { BackButton, ProductTile, Screen } from '@/components/common';
import { Button, Eyebrow, Radio, Toast, ToastSlot } from '@/components/ds/controls';
import { Icon, type IconName } from '@/components/ds/icon';
import { Txt } from '@/components/ds/text';
import { findProduct, formatMoney, productNameKey, unitPrice } from '@/data/catalog';
import { useFlash } from '@/hooks/use-flash';
import { useScreenInsets } from '@/hooks/use-insets';
import { useLocale } from '@/hooks/use-locale';
import { useAppState, type PayMethod } from '@/state/app-state';
import { colors } from '@/theme/tokens';

// 1e · Cart & checkout
export default function CartScreen() {
  const { t, lang } = useLocale();
  const { cart, changeQty, dur, pay, setPay } = useAppState();
  const { padTop, padBottomCta } = useScreenInsets();
  const [placed, flashPlaced] = useFlash();

  const lines = Object.entries(cart).flatMap(([id, qty]) => {
    const p = findProduct(id);
    if (!p || qty <= 0) return [];
    const amount = unitPrice(p, dur) * qty;
    const sub = p.mode === 'rent' ? `${t.rental} · ${p.durations ? t[`d_${dur}`] : t.d_1m}` : t.purchase;
    return [{ p, qty, amount, sub }];
  });
  const subtotal = lines.reduce((a, l) => a + l.amount, 0);
  const deposit = lines.reduce((a, l) => a + (l.p.deposit ?? 0) * l.qty, 0);
  const empty = lines.length === 0;

  const summary = [
    { label: t.subtotal, value: formatMoney(subtotal, lang) },
    { label: t.delivery_fee, value: t.free },
    ...(deposit ? [{ label: t.deposit, value: formatMoney(deposit, lang) }] : []),
  ];
  const payOpts: { value: PayMethod; label: string }[] = [
    { value: 'cod', label: t.pay_cod },
    { value: 'card', label: t.pay_card },
    { value: 'insta', label: t.pay_insta },
  ];

  return (
    <Screen>
      <View style={{ paddingTop: padTop, paddingHorizontal: 12, paddingBottom: 8, flexDirection: 'row', alignItems: 'center', gap: 6, borderBottomWidth: 1, borderBottomColor: colors.border }}>
        <BackButton fallback="/shop" />
        <Txt weight={700} style={{ fontSize: 18 }}>{t.cart_title}</Txt>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 4, paddingHorizontal: 20, paddingBottom: 20, gap: 20 }}>
        <View>
          {lines.map(({ p, qty, amount, sub }) => (
            <View key={p.id} style={{ flexDirection: 'row', gap: 12, alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: colors.border }}>
              <ProductTile icon={p.icon} size={56} iconSize={24} />
              <View style={{ flex: 1, minWidth: 0, gap: 3 }}>
                <Txt weight={700} style={{ fontSize: 14, lineHeight: 14 * 1.25 }}>{t[productNameKey(p)]}</Txt>
                <Txt style={{ fontSize: 12, color: colors.grey500 }}>{sub}</Txt>
                <Txt weight={700} style={{ fontSize: 14 }}>{formatMoney(amount, lang)}</Txt>
              </View>
              <View style={{ direction: 'ltr', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.border }}>
                <StepperButton icon={qty === 1 ? 'trash-2' : 'minus'} label={t.a11y_decrease} onPress={() => changeQty(p.id, -1)} />
                <Txt weight={700} style={{ width: 24, textAlign: 'center', fontSize: 14 }}>{String(qty)}</Txt>
                <StepperButton icon="plus" label={t.a11y_increase} onPress={() => changeQty(p.id, 1)} />
              </View>
            </View>
          ))}
          {empty ? (
            <Txt style={{ paddingVertical: 28, textAlign: 'center', fontSize: 14, color: colors.grey500 }}>
              {`${t.empty} `}
              <Txt style={{ fontSize: 14, color: colors.blue }} onPress={() => router.navigate('/shop')}>
                {t.shop_title}
              </Txt>
            </Txt>
          ) : null}
        </View>

        <View style={{ gap: 12 }}>
          <DetailRow icon="map-pin" label={t.deliver_to} value={t.address} action={t.change} />
          <DetailRow icon="clock" label={t.slot} value={t.slot_val} />
        </View>

        <View style={{ gap: 12 }}>
          <Eyebrow>{t.payment}</Eyebrow>
          <Radio options={payOpts} value={pay} onChange={setPay} />
        </View>

        <View style={{ backgroundColor: colors.mist, padding: 16, gap: 8 }}>
          {summary.map((s) => (
            <View key={s.label} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Txt style={{ fontSize: 14, color: colors.grey700 }}>{s.label}</Txt>
              <Txt style={{ fontSize: 14 }}>{s.value}</Txt>
            </View>
          ))}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 10, marginTop: 4 }}>
            <Txt weight={700} style={{ fontSize: 16 }}>{t.total}</Txt>
            <Txt weight={700} style={{ fontSize: 16 }}>{formatMoney(subtotal + deposit, lang)}</Txt>
          </View>
        </View>
      </ScrollView>

      <ToastSlot visible={placed} bottom={110}>
        <Toast tone="success" title={t.placed} />
      </ToastSlot>

      <View style={{ borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 12, paddingHorizontal: 20, paddingBottom: padBottomCta }}>
        <Button size="lg" fullWidth disabled={empty} onPress={flashPlaced}>{t.place}</Button>
      </View>
    </Screen>
  );
}

function StepperButton({ icon, label, onPress }: { icon: IconName; label: string; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => ({ width: 32, height: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: pressed ? colors.mist : '#fff' })}>
      <Icon name={icon} size={16} />
    </Pressable>
  );
}

function DetailRow({ icon, label, value, action }: { icon: IconName; label: string; value: string; action?: string }) {
  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start' }}>
      <Icon name={icon} size={20} color={colors.blue} style={{ marginTop: 2 }} />
      <View style={{ flex: 1, gap: 2 }}>
        <Eyebrow>{label}</Eyebrow>
        <Txt weight={700} style={{ fontSize: 14 }}>{value}</Txt>
      </View>
      {/* Address editing isn't designed yet. */}
      {action ? <Txt weight={700} style={{ fontSize: 13, color: colors.blue }}>{action}</Txt> : null}
    </View>
  );
}
