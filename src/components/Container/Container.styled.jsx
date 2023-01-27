import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spacing(120)};
  padding-inline: ${({ theme }) => theme.spacing(5)};
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.spacing(192)};
    padding-inline: ${({ theme }) => theme.spacing(8)};
  }

  ${({ theme }) => theme.media.desktop} {
    max-width: ${({ theme }) => theme.spacing(320)};
    padding-inline: ${({ theme }) => theme.spacing(4)};
  }
`;
