import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  gap: 0.5em;

  small {
    margin-top: auto;
  }

  .social-media-links {
    display: flex;
    align-items: center;
    gap: 1em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
  }
`;
