import styled from "styled-components";
import { ButtonPropTypes } from ".";

const backgroundColor: Record<ButtonPropTypes["variant"], string> = {
  contained: "#0071F3",
  outlined: "#F7FBFF",
  transparent: "transparent",
};

const buttonHoverColor: Record<ButtonPropTypes["variant"], string> = {
  contained: "#0064D8",
  outlined: "#E4F0FE",
  transparent: "transparent",
};

const buttonActiveColor: Record<ButtonPropTypes["variant"], string> = {
  contained: "#0058BF",
  outlined: "#BFDAF9",
  transparent: "transparent",
};

const textColor: Record<ButtonPropTypes["variant"], string> = {
  contained: "#FFFFFF",
  outlined: "#0071F3",
  transparent: "#0071F3",
};

const ButtonRoot = styled.button<ButtonPropTypes>`
  background: ${({ variant }) => backgroundColor[variant]};
  color: ${({ variant }) => textColor[variant]};
  border: ${({ variant }) =>
    variant === "outlined" ? "solid 1px #DAE9FA" : "0px"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s all;
  font-size: 14px;
  outline: none;
  &:hover {
    background: ${({ variant }) => buttonHoverColor[variant]};
  }
  &:active {
    background: ${({ variant }) => buttonActiveColor[variant]};
  }
`;

export { ButtonRoot };
