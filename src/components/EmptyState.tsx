import type { ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { components, spacing } from '../theme';

export interface EmptyStateProps {
  title: string;
  description?: string;
  emoji?: string;
  icon?: ReactNode;
  action?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function EmptyState({ title, description, emoji, icon, action, style }: EmptyStateProps) {
  return (
    <View
      accessibilityRole="text"
      style={[components.emptyState, style]}
    >
      {icon ?? (emoji ? <Text style={styles.emoji}>{emoji}</Text> : null)}
      <Text style={components.emptyStateTitle}>{title}</Text>
      {description ? (
        <Text style={components.emptyStateDescription}>{description}</Text>
      ) : null}
      {action ? <View style={styles.action}>{action}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  emoji: {
    fontSize: 38,
    lineHeight: 44,
    marginBottom: spacing.xs,
  },
  action: {
    marginTop: spacing.lg,
  },
});
