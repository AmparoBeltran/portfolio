import styled from "styled-components";

export const ProjectsGalleryStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6em;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2em;
  }
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    perspective: 500px;
    margin: auto;
    gap: 5em;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      gap: 3em;
    }
  }

  .container .box {
    position: relative;
    width: 275px;
    height: 275px;
    background: #000;
    transition: 0.5s;
    transform-style: preserve-3d;
    overflow: hidden;
    box-shadow: 10px 10px 33px -15px rgba(51, 41, 41, 0.4);
  }
  .container:hover .box {
    transform: none;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      transform: rotateY(25deg);
    }
  }
  .container .box:hover ~ .box {
    transform: none;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      transform: rotateY(-25deg);
    }
  }
  .container .box:hover {
    z-index: 1;
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);

    transform: none;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      transform: rotateY(0deg) scale(1.25);
    }
  }
  .container .box .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .container .box .imgBx:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, hsl(356deg 79% 42% / 90%), #000);
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
    mix-blend-mode: multiply;
  }
  .container .box:hover .imgBx:before {
    opacity: 1;
  }
  .container .box .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container .box .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    padding: 20px;
    align-items: flex-end;
    box-sizing: border-box;
  }
  .container .box .content h1 {
    color: #fff;
    transition: 0.5s;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 20px;
    transform: translateY(200px);
    transition-delay: 0.3s;
  }
  .container .box:hover .content h1 {
    transform: translateY(0px);
  }
  .container .box .content h3 {
    color: #fff;
    transition: 0.5s;
    font-size: 14px;
    transform: translateY(200px);
    transition-delay: 0.4s;
  }
  .container .box:hover .content h3 {
    transform: translateY(0px);
  }
  .container .box .content hr {
    color: #fff;
    transition: 0.5s;
    font-size: 14px;
    transform: translateY(200px);
    transition-delay: 0.35s;
  }
  .container .box:hover .content hr {
    transform: translateY(0px);
  }
`;
