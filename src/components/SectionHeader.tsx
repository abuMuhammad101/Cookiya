import type { ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, components, typography } from '../theme';

export interface SectionHeaderProps {
  title: string;
  hint?: string;
  action?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function SectionHeader({ title, hint, action, style }: SectionHeaderProps) {
  const trailing = hint || action ? (
    <View style={styles.trailing}>
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
      {action}
    </View>
  ) : null;

  return (
    <View style={[components.sectionHeaderContainer, style]}>
      <Text accessibilityRole="header" style={components.sectionHeader}>
        {title}
      </Text>
      {trailing}
    </View>
  );
}

const styles = StyleSheet.create({
  trailing: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  hint: {
    ...typography.caption,
    color: colors.textSecondary,
    fontWeight: '600',
  },
});
