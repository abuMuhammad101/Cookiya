import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { COLORS, RADII, SHADOW } from '../theme';

const TITLES = {
  home: ['Good to see you', 'Aaj Kya Banayein?'],
  kitchen: ['Your kitchen', 'My Groceries'],
  shopping: ['Keep it stocked', 'Shopping List'],
  saved: ['For later', 'Saved Recipes'],
};

export function Header({ view }) {
  const [eyebrow, title] = TITLES[view];
  return (
    <View style={styles.topbar}>
      <View>
        <Text style={styles.greet}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={{ fontSize: 22 }}>🍲</Text>
    </View>
  );
}

const TABS = [
  { id: 'home', ic: '🏠', label: 'Home' },
  { id: 'kitchen', ic: '🍲', label: 'Kitchen' },
  { id: 'shopping', ic: '🛒', label: 'Shopping' },
  { id: 'saved', ic: '❤️', label: 'Saved' },
];

export function TabBar({ view, hasUnchecked, onChange }) {
  return (
    <View style={styles.tabbar}>
      {TABS.map((t) => {
        const active = view === t.id;
        return (
          <TouchableOpacity key={t.id} style={[styles.tab, active && styles.tabActive]} onPress={() => onChange(t.id)}>
            <Text style={{ fontSize: 19 }}>{t.ic}</Text>
            <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{t.label}</Text>
            {t.id === 'shopping' && hasUnchecked && <View style={styles.dot} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export function Toast({ message }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!message) return;
    Animated.sequence([
      Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.delay(1800),
      Animated.timing(opacity, { toValue: 0, duration: 250, useNativeDriver: true }),
    ]).start();
  }, [message]);
  if (!message) return null;
  return (
    <Animated.View pointerEvents="none" style={[styles.toast, { opacity }]}>
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  topbar: { paddingHorizontal: 20, paddingTop: 14, paddingBottom: 8, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  greet: { fontSize: 13, color: COLORS.muted, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  title: { fontFamily: 'Fraunces_600SemiBold', fontSize: 26, color: COLORS.ink, marginTop: 2 },
  tabbar: {
    position: 'absolute', left: 20, right: 20, bottom: 14,
    backgroundColor: 'rgba(255,255,255,0.96)', borderRadius: 22, borderWidth: 1, borderColor: COLORS.border,
    flexDirection: 'row', padding: 8, ...SHADOW,
  },
  tab: { flex: 1, alignItems: 'center', gap: 3, paddingVertical: 8, borderRadius: 16 },
  tabActive: { backgroundColor: COLORS.spiceLight },
  tabLabel: { fontSize: 10.5, fontWeight: '800', color: COLORS.muted },
  tabLabelActive: { color: COLORS.spiceDark },
  dot: { position: 'absolute', top: 6, right: '28%', width: 7, height: 7, borderRadius: 4, backgroundColor: COLORS.spice },
  toast: {
    position: 'absolute', left: 30, right: 30, bottom: 92, backgroundColor: COLORS.ink,
    borderRadius: RADII.pill, paddingVertical: 12, paddingHorizontal: 20, alignItems: 'center', ...SHADOW,
  },
  toastText: { color: '#fff', fontWeight: '700', fontSize: 13 },
});
