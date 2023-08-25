import styled from "styled-components";

export const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2em;
  @media (min-width: ${({ theme }) => theme.desktop}),
    (min-width: ${({ theme }) => theme.tablet}) {
    img {
      width: 30%;
    }
    a {
      font-size: 1.5em;
    }
  }
  h1 {
    font-size: 2em;
    margin-top: 1.5;
    color: ${({ theme }) => theme.colors.red};
  }

  p {
    color: gray;
  }
  .message {
    color: ${({ theme }) => theme.colors.black};
  }
  .link {
    border: 1px solid ${({ theme }) => theme.colors.red};
    font-size: 1.5em;
    text-align: center;
    padding: 0.5em;
    width: 100%;
  }
`;
