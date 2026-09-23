import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router, type Href } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';

import { PlayDot, Screen } from '@/components/common';
import { Logo } from '@/components/ds/brand';
import { Button, Eyebrow, ProgressBar } from '@/components/ds/controls';
import { Icon, type IconName } from '@/components/ds/icon';
import { Txt } from '@/components/ds/text';
import { useScreenInsets } from '@/hooks/use-insets';
import { useLocale } from '@/hooks/use-locale';
import type { StringKey } from '@/i18n/strings';
import { colors } from '@/theme/tokens';

const QUICK: { icon: IconName; label: StringKey; href: Href; color: string }[] = [
  { icon: 'wind', label: 'qa_rent', href: '/shop', color: colors.red },
  { icon: 'calendar-plus', label: 'qa_visit', href: '/visit', color: colors.blue },
  // No guides library yet; the prototype sends this to tracking, which has the setup video.
  { icon: 'circle-play', label: 'qa_guides', href: '/orders', color: colors.blue },
  { icon: 'message-circle', label: 'qa_chat', href: '/chat', color: colors.blue },
];

// 1b · Home
export default function HomeScreen() {
  const { t, chev } = useLocale();
  const { padTop } = useScreenInsets();

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ paddingTop: padTop, paddingHorizontal: 20, paddingBottom: 24, gap: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 6 }}>
          <Logo height={34} />
          <View accessibilityLabel={t.a11y_notifications} style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="bell" size={22} />
            <View style={{ position: 'absolute', top: 8, end: 9, width: 8, height: 8, borderRadius: 4, backgroundColor: colors.red }} />
          </View>
        </View>

        <View style={{ gap: 4 }}>
          <Txt weight={700} style={{ fontSize: 26, lineHeight: 26 * 1.15 }}>{t.greet}</Txt>
          <Txt style={{ fontSize: 15, color: colors.grey700 }}>{t.greet_sub}</Txt>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.navigate('/orders')}
          style={({ pressed }) => ({
            backgroundColor: pressed ? colors.blueDark : colors.blue,
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
          })}>
          <Icon name="truck" size={26} color="#fff" />
          <View style={{ flex: 1, gap: 2 }}>
            <Txt weight={700} style={{ fontSize: 15, color: '#fff' }}>{t.out_for_delivery}</Txt>
            <Txt style={{ fontSize: 13, color: '#fff', opacity: 0.92 }}>{t.arriving}</Txt>
          </View>
          <Icon name={chev} size={20} color="#fff" />
        </Pressable>

        <View style={{ backgroundColor: colors.mist, padding: 18, gap: 12 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Eyebrow color={colors.blue}>{t.active_rental}</Eyebrow>
            <Txt weight={700} style={{ fontSize: 12, color: colors.grey700 }}>{t.day_of}</Txt>
          </View>
          <View style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}>
            <View style={{ width: 56, height: 56, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="wind" size={26} color={colors.blue} />
            </View>
            <Txt weight={700} style={{ flex: 1, fontSize: 17, lineHeight: 17 * 1.25 }}>{t.p_o2}</Txt>
          </View>
          <ProgressBar value={40} color={colors.blue} height={6} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, flexShrink: 1 }}>
              <Icon name="calendar-check" size={16} color={colors.grey700} />
              <Txt style={{ fontSize: 13, color: colors.grey700, flexShrink: 1 }}>{t.filter_check}</Txt>
            </View>
            {/* The renewal flow isn't designed yet; for now Renew opens the device page. */}
            <Button variant="outline" size="sm" onPress={() => router.push('/product/o2')}>{t.renew}</Button>
          </View>
        </View>

        <View style={{ gap: 10 }}>
          {[QUICK.slice(0, 2), QUICK.slice(2)].map((row, i) => (
            <View key={i} style={{ flexDirection: 'row', gap: 10 }}>
              {row.map((q) => (
                <Pressable
                  key={q.label}
                  accessibilityRole="button"
                  onPress={() => router.navigate(q.href)}
                  style={({ pressed }) => ({
                    flex: 1,
                    borderWidth: 1,
                    borderColor: colors.border,
                    backgroundColor: pressed ? colors.paper : '#fff',
                    paddingVertical: 16,
                    paddingHorizontal: 14,
                    gap: 14,
                    minHeight: 104,
                  })}>
                  <Icon name={q.icon} size={26} color={q.color} />
                  <Txt weight={700} style={{ fontSize: 15, lineHeight: 15 * 1.2 }}>{t[q.label]}</Txt>
                </Pressable>
              ))}
            </View>
          ))}
        </View>

        <View style={{ gap: 10 }}>
          <Eyebrow color={colors.blue}>{t.guide_eyebrow}</Eyebrow>
          <View style={{ height: 168, justifyContent: 'flex-end' }}>
            <Image source={require('@/assets/images/nurse-gloves.jpg')} style={{ position: 'absolute', inset: 0 }} contentFit="cover" />
            <LinearGradient
              colors={['rgba(23,23,23,0)', 'rgba(23,23,23,0)', 'rgba(23,23,23,0.78)']}
              locations={[0, 0.3, 1]}
              style={{ position: 'absolute', inset: 0 }}
            />
            <View style={{ position: 'absolute', inset: 0, alignItems: 'center', justifyContent: 'center' }}>
              <PlayDot size={52} iconSize={22} />
            </View>
            <View style={{ paddingVertical: 14, paddingHorizontal: 16, gap: 2 }}>
              <Txt weight={700} style={{ fontSize: 15, color: '#fff' }}>{t.guide_title}</Txt>
              <Txt style={{ fontSize: 12, color: '#fff', opacity: 0.9 }}>{t.guide_meta}</Txt>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
