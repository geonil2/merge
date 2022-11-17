import React from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {basicPopupContentsAtom} from "../../../recoil/modal";
import {COLORS, SHADOWS} from "../../../config/styles";
import Modal, {ModalProps} from "../index";

interface Props extends ModalProps {
}

const BasicPopup: React.FC<Props> = ({ visible, onClose }) => {
  const popupModalContents = useRecoilValue(basicPopupContentsAtom);

  return (
    <Modal
      visibleModal='basic'
      visible={visible}
      onClose={onClose}
    >
      <Popup>
        <Title>{popupModalContents?.title}</Title>
        <Descriptions>{popupModalContents?.description}</Descriptions>
        <ButtonWrap>
          <Button onClick={onClose}>취소</Button>
          {popupModalContents?.secondButton && <Button onClick={popupModalContents.onClick}>삭제</Button>}
        </ButtonWrap>
      </Popup>
    </Modal>
  );
};

const Popup = styled.div`
  width: 416px;
  background-color: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
  border-radius: 5px;
  padding: 30px;
`

const Title = styled.p`
  font-weight: 700;
`

const Descriptions = styled.p`
  font-size: 14px;
  margin-top: 20px;
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.div`
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
  &:first-of-type {
    margin-right: 10px;
  }
`

export default BasicPopup;
