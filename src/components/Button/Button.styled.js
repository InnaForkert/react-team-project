import styled from 'styled-components';

const setBgColor = props => (props.hasAccent ? `#24CCA7` : `#ffffff`);

const setColor = props => (props.hasAccent ? `#ffffff` : `#4A56E2`);

const setBorder = props => (props.hasAccent ? `#24CCA7` : `#4A56E2`);

export const MainButton = styled.button`
  display: inline-block;
  text-transform: uppercase;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSizes.md};
  width: 100%;
  min-width: ${({ theme }) => theme.spacing(70)};
  max-width: ${({ theme }) => theme.spacing(75)};
  background-color: ${setBgColor};
  color: ${setColor};
  border: 1px solid ${setBorder};
  border-radius: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  transition: all ${({ theme }) => theme.animation.cubicBezier} 0s;
  cursor: pointer;
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }

  &:disabled{
    opacity: 0.35;
  }

  ${({ theme }) => theme.media.mobileFrom} {
    min-width: ${({ theme }) => theme.spacing(75)};
  }
`;
