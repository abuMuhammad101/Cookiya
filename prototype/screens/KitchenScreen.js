import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { PANTRY_ITEMS } from '../data';
import { COLORS, RADII, SHADOW } from '../theme';

export default function KitchenScreen({ pantry, customPantry, onTogglePantry, onToggleCustom, onRemoveCustom, onAddPantry, onAddCustom }) {
  const [query, setQuery] = useState('');
  const categories = useMemo(() => [...new Set(PANTRY_ITEMS.map((i) => i.cat))], []);

  const q = query.trim().toLowerCase();
  const matches = q
    ? PANTRY_ITEMS.filter((i) => i.label.toLowerCase().includes(q) || i.ur.toLowerCase().includes(q)).slice(0, 6)
    : [];
  const exactExists =
    PANTRY_ITEMS.some((i) => i.label.toLowerCase() === q || i.ur.toLowerCase() === q) ||
    customPantry.some((c) => c.label.toLowerCase() === q);

  const handlePick = (key) => {
    onAddPantry(key);
    setQuery('');
  };
  const handleAddNew = () => {
    if (!query.trim()) return;
    onAddCustom(query.trim());
    setQuery('');
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
      <View style={styles.intro}>
        <Text style={styles.introText}>
          Tell us what's sitting in your kitchen right now. We'll only put recipes front and centre that you can actually cook without an extra grocery run.
        </Text>
      </View>

      <View style={styles.searchWrap}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search or type an item… e.g. Pyaz, Aloo, spinach"
          placeholderTextColor={COLORS.muted}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={() => {
            const exact = PANTRY_ITEMS.find((i) => i.label.toLowerCase() === q || i.ur.toLowerCase() === q);
            if (exact) handlePick(exact.key);
            else handleAddNew();
          }}
        />
        {q.length > 0 && (
          <View style={styles.suggestBox}>
            {matches.map((i) => {
              const has = !!pantry[i.key];
              return (
                <TouchableOpacity key={i.key} style={styles.suggestRow} onPress={() => handlePick(i.key)}>
                  <View>
                    <Text style={styles.sname}>{i.label}</Text>
                    <Text style={styles.sur}>{i.ur}</Text>
                  </View>
                  <Text style={styles.sadd}>{has ? '✓ in kitchen' : '+ add'}</Text>
                </TouchableOpacity>
              );
            })}
            {!exactExists && (
              <TouchableOpacity style={[styles.suggestRow, { borderBottomWidth: 0 }]} onPress={handleAddNew}>
                <Text style={[styles.sname, { color: COLORS.spiceDark }]}>Add "{query.trim()}" as a new item</Text>
                <Text style={styles.sadd}>+ add</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

      {categories.map((cat) => (
        <View key={cat} style={styles.catBlock}>
          <Text style={styles.catTitle}>{cat}</Text>
          {PANTRY_ITEMS.filter((i) => i.cat === cat).map((i) => (
            <View key={i.key} style={styles.itemRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.lab}>{i.label}</Text>
                <Text style={styles.urSub}>{i.ur}</Text>
              </View>
              <Switch value={!!pantry[i.key]} onToggle={() => onTogglePantry(i.key)} />
            </View>
          ))}
        </View>
      ))}

      {customPantry.length > 0 && (
        <View style={styles.catBlock}>
          <Text style={styles.catTitle}>Added by you</Text>
          {customPantry.map((c) => (
            <View key={c.key} style={styles.itemRow}>
              <Text style={[styles.lab, { flex: 1 }]}>{c.label}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Switch value={!!c.have} onToggle={() => onToggleCustom(c.key)} />
                <TouchableOpacity onPress={() => onRemoveCustom(c.key)}>
                  <Text style={{ color: COLORS.muted, fontSize: 15 }}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

function Switch({ value, onToggle }) {
  return (
    <TouchableOpacity
      style={[switchStyles.track, value && switchStyles.trackOn]}
      onPress={onToggle}
      activeOpacity={0.8}
    >
      <View style={[switchStyles.knob, value && switchStyles.knobOn]} />
    </TouchableOpacity>
  );
}

const switchStyles = StyleSheet.create({
  track: { width: 44, height: 26, borderRadius: 999, backgroundColor: COLORS.border, justifyContent: 'center' },
  trackOn: { backgroundColor: COLORS.herb },
  knob: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff', marginLeft: 3 },
  knobOn: { marginLeft: 21 },
});

const styles = StyleSheet.create({
  intro: { marginHorizontal: 20, marginTop: 6, backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADII.lg, padding: 16 },
  introText: { fontSize: 13.5, color: COLORS.muted, lineHeight: 19, fontWeight: '700' },
  searchWrap: { marginHorizontal: 20, marginTop: 12 },
  searchInput: {
    backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADII.md,
    paddingVertical: 13, paddingHorizontal: 16, fontSize: 14, color: COLORS.ink,
  },
  suggestBox: { marginTop: 8, backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADII.md, overflow: 'hidden', ...SHADOW },
  suggestRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 11, paddingHorizontal: 14, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  sname: { fontWeight: '700', fontSize: 13.5, color: COLORS.ink },
  sur: { fontSize: 11.5, color: COLORS.muted, fontWeight: '600' },
  sadd: { fontSize: 11.5, fontWeight: '800', color: COLORS.spiceDark },
  catBlock: { paddingHorizontal: 20 },
  catTitle: { fontSize: 12.5, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.6, color: COLORS.muted, marginTop: 16, marginBottom: 8 },
  itemRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADII.md, paddingVertical: 12, paddingHorizontal: 14, marginBottom: 8 },
  lab: { fontSize: 14, fontWeight: '700', color: COLORS.ink },
  urSub: { fontSize: 11.5, color: COLORS.muted, fontWeight: '600', marginTop: 1 },
});
