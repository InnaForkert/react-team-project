import styled from 'styled-components';

import img from 'assets/images/login_page.svg'

export const Login = styled.main`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1.5;

  ${({ theme }) => theme.media.tabletFrom} {
    min-height: 1024px;
  }

  ${({ theme }) => theme.media.desktop} {
    min-height: 720px;

    &::after{
    content: "";
    position: fixed;
    top: 0;
    right: 0;

    width: calc((100vw - 1280px)/2 + 731px);
    height: 100vh;

    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
  }
`;

export const Title = styled.h1`

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;

  ${({ theme }) => theme.media.mobileAll} {
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
    margin: 60px 150.74px 50px 98px;

    min-width: 487.26px;
    min-height: 250px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    background-image: url(${img});
    background-size: 260.26px 250px;
    background-repeat: no-repeat;
  }
  ${({ theme }) => theme.media.desktop} {
    margin: 150px 37.8px 77.5px 60px;

    min-width: 435.2px;
    min-height: 492.5px;

    align-items: flex-end;
    justify-content: center;

    background-size: 435.2px 419.5px;
  }
`
