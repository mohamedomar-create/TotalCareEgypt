import { Image } from 'expo-image';
import { useRef, useState } from 'react';
import { KeyboardAvoidingView, Pressable, ScrollView, TextInput, View } from 'react-native';

import { BackButton, Screen, VideoThumb } from '@/components/common';
import { IconButton, Tag } from '@/components/ds/controls';
import { Icon } from '@/components/ds/icon';
import { em, Txt } from '@/components/ds/text';
import { useScreenInsets } from '@/hooks/use-insets';
import { useLocale } from '@/hooks/use-locale';
import type { StringKey } from '@/i18n/strings';
import { useAppState } from '@/state/app-state';
import { colors, fontFamilies } from '@/theme/tokens';

const QUICK_REPLIES: StringKey[] = ['qr1', 'qr2', 'qr3'];

// 1h · Support chat
export default function ChatScreen() {
  const { t, lang, ar } = useLocale();
  const { messages, typing, sendMessage } = useAppState();
  const { padTop, padBottomCta } = useScreenInsets();
  const [draft, setDraft] = useState('');
  const scroller = useRef<ScrollView>(null);

  const send = (text: string) => {
    if (!text.trim()) return;
    sendMessage(text);
    setDraft('');
  };

  return (
    <Screen>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={{ paddingTop: padTop, paddingHorizontal: 12, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', gap: 10, borderBottomWidth: 1, borderBottomColor: colors.border }}>
          <BackButton fallback="/home" size={40} height={44} />
          <View style={{ width: 40, height: 40 }}>
            <Image
              source={require('@/assets/images/doctor-laughing.jpg')}
              style={{ width: 40, height: 40, borderRadius: 20 }}
              contentFit="cover"
              contentPosition={{ top: '18%', left: '50%' }}
            />
            <View style={{ position: 'absolute', bottom: 0, end: 0, width: 11, height: 11, borderRadius: 6, backgroundColor: colors.teal, borderWidth: 2, borderColor: '#fff' }} />
          </View>
          <View style={{ flex: 1, gap: 1 }}>
            <Txt weight={700} style={{ fontSize: 15 }}>{t.chat_agent}</Txt>
            <Txt style={{ fontSize: 12, color: colors.grey500 }}>{t.chat_role}</Txt>
          </View>
          <IconButton label={t.a11y_call}>
            <Icon name="phone" size={20} />
          </IconButton>
        </View>

        <ScrollView
          ref={scroller}
          style={{ flex: 1, backgroundColor: colors.paper }}
          contentContainerStyle={{ paddingVertical: 18, paddingHorizontal: 16, gap: 10 }}
          onContentSizeChange={() => scroller.current?.scrollToEnd({ animated: true })}
          keyboardShouldPersistTaps="handled">
          <Txt weight={700} style={{ alignSelf: 'center', fontSize: 11, letterSpacing: em(11, 0.1), textTransform: 'uppercase', color: colors.grey500, textAlign: 'center' }}>
            {t.today}
          </Txt>
          {messages.map((m, i) => {
            const align = m.me ? 'flex-end' : 'flex-start';
            return (
              <View key={i} style={{ alignSelf: align, maxWidth: '82%', gap: 6 }}>
                <View style={{ backgroundColor: m.me ? colors.blue : '#fff', borderWidth: 1, borderColor: m.me ? colors.blue : colors.border, paddingVertical: 10, paddingHorizontal: 13 }}>
                  <Txt style={{ fontSize: 14, lineHeight: 14 * 1.45, color: m.me ? '#fff' : colors.ink }}>{m.text ?? t[m.key!]}</Txt>
                </View>
                {m.video ? (
                  <View style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, flexDirection: 'row', gap: 10, alignItems: 'center', padding: 8 }}>
                    <VideoThumb width={72} height={52} playSize={24} iconSize={12} />
                    <View style={{ gap: 2, flexShrink: 1 }}>
                      <Txt weight={700} style={{ fontSize: 13 }}>{t.video_title}</Txt>
                      <Txt style={{ fontSize: 11, color: colors.grey500 }}>{t.video_meta}</Txt>
                    </View>
                  </View>
                ) : null}
                <Txt style={{ fontSize: 10.5, color: colors.grey500, alignSelf: align }}>{m.time}</Txt>
              </View>
            );
          })}
          {typing ? (
            <View style={{ alignSelf: 'flex-start', backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, paddingVertical: 10, paddingHorizontal: 13 }}>
              <Txt style={{ fontSize: 13, color: colors.grey500 }}>{t.typing}</Txt>
            </View>
          ) : null}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          style={{ flexGrow: 0, backgroundColor: '#fff' }}
          contentContainerStyle={{ gap: 8, paddingTop: 10, paddingHorizontal: 16 }}>
          {QUICK_REPLIES.map((k) => (
            <Tag key={k} onPress={() => send(t[k])}>{t[k]}</Tag>
          ))}
        </ScrollView>

        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', paddingTop: 10, paddingHorizontal: 16, paddingBottom: padBottomCta, backgroundColor: '#fff' }}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            onSubmitEditing={() => send(draft)}
            submitBehavior="submit"
            returnKeyType="send"
            placeholder={t.type}
            placeholderTextColor={colors.grey500}
            style={{
              flex: 1,
              height: 44,
              borderWidth: 1,
              borderColor: colors.border,
              paddingHorizontal: 12,
              paddingVertical: 0,
              fontSize: 15,
              fontFamily: fontFamilies[lang][400],
              color: colors.ink,
              textAlign: ar ? 'right' : 'left',
            }}
          />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t.a11y_send}
            onPress={() => send(draft)}
            style={({ pressed }) => ({ width: 44, height: 44, backgroundColor: pressed ? colors.redDark : colors.red, alignItems: 'center', justifyContent: 'center' })}>
            <View style={ar ? { transform: [{ scaleX: -1 }] } : undefined}>
              <Icon name="send-horizontal" size={20} color="#fff" />
            </View>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
