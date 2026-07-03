import { Heart } from 'lucide-react-native';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { borderRadius, colors, components, iconSizes, spacing } from '../theme';
import { IconButton } from './IconButton';

export interface RecipeCardProps {
  emoji: string;
  title: string;
  time: number | string;
  difficulty: string;
  isReady: boolean;
  missingCount?: number;
  isSaved?: boolean;
  onPress: () => void;
  onToggleSave?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function RecipeCard({
  emoji,
  title,
  time,
  difficulty,
  isReady,
  missingCount = 0,
  isSaved = false,
  onPress,
  onToggleSave,
  style,
}: RecipeCardProps) {
  const badgeLabel = isReady ? 'Ready to cook' : `Needs ${missingCount}`;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${title}, ${time} minutes, ${difficulty}, ${badgeLabel}`}
      onPress={onPress}
      style={({ pressed }) => [components.recipeCard, pressed && styles.pressed, style]}
    >
      <View style={styles.header}>
        <Text style={styles.emoji} accessibilityElementsHidden importantForAccessibility="no">
          {emoji}
        </Text>
        {onToggleSave ? (
          <IconButton
            accessibilityLabel={isSaved ? 'Remove from saved' : 'Save recipe'}
            icon={
              <Heart
                color={isSaved ? colors.primary : colors.textSecondary}
                fill={isSaved ? colors.primary : 'transparent'}
                size={iconSizes.md}
              />
            }
            style={styles.heartButton}
            variant="ghost"
            onPress={onToggleSave}
          />
        ) : null}
      </View>

      <Text numberOfLines={2} style={components.recipeCardTitle}>
        {title}
      </Text>

      <Text style={components.recipeCardMeta}>
        {time} min · {difficulty}
      </Text>

      <View style={[styles.badge, isReady ? styles.badgeReady : styles.badgeNeed]}>
        <Text style={[styles.badgeText, isReady ? styles.badgeTextReady : styles.badgeTextNeed]}>
          {badgeLabel}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  emoji: {
    fontSize: 26,
    lineHeight: 32,
  },
  heartButton: {
    width: 44,
    height: 44,
    marginTop: -spacing.xs,
    marginRight: -spacing.xs,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: borderRadius.pill,
    paddingVertical: spacing.xs - 1,
    paddingHorizontal: spacing.sm,
  },
  badgeReady: {
    backgroundColor: colors.primary,
  },
  badgeNeed: {
    backgroundColor: colors.warningLight,
  },
  badgeText: {
    ...components.recipeCardMeta,
    fontWeight: '700',
    fontSize: 11,
  },
  badgeTextReady: {
    color: colors.textInverse,
  },
  badgeTextNeed: {
    color: colors.primaryDark,
  },
});
