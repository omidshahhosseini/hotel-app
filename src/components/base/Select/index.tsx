import { Container, ArrowBox, Option, SelectRoot } from "./styled";
import { ReactComponent as ArrowDownIcon } from "assets/images/svg-icons/arrow-down.svg";

export type SelectPropTypes = {
  onChange: any;
  defaultValue?: number;
} & typeof defaultProps;

const defaultProps = {};

export default function Select({ onChange, defaultValue }: SelectPropTypes) {
  return (
    <Container>
      <SelectRoot
        name="0"
        id=""
        onChange={onChange}
        defaultValue={defaultValue}
      >
        <Option value="">Age</Option>
        {Array(17)
          .fill(0)
          .map((i, index) => (
            <Option value={index} key={`options-${index}`}>
              {index}
            </Option>
          ))}
      </SelectRoot>
      <ArrowBox>
        <ArrowDownIcon />
      </ArrowBox>
    </Container>
  );
}

Select.defaultProps = defaultProps;
