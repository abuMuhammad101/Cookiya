import type { ColorPalette, ComponentStyles } from './types';
import { borderRadius } from './borderRadius';
import { createShadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

export function createComponentStyles(palette: ColorPalette): ComponentStyles {
  const shadows = createShadows(palette);

  return {
    screenContainer: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: spacing.lg,
    },

    sectionHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.md,
    },

    sectionHeader: {
      ...typography.title,
      color: palette.textPrimary,
    },

    card: {
      backgroundColor: palette.card,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      borderWidth: 1,
      borderColor: palette.borderLight,
      ...shadows.low,
    },

    primaryButton: {
      backgroundColor: palette.primary,
      borderRadius: borderRadius.pill,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xxl,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 48,
      ...shadows.low,
    },

    primaryButtonText: {
      ...typography.button,
      color: palette.textInverse,
    },

    secondaryButton: {
      backgroundColor: palette.secondary,
      borderRadius: borderRadius.pill,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xxl,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 48,
    },

    secondaryButtonText: {
      ...typography.button,
      color: palette.textPrimary,
    },

    outlinedButton: {
      backgroundColor: 'transparent',
      borderRadius: borderRadius.pill,
      borderWidth: 1.5,
      borderColor: palette.primary,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xxl,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 48,
    },

    outlinedButtonText: {
      ...typography.button,
      color: palette.primary,
    },

    input: {
      backgroundColor: palette.surface,
      borderRadius: borderRadius.md,
      borderWidth: 1,
      borderColor: palette.border,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      minHeight: 48,
    },

    inputText: {
      ...typography.body,
      color: palette.textPrimary,
    },

    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: palette.surface,
      borderRadius: borderRadius.pill,
      borderWidth: 1,
      borderColor: palette.border,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      minHeight: 44,
      gap: spacing.sm,
    },

    searchBarText: {
      ...typography.body,
      color: palette.textPrimary,
      flex: 1,
    },

    chip: {
      backgroundColor: palette.surface,
      borderRadius: borderRadius.pill,
      borderWidth: 1,
      borderColor: palette.border,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.md,
      alignSelf: 'flex-start',
    },

    chipText: {
      ...typography.bodySmall,
      color: palette.textSecondary,
      fontWeight: '500',
    },

    chipSelected: {
      backgroundColor: palette.primaryLight + '20',
      borderRadius: borderRadius.pill,
      borderWidth: 1,
      borderColor: palette.primary,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.md,
      alignSelf: 'flex-start',
    },

    chipSelectedText: {
      ...typography.bodySmall,
      color: palette.primary,
      fontWeight: '600',
    },

    tag: {
      backgroundColor: palette.accentLight + '25',
      borderRadius: borderRadius.sm,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      alignSelf: 'flex-start',
    },

    tagText: {
      ...typography.caption,
      color: palette.accentDark,
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
  };
}
