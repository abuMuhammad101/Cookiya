import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { components } from '../theme';

export interface IngredientChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function IngredientChip({ label, selected = false, onPress, style }: IngredientChipProps) {
  const isInteractive = Boolean(onPress);

  const content = (
    <Text style={selected ? components.chipSelectedText : components.ingredientChipText}>
      {label}
    </Text>
  );

  if (!isInteractive) {
    return (
      <View style={[selected ? components.chipSelected : components.ingredientChip, style]}>
        {content}
      </View>
    );
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [
        selected ? components.chipSelected : components.ingredientChip,
        pressed && styles.pressed,
        style,
      ]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
});
