import styled from "styled-components";

export const Title = styled.h1`
${({ theme }) => theme.media.tabletFrom} {
grid-column: 1 / 2;
grid-row: 3 / 4;
}
${({ theme }) => theme.media.desktop} {
margin-top: 40px;
grid-column: 2 / 3;
grid-row: 1 / 2;
}
`