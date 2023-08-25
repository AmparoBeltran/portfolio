import styled from "styled-components";

export const ProjectDetailStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3em;

  .box {
    display: flex;
    flex-direction: column;
    gap: 4em;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      flex-direction: row;
      align-items: flex-end;
      gap: 0;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 2.5em;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      align-items: flex-end;
      text-align: right;
      padding-inline: 4em;
      margin-bottom: 4em;
    }

    .title {
      display: flex;
      align-items: center;

      h1 {
        font-size: 2em;
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
    p {
      font-size: 1.2em;
      line-height: 1.5;
      font-weight: 100;
      @media (min-width: ${({ theme }) => theme.desktop}),
        (min-width: ${({ theme }) => theme.tablet}) {
        font-size: 1.5em;
      }
    }
    a {
      font-size: 1.5em;
    }
  }

  h3 {
    font-size: 1.5em;
  }
  .projects {
    display: flex;
    margin: 3em;
  }
  .nextProject,
  .prevProject {
    display: flex;
    align-items: center;
    padding: 4em;
    gap: 2em;
    padding: 0;
    gap: 1em;

    img {
      width: 60%;
      @media (min-width: ${({ theme }) => theme.tablet}) {
        width: 40%;
      }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        width: 15%;
      }
    }
  }
  .nextProject {
    justify-content: flex-end;
  }

  /* .arrow, */
  .arrow:before {
    position: absolute;
    left: 50%;
  }

  .arrow {
    width: 40px;
    height: 40px;
    top: 50%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(314deg);
    border-left: none;
    border-top: none;
    border-right: 2px black solid;
    border-bottom: 2px black solid;
    margin: unset;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      width: 20px;
      height: 20px;
    }
  }

  .arrow-left {
    -webkit-transform: rotate(133deg);
  }

  .arrow:before {
    content: "";
    width: 20px;
    height: 20px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px black solid;
    border-bottom: 1px black solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      width: 10px;
      height: 10px;
    }
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(30px, 30px);
    }
  }
`;
