import styled from "styled-components";

export default function ContactBtn() {
  return (
    <ContactBtnStyled target={"_blank"} href="mailto:amparobeltranuk@gmail.com">
      Contact
    </ContactBtnStyled>
  );
}

const ContactBtnStyled = styled.a`
  width: 120px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.colors.red};
    transition: all 250ms ease-in-out;
  }

  &::after {
    height: 2px;
    width: 120px;
    box-shadow: 0 38px ${({ theme }) => theme.colors.red};
  }

  &:hover::before {
    left: -10px;
    box-shadow: 138px 0 transparent;
    background-color: transparent;
  }

  &:hover::after {
    top: -10px;
    box-shadow: 0 58px transparent;
    background-color: transparent;
  }
`;
