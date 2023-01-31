export const device = {
  mobileOnly: '(max-width: 479.98px)',
  mobile: '(min-width: 480px) and (max-width: 767.98px)',
  mobileAll: '(max-width: 767.98px)',
  mobileFrom: '(min-width: 480px)',
  tablet: '(min-width: 768px) and (max-width: 1279.98px)',
  tabletFrom: '(min-width: 768px)',
  tillDesktop: '(max-width: 1279.98px)',
  desktop: '(min-width: 1280px)',
};

export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#000000',
    grey: '#BDBDBD',
    lightGrey: '#e0e0e0',
    accentBlue: '#4A56E2',
    accentGreen: '#24CCA7',
    accentPink: '#FF6596',
    accentViolet: '#6e78e8',
    background: '#E7EAF2',
  },
  fonts: {
    primary: '"Circe", sans-serif',
    secondary: 'Poppins, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '16px',
    md: '18px',
    lg: '24px',
    title: '30px',
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  shadows: {
    regular: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
    accentGreen: '0px 4px 4px #24cca738, 0px 4px 4px #24cca738',
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  media: {
    mobileOnly: `@media screen and ${device.mobileOnly}`,
    mobile: `@media screen and ${device.mobile}`,
    mobileFrom: `@media screen and ${device.mobileFrom}`,
    mobileAll: `@media screen and ${device.mobileAll}`,
    tablet: `@media screen and ${device.tablet}`,
    tabletFrom: `@media screen and ${device.tabletFrom}`,
    desktop: `@media screen and ${device.desktop}`,
  },
});
