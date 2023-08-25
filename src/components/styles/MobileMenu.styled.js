import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  background-color: hsl(0deg 0% 0% / 34%);
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: none;
  }
`;
export const MobileMenuStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  button {
    background-color: transparent;
    border: none;
    position: relative;
    z-index: 2;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
  }

  nav {
    position: relative;

    .menu {
      display: none;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        display: flex;
        gap: 2em;
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.black};
          font-weight: 700;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    hr {
      margin: 2em 0;
      width: 50px;
      height: 5px;
      background-color: ${({ theme }) => theme.colors.red};
      border: none;
      transform: rotate(90deg);
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
  }

  .open {
    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      gap: 2em;
      border: none;
      padding: 4em 0;
      position: fixed;
      right: 2em;
      top: 4.8em;
      width: calc(100vw - 4em);
      z-index: 10;

      a {
        display: flex;
        color: ${({ theme }) => theme.colors.black};
        text-transform: uppercase;
        font-size: 1.3em;
        font-weight: 700;
        text-decoration: none;
        padding-inline: 2em;
      }

      :nth-child(4) {
        margin-top: 3em;
      }
      :nth-child(5) {
        margin-top: 1em;
      }
    }
  }

  .social-media-links {
    display: flex;
    align-items: center;
  }
`;
