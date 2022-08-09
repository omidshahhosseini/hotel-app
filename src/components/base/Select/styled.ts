import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const ArrowBox = styled.div`
  position: absolute;
  top: 10px;
  right: 14px;
  pointer-events: none;
`;

const SelectRoot = styled.select`
  border: solid 1px #bed2e9;
  border-radius: 6px;
  appearance: none;
  padding: 10px 52px 10px 16px;
  max-width: 100px;
  max-height: 40px;
`;

const Option = styled.option``;

export { Container, SelectRoot, Option, ArrowBox };
