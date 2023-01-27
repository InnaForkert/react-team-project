import styled from 'styled-components';

const setBgColor = props => (props.hasAccent ? `#24CCA7` : `#ffffff`);

const setColor = props => (props.hasAccent ? `#ffffff` : `#4A56E2`);

const setBorder = props => (props.hasAccent ? `#24CCA7` : `#4A56E2`);

export const RoundBtn = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};

  display: inline-block;
  text-transform: uppercase;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  /* min-width: ${({ theme }) => theme.spacing(70)};
  max-width: ${({ theme }) => theme.spacing(75)}; */
  background-color: ${setBgColor};
  color: ${setColor};
  border: 1px solid ${setBorder};
  /* border-radius: ${({ theme }) => theme.spacing(5)}; */
  border-radius: 50%;
  /* padding-right: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)}; */
  transition: all ${({ theme }) => theme.animation.cubicBezier} 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }
  ${({ theme }) => theme.media.mobileFrom} {
    bottom: ${({ theme }) => theme.spacing(10)};
    right: ${({ theme }) => theme.spacing(10)};
  }
`;
