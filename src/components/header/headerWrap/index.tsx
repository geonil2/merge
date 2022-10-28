import React, {useEffect, useState} from 'react';
import MediaOnlyDiv from "../../mediaOnlyDiv";
import Link from "next/link";
import styled from "@emotion/styled";
import {COLORS} from "../../../config/styles";
import DesktopHeader from "../desktopHeader";
import Modal from "../../modal";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {popupModalContentsAtom, visibleModalSelector} from "../../../recoil/modal";
import CommonModals, {ModalType} from "../../commonModals";



const Header = () => {
  const visibleModal = useRecoilValue(visibleModalSelector)
  const setPopupModalContents = useSetRecoilState(popupModalContentsAtom);

  const closeModal = () => {
    setPopupModalContents(null)
  }

  return (
    <>
      <MediaOnlyDiv media="desktop">
        <DesktopHeader />
      </MediaOnlyDiv>
      <CommonModals
        visibleModal={visibleModal}
        setVisibleModal={closeModal}
      />
    </>
  );
};



export default Header;
