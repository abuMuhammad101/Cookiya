import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { RECIPES, CATEGORIES } from '../data';
import { getRecipe } from '../logic';
import DeckCard from '../components/DeckCard';
import GridCard from '../components/GridCard';
import { COLORS } from '../theme';

export default function HomeScreen({ queue, pantry, filter, saved, onSetFilter, onOpen, onToggleHeart, onSwipeAway }) {
  const deck = queue.slice(0, 4).map(getRecipe);
  const rest = RECIPES.filter((r) => filter === 'All' || r.tags.includes(filter));

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
      <View style={styles.sectionLabel}>
        <Text style={styles.h2}>Today's picks</Text>
        <Text style={styles.hint}>swipe or tap</Text>
      </View>

      <View style={styles.stackWrap}>
        {deck
          .map((r, i) => (
            <DeckCard
              key={r.id}
              recipe={r}
              pantry={pantry}
              index={i}
              onOpen={onOpen}
              onSwipeAway={onSwipeAway}
            />
          ))
          .reverse()}
      </View>
      <Text style={styles.deckHint}>Swipe away what you don't fancy · tap a card for the recipe</Text>

      <View style={styles.sectionLabel}>
        <Text style={styles.h2}>Browse everything</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
        {CATEGORIES.map((c) => (
          <TouchableOpacity key={c} style={[styles.fchip, filter === c && styles.fchipActive]} onPress={() => onSetFilter(c)}>
            <Text style={[styles.fchipText, filter === c && styles.fchipTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.grid}>
        {rest.map((r) => (
          <GridCard
            key={r.id}
            recipe={r}
            pantry={pantry}
            isSaved={!!saved[r.id]}
            onPress={onOpen}
            onToggleHeart={onToggleHeart}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionLabel: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  h2: { fontFamily: 'Fraunces_600SemiBold', fontSize: 19, color: COLORS.ink },
  hint: { fontSize: 12.5, color: COLORS.muted, fontWeight: '700' },
  stackWrap: { height: 300, marginHorizontal: 20 },
  deckHint: { textAlign: 'center', fontSize: 12, color: COLORS.muted, fontWeight: '700', marginTop: 10 },
  filters: { paddingHorizontal: 20, gap: 8, paddingVertical: 2 },
  fchip: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 999, borderWidth: 1, borderColor: COLORS.border, backgroundColor: COLORS.paper },
  fchipActive: { backgroundColor: COLORS.ink, borderColor: COLORS.ink },
  fchipText: { fontSize: 13, fontWeight: '700', color: COLORS.muted },
  fchipTextActive: { color: '#fff' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, gap: 14, marginTop: 10 },
});
