import styled from 'styled-components';
import arrow from '../../assets/icons/all_icons/dropdownArrow.svg';

export const SelectDate = styled.ul`
  width: 100%;

  position: absolute;
  bottom: 0;
  z-index: 1;
  overflow: hidden;

  border-radius: 20px;
  border: 1px solid black;
  padding-block: 12px;

  opacity: 0;
  pointer-events: none;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  transition: opacity 500ms, transform 500ms;

  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);

  & li {
    cursor: pointer;
    padding-inline: 20px;
    padding-block: 4px;
    background-color: transparent;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.accentPink};
    }
  }
`;

export const SelectInput = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  width: 100%;

  border: 1px solid black;
  padding: 12px 20px 14px;

  cursor: pointer;

  text-align: left;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: calc(24 / 16);
  width: 100%;
  padding: 0 8px 7px 52px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  color: #bdbdbd;
  transition: border-color 200ms, color 200ms, background-color 200ms;

  &.selected {
    color: #000000;
  }

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
