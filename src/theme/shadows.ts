import type { ColorPalette, ShadowScale } from './types';

export function createShadows(palette: ColorPalette): ShadowScale {
  return {
    low: {
      shadowColor: palette.textPrimary,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.06,
      shadowRadius: 3,
      elevation: 1,
    },
    medium: {
      shadowColor: palette.textPrimary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    high: {
      shadowColor: palette.textPrimary,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.14,
      shadowRadius: 16,
      elevation: 6,
    },
  };
}
