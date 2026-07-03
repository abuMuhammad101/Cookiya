import { Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';

import { components } from '../theme';

export interface CategoryChipProps {
  label: string;
  selected?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export function CategoryChip({ label, selected = false, onPress, style }: CategoryChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [
        components.categoryChip,
        selected && components.categoryChipSelected,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text
        style={[
          components.categoryChipText,
          selected && components.categoryChipTextSelected,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },
});
