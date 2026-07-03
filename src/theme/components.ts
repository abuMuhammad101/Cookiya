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
      paddingHorizontal: spacing.xl,
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
      backgroundColor: palette.card,
      borderRadius: borderRadius.pill,
      borderWidth: 1,
      borderColor: palette.border,
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

    iconButton: {
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius.pill,
    },

    divider: {
      height: 1,
      backgroundColor: palette.border,
    },

    emptyState: {
      padding: spacing.huge,
      alignItems: 'center',
    },

    emptyStateTitle: {
      ...typography.subtitle,
      color: palette.textPrimary,
      textAlign: 'center',
      marginTop: spacing.sm,
      marginBottom: spacing.xs,
    },

    emptyStateDescription: {
      ...typography.bodySmall,
      color: palette.textSecondary,
      textAlign: 'center',
    },

    recipeCard: {
      backgroundColor: palette.card,
      borderRadius: borderRadius.lg,
      borderWidth: 1,
      borderColor: palette.border,
      padding: spacing.md + 2,
      gap: spacing.sm,
      ...shadows.low,
    },

    recipeCardTitle: {
      ...typography.bodySmall,
      fontWeight: '600',
      color: palette.textPrimary,
      lineHeight: 20,
    },

    recipeCardMeta: {
      ...typography.caption,
      color: palette.textSecondary,
      fontWeight: '500',
    },

    categoryChip: {
      backgroundColor: palette.card,
      borderRadius: borderRadius.pill,
      borderWidth: 1,
      borderColor: palette.border,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg - 1,
      minHeight: 44,
      justifyContent: 'center',
    },

    categoryChipSelected: {
      backgroundColor: palette.textPrimary,
      borderColor: palette.textPrimary,
    },

    categoryChipText: {
      ...typography.bodySmall,
      fontWeight: '600',
      color: palette.textSecondary,
    },

    categoryChipTextSelected: {
      color: palette.textInverse,
    },

    ingredientChip: {
      backgroundColor: palette.successLight,
      borderRadius: borderRadius.pill,
      paddingVertical: spacing.xs + 1,
      paddingHorizontal: spacing.sm + 2,
      alignSelf: 'flex-start',
    },

    ingredientChipText: {
      ...typography.caption,
      color: palette.accentDark,
      fontWeight: '600',
    },
  };
}
