import React, { useRef } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { COLORS, RADII, SHADOW } from '../theme';
import { haveCount } from '../logic';

const SCREEN_W = Dimensions.get('window').width;

export default function DeckCard({ recipe, pantry, index, onOpen, onSwipeAway }) {
  const pan = useRef(new Animated.ValueXY()).current;
  const isTop = index === 0;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => isTop,
      onMoveShouldSetPanResponder: (_, g) => isTop && (Math.abs(g.dx) > 4 || Math.abs(g.dy) > 4),
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: (_, g) => {
        if (Math.abs(g.dx) > 90) {
          const dir = g.dx > 0 ? 1 : -1;
          Animated.timing(pan, {
            toValue: { x: dir * SCREEN_W, y: g.dy },
            duration: 260,
            useNativeDriver: false,
          }).start(() => {
            pan.setValue({ x: 0, y: 0 });
            onSwipeAway(recipe.id);
          });
        } else if (Math.abs(g.dx) < 6 && Math.abs(g.dy) < 6) {
          onOpen(recipe.id);
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false, friction: 6 }).start();
        }
      },
    })
  ).current;

  const rotate = pan.x.interpolate({ inputRange: [-300, 0, 300], outputRange: ['-18deg', '0deg', '18deg'] });
  const { have, total } = haveCount(recipe, pantry);
  const miss = total - have;
  const isReady = miss === 0;
  const pct = total === 0 ? 1 : have / total;
  const r = 20,
    c = 2 * Math.PI * r;

  const cardStyle = {
    transform: [
      { translateX: isTop ? pan.x : 0 },
      { translateY: isTop ? pan.y : 0 },
      { translateY: index * 10 },
      { scale: 1 - index * 0.045 },
      { rotate: isTop ? rotate : '0deg' },
    ],
    zIndex: 10 - index,
    opacity: index > 2 ? 0 : 1,
  };

  return (
    <Animated.View
      style={[styles.card, cardStyle, isReady && styles.cardReady]}
      {...(isTop ? panResponder.panHandlers : {})}
    >
      <View style={styles.topRow}>
        <View style={styles.emojiBadge}>
          <Text style={{ fontSize: 28 }}>{recipe.emoji}</Text>
        </View>
        <View style={styles.ring}>
          <Svg width={52} height={52} viewBox="0 0 52 52">
            <Circle cx={26} cy={26} r={r} stroke={COLORS.border} strokeWidth={5} fill="none" />
            <Circle
              cx={26}
              cy={26}
              r={r}
              stroke={isReady ? COLORS.spice : COLORS.herb}
              strokeWidth={5}
              fill="none"
              strokeDasharray={`${c}, ${c}`}
              strokeDashoffset={c - pct * c}
              strokeLinecap="round"
              rotation="-90"
              origin="26,26"
            />
          </Svg>
          <Text style={[styles.ringLabel, { color: isReady ? COLORS.spiceDark : COLORS.herb }]}>
            {have}/{total}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.name}>{recipe.name}</Text>
        <Text style={styles.meta}>
          {recipe.time} min · Serves {recipe.servings} · {recipe.difficulty}
        </Text>
        <View style={styles.tagRow}>
          {recipe.tags.map((t) => (
            <View key={t} style={styles.chip}>
              <Text style={styles.chipText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.badge, isReady ? styles.badgeReady : styles.badgeNeed]}>
        <Text style={[styles.badgeText, isReady ? { color: '#fff' } : { color: COLORS.needText }]}>
          {isReady ? '✓ Ready to cook now' : `Needs ${miss} item${miss > 1 ? 's' : ''}`}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    left: 0, right: 0, top: 0, bottom: 0,
    borderRadius: RADII.xl,
    backgroundColor: COLORS.paper,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 22,
    justifyContent: 'space-between',
    ...SHADOW,
  },
  cardReady: { borderColor: COLORS.spiceLight },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  emojiBadge: {
    width: 56, height: 56, borderRadius: 18,
    backgroundColor: COLORS.turmericLight,
    alignItems: 'center', justifyContent: 'center',
  },
  ring: { width: 52, height: 52, alignItems: 'center', justifyContent: 'center' },
  ringLabel: { position: 'absolute', fontSize: 11, fontWeight: '800' },
  name: { fontFamily: 'Fraunces_600SemiBold', fontSize: 23, color: COLORS.ink, marginTop: 14, marginBottom: 2 },
  meta: { fontSize: 12.5, color: COLORS.muted, fontWeight: '700' },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 12 },
  chip: { backgroundColor: COLORS.herbLight, borderRadius: RADII.pill, paddingVertical: 5, paddingHorizontal: 10 },
  chipText: { fontSize: 11.5, fontWeight: '800', color: COLORS.herb },
  badge: { alignSelf: 'flex-start', borderRadius: RADII.pill, paddingVertical: 6, paddingHorizontal: 12 },
  badgeReady: { backgroundColor: COLORS.spice },
  badgeNeed: { backgroundColor: COLORS.turmericLight },
  badgeText: { fontSize: 12, fontWeight: '800' },
});
