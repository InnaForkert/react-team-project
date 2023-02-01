import styled from 'styled-components';

export const TransactionDetails = styled.ul`
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const TransactionDetailsItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 20px 8px;
  font-size: 18px;
  border-left: 5px solid ${props => props.color};

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dcdcdf;
  }
`;

export const TransactionDetailsItemTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const SumText = styled.span`
  color: ${props => props.color};
`;

export const Table = styled.table`
  display: block;
  width: 100%;

  ${({ theme }) => theme.media.desktop} {
    width: 715px;
  }
`;

export const TableBody = styled.tbody`
  display: block;
  width: 100%;
`;

export const TableHead = styled.tr`
  display: grid;
  grid-template-columns: 1.8fr 1.2fr 2.2fr 2.2fr 1.4fr 1.4fr;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px 20px;
  border-radius: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 18px;
`;

export const TableHeader = styled.td`
  &.alignRight {
    text-align: right;
  }
`;

export const TableRow = styled.tr`
  position: relative;

  padding: 16px 20px;

  display: grid;
  grid-template-columns: 1.8fr 1.2fr 2.2fr 2.2fr 1.4fr 1.4fr;
  width: 100%;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dcdcdf;
  }
`;

export const Sum = styled.td`
  text-align: right;
  color: ${props => props.color};
`;

export const Balance = styled.td`
  text-align: right;
`;
