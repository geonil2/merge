import React from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../config/styles";
import useVisibleFade from "../../hooks/useVisibleFade";
import {useRecoilState} from "recoil";
import {showModalAtom} from "../../recoil/modal";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(showModalAtom)
  const display = useVisibleFade(showModal)

  if (!display) {
    return null;
  }
  return (
    <ModalWrap>
      <Popup>
        <Title>해당 댓글을 삭제합니까?</Title>
        <Descriptions>삭제 후 해당 댓글을 다시 복구할 수 없습니다.</Descriptions>
        <ButtonWrap>
          <Button>취소</Button>
          <Button>삭제</Button>
        </ButtonWrap>
      </Popup>
    </ModalWrap>
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
  overflow: auto;
  outline: 0;
`

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
  &:first-child {
    margin-right: 10px;
  }
`

export default Modal;
