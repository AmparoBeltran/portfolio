import styled from "styled-components";

export const ExplodingBtn = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    background-color: ${({ reversed, theme }) =>
      reversed ? theme.colors.red : "transparent"};
    transition: all 250ms ease-in-out;
  }

  &::before {
    width: 2px;
    height: ${({ height }) => height}px;
    box-shadow: ${({ width }) => width - 2}px 0
      ${({ reversed, theme }) => (reversed ? theme.colors.red : "transparent")};
  }

  &::after {
    height: 2px;
    width: ${({ width }) => width}px;
    box-shadow: 0 ${({ height }) => height - 2}px
      ${({ reversed, theme }) => (reversed ? theme.colors.red : "transparent")};
  }

  &:hover::before {
    left: -10px;
    box-shadow: ${({ width }) => width + 18}px 0
      ${({ reversed, theme }) => (!reversed ? theme.colors.red : "transparent")};
    background-color: ${({ reversed, theme }) =>
      !reversed ? theme.colors.red : "transparent"};
  }

  &:hover::after {
    top: -10px;
    box-shadow: 0 ${({ height }) => height + 18}px
      ${({ reversed, theme }) => (!reversed ? theme.colors.red : "transparent")};
    background-color: ${({ reversed, theme }) =>
      !reversed ? theme.colors.red : "transparent"};
  }
`;
