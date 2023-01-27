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
