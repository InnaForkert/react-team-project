import styled from "styled-components";

export const Title = styled.div`
 ${({ theme }) => theme.media.desktop}
 grid-column: 1 / 2;
 grid-row: 2 / 3;
`
export const BalanceContainer = styled.div`
${({ theme }) => theme.media.tabletFrom} {
grid-area: bal;
grid-column: 1 / 2;
grid-row: 2 / 3;
}
${({ theme }) => theme.media.desktop} {
 grid-column: 1 / 2;
 grid-row: 2 / 3;
}
`