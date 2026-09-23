import { Pressable, ScrollView, View } from 'react-native';

import { BackButton, Screen } from '@/components/common';
import { Button, Eyebrow, Toast, ToastSlot } from '@/components/ds/controls';
import { Icon } from '@/components/ds/icon';
import { Txt } from '@/components/ds/text';
import { formatMoney, SERVICES, UNAVAILABLE_SLOTS, VISIT_SLOTS } from '@/data/catalog';
import { useFlash } from '@/hooks/use-flash';
import { useScreenInsets } from '@/hooks/use-insets';
import { useLocale } from '@/hooks/use-locale';
import { useAppState } from '@/state/app-state';
import { colors } from '@/theme/tokens';

/** The next six days, starting tomorrow. */
function upcomingDays(lang: 'en' | 'ar') {
  const today = new Date();
  return [1, 2, 3, 4, 5, 6].map((offset) => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset);
    return { wd: d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { weekday: 'short' }), d: String(d.getDate()) };
  });
}

// 1g · Book a home visit
export default function VisitScreen() {
  const { t, lang } = useLocale();
  const { svc, setSvc, day, setDay, slot, setSlot } = useAppState();
  const { padTop, padBottomCta } = useScreenInsets();
  const [booked, flashBooked] = useFlash();
  const days = upcomingDays(lang);
  const selDay = days[day];
  const slotRows = [VISIT_SLOTS.slice(0, 3), VISIT_SLOTS.slice(3)];

  return (
    <Screen>
      <View style={{ paddingTop: padTop, paddingHorizontal: 12, paddingBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
        <BackButton fallback="/home" />
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20, gap: 22 }}>
        <View style={{ gap: 4 }}>
          <Txt weight={700} style={{ fontSize: 26, lineHeight: 26 * 1.15 }}>{t.visit_title}</Txt>
          <Txt style={{ fontSize: 14, color: colors.grey700 }}>{t.visit_sub}</Txt>
        </View>

        <View style={{ gap: 8 }}>
          {SERVICES.map((s) => {
            const on = svc === s.id;
            return (
              <Pressable
                key={s.id}
                accessibilityRole="radio"
                accessibilityState={{ checked: on }}
                onPress={() => setSvc(s.id)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                  padding: on ? 13 : 14,
                  borderWidth: on ? 2 : 1,
                  borderColor: on ? colors.blue : colors.border,
                  backgroundColor: on ? colors.blueTint : '#fff',
                }}>
                <Icon name={s.icon} size={22} color={colors.blue} />
                <View style={{ flex: 1, gap: 2 }}>
                  <Txt weight={700} style={{ fontSize: 15 }}>{t[s.label]}</Txt>
                  <Txt style={{ fontSize: 12, color: colors.grey500 }}>{s.price == null ? t.svc1p : formatMoney(s.price, lang)}</Txt>
                </View>
                <View style={{ width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: on ? colors.blue : colors.grey300, alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: on ? colors.blue : 'transparent' }} />
                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={{ gap: 10 }}>
          <Eyebrow>{t.pick_day}</Eyebrow>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            {days.map((d, i) => {
              const on = day === i;
              const fg = on ? '#fff' : colors.ink;
              return (
                <Pressable
                  key={i}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: on }}
                  onPress={() => setDay(i)}
                  style={{ flex: 1, paddingVertical: 10, borderWidth: 1, borderColor: on ? colors.blue : colors.border, backgroundColor: on ? colors.blue : '#fff', alignItems: 'center', gap: 4 }}>
                  <Txt weight={700} numberOfLines={1} style={{ fontSize: 11, color: fg, textAlign: 'center' }}>{d.wd}</Txt>
                  <Txt weight={700} style={{ fontSize: 18, color: fg, textAlign: 'center' }}>{d.d}</Txt>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={{ gap: 10 }}>
          <Eyebrow>{t.pick_time}</Eyebrow>
          <View style={{ direction: 'ltr', gap: 8 }}>
            {slotRows.map((row, i) => (
              <View key={i} style={{ flexDirection: 'row', gap: 8 }}>
                {row.map((v) => {
                  const off = UNAVAILABLE_SLOTS.has(v);
                  const on = slot === v && !off;
                  return (
                    <Pressable
                      key={v}
                      disabled={off}
                      accessibilityRole="radio"
                      accessibilityState={{ checked: on, disabled: off }}
                      onPress={() => setSlot(v)}
                      style={{
                        flex: 1,
                        height: 44,
                        borderWidth: 1,
                        borderColor: on ? colors.blue : colors.border,
                        backgroundColor: on ? colors.blue : off ? colors.paper : '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Txt
                        weight={700}
                        style={{
                          fontSize: 14,
                          textAlign: 'center',
                          color: on ? '#fff' : off ? colors.grey300 : colors.ink,
                          textDecorationLine: off ? 'line-through' : 'none',
                        }}>
                        {v}
                      </Txt>
                    </Pressable>
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <ToastSlot visible={booked} bottom={110}>
        <Toast tone="success" title={t.booked}>{`${selDay.wd} ${selDay.d} · ${slot}`}</Toast>
      </ToastSlot>

      <View style={{ borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 12, paddingHorizontal: 20, paddingBottom: padBottomCta }}>
        <Button size="lg" fullWidth onPress={flashBooked}>{t.confirm_visit}</Button>
      </View>
    </Screen>
  );
}
