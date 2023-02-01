import styled from 'styled-components';
import arrow from '../../assets/icons/all_icons/dropdownArrow.svg';

export const Selects = styled.div`
  ${({ theme }) => theme.media.tabletFrom} {
    display: flex;
    justify-content: space-between;
  }
`;

export const TableContainer = styled.div`
  ${({ theme }) => theme.media.tabletFrom} {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    width: 336px;
    display: flex;
    flex-direction: column;
  }
  ${({ theme }) => theme.media.desktop} {
    width: 395px;
    grid-column: 3 / 4;
    grid-row: 2 / 5;
  }
`;

export const Summary = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 20px;
  line-height: calc(24 / 16);
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:last-of-type {
    padding-bottom: 52px;
  }
`;

export const Expense = styled.span`
  color: ${({ theme }) => theme.colors.accentPink};
`;

export const Income = styled.span`
  color: ${({ theme }) => theme.colors.accentGreen};
`;

export const TableHeader = styled.th``;

export const TableBody = styled.tbody`
  display: block;
  width: 100%;
`;

export const TableRow = styled.tr`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  width: 100%;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dcdcdf;
  }
`;

export const TableHead = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
`;

export const THead = styled.thead`
  display: block;
  width: 100%;
`;

export const Table = styled.table`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

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

  ${({ theme }) => theme.media.tabletFrom} {
    padding: 13px 20px;
  }

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

  ${({ theme }) => theme.media.tabletFrom} {
    padding: 13px 16px;
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

  ${({ theme }) => theme.media.tabletFrom} {
    width: 160px;
  }

  ${({ theme }) => theme.media.desktop} {
    width: 180px;
  }

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
  display: flex;
  align-items: center;
  max-width: 180px;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-right: 16px;
    background-color: ${props => props.color};
  }
`;
