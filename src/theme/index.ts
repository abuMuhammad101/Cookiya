import { animation } from './animation';
import { colors, darkColors, lightColors } from './colors';
import { createComponentStyles } from './components';
import { iconSizes } from './icons';
import { borderRadius } from './borderRadius';
import { createShadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

export type {
  AnimationScale,
  BorderRadiusScale,
  ColorPalette,
  ComponentStyles,
  IconSizeScale,
  ShadowScale,
  ShadowStyle,
  SpacingScale,
  Theme,
  TypographyScale,
} from './types';

export {
  animation,
  borderRadius,
  colors,
  createComponentStyles,
  createShadows,
  darkColors,
  iconSizes,
  lightColors,
  spacing,
  typography,
};

export const shadows = createShadows(colors);
export const components = createComponentStyles(colors);

export const theme = {
  colors,
  darkColors,
  typography,
  spacing,
  borderRadius,
  shadows,
  iconSizes,
  animation,
  components,
};

export default theme;
