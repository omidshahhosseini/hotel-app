import { ReactElement } from "react";
import { ButtonRoot } from "./styled";

export type ButtonPropTypes = {
  text?: string;
  startIcon?: ReactElement;
  variant?: "contained" | "outlined" | "transparent";
  onClick: () => void;
} & typeof defaultProps;

const defaultProps = {
  variant: "contained",
};

export default function Button({
  text,
  startIcon,
  variant,
  onClick,
}: ButtonPropTypes) {
  return (
    <ButtonRoot onClick={onClick} variant={variant}>
      {startIcon}
      <span>{text}</span>
    </ButtonRoot>
  );
}

Button.defaultProps = defaultProps;
