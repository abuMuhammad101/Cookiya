import { Search } from 'lucide-react-native';
import {
  StyleSheet,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';

import { colors, components, iconSizes } from '../theme';

export interface SearchBarProps extends Pick<TextInputProps, 'value' | 'onChangeText' | 'onSubmitEditing' | 'autoFocus'> {
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}

export function SearchBar({
  placeholder = 'Search…',
  value,
  onChangeText,
  onSubmitEditing,
  autoFocus,
  style,
  accessibilityLabel = 'Search',
}: SearchBarProps) {
  return (
    <View style={[components.searchBar, style]} accessibilityRole="search">
      <Search
        color={colors.textSecondary}
        size={iconSizes.md}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      />
      <TextInput
        accessibilityLabel={accessibilityLabel}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        returnKeyType="search"
        style={[components.searchBarText, styles.input]}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        autoFocus={autoFocus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 0,
    minHeight: 44,
  },
});
