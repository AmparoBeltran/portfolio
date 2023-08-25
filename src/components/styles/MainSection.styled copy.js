import styled from "styled-components";

export const MainSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  img {
    width: 80%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 40%;
    }
  }
  .braquets-container {
    display: flex;
    gap: 5em;
    position: relative;
    top: 3em;
    z-index: -1;
    @media (min-width: ${({ theme }) => theme.desktop}),
      (min-width: ${({ theme }) => theme.tablet}) {
      top: 7em;
    }
    img {
      width: 100%;
    }
  }

  .skills-container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .skills {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0.5em;
    bottom: 0;
    gap: 3em;

    span {
      font-size: 0.8em;
      line-height: 1;
      @media (min-width: ${({ theme }) => theme.desktop}),
        (min-width: ${({ theme }) => theme.tablet}) {
        font-size: 2em;
      }
    }
  }

  .skills .smooth {
    animation: smooth-skill 2s linear;
  }

  @keyframes smooth-skill {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
