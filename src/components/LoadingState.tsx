import { ActivityIndicator, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, components, spacing, typography } from '../theme';

export interface LoadingStateProps {
  message?: string;
  fullScreen?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function LoadingState({ message, fullScreen = false, style }: LoadingStateProps) {
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={message ?? 'Loading'}
      style={[fullScreen ? styles.fullScreen : styles.inline, style]}
    >
      <ActivityIndicator color={colors.primary} size="large" />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    ...components.screenContainer,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  inline: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl,
  },
  message: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.md,
    textAlign: 'center',
  },
});
