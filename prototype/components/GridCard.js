import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, RADII } from '../theme';
import { haveCount } from '../logic';

export default function GridCard({ recipe, pantry, isSaved, onPress, onToggleHeart }) {
  const { have, total } = haveCount(recipe, pantry);
  const miss = total - have;
  const isReady = miss === 0;

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => onPress(recipe.id)}>
      <View style={styles.top}>
        <Text style={{ fontSize: 26 }}>{recipe.emoji}</Text>
        <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} onPress={() => onToggleHeart(recipe.id)}>
          <Text style={{ fontSize: 16 }}>{isSaved ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title} numberOfLines={2}>{recipe.name}</Text>
      <Text style={styles.meta}>{recipe.time} min · {recipe.difficulty}</Text>
      <View style={[styles.badge, isReady ? styles.badgeReady : styles.badgeNeed]}>
        <Text style={[styles.badgeText, { color: isReady ? '#fff' : COLORS.needText }]}>
          {isReady ? 'Ready to cook' : `Needs ${miss}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%', backgroundColor: COLORS.paper, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: RADII.lg, padding: 14, gap: 8,
  },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  title: { fontSize: 15, fontWeight: '700', color: COLORS.ink, lineHeight: 19 },
  meta: { fontSize: 11.5, color: COLORS.muted, fontWeight: '700' },
  badge: { alignSelf: 'flex-start', borderRadius: RADII.pill, paddingVertical: 3, paddingHorizontal: 8 },
  badgeReady: { backgroundColor: COLORS.spice },
  badgeNeed: { backgroundColor: COLORS.turmericLight },
  badgeText: { fontSize: 10.5, fontWeight: '800' },
});
