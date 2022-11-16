import React, {Dispatch, SetStateAction} from "react";
import BasicPopup from "../modal/basicPopup";
import ToastPopup from "../modal/toastPopup";

export type ModalType = 'basic' | 'toast'

interface Props {
  visibleModal: ModalType | null
  // setVisibleModal: Dispatch<SetStateAction<ModalType | undefined>>
  setVisibleModal: () => void
}

const CommonModals: React.FC<Props> = ({
 visibleModal,
 setVisibleModal,
}) => {
  return (
    <>
      <BasicPopup
        visible={visibleModal === 'basic'}
        onClose={setVisibleModal}
      />
      <ToastPopup
        visible={visibleModal === 'toast'}
        onClose={setVisibleModal}
      />
    </>
  );
};

export default CommonModals;
