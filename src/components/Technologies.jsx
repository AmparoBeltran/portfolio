import { TecnologiesStyled } from "./styles/Technologies.styled";

export default function Technologies({ icons }) {
  return (
    <TecnologiesStyled>
      <h3>Technologies</h3>
      <div className="icons">
        {icons.map((icon) => (
          <span key={icon}>
            <img src={icon} alt="technology icon" />
          </span>
        ))}
      </div>
    </TecnologiesStyled>
  );
}
