import { StyleSheet, Text, View } from 'react-native';

import { colors, typography } from '../../theme';

export function KitchenScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitchen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  title: {
    ...typography.h1,
    color: colors.text,
  },
});
