import styled from "styled-components";

export const SlidePortfolioSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4em;
  margin-top: 6em;
  @media (min-width: ${({ theme }) => theme.desktop}),
    (min-width: ${({ theme }) => theme.tablet}) {
    gap: 5em;
    margin-top: 8em;
    max-width: 400px;
  }

  h1.projects-type {
    text-transform: uppercase;
    color: white;
    background-color: ${({ theme }) => theme.colors.red};
    line-height: 2em;
    padding-inline: 1em;
  }

  .title {
    display: flex;
    align-items: center;

    h1 {
      font-size: 2em;

      @media (min-width: ${({ theme }) => theme.desktop}),
        (min-width: ${({ theme }) => theme.tablet}) {
      }
      font-size: 2.5em;
    }

    h3 {
      font-size: 1.3em;
      @media (min-width: ${({ theme }) => theme.desktop}),
        (min-width: ${({ theme }) => theme.tablet}) {
        font-size: 2em;
      }
    }
    hr {
      margin: 0;
      width: 50px;
      height: 5px;
      background-color: #be1622;
      border: none;
      transform: rotate(90deg);
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 3.5em;
    @media (min-width: ${({ theme }) => theme.desktop}),
      (min-width: ${({ theme }) => theme.tablet}) {
      height: 100%;
      align-items: center;
      gap: 3em;
      img {
        width: 50%;
      }
      span > img {
        width: 80%;
      }

      a > img {
        margin-inline: auto;
      }
    }

    .swiper {
      width: 85vw;
      max-width: 400px;
      aspect-ratio: 6/7;

      @media (min-width: ${({ theme }) => theme.desktop}),
        (min-width: ${({ theme }) => theme.tablet}) {
        aspect-ratio: 200/140;
      }
    }
  }

  .slide-indicators {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    border: 1px solid ${({ theme }) => theme.colors.red};
    border-radius: 50px;
    width: 15px;
    height: 15px;
    background-color: transparent;

    &.swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3em;
    height: 100%;
    @media (min-width: ${({ theme }) => theme.desktop}),
      (min-width: ${({ theme }) => theme.tablet}) {
      gap: 3em;
      max-width: 700px;
      height: 60%;
      p {
        font-size: 1.5em;
        line-height: 1.5;
        font-weight: 100;
      }
    }
    .project-buttons {
      display: flex;
      justify-content: space-evenly;
      font-size: 1.5em;
      @media (min-width: ${({ theme }) => theme.desktop}),
        (min-width: ${({ theme }) => theme.tablet}) {
        justify-content: flex-start;
        gap: 3em;
        margin-top: auto;
      }
    }
  }
`;
