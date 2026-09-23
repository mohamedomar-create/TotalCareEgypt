import { Image } from 'expo-image';
import { router } from 'expo-router';
import { KeyboardAvoidingView, Pressable, ScrollView, View } from 'react-native';

import { Screen } from '@/components/common';
import { Logo, PulseLine } from '@/components/ds/brand';
import { Button, Input } from '@/components/ds/controls';
import { Icon } from '@/components/ds/icon';
import { Txt } from '@/components/ds/text';
import { useScreenInsets } from '@/hooks/use-insets';
import { useLocale } from '@/hooks/use-locale';
import { useAppState } from '@/state/app-state';
import { colors } from '@/theme/tokens';

// 1a · Welcome & sign-in
export default function WelcomeScreen() {
  const { t, ar } = useLocale();
  const { phone, setPhone, toggleLang } = useAppState();
  const { padTopBtn, padBottomCta } = useScreenInsets();
  const phoneInvalid = phone.replace(/\D/g, '').length < 10;

  return (
    <Screen>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" bounces={false}>
          <View style={{ height: 380, zIndex: 1 }}>
            <Image
              source={require('@/assets/images/doctor-laughing.jpg')}
              style={{ position: 'absolute', inset: 0 }}
              contentFit="cover"
              contentPosition={{ top: '20%', left: '50%' }}
            />
            <Pressable
              accessibilityRole="button"
              onPress={toggleLang}
              style={{
                position: 'absolute',
                top: padTopBtn,
                end: 16,
                height: 36,
                paddingHorizontal: 14,
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}>
              <Icon name="languages" size={16} />
              <Txt weight={700} style={{ fontSize: 13 }}>{t.switch_lang}</Txt>
            </Pressable>
            <View style={{ position: 'absolute', start: 24, bottom: -26, backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 14 }}>
              <Logo height={40} />
            </View>
          </View>

          <View style={{ flex: 1, gap: 18, paddingTop: 52, paddingHorizontal: 24, paddingBottom: Math.max(24, padBottomCta) }}>
            <PulseLine height={22} />
            <Txt display style={{ fontSize: 32, lineHeight: 32 * (ar ? 1.3 : 1.08), textTransform: ar ? 'none' : 'uppercase', marginTop: -6 }}>
              {t.welcome_title}
            </Txt>
            <Txt style={{ fontSize: 15, lineHeight: 15 * 1.5, color: colors.grey700 }}>{t.welcome_body}</Txt>
            <View style={{ direction: 'ltr', flexDirection: 'row', gap: 8, alignItems: 'flex-end' }}>
              <View style={{ height: 42, paddingHorizontal: 12, borderWidth: 1, borderColor: colors.border, justifyContent: 'center' }}>
                <Txt weight={700} dir="ltr" style={{ fontSize: 15 }}>+20</Txt>
              </View>
              <Input
                style={{ flex: 1, minWidth: 0 }}
                placeholder="10 1234 5678"
                ltr
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                autoComplete="tel"
                value={phone}
                onChangeText={setPhone}
                maxLength={14}
              />
            </View>
            <View style={{ flex: 1 }} />
            {/* The 4-digit code step isn't designed yet, so Continue goes straight to Home. */}
            <Button fullWidth size="lg" disabled={phoneInvalid} onPress={() => router.replace('/home')}>
              {t.continue}
            </Button>
            <Txt style={{ fontSize: 12, color: colors.grey500, textAlign: 'center' }}>{t.terms}</Txt>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
