import ContactBtn from "./ContactBtn";
import { MobileMenuStyled, Overlay } from "./styles/MobileMenu.styled";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  function handleOpenMenu() {
    setOpen(true);
  }
  function handleCloseMenu() {
    setOpen(false);
  }
  return (
    <MobileMenuStyled>
      {open && <Overlay />}
      <nav className={open ? "open" : ""}>
        {!open && (
          <button onClick={handleOpenMenu}>
            <img src="/images/menu-icon.png" />
          </button>
        )}
        <div className="menu">
          <a href="/projects/development">Development Projects</a>
          <hr />
          <a href="/projects/design">Design projects</a>
          <ContactBtn />

          <div className="social-media-links">
            <a href="https://github.com/AmparoBeltran" target="blank">
              <img src="/images/github-social-media.svg" />
            </a>
            <a href="https://www.behance.net/amparobeltran" target="blank">
              <img src="/images/behance-social-media.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/amparo-beltran/"
              target="blank"
            >
              <img src="/images/linkedin-social-media.svg" />
            </a>
          </div>
        </div>
      </nav>

      {open && (
        <button onClick={handleCloseMenu}>
          <img src="/images/close-btn.png" />
        </button>
      )}
    </MobileMenuStyled>
  );
}
