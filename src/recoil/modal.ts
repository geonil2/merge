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

    if (basicPopupContents) {
      return 'basic'
    } else if (toastPopupContents) {
      return 'toast'
    }
    return null
  },
  set: ({get, set}, newValue) => {
    if (!newValue) {
      set(basicPopupContentsAtom, null)
      set(toastPopupContentsAtom, '')
    }
  }
})

export const visibleModalAtom = atom<ModalType | null>({
  key: 'visibleModalAtom',
  default: null
})

export const resetPopupSelector = selector({
  key: 'resetPopupSelector',
  get: ({get}) => {
  },
  set: ({get, set, reset}, newValue) => {
    const visibleModal = get(visibleModalAtom);

    if (!visibleModal && newValue) {
      reset(basicPopupContentsAtom)
      reset(toastPopupContentsAtom)
    }
  }
})
