import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Ineer = styled.div`
  padding: 25px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CloseButtonBox = styled.div`
  position: absolute;
  left: 8px;
`;

const ModalTitleBox = styled.div`
  flex-grow: 1;
  text-align: center;
  padding: 22px 60px;
`;

const ModalHeaderTitle = styled.span`
  color: #2a333d;
  font-size: 16px;
  font-weight: 500;
`;

const CounterBox = styled.div`
  display: flex;
  align-items: center;
`;

const CounterInput = styled.input`
  border: none;
  outline: 0;
  width: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const RoomBox = styled.div`
  border-bottom: solid 1px #eff2f6;
  padding-bottom: 8px;
`;

const ChildContainer = styled.div`
  border-left: solid 1px #eff2f6;
  padding-left: 11px;
  margin-left: 8px;
`;

const SelectContainer = styled.div`
  width: 135px;
  display: flex;
`;

export {
  Wrapper,
  Ineer,
  Row,
  CounterBox,
  CounterInput,
  RoomBox,
  SelectContainer,
  ChildContainer,
  CloseButtonBox,
  ModalTitleBox,
  ModalHeaderTitle,
};
