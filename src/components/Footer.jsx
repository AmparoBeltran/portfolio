import { FooterStyled } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="social-media-links">
        <a href="https://github.com/AmparoBeltran" target="blank">
          <img width={24} height={24} src="/images/github-social-media.svg" />
        </a>
        <a href="https://www.behance.net/amparobeltran" target="blank">
          <img width={24} height={24} src="/images/behance-social-media.svg" />
        </a>
        <a href="https://www.linkedin.com/in/amparo-beltran/" target="blank">
          <img width={24} height={24} src="/images/linkedin-social-media.svg" />
        </a>
      </div>
      <small>Ⓒ Amparo Beltran 2023 | READING, UK</small>
    </FooterStyled>
  );
}
