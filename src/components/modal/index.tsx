import React, { PropsWithChildren } from "react";

import * as S from "./style";

import useVisibleFade from "../../hooks/useVisibleFade";
import ClientOnlyPortal from "../clientOnlyPortal";
import { ModalType } from "../commonModals";

export interface ModalProps {
  visible: boolean;
  className?: string;
  onClose?: () => void;
}

interface Props extends ModalProps {
  visibleModal: ModalType;
}

const Modal: React.FC<PropsWithChildren<Props>> = ({
  children,
  visibleModal,
  visible,
  className,
  onClose,
}) => {
  const display = useVisibleFade(visible);

  if (!display) return null;

  return (
    <ClientOnlyPortal selector="#modal">
      <S.ModalWrap
        visibleModal={visibleModal}
        className={!visible && display ? "disappear" : undefined}
        onClick={onClose}
      >
        {children}
      </S.ModalWrap>
    </ClientOnlyPortal>
  );
};

export default Modal;
