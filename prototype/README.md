# Aaj Kya Banayein? — React Native (Expo) app

This is the React Native port of the web app, built with **Expo**, so you can get a real
installable APK (and later a Play Store AAB) **without installing Android Studio** — Expo's
cloud service (EAS Build) compiles it for you.

## What's in here

```
App.js                  – app state, persistence, screen routing
theme.js                – colors (same contrast-checked palette as the web app)
data.js                 – all 14 recipes, pantry items, Roman Urdu names (ported 1:1)
logic.js                – readiness calc + the daily suggestion shuffle
storage.js              – AsyncStorage wrapper (device-local persistence)
components/DeckCard.js  – the swipeable "today's picks" card
components/GridCard.js  – small recipe cards used in Home/Saved
components/DetailSheet.js – recipe modal (Ingredients / Steps / Video tabs)
components/Chrome.js    – header, bottom tab bar, toast
screens/HomeScreen.js
screens/KitchenScreen.js
screens/ShoppingScreen.js
screens/SavedScreen.js
app.json                – Expo/Android app config
eas.json                – build profiles (preview = APK, production = AAB)
```

I already syntax-checked every file, but I have **not** run this on a device or emulator —
I don't have that environment here. Budget 20–30 minutes the first time for setup and a
first build. Do this on your laptop (Mac, Windows, or Linux all work).

## 1. One-time setup

```bash
# Node 18+ required — check with: node -v

# Scaffold a fresh Expo project (this gives you the correct, current dependency versions)
npx create-expo-app aaj-kya-banayein
cd aaj-kya-banayein
```

Now copy every file from this folder into that new project, **overwriting** the generated
`App.js` and `app.json`, and keeping the folder structure (`components/`, `screens/`).

Then install the extra libraries the app needs — `expo install` (not plain `npm install`)
automatically picks the versions that match your Expo SDK:

```bash
npx expo install @react-native-async-storage/async-storage react-native-webview react-native-svg
npx expo install @expo-google-fonts/fraunces expo-font
```

## 2. Try it on your own phone first (no build needed)

```bash
npx expo start
```

Scan the QR code with the **Expo Go** app (free, on the Play Store) on your phone — the app
runs live. Good for checking everything works before you build a standalone APK.

## 3. Build an installable APK (for your wife, sideloaded — not Play Store yet)

```bash
npm install -g eas-cli
eas login          # free Expo account — sign up if you don't have one
eas build:configure
eas build -p android --profile preview
```

This uploads your project to Expo's build servers and, a few minutes later, gives you a
download link to a real `.apk` file. Send that link (or the downloaded file) to your wife —
she'll need to allow "Install unknown apps" for her browser/WhatsApp once, same as any
sideloaded APK.

## 4. Build for the Play Store

Play Store requires an `.aab` (Android App Bundle), not an APK:

```bash
eas build -p android --profile production
```

Then either let EAS submit it for you (`eas submit -p android`, needs your Play Console API
key set up) or download the `.aab` and upload it manually in Play Console under
**Production → Create new release**.

Before publishing for real, you'll want to:
- Change `android.package` in `app.json` to your own reverse-domain id (e.g.
  `com.yourname.aajkyabanayein`) — it's currently a placeholder.
- Add a real app icon/splash (`app.json` → `icon`, `splash`) — Expo uses its default
  placeholder icon until you do.
- Set up a Google Play Console developer account ($25 one-time fee) if you don't have one.

## Notes on parity with the web version

- All 14 recipes, ingredients, Roman Urdu translations, and YouTube video IDs are ported
  **verbatim** from `aaj-kya-banayein.html` (I extracted them programmatically so nothing
  drifted between versions).
- Data now persists via `AsyncStorage` (on-device), so — unlike the web artifact — it works
  fully offline and doesn't depend on being opened inside claude.ai.
- The swipe deck uses `PanResponder` + `Animated` to reproduce the drag-and-flick gesture.
- The video tab uses `react-native-webview` pointed at the YouTube embed URL.
