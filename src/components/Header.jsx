import { HeaderStyled } from "./styles/Header.styled";

export default function Header() {
  return (
    <HeaderStyled>
      <a href="/">
        <img src="/images/logo.svg" alt="Amparo Beltran logo" />
      </a>
    </HeaderStyled>
  );
}
