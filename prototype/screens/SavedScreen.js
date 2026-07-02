import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { getRecipe } from '../logic';
import GridCard from '../components/GridCard';
import { COLORS } from '../theme';

export default function SavedScreen({ saved, pantry, onOpen, onToggleHeart }) {
  const ids = Object.keys(saved).filter((id) => saved[id]);
  const recipes = ids.map(getRecipe).filter(Boolean);

  if (recipes.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyBig}>💛</Text>
        <Text style={styles.emptyTitle}>Nothing saved yet</Text>
        <Text style={styles.emptyText}>Tap the heart on any recipe to keep it here for later.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
      <View style={styles.grid}>
        {recipes.map((r) => (
          <GridCard key={r.id} recipe={r} pantry={pantry} isSaved onPress={onOpen} onToggleHeart={onToggleHeart} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  empty: { padding: 40, alignItems: 'center' },
  emptyBig: { fontSize: 38, marginBottom: 8 },
  emptyTitle: { fontWeight: '800', fontSize: 15, marginBottom: 6, color: COLORS.ink },
  emptyText: { color: COLORS.muted, textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, paddingTop: 14, gap: 14 },
});
