import React from "react";

import * as S from "./style";

import { useRecoilValue } from "recoil";
import { basicPopupContentsAtom } from "../../../recoil/modal";
import Modal, { ModalProps } from "../index";

interface Props extends ModalProps {}

const BasicPopup: React.FC<Props> = ({ visible, onClose }) => {
  const popupModalContents = useRecoilValue(basicPopupContentsAtom);

  return (
    <Modal visibleModal="basic" visible={visible} onClose={onClose}>
      <S.Popup>
        <S.Title>{popupModalContents?.title}</S.Title>
        <S.Descriptions>{popupModalContents?.description}</S.Descriptions>
        <S.ButtonWrap>
          <S.Button onClick={onClose}>취소</S.Button>
          {popupModalContents?.secondButton && (
            <S.Button onClick={popupModalContents.onClick}>삭제</S.Button>
          )}
        </S.ButtonWrap>
      </S.Popup>
    </Modal>
  );
};

export default BasicPopup;
