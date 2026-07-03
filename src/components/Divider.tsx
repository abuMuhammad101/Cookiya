import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, components, spacing } from '../theme';

export type DividerSpacing = 'none' | 'sm' | 'md' | 'lg';

export interface DividerProps {
  inset?: boolean;
  spacing?: DividerSpacing;
  style?: StyleProp<ViewStyle>;
}

const spacingMap = {
  none: 0,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
} as const;

export function Divider({ inset = false, spacing: dividerSpacing = 'md', style }: DividerProps) {
  const marginVertical = spacingMap[dividerSpacing];

  return (
    <View
      accessibilityRole="none"
      importantForAccessibility="no"
      style={[
        components.divider,
        { marginVertical },
        inset && styles.inset,
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  inset: {
    marginHorizontal: spacing.lg,
  },
});
