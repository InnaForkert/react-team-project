import styled from 'styled-components';
import CurrencyVector from '../../assets/images/CurrencyVector.svg'

export const TableContainer = styled.div`
font-size: ${({ theme }) => theme.fontSizes.sm};
background-repeat: no-repeat, no-repeat;
background-image: url(${CurrencyVector});
background-position: bottom;
border-radius: 30px;
text-align: center;
font-family: ${({ theme }) => theme.fonts.primary};
background-color: ${({ theme }) => theme.colors.accentBlue};
color: ${({ theme }) => theme.colors.white};
width: 280px;
height: 174px;
 ${({ theme }) => theme.media.tabletFrom} {
  width: 336px;
  height: 182px;
 }
   ${({ theme }) => theme.media.desktop} {
     width: 393px;
     height: 331px;
    }
`
export const Table = styled.table`
border-collapse: collapse;
width: 280px;
height: 174px;
 ${({ theme }) => theme.media.tabletFrom} {
  width: 336px;

 }
   ${({ theme }) => theme.media.desktop} {
     width: 393px;
     
    }
`

export const TableHead = styled.thead`
font-weight: ${({ theme }) => theme.fontWeight.bold};
font-size: ${({ theme }) => theme.fontSizes.md};
height: 50px;
 ${({ theme }) => theme.media.desktop} {
  padding: 60px;
    }

`
export const TableRow = styled.tr`
line-height: 30px;
`
export const Th = styled.th`
padding: 12px;
 ${({ theme }) => theme.media.desktop} {
  padding: 16px;
    }

`
export const TableBody = styled.tbody`
font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const Td = styled.td`

`