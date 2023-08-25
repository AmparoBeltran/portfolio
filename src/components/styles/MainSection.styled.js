import styled from "styled-components";

export const MainSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  img {
    width: 255px;
    margin-top: -3.2em;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      width: 400px;
      margin-top: -5em;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 416px;
    }
  }
  .braquets-container {
    display: flex;
    gap: 3em;
    margin-top: 3em;
    width: 100%;
    max-width: 420px;
    z-index: -1;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      gap: calc(4em + 3vw);
      /* max-width: 620px; */
      max-width: ${({ theme }) => `calc(${theme.tablet} - 12em + 4vw)`};
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      gap: 8em;
      max-width: 768px;
    }
  }

  .skills-container {
    display: flex;
    justify-content: center;
    text-align: center;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(190, 23, 34, 1) 0%,
      rgba(190, 23, 34, 1) 20%,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 1) 80%,
      rgba(190, 23, 34, 1) 80%,
      rgba(190, 23, 34, 1) 100%
    );
    padding-block: 1em;
    padding-inline: 1em;
    width: 100%;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      padding-block: 1.4em;
      padding-inline: 1.4em;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      padding-block: 1.5em;
      padding-inline: 1.5em;
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    background-color: white;
    justify-content: center;
    min-height: 110px;

    @media (min-width: ${({ theme }) => theme.desktop}),
      (min-width: ${({ theme }) => theme.tablet}) {
      min-height: 196px;
    }
    span {
      font-size: 1.2em;
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
