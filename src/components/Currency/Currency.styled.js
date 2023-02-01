import styled from 'styled-components';
import line from '../../assets/images/line.svg';

export const TableContainer = styled.div`
  position: relative;
  height: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-repeat: no-repeat, no-repeat;
  background-image: url(${line});
  background-position: bottom;
  border-radius: 30px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.accentBlue};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 174px;
  overflow: hidden;
  ${({ theme }) => theme.media.mobileFrom} {
    width: 440px;
  }
  ${({ theme }) => theme.media.tabletFrom} {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    margin-left: auto;
    margin-bottom: 20px;
    margin-top: 32px;
    transform: none;
    width: 336px;
    height: 182px;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
  ${({ theme }) => theme.media.desktop} {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    margin-left: 0;
    margin-right: auto;
    width: 393px;
    height: 331px;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 174px;
  ${({ theme }) => theme.media.mobileFrom} {
    width: 440px;
  }
  ${({ theme }) => theme.media.tabletFrom} {
    width: 336px;
  }
  ${({ theme }) => theme.media.desktop} {
    width: 393px;
  }
`;

export const TableHead = styled.thead`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: rgba(255, 255, 255, 0.2);
  height: 50px;
  ${({ theme }) => theme.media.desktop} {
    height: 60px;
  }
`;
export const TableRow = styled.tr``;
export const Th = styled.th`
  padding: 12px;
  ${({ theme }) => theme.media.desktop} {
    padding: 16px 35px;
  }
`;
export const TableBody = styled.tbody`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Td = styled.td``;

export const Title = styled.h1`
  display: none;
`;
