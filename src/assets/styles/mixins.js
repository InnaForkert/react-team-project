const { css } = require('styled-components');

export const container = css`
  max-width: 480px;
  padding-inline: 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-inline: 32px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding-inline: 16px;
  } ;
`;

export const device = {
  mobileOnly: '(max-width: 479.98px)',
  mobile: '(max-width: 767.98px)',
  tablet: '(min-width: 768px) and (max-width: 1199.98px)',
  desktop: '(min-width: 1200px)',
};
