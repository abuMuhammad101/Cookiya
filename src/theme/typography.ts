import type { TypographyScale } from './types';

const display = {
  fontSize: 32,
  fontWeight: '700' as const,
  lineHeight: 40,
  letterSpacing: -0.5,
};

const heading = {
  fontSize: 24,
  fontWeight: '700' as const,
  lineHeight: 32,
  letterSpacing: -0.3,
};

const title = {
  fontSize: 20,
  fontWeight: '600' as const,
  lineHeight: 28,
};

const subtitle = {
  fontSize: 17,
  fontWeight: '600' as const,
  lineHeight: 24,
};

const body = {
  fontSize: 16,
  fontWeight: '400' as const,
  lineHeight: 24,
};

const bodySmall = {
  fontSize: 14,
  fontWeight: '400' as const,
  lineHeight: 20,
};

const caption = {
  fontSize: 12,
  fontWeight: '400' as const,
  lineHeight: 16,
};

const button = {
  fontSize: 16,
  fontWeight: '600' as const,
  lineHeight: 20,
  letterSpacing: 0.2,
};

const tabLabel = {
  fontSize: 12,
  fontWeight: '500' as const,
  lineHeight: 16,
};

export const typography: TypographyScale = {
  display,
  heading,
  title,
  subtitle,
  body,
  bodySmall,
  caption,
  button,
  tabLabel,

  /** @deprecated Use display */
  h1: display,
  /** @deprecated Use heading */
  h2: heading,
};
