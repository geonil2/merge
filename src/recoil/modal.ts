import {atom, selector} from "recoil";
import {ModalType} from "../components/commonModals";
import {popupContents} from "../resources/types";

export const basicPopupContentsAtom = atom<popupContents | null>({
  key: 'basicPopupContentsAtom',
  default: null
})

export const toastPopupContentsAtom = atom<string>({
  key: 'toastPopupContentsAtom',
  default: ''
})

export const visibleModalSelector = selector<ModalType | null>({
  key: 'visibleModalSelector',
  get: ({get}) => {
    const basicPopupContents = get(basicPopupContentsAtom);
    const toastPopupContents = get(toastPopupContentsAtom);
    const visibleModal = get(visibleModalAtom);

    if (!visibleModal) return null
    if (basicPopupContents) return 'basic'
    if (toastPopupContents) return 'toast'
    return null
  }
})

export const visibleModalAtom = atom({
  key: 'visibleModalAtom',
  default: false
})
