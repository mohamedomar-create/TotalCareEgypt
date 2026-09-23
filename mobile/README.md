# Total Care — patient app

Expo (SDK 57) + Expo Router app for iOS and Android. It implements the Claude Design handoff in
`../project/Total Care Patient App.dc.html` (screens 1a–1h), using the Total Care design system in
`../project/_ds/`. All data is local mock data; there is no backend yet.

```bash
npm install
npx expo start        # then open in Expo Go, an emulator, or press w for web
npx tsc --noEmit      # typecheck
npx expo lint         # lint
```

## Screens

| Design | Route | File |
| --- | --- | --- |
| 1a Welcome & sign-in | `/` | `src/app/index.tsx` |
| 1b Home | `/home` (tab) | `src/app/(tabs)/home.tsx` |
| 1c Catalogue · rent & buy | `/shop` (tab) | `src/app/(tabs)/shop.tsx` |
| 1d Product detail | `/product/[id]` | `src/app/product/[id].tsx` |
| 1e Cart & checkout | `/cart` | `src/app/cart.tsx` |
| 1f Order tracking | `/orders` (tab) | `src/app/(tabs)/orders.tsx` |
| 1g Book a home visit | `/visit` | `src/app/visit.tsx` |
| 1h Support chat | `/chat` | `src/app/chat.tsx` |

## Structure

- `src/components/ds/`: native versions of the design-system primitives (Button, IconButton, Badge,
  Tag, Toast, Input, Radio, ProgressBar, Logo, PulseLine, Icon, Txt).
- `src/theme/tokens.ts`: colours, shadow and font families from `_ds/tokens/*.css`.
- `src/i18n/strings.ts`: all English and Arabic copy.
- `src/data/catalog.ts`: mock products, prices, visit slots and services.
- `src/state/app-state.tsx`: app-wide state (language, cart, rental period, payment, booking, chat).

## English / Arabic

The language button on 1a switches the whole app at runtime. Screens flip by setting
`direction: 'rtl'` on their root view, so no reload is needed (unlike `I18nManager.forceRTL`).
`Txt` aligns text to the current language; pass `dir="ltr"` (or `ltr` on `Input`) for things that
must not be reordered, such as the `+20` code and phone numbers.

## Deviations from the prototype

- **Cart button:** the prototype has no link to the cart (1e). The catalogue and product page have a
  cart icon with an item count.
- **Product pages:** the design only has a page for the oxygen concentrator. The other products use the
  same layout but leave out the description and rental-period picker, which have no content yet.
- **Visit days:** the six days start from tomorrow instead of a fixed date.
- **Renew** (1b) opens the device page, because the renewal flow isn't designed yet.
- **Continue** (1a) goes straight to Home, because the 4-digit code screen isn't designed yet.

## Still placeholder

- Product photos (grey tiles with icons, plus the "Product photo" label on 1d).
- Brand fonts: Figtree, Questrial and Tajawal stand in for Circular Std, Code Pro and Omar until the
  licensed files are added.
- Arabic copy is a draft and needs review by a native speaker.
- Not wired yet: call buttons, bell, "Change" address, video playback, order placement, sign-in and
  chat. Chat replies are a canned mock reply.
