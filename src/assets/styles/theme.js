export const device = {
  mobileOnly: '(max-width: 479.98px)',
  mobile: '(max-width: 767.98px)',
  tablet: '(min-width: 768px) and (max-width: 1199.98px)',
  desktop: '(min-width: 1200px)',
};

export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '000000',
    grey: '#BDBDBD',
    accentBlue: '#4A56E2',
    accentGreen: '#24CCA7',
    accentPink: '#FF6596',
    background: '#E7EAF2',
  },
  fonts: {
    primary: 'Circe, sans serif',
    secondary: 'Poppins, sans serif',
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
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  media: {
    mobile: `@media screen and ${device.mobile}`,
    tablet: `@media screen and ${device.tablet}`,
    desktop: `@media screen and ${device.desktop}`,
    mobileOnly: `@media screen and ${device.mobileOnly}`,
  },
});
