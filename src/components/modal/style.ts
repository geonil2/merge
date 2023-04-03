import styled from "@emotion/styled";

import { ANIMATIONS } from "../../config/styles";

import { ModalType } from "../commonModals";

interface ModalWrapProp {
  visibleModal: ModalType;
}

export const ModalWrap = styled.div<ModalWrapProp>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: ${({ visibleModal }) =>
    visibleModal === "basic" ? "center" : "start"};
  background-color: ${({ visibleModal }) =>
    visibleModal === "basic" ? "rgba(0,0,0,.45)" : "rgba(0,0,0,.0)"};
  padding-top: ${({ visibleModal }) =>
    visibleModal === "basic" ? "none" : "10%"};
  overflow-y: scroll;
  outline: 0;
  transform: translateY(0);
  animation: ${({ visibleModal }) =>
    visibleModal === "basic" ? ANIMATIONS.FADEIN : ANIMATIONS.BOUNCEDOWN};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  &.disappear {
    animation: ${({ visibleModal }) =>
      visibleModal === "basic" ? ANIMATIONS.FADEOUT : ANIMATIONS.BOUNCEUP};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;
