import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.title};
  margin-bottom: 8px;
  margin-top: 40px;
`;
