import React, { useEffect } from "react";

import * as S from "./style";

import { useRecoilValue } from "recoil";
import { toastPopupContentsAtom } from "../../../recoil/modal";

import Modal, { ModalProps } from "../index";

interface Props extends ModalProps {}

const ToastPopup: React.FC<Props> = ({ visible, onClose }) => {
  const toastPopupContents = useRecoilValue(toastPopupContentsAtom);

  useEffect(() => {
    if (visible && onClose) setTimeout(() => onClose(), 1500);
  }, [visible]);

  return (
    <Modal visibleModal="toast" visible={visible} onClose={onClose}>
      <S.Popup>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
        </svg>
        <S.Title>{toastPopupContents}</S.Title>
      </S.Popup>
    </Modal>
  );
};

export default ToastPopup;
