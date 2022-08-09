import styled from "styled-components";
import { IconButtonPropTypes } from "./";

const backgroundColor: Record<IconButtonPropTypes["variant"], string> = {
  contained: "#0071F3",
  outlined: "#F7FBFF",
  transparent: "transparent",
};

const buttonHoverColor: Record<IconButtonPropTypes["variant"], string> = {
  contained: "#0064D8",
  outlined: "#E4F0FE",
  transparent: "transparent",
};

const buttonActiveColor: Record<IconButtonPropTypes["variant"], string> = {
  contained: "#0058BF",
  outlined: "#BFDAF9",
  transparent: "transparent",
};

const IconButtonRoot = styled.button<IconButtonPropTypes>`
  filter: ${({ disabled }) => (disabled ? "grayscale(1)" : "none")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "unset")};
  width: 40px;
  height: 40px;
  background: ${({ variant }) => backgroundColor[variant]};
  border: ${({ variant }) =>
    variant === "outlined" ? "solid 1px #DAE9FA" : "0px"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s all;
  outline: none;
  &:hover {
    background: ${({ variant }) => buttonHoverColor[variant]};
  }
  &:active {
    background: ${({ variant }) => buttonActiveColor[variant]};
  }
`;

export { IconButtonRoot };
