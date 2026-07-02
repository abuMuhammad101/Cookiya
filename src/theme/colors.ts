import type { ColorPalette } from './types';

/**
 * Warm terracotta and saffron tones rooted in South Asian kitchens,
 * paired with sage accents for a fresh, internationally modern feel.
 */
export const lightColors: ColorPalette = {
  primary: '#C2572B',
  primaryLight: '#E8784A',
  primaryDark: '#9A4422',

  secondary: '#D4A056',
  secondaryLight: '#E8BE78',
  secondaryDark: '#B08040',

  accent: '#5C8A65',
  accentLight: '#7BA682',
  accentDark: '#456B4D',

  background: '#FAF7F2',
  surface: '#F3EDE4',
  card: '#FFFFFF',

  success: '#3A8F6E',
  successLight: '#E6F4EE',
  warning: '#D4920A',
  warningLight: '#FEF5E4',
  error: '#C4432B',
  errorLight: '#FCEEEA',

  border: '#E5DDD2',
  borderLight: '#F0EBE3',

  textPrimary: '#1A1614',
  textSecondary: '#5C534A',
  muted: '#9C9288',
  textInverse: '#FAF7F2',
  overlay: 'rgba(26, 22, 20, 0.45)',

  // Legacy aliases — prefer semantic tokens above
  text: '#1A1614',
  tabActive: '#C2572B',
  tabInactive: '#9C9288',
};

export const darkColors: ColorPalette = {
  primary: '#E8784A',
  primaryLight: '#F09868',
  primaryDark: '#C2572B',

  secondary: '#E8BE78',
  secondaryLight: '#F2D49A',
  secondaryDark: '#D4A056',

  accent: '#7BA682',
  accentLight: '#96BC9C',
  accentDark: '#5C8A65',

  background: '#1A1614',
  surface: '#252019',
  card: '#2E2820',

  success: '#4DA882',
  successLight: '#1E3D30',
  warning: '#E8A838',
  warningLight: '#3D2E14',
  error: '#E06050',
  errorLight: '#3D2018',

  border: '#3D3630',
  borderLight: '#322C26',

  textPrimary: '#FAF7F2',
  textSecondary: '#B8AEA2',
  muted: '#7A7168',
  textInverse: '#1A1614',
  overlay: 'rgba(0, 0, 0, 0.6)',

  text: '#FAF7F2',
  tabActive: '#E8784A',
  tabInactive: '#7A7168',
};

/** Active color palette. Swap to darkColors when dark mode is enabled. */
export const colors = lightColors;
