import styled from "styled-components";

export const TecnologiesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    h3 {
      font-size: 1.5em;
    }
  }

  .icons {
    display: flex;
    gap: 0.5em;
  }
`;
