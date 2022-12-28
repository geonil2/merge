import React, {PropsWithChildren} from 'react';
import styled from "@emotion/styled";
import {ANIMATIONS} from "../../config/styles";
import useVisibleFade from "../../hooks/useVisibleFade";
import ClientOnlyPortal from "../clientOnlyPortal";
import {ModalType} from "../commonModals";

export interface ModalProps {
  visible: boolean,
  className?: string,
  onClose?: () => void
}

interface Props extends ModalProps {
  visibleModal: ModalType
}

const Modal: React.FC<PropsWithChildren<Props>> = ({
  children,
  visibleModal,
  visible,
  className,
  onClose,
}) => {
  const display = useVisibleFade(visible)

  if (!display) return null;

  return (
    <ClientOnlyPortal selector="#modal">
      <ModalWrap
        visibleModal={visibleModal}
        className={(!visible && display) ? 'disappear' : undefined}
        onClick={onClose}
      >
        {children}
      </ModalWrap>
    </ClientOnlyPortal>
  );
};

interface ModalWrapProp {
  visibleModal: ModalType
}

const ModalWrap = styled.div<ModalWrapProp>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: ${({visibleModal}) => visibleModal === 'basic' ? 'center' : 'start'};
  background-color: ${({visibleModal}) => visibleModal === 'basic' ? 'rgba(0,0,0,.45)' : 'rgba(0,0,0,.0)'};
  padding-top: ${({visibleModal}) => visibleModal === 'basic' ? 'none' : '10%'};
  overflow-y: scroll;
  outline: 0;
  transform: translateY(0);
  animation: ${({visibleModal}) => visibleModal === 'basic' ? ANIMATIONS.FADEIN : ANIMATIONS.BOUNCEDOWN};
  animation-duration: .3s;
  animation-fill-mode: forwards;
  &.disappear {
    animation: ${({visibleModal}) => visibleModal === 'basic' ? ANIMATIONS.FADEOUT : ANIMATIONS.BOUNCEUP};
    animation-duration: .3s;
    animation-fill-mode: forwards;
  }
`

export default Modal;
