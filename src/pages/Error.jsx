import { useRouteError } from "react-router-dom";
import { ErrorStyled } from "../components/styles/ErrorPage.styled";
import { ExplodingBtn } from "../components/styles/ExplodingBtn.styled";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorStyled>
      <img src="/images/error.svg" alt="" />
      <h1>Oops!</h1>
      <p className="message">
        Sorry, we couldn't find the page you are looking for.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <ExplodingBtn reversed={true} width={110} height={40}>
        <a href="/">Home</a>
      </ExplodingBtn>
    </ErrorStyled>
  );
}
