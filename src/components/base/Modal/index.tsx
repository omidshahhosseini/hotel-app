import {
  ModalRoot,
  ModalHeaderRoot,
  ModalContent,
  ModalFooter,
  ModalBodyRoot,
  ModalHeaderWrapper,
  ModalFooterWrapper,
} from "./styled";

type ModalPropTypes = {
  show: boolean;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  show: false,
};

export default function Modal({ show, children }: ModalPropTypes) {
  return (
    <ModalRoot show={show}>
      <ModalContent>{children}</ModalContent>
    </ModalRoot>
  );
}

const ModalHeader = ({ children }: React.PropsWithChildren) => (
  <ModalHeaderRoot>
    <ModalHeaderWrapper>{children}</ModalHeaderWrapper>
  </ModalHeaderRoot>
);

const ModalBody = ({ children }: React.PropsWithChildren) => (
  <ModalBodyRoot>{children}</ModalBodyRoot>
);

const ModalAction = ({ children }: React.PropsWithChildren) => (
  <ModalFooter>
    <ModalFooterWrapper>{children}</ModalFooterWrapper>
  </ModalFooter>
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Action = ModalAction;

Modal.defaultProps = defaultProps;
