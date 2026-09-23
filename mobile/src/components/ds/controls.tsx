import { useState, type ReactNode } from 'react';
import {
  Pressable,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';

import { useAppState } from '@/state/app-state';
import { colors, fontFamilies, shadowFloat } from '@/theme/tokens';

import { em, Txt } from './text';

// Native versions of the Total Care design-system primitives (project/_ds/_ds_bundle.js).
// "Hover" colours from the web components are used as the pressed state.

const BUTTON_VARIANTS = {
  primary: { bg: colors.red, fg: '#fff', bd: colors.red, pbg: colors.redDark, pfg: '#fff', pbd: colors.redDark },
  secondary: { bg: colors.blue, fg: '#fff', bd: colors.blue, pbg: colors.blueDark, pfg: '#fff', pbd: colors.blueDark },
  outline: { bg: 'transparent', fg: colors.ink, bd: colors.ink, pbg: colors.ink, pfg: '#fff', pbd: colors.ink },
  ghost: { bg: 'transparent', fg: colors.blue, bd: 'transparent', pbg: colors.blueTint, pfg: colors.blue, pbd: 'transparent' },
} as const;
const BUTTON_SIZES = { sm: { h: 32, px: 14, fs: 12 }, md: { h: 42, px: 20, fs: 14 }, lg: { h: 52, px: 28, fs: 16 } } as const;

export function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  fullWidth,
  onPress,
  children,
  style,
}: {
  variant?: keyof typeof BUTTON_VARIANTS;
  size?: keyof typeof BUTTON_SIZES;
  disabled?: boolean;
  fullWidth?: boolean;
  onPress?: () => void;
  children: string;
  style?: StyleProp<ViewStyle>;
}) {
  const v = BUTTON_VARIANTS[variant];
  const s = BUTTON_SIZES[size];
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => {
        const p = pressed && !disabled;
        return [
          {
            height: s.h,
            paddingHorizontal: s.px,
            alignSelf: fullWidth ? 'stretch' : 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: p ? v.pbg : v.bg,
            borderWidth: 1.5,
            borderColor: p ? v.pbd : v.bd,
            opacity: disabled ? 0.4 : 1,
            transform: [{ translateY: p ? 1 : 0 }],
          },
          style,
        ];
      }}>
      {({ pressed }) => (
        <Txt
          weight={700}
          numberOfLines={1}
          style={{
            fontSize: s.fs,
            letterSpacing: em(s.fs, 0.06),
            textTransform: 'uppercase',
            textAlign: 'center',
            color: pressed && !disabled ? v.pfg : v.fg,
          }}>
          {children}
        </Txt>
      )}
    </Pressable>
  );
}

export function IconButton({
  variant = 'ghost',
  size = 40,
  label,
  onPress,
  children,
}: {
  variant?: 'ghost' | 'outline';
  size?: number;
  label: string;
  onPress?: () => void;
  children: ReactNode;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => ({
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: pressed ? colors.mist : 'transparent',
        borderWidth: 1.5,
        borderColor: variant === 'outline' ? colors.ink : 'transparent',
      })}>
      {children}
    </Pressable>
  );
}

const BADGE_TONES = { red: colors.red, blue: colors.blue, black: colors.black, orange: colors.orange, teal: colors.teal, grey: colors.grey500 };

export function Badge({
  tone = 'blue',
  variant = 'solid',
  children,
}: {
  tone?: keyof typeof BADGE_TONES;
  variant?: 'solid' | 'outline';
  children: string;
}) {
  const c = BADGE_TONES[tone];
  const solid = variant === 'solid';
  return (
    <View
      style={{
        height: 22,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        backgroundColor: solid ? c : 'transparent',
        borderWidth: 1.5,
        borderColor: c,
      }}>
      <Txt weight={700} numberOfLines={1} style={{ fontSize: 11, letterSpacing: em(11, 0.08), textTransform: 'uppercase', color: solid ? '#fff' : c }}>
        {children}
      </Txt>
    </View>
  );
}

