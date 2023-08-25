import styled from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3em;
  font-size: min(3.9vw, 14px);
  @media (min-width: ${({ theme }) => theme.desktop}),
    (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 2em;
  }

  img {
    width: 70%;
  }
`;
