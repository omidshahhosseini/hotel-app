import IconButton from "components/base/IconButton";
import { Container, CounterValue } from "./styled";
import { ReactComponent as PlusIcon } from "assets/images/svg-icons/plus.svg";
import { ReactComponent as SubtractionIcon } from "assets/images/svg-icons/subtraction.svg";

export type CounterPropTypes = {
  value: number;
  increase: () => void;
  decrease: () => void;
  decrease_disabled?: boolean;
  increase_disabled?: boolean;
};

export default function Counter({
  value,
  increase,
  decrease,
  decrease_disabled,
  increase_disabled,
}: CounterPropTypes) {
  return (
    <Container>
      <IconButton
        icon={<SubtractionIcon />}
        onClick={decrease}
        variant="outlined"
        disabled={decrease_disabled || value <= 0}
      />
      <CounterValue type="text" readOnly value={value} />
      <IconButton
        icon={<PlusIcon />}
        onClick={increase}
        variant="outlined"
        disabled={increase_disabled}
      />
    </Container>
  );
}
