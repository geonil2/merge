import React, {useRef} from 'react';
import DropdownMenu from "../dropdownMenu";
import useOutsideClick from "../../hooks/useOutsideClick";
import styled from "@emotion/styled";
import {COLORS} from "../../config/styles";
import useUser from "../../hooks/useUser";

interface Props {
  owner?: string,
  onClickUpdateButton: () => void,
  onClickDeleteButton: () => void
}

const UpdateDeleteButtonWrapper: React.FC<Props> = ({
  owner,
  onClickUpdateButton,
  onClickDeleteButton
}) => {
  const { data: user} = useUser();
  const dropdownMenuRef = useRef<HTMLUListElement>(null);
  const [isActive, setIsActive] = useOutsideClick(dropdownMenuRef, false);
  const dropdownMENU = [{title: '수정 하기', onClick: onClickUpdateButton}, {title: '삭제 하기', onClick: onClickDeleteButton}]

  return (
    <>
      {user?._id === owner &&
        <ActiveButton
          isActive={isActive}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => setIsActive(true)}
          >
            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/>
            {/*<path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>*/}
          </svg>
          {isActive && <DropdownMenu ref={dropdownMenuRef} menuLists={dropdownMENU} />}
        </ActiveButton>
      }
    </>
  );
};

interface ActiveButtonProps {
  isActive: boolean
}

const ActiveButton = styled.div<ActiveButtonProps>`
  position: relative;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-self: center;
  fill: ${props => props.isActive ? COLORS.PRIMARY : COLORS.GRAY};
  cursor: pointer;
`

export default UpdateDeleteButtonWrapper;
