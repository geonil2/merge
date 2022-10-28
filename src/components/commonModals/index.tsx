import React, {Dispatch, SetStateAction} from "react";
import PopupModal from "../modal/popupModal";
import {log} from "util";

export type ModalType = 'popup'

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
      <PopupModal
        visible={visibleModal === "popup"}
        onClose={setVisibleModal}
      />
    </>
  );
};

export default CommonModals;
