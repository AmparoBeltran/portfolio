import styled from "styled-components";

export const HomeStyled = styled.div`
  @media (min-width: ${({ theme }) => theme.desktop}),
    (min-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 8vw;
    margin-inline: 2em;
    max-width: 945px;
  }
`;
