import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { components, spacing } from '../theme';

export interface ScreenContainerProps {
  children: ReactNode;
  scrollable?: boolean;
  safeArea?: boolean;
  padded?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export function ScreenContainer({
  children,
  scrollable = false,
  safeArea = true,
  padded = true,
  contentContainerStyle,
  style,
}: ScreenContainerProps) {
  const containerStyle = [
    components.screenContainer,
    !padded && styles.unpadded,
    style,
  ];

  const scrollContentStyle = [
    styles.scrollContent,
    contentContainerStyle,
  ];

  const content = scrollable ? (
    <ScrollView
      contentContainerStyle={scrollContentStyle}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    children
  );

  if (safeArea) {
    return (
      <SafeAreaView edges={['left', 'right']} style={containerStyle}>
        {content}
      </SafeAreaView>
    );
  }

  return <View style={containerStyle}>{content}</View>;
}

const styles = StyleSheet.create({
  unpadded: {
    paddingHorizontal: 0,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
});
