import {atom, selector} from "recoil";
import {ModalType} from "../components/commonModals";
import {popupContents} from "../resources/types";

export const popupModalContentsAtom = atom<popupContents | null>({
  key: 'popupModalContentsAtom',
  default: null
})

export const visibleModalSelector = selector<ModalType | null>({
  key: 'visibleModalAtom',
  get: ({get}) => {
    const popupModalContents = get(popupModalContentsAtom);

    return popupModalContents ? 'popup' : null
  },
  set: ({get, set}) => {

  }
})
