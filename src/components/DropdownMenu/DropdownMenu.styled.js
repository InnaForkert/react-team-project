import styled from 'styled-components';
import arrow from '../../assets/icons/all_icons/dropdownArrow.svg';

export const SelectDate = styled.ul`
  width: 100%;

  position: absolute;
  bottom: 0;
  z-index: 1;
  overflow: hidden;

  border-radius: 30px;
  border: 1px solid black;
  padding-block: 12px;

  background-color: ${({ theme }) => theme.colors.background};
  opacity: 0;
  pointer-events: none;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  transition: opacity 500ms, transform 500ms;

  & li {
    cursor: pointer;
    padding-inline: 20px;
    padding-block: 4px;
    transition: background-color 200ms;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SelectInput = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  width: 100%;

  border-radius: 30px;
  border: 1px solid black;
  padding: 12px 20px 14px;

  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  text-align: left;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: calc(24 / 16);

  transition: border-color 200ms, color 200ms, background-color 200ms;

  &::after {
    content: url(${arrow});
    width: 18px;
    transition: transform 300ms;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 394px;

  &.dropdownShown {
    ${SelectDate} {
      pointer-events: all;
      opacity: 1;
      transform: translateY(calc(100% - 50px));
    }

    & ${SelectInput} {
      border-color: transparent;
      color: transparent;
      background-color: transparent;

      &::after {
        transform: rotate(180deg);
        z-index: 2;
      }
    }
  }
`;

export const ColorRect = styled.td`
  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: ${props => props.color};
  }
`;
