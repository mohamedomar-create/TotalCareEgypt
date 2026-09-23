import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { CartButton } from '@/components/cart-button';
import { ProductTile, Screen } from '@/components/common';
import { Badge, Input, Tag } from '@/components/ds/controls';
import { Icon } from '@/components/ds/icon';
import { Txt } from '@/components/ds/text';
import { CATEGORIES, formatMoney, PRODUCTS, productNameKey, type CategoryId } from '@/data/catalog';
import { useScreenInsets } from '@/hooks/use-insets';
import { useLocale } from '@/hooks/use-locale';
import { colors } from '@/theme/tokens';

// 1c · Catalogue · rent & buy
export default function ShopScreen() {
  const { t, lang, chev } = useLocale();
  const { padTop } = useScreenInsets();
  const [cat, setCat] = useState<'all' | CategoryId>('all');
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const list = PRODUCTS.filter(
    (p) => (cat === 'all' || p.cat === cat) && (!q || t[productNameKey(p)].toLowerCase().includes(q)),
  );

  return (
    <Screen>
      <View style={{ paddingTop: padTop, paddingHorizontal: 20, gap: 14 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 6 }}>
          <Txt weight={700} style={{ fontSize: 26 }}>{t.shop_title}</Txt>
          <CartButton />
        </View>
        <Input placeholder={t.search} value={query} onChangeText={setQuery} returnKeyType="search" clearButtonMode="while-editing" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: -20, flexGrow: 0 }}
          contentContainerStyle={{ gap: 8, paddingHorizontal: 20, paddingBottom: 12 }}>
          {CATEGORIES.map((c) => (
            <Tag key={c} selected={cat === c} onPress={() => setCat(c)}>
              {t[`cat_${c}`]}
            </Tag>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }} keyboardShouldPersistTaps="handled">
        <Txt style={{ fontSize: 12, color: colors.grey500, paddingTop: 4, paddingBottom: 8 }}>{`${list.length} ${t.devices}`}</Txt>
        {list.map((p) => (
          <Pressable
            key={p.id}
            accessibilityRole="button"
            onPress={() => router.push({ pathname: '/product/[id]', params: { id: p.id } })}
            style={({ pressed }) => ({
              flexDirection: 'row',
              gap: 14,
              alignItems: 'center',
              paddingVertical: 14,
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
              opacity: pressed ? 0.7 : 1,
            })}>
            <ProductTile icon={p.icon} size={72} iconSize={28} />
            <View style={{ flex: 1, minWidth: 0, gap: 5 }}>
              <Txt weight={700} style={{ fontSize: 15, lineHeight: 15 * 1.25 }}>{t[productNameKey(p)]}</Txt>
              <Txt style={{ fontSize: 12, color: colors.grey500 }}>{t[`cat_${p.cat}`]}</Txt>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Badge tone={p.mode === 'rent' ? 'blue' : 'grey'} variant="outline">{p.mode === 'rent' ? t.rent : t.buy}</Badge>
                <Txt weight={700} style={{ fontSize: 14 }}>{formatMoney(p.price, lang) + (p.mode === 'rent' ? t.per_mo : '')}</Txt>
              </View>
            </View>
            <Icon name={chev} size={20} color={colors.grey300} />
          </Pressable>
        ))}
      </ScrollView>
    </Screen>
  );
}
