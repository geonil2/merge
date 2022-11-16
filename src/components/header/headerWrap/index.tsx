import React, {useEffect, useState} from 'react';
import MediaOnlyDiv from "../../mediaOnlyDiv";
import Link from "next/link";
import styled from "@emotion/styled";
import {COLORS} from "../../../config/styles";
import DesktopHeader from "../desktopHeader";
import Modal from "../../modal";
import {useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import {
  basicPopupContentsAtom,
  toastPopupContentsAtom, visibleModalAtom,
  visibleModalSelector
} from "../../../recoil/modal";
import CommonModals, {ModalType} from "../../commonModals";
import {useRouter} from "next/router";
import {offsetAtom} from "../../../recoil/offset";
import MobileHeader from "../mobileHeader";
import useVisibleFade from "../../../hooks/useVisibleFade";

const Header = () => {
  const visibleModal = useRecoilValue(visibleModalSelector);
  const resetBasicPopupContents = useResetRecoilState(basicPopupContentsAtom);
  const resetToastPopupContents = useResetRecoilState(toastPopupContentsAtom);
  const resetVisibleModal = useResetRecoilState(visibleModalAtom);
  const router = useRouter();
  const resetOffset = useResetRecoilState(offsetAtom);

  const closeModal = () => {
    resetVisibleModal();
    setTimeout(() => {
      resetBasicPopupContents();
      resetToastPopupContents();
    }, 300)
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
