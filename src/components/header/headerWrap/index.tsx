import React, {useEffect, useState} from 'react';
import MediaOnlyDiv from "../../mediaOnlyDiv";
import Link from "next/link";
import styled from "@emotion/styled";
import {COLORS} from "../../../config/styles";
import DesktopHeader from "../desktopHeader";
import Modal from "../../modal";
import {useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import {popupModalContentsAtom, visibleModalSelector} from "../../../recoil/modal";
import CommonModals, {ModalType} from "../../commonModals";
import {useRouter} from "next/router";
import {offsetAtom} from "../../../recoil/offset";
import MobileHeader from "../mobileHeader";

const Header = () => {
  const visibleModal = useRecoilValue(visibleModalSelector)
  const setPopupModalContents = useSetRecoilState(popupModalContentsAtom);
  const router = useRouter();
  const resetOffset = useResetRecoilState(offsetAtom);

  const closeModal = () => {
    setPopupModalContents(null)
  }

  useEffect(() => {
    resetOffset()
  }, [router])

  return (
    <>
      <MediaOnlyDiv media="desktop">
        <DesktopHeader />
      </MediaOnlyDiv>
      <MediaOnlyDiv media="mobile">
        <MobileHeader />
      </MediaOnlyDiv>
      <CommonModals
        visibleModal={visibleModal}
        setVisibleModal={closeModal}
      />
    </>
  );
};



export default Header;
