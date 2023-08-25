import styled from "styled-components";

export const DesktopMenuStyled = styled.menu`
  display: none;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4em;
    margin-top: 8em;
  }

  a {
    display: flex;
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    font-size: 1.3em;
    font-weight: 700;
    text-decoration: none;
    padding-inline: 2em;
  }

  hr {
    margin: 2em 0;
    width: 50px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.red};
    border: none;
    transform: rotate(90deg);
  }

  .social-media-links {
    display: flex;
    align-items: center;
  }
`;
