import type { TextStyle, ViewStyle } from 'react-native';

export interface ColorPalette {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  background: string;
  surface: string;
  card: string;
  success: string;
  successLight: string;
  warning: string;
  warningLight: string;
  error: string;
  errorLight: string;
  border: string;
  borderLight: string;
  textPrimary: string;
  textSecondary: string;
  muted: string;
  textInverse: string;
  overlay: string;
  /** @deprecated Use textPrimary */
  text: string;
  /** @deprecated Use primary */
  tabActive: string;
  /** @deprecated Use muted */
  tabInactive: string;
}

export interface TypographyScale {
  display: TextStyle;
  heading: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
  body: TextStyle;
  bodySmall: TextStyle;
  caption: TextStyle;
  button: TextStyle;
  tabLabel: TextStyle;
  /** @deprecated Use display */
  h1: TextStyle;
  /** @deprecated Use heading */
  h2: TextStyle;
}

export interface SpacingScale {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  huge: number;
  massive: number;
}

export interface BorderRadiusScale {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  pill: number;
  /** @deprecated Use pill */
  full: number;
}

export interface ShadowStyle {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface ShadowScale {
  low: ShadowStyle;
  medium: ShadowStyle;
  high: ShadowStyle;
}

export interface IconSizeScale {
  sm: number;
  md: number;
  lg: number;
}

export interface AnimationScale {
  fast: number;
  normal: number;
  slow: number;
}

export interface ComponentStyles {
  screenContainer: ViewStyle;
  sectionHeader: TextStyle;
  sectionHeaderContainer: ViewStyle;
  card: ViewStyle;
  primaryButton: ViewStyle;
  primaryButtonText: TextStyle;
  secondaryButton: ViewStyle;
  secondaryButtonText: TextStyle;
  outlinedButton: ViewStyle;
  outlinedButtonText: TextStyle;
  input: ViewStyle;
  inputText: TextStyle;
  searchBar: ViewStyle;
  searchBarText: TextStyle;
  chip: ViewStyle;
  chipText: TextStyle;
  chipSelected: ViewStyle;
  chipSelectedText: TextStyle;
  tag: ViewStyle;
  tagText: TextStyle;
}

export interface Theme {
  colors: ColorPalette;
  darkColors: ColorPalette;
  typography: TypographyScale;
  spacing: SpacingScale;
  borderRadius: BorderRadiusScale;
  shadows: ShadowScale;
  iconSizes: IconSizeScale;
  animation: AnimationScale;
  components: ComponentStyles;
}
