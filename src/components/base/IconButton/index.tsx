import { ReactElement } from "react";
import { IconButtonRoot } from "./styled";

export type IconButtonPropTypes = {
  icon?: ReactElement;
  variant?: "contained" | "outlined" | "transparent";
  onClick: () => void;
  disabled?: boolean;
} & typeof defaultProps;

const defaultProps = {
  variant: "contained",
  disabled: false,
};

export default function IconButton({
  icon,
  variant,
  onClick,
  disabled,
}: IconButtonPropTypes) {
  return (
    <IconButtonRoot onClick={onClick} variant={variant} disabled={disabled}>
      {icon}
    </IconButtonRoot>
  );
}

IconButton.defaultProps = defaultProps;
