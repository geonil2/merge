import React, {PropsWithChildren, useRef} from 'react';
import styled from "@emotion/styled";
import {ANIMATIONS, COLORS, SHADOWS} from "../../config/styles";
import useVisibleFade from "../../hooks/useVisibleFade";
import {useRecoilState} from "recoil";
import ClientOnlyPortal from "../clientOnlyPortal";
import useOutsideClick from "../../hooks/useOutsideClick";

export interface ModalProps {
  visible: boolean;
  className?: string;
  onClose?: () => void;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  children,
  onClose,
  className,
  visible,
}) => {
  // const modalRef = useRef<HTMLDivElement>(null);
  const display = useVisibleFade(visible)
  // const [isActive, setIsActive] = useOutsideClick(modalRef, !display);

  if (!display) {
    return null;
  }

  return (
    // <>
    //   {isActive &&
        <ClientOnlyPortal selector="#modal">
          <ModalWrap
            className={(!visible && display) ? 'disappear' : undefined}
            onClick={onClose}
          >
            {children}
          </ModalWrap>
        </ClientOnlyPortal>
      // }
    // </>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.45);
  overflow-y: scroll;
  outline: 0;
  animation: .3s ${ANIMATIONS.fadeIn} forwards;
  &.disappear {
    animation: .3s ${ANIMATIONS.fadeOut} forwards;
  }
`

export default Modal;
