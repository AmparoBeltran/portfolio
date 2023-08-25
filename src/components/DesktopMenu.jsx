import ContactBtn from "./ContactBtn";
import { DesktopMenuStyled } from "./styles/DesktopMenu.styled";
import { ExplodingBtn } from "./styles/ExplodingBtn.styled";

export default function DesktopMenu() {
  return (
    <DesktopMenuStyled>
      <a href="/projects/development">
        <ExplodingBtn width={150} height={50}>
          Development projects
        </ExplodingBtn>
      </a>
      <hr />
      <a href="/projects/design">
        <ExplodingBtn width={150} height={50}>
          Design projects
        </ExplodingBtn>
      </a>
      <ContactBtn />
      <hr />
      <div className="social-media-links">
        <a href="https://github.com/AmparoBeltran" target="blank">
          <img src="/images/github-social-media.svg" />
        </a>
        <a href="https://www.behance.net/amparobeltran" target="blank">
          <img src="/images/behance-social-media.svg" />
        </a>
        <a href="https://www.linkedin.com/in/amparo-beltran/" target="blank">
          <img src="/images/linkedin-social-media.svg" />
        </a>
      </div>
    </DesktopMenuStyled>
  );
}
