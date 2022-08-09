import styled from "styled-components";

const ModalRoot = styled.div<any>`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s all;
  transform: translateY(${({ show }) => (show ? "0%" : "100%")});
`;

const ModalHeaderRoot = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: #2a333d33 0px 1px 4px 0px, rgb(42 51 61 / 8%) 0px 0px 1px 0px;
  position: relative;
  z-index: 1;
`;

const ModalHeaderWrapper = styled.div`
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: relative;
  background: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalFooter = styled.div`
  background: none;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: white;
`;

const ModalBodyRoot = styled.div`
  padding: 6px 16px;
  overflow-y: auto;
  height: calc(100% - 190px);
`;

const CloseButtonBox = styled.div`
  position: absolute;
  left: 8px;
`;

const ModalFooterWrapper = styled.div`
  padding: 32px 16px;
`;

export {
  ModalRoot,
  ModalHeaderRoot,
  ModalContent,
  ModalFooter,
  ModalBodyRoot,
  ModalHeaderWrapper,
  CloseButtonBox,
  ModalFooterWrapper,
};
