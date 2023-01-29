import styled from 'styled-components';

import img from 'assets/images/register_page.svg'

export const Registration = styled.main`
  display: flex;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1.5;

  ${({ theme }) => theme.media.tabletFrom} {
    min-height: 1024px;
    flex-direction: column;
  }

  ${({ theme }) => theme.media.desktop} {
    min-height: 720px;
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;

  ${({ theme }) => theme.media.mobileOnly} {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  ${({ theme }) => theme.media.tabletFrom} {
  margin: 60px 137px 50px 98px;

  min-width: 501px;
  min-height: 250px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-image: url(${img});
  background-size: 274px 250px;
  background-repeat: no-repeat;
}

  ${({ theme }) => theme.media.desktop} {
    margin: 153px 30.9px 77.5px 50px;

    min-width: 452.1px;
    min-height: 489.5px;

    align-items: flex-end;
    justify-content: center;

    background-size: 452.1px 412.6px;
  }
`;
