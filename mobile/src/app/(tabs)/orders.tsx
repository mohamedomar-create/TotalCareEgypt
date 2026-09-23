import { Image } from 'expo-image';
import { router, useFocusEffect } from 'expo-router';
import { setStatusBarStyle } from 'expo-status-bar';
import { useCallback } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { BackButton, Screen, VideoThumb } from '@/components/common';
import { PulseLine } from '@/components/ds/brand';
import { IconButton } from '@/components/ds/controls';
import { Icon } from '@/components/ds/icon';
import { em, Txt } from '@/components/ds/text';
import { useScreenInsets } from '@/hooks/use-insets';
import { useLocale } from '@/hooks/use-locale';
import type { StringKey } from '@/i18n/strings';
import { colors } from '@/theme/tokens';

// 2 = done, 1 = current, 0 = upcoming (mock order TC-20417)
const STEPS: { label: StringKey; time: string | null; state: 0 | 1 | 2 }[] = [
  { label: 'st1', time: '10:12', state: 2 },
  { label: 'st2', time: '11:40', state: 2 },
  { label: 'st3', time: '13:05', state: 1 },
  { label: 'st4', time: null, state: 0 },
];

// 1f · Order tracking
export default function OrdersScreen() {
  const { t } = useLocale();
  const { padTop } = useScreenInsets();

  // White status bar text over the red header while this tab is showing.
  useFocusEffect(
    useCallback(() => {
      setStatusBarStyle('light');
      return () => setStatusBarStyle('dark');
    }, []),
  );

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: colors.red, paddingTop: padTop, paddingHorizontal: 20, paddingBottom: 24, overflow: 'hidden', gap: 14 }}>
          <PulseLine color="#fff" opacity={0.14} height={150} style={{ position: 'absolute', end: -60, bottom: -40 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginStart: -10, paddingTop: 4 }}>
            <BackButton fallback="/home" size={40} color="#fff" />
            <Txt weight={700} style={{ fontSize: 15, color: '#fff' }}>{t.track_title}</Txt>
          </View>
          <View style={{ gap: 4 }}>
            <Txt weight={700} style={{ fontSize: 11, letterSpacing: em(11, 0.12), textTransform: 'uppercase', color: '#fff', opacity: 0.9 }}>
              {t.eta_l}
            </Txt>
            <Txt weight={700} style={{ fontSize: 30, lineHeight: 30 * 1.1, color: '#fff' }}>{t.eta}</Txt>
          </View>
        </View>

        <View style={{ paddingVertical: 22, paddingHorizontal: 20 }}>
          {STEPS.map((s, i) => {
            const last = i === STEPS.length - 1;
            const dot = s.state === 2 ? colors.teal : s.state === 1 ? colors.red : '#fff';
            const ring = s.state === 2 ? colors.teal : s.state === 1 ? colors.red : colors.grey300;
            const line = last ? 'transparent' : s.state === 2 ? colors.teal : colors.border;
            return (
              <View key={s.label} style={{ flexDirection: 'row', gap: 14 }}>
                <View style={{ alignItems: 'center', width: 22 }}>
                  <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: dot, borderWidth: 2, borderColor: ring, alignItems: 'center', justifyContent: 'center' }}>
                    {s.state === 2 ? <Icon name="check" size={12} color="#fff" /> : null}
                  </View>
                  <View style={{ width: 2, flex: 1, minHeight: 26, backgroundColor: line }} />
                </View>
                <View style={{ paddingBottom: 20, gap: 2, flex: 1 }}>
                  <Txt weight={700} style={{ fontSize: 15, color: s.state === 0 ? colors.grey500 : colors.ink }}>{t[s.label]}</Txt>
                  <Txt style={{ fontSize: 12, color: colors.grey500 }}>{s.time ?? t.st4_time}</Txt>
                </View>
              </View>
            );
          })}
        </View>

        <View style={{ marginHorizontal: 20, borderWidth: 1, borderColor: colors.border, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Image
            source={require('@/assets/images/doctor-arms-crossed.jpg')}
            style={{ width: 48, height: 48, borderRadius: 24 }}
            contentFit="cover"
            contentPosition={{ top: '15%', left: '50%' }}
          />
          <View style={{ flex: 1, gap: 2 }}>
            <Txt weight={700} style={{ fontSize: 14 }}>{t.courier}</Txt>
            <Txt style={{ fontSize: 12, color: colors.grey500 }}>{t.courier_sub}</Txt>
          </View>
          {/* No technician phone number in the mock data yet. */}
          <IconButton variant="outline" label={t.a11y_call}>
            <Icon name="phone" size={18} />
          </IconButton>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t.a11y_chat}
            onPress={() => router.push('/chat')}
            style={({ pressed }) => ({ width: 40, height: 40, backgroundColor: pressed ? colors.blueDark : colors.blue, alignItems: 'center', justifyContent: 'center' })}>
            <Icon name="message-circle" size={18} color="#fff" />
          </Pressable>
        </View>

        <View style={{ marginTop: 14, marginHorizontal: 20, marginBottom: 20, backgroundColor: colors.mist, padding: 16, flexDirection: 'row', gap: 14, alignItems: 'center' }}>
          <VideoThumb width={84} height={64} playSize={30} iconSize={14} />
          <View style={{ flex: 1, gap: 3 }}>
            <Txt weight={700} style={{ fontSize: 14 }}>{t.prep_title}</Txt>
            <Txt style={{ fontSize: 12, lineHeight: 12 * 1.4, color: colors.grey700 }}>{t.prep_body}</Txt>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
