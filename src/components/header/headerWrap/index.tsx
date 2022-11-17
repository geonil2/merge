import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useRecoilValue, useResetRecoilState} from "recoil";
import {
  basicPopupContentsAtom,
  toastPopupContentsAtom,
  visibleModalAtom,
  visibleModalSelector
} from "../../../recoil/modal";
import {offsetAtom} from "../../../recoil/offset";
import MediaOnlyDiv from "../../mediaOnlyDiv";
import CommonModals from "../../commonModals";
import DesktopHeader from "../desktopHeader";
import MobileHeader from "../mobileHeader";

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
