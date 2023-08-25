import { useEffect, useState } from "react";
import { HeroStyled } from "./styles/Hero.styled";
import { MainSectionStyled } from "./styles/MainSection.styled";

let speed = 50;

export default function MainSection() {
  const [skills, setSkills] = useState([]);
  const [typewritten, setTypewritten] = useState("");
  const typewrittenSource = `const updated = [...amparoBeltran, “HTML”, “CSS”, “JavaScript”, “React”];`;

  useEffect(() => {
    if (typewritten.length < typewrittenSource.length) {
      setTimeout(() => {
        setTypewritten((str) => {
          if (str.at(-1) === "”") {
            const lastWord = str.split(" ").at(-1);
            setSkills((skills) => [...skills, lastWord]);
          }

          return str + typewrittenSource.charAt(str.length);
        });
      }, speed);
    }
  }, [typewritten.length, typewrittenSource]);
  return (
    <MainSectionStyled>
      <HeroStyled>
        <span>
          const amparoBeltran = [“Visual design”, “Branding”, “Editorial”];
        </span>
        <span>{typewritten}</span>
      </HeroStyled>
      <div className="braquets-container">
        <div className="skills-container">
          <div className="skills">
            <span>“Visual design”</span>
            <span>“Branding”</span>
            <span>“Editorial”</span>
          </div>
          {/* <img src="/images/square-braquets.svg" alt="square-braquets" /> */}
        </div>
        <div className="skills-container">
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill} className="smooth">
                {skill}
              </span>
            ))}
          </div>
          {/* <img src="/images/square-braquets.svg" alt="square-braquets" /> */}
        </div>
      </div>

      <img src="/images/amparo.png" alt="amparo's profile" />
    </MainSectionStyled>
  );
}

// [“resilient”, “constant”, “reliable”];