/** Pill filter / quick-reply chip. */
export function Tag({ selected, onPress, children }: { selected?: boolean; onPress?: () => void; children: string }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: !!selected }}
      onPress={onPress}
      style={({ pressed }) => ({
        height: 30,
        paddingHorizontal: 14,
        borderRadius: 999,
        justifyContent: 'center',
        flexShrink: 0,
        backgroundColor: selected ? colors.blue : pressed ? colors.blueTint : '#fff',
        borderWidth: 1,
        borderColor: selected ? colors.blue : colors.border,
      })}>
      <Txt weight={500} numberOfLines={1} style={{ fontSize: 13, color: selected ? '#fff' : colors.ink }}>
        {children}
      </Txt>
    </Pressable>
  );
}

const TOAST_TONES = { info: colors.blue, success: colors.teal, warning: colors.orange, danger: colors.red };

export function Toast({ tone = 'info', title, children }: { tone?: keyof typeof TOAST_TONES; title: string; children?: string }) {
  return (
    <View
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      style={{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'flex-start',
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: colors.black,
        boxShadow: shadowFloat,
      }}>
      <View style={{ width: 10, height: 10, marginTop: 5, backgroundColor: TOAST_TONES[tone] }} />
      <View style={{ flex: 1, minWidth: 0 }}>
        <Txt weight={700} style={{ fontSize: 14, color: '#fff' }}>{title}</Txt>
        {children ? <Txt style={{ fontSize: 13, color: '#C9C9C9', marginTop: 2, lineHeight: 13 * 1.45 }}>{children}</Txt> : null}
      </View>
    </View>
  );
}

/** Floating toast slot above a screen's bottom action bar. */
export function ToastSlot({ visible, bottom, children }: { visible: boolean; bottom: number; children: ReactNode }) {
  if (!visible) return null;
  return <View style={{ position: 'absolute', left: 16, right: 16, bottom, zIndex: 5 }}>{children}</View>;
}

export function Input({
  style,
  ltr,
  ...rest
}: Omit<TextInputProps, 'style'> & { style?: StyleProp<ViewStyle>; /** Keep numbers left-to-right in Arabic. */ ltr?: boolean }) {
  const { lang } = useAppState();
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[
        {
          height: 44,
          paddingHorizontal: 12,
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: focused ? colors.blue : colors.border,
          borderRadius: 2,
          boxShadow: focused ? `inset 0px -2px 0px ${colors.blue}` : undefined,
        },
        style,
      ]}>
      <TextInput
        placeholderTextColor={colors.grey500}
        {...rest}
        onFocus={(e) => {
          setFocused(true);
          rest.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          rest.onBlur?.(e);
        }}
        style={{
          fontFamily: fontFamilies[lang][400],
          fontSize: 15,
          color: colors.ink,
          padding: 0,
          textAlign: lang === 'ar' && !ltr ? 'right' : 'left',
        }}
      />
    </View>
  );
}

export function Radio<V extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: V; label: string }[];
  value: V;
  onChange: (v: V) => void;
}) {
  return (
    <View accessibilityRole="radiogroup" style={{ gap: 10 }}>
      {options.map((o) => {
        const on = o.value === value;
        return (
          <Pressable
            key={o.value}
            accessibilityRole="radio"
            accessibilityState={{ checked: on }}
            onPress={() => onChange(o.value)}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10, alignSelf: 'flex-start' }}>
            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 9,
                borderWidth: 1.5,
                borderColor: on ? colors.blue : colors.grey500,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
              }}>
              {on ? <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colors.blue }} /> : null}
            </View>
            <Txt style={{ fontSize: 15 }}>{o.label}</Txt>
          </Pressable>
        );
      })}
    </View>
  );
}

export function ProgressBar({ value, color = colors.sky, height = 12 }: { value: number; color?: string; height?: number }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: v }}
      style={{ height, backgroundColor: colors.mist }}>
      <View style={{ width: `${v}%`, height: '100%', backgroundColor: color }} />
    </View>
  );
}

/** Small uppercase section label used throughout the app (11px, wide tracking). */
export function Eyebrow({ children, color = colors.grey500 }: { children: string; color?: string }) {
  return (
    <Txt weight={700} style={{ fontSize: 11, letterSpacing: em(11, 0.12), textTransform: 'uppercase', color }}>
      {children}
    </Txt>
  );
}
