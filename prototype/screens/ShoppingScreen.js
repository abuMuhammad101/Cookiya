import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { COLORS, RADII, SHADOW } from '../theme';

export default function ShoppingScreen({ shopping, onToggleCheck, onRemove, onAdd, onMoveToKitchen }) {
  const [text, setText] = useState('');
  const checkedCount = shopping.filter((s) => s.checked).length;

  const submitAdd = () => {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
      {shopping.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyBig}>🛒</Text>
          <Text style={styles.emptyTitle}>Your list is empty</Text>
          <Text style={styles.emptyText}>Open any recipe and add its missing ingredients here, or add your own below.</Text>
        </View>
      ) : (
        <>
          <View style={styles.intro}>
            <Text style={styles.introText}>Check items off as you buy them, then move them straight into your kitchen — no retyping.</Text>
          </View>
          {shopping.map((item) => (
            <View key={item.id} style={styles.row}>
              <TouchableOpacity
                style={[styles.checkbox, item.checked && styles.checkboxChecked]}
                onPress={() => onToggleCheck(item.id)}
              >
                {item.checked && <Text style={{ color: '#fff', fontSize: 12, fontWeight: '800' }}>✓</Text>}
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <Text style={[styles.txt, item.checked && styles.txtDone]}>{item.label}</Text>
                {item.from && <Text style={styles.src}>for {item.from}</Text>}
              </View>
              <TouchableOpacity onPress={() => onRemove(item.id)}>
                <Text style={{ color: COLORS.muted, fontSize: 16 }}>✕</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      )}

      <View style={styles.addRow}>
        <TextInput
          style={styles.addInput}
          placeholder="Add something else to buy…"
          placeholderTextColor={COLORS.muted}
          value={text}
          onChangeText={setText}
          onSubmitEditing={submitAdd}
        />
        <TouchableOpacity style={styles.addBtn} onPress={submitAdd}>
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
      </View>

      {shopping.length > 0 && (
        <View style={styles.ctaBar}>
          <Text style={styles.ctaText}>{checkedCount} of {shopping.length} checked off</Text>
          <TouchableOpacity
            style={[styles.btnPrimary, checkedCount === 0 && styles.btnDisabled]}
            disabled={checkedCount === 0}
            onPress={onMoveToKitchen}
          >
            <Text style={styles.btnPrimaryText}>Add to my kitchen</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  empty: { padding: 40, alignItems: 'center' },
  emptyBig: { fontSize: 38, marginBottom: 8 },
  emptyTitle: { fontWeight: '800', fontSize: 15, marginBottom: 6, color: COLORS.ink },
  emptyText: { color: COLORS.muted, textAlign: 'center' },
  intro: { marginHorizontal: 20, marginTop: 6, marginBottom: 4, backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADII.lg, padding: 16 },
  introText: { fontSize: 13.5, color: COLORS.muted, lineHeight: 19, fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADII.md, paddingVertical: 12, paddingHorizontal: 14, marginHorizontal: 20, marginBottom: 8 },
  checkbox: { width: 22, height: 22, borderRadius: 7, borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center' },
  checkboxChecked: { backgroundColor: COLORS.herb, borderColor: COLORS.herb },
  txt: { fontSize: 14, fontWeight: '700', color: COLORS.ink },
  txtDone: { textDecorationLine: 'line-through', color: COLORS.muted },
  src: { fontSize: 11, color: COLORS.muted, fontWeight: '600', marginTop: 1 },
  addRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 20, paddingTop: 4, paddingBottom: 14 },
  addInput: { flex: 1, backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADII.md, paddingVertical: 12, paddingHorizontal: 14, fontSize: 14, color: COLORS.ink },
  addBtn: { backgroundColor: COLORS.ink, borderRadius: RADII.md, paddingHorizontal: 18, justifyContent: 'center' },
  addBtnText: { color: '#fff', fontWeight: '700' },
  ctaBar: { marginHorizontal: 20, marginTop: 4, padding: 16, backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADII.lg, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10, ...SHADOW },
  ctaText: { fontSize: 13, fontWeight: '700', color: COLORS.muted },
  btnPrimary: { backgroundColor: COLORS.spice, borderRadius: RADII.pill, paddingVertical: 11, paddingHorizontal: 18 },
  btnPrimaryText: { color: '#fff', fontWeight: '800', fontSize: 13.5 },
  btnDisabled: { backgroundColor: COLORS.border },
});
