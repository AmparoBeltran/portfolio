import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 2em;
  a {
    margin: 3em 0;
  }
  @media (min-width: ${({ theme }) => theme.tablet}), {
    margin-block: 4em;
    img {
      margin-inline: auto;
      width: 60%;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    img {
      width: 30%;
    }
  }
`;
