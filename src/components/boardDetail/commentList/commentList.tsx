import React, {useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import ReactTimeago from "react-timeago";
import {Comment, CommentByBoardIdQueryKey} from "../../../services/comment/types";
import CommonButton from "../../commonButton";
import DropdownMenu from "../../dropdownMenu";
import useOutsideClick from "../../../hooks/useOutsideClick";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCommentApi, updateCommentApi} from "../../../services/comment/api";
import {useRouter} from "next/router";
import {useSetRecoilState} from "recoil";
import {popupModalContentsAtom} from "../../../recoil/modal";
import {popupModalContents} from "../../../resources/types";

interface Prop {
  comment: Comment,
  userId?: string
}

const CommentList: React.FC<Prop> = ({ comment, userId }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dropdownMenuRef = useRef<HTMLUListElement>(null);
  const [isActive, setIsActive] = useOutsideClick(dropdownMenuRef, false);
  const [isDisabledTextarea, setIsDisabledTextarea] = useState(true);
  const [textareaData, setTextareaData] = useState(comment.contents);
  const updateComment = useMutation(updateCommentApi);
  const deleteComment = useMutation(deleteCommentApi);
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const setPopupModalContents = useSetRecoilState(popupModalContentsAtom);

  const onClickUpdateComment = () => {
    setIsDisabledTextarea(false);
    setIsActive(false);
  }

  const onClickDeleteComment = () => {
    setPopupModalContents({...popupModalContents.deleteComment, onClick: removeComment})
    setIsActive(false);
  }

  const removeComment = () => {
    deleteComment.mutate({
      boardId: id as string,
      commentId: comment._id,
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries([CommentByBoardIdQueryKey,{boardId: id}])
      }
    })
  }

  const onClickCancelButton = () => {
    setTextareaData(comment.contents)
    setIsDisabledTextarea(true)
  }

  const onClickUpdateButton = () => {
    updateComment.mutate({
      boardId: id as string,
      commentId: comment._id,
      contents: textareaData,
    }, {
      onSuccess: (data) => {
        queryClient.invalidateQueries([CommentByBoardIdQueryKey,{boardId: id}])
        setIsDisabledTextarea(true)
      },
      onError: () => {
        alert('문제가 발생했습니다. 다시 시도해주세요.')
      }
    })
  }


  const dropdownMENU = [{title: '수정 하기', onClick: onClickUpdateComment}, {title: '삭제 하기', onClick: onClickDeleteComment}]

  useEffect(() => {
    if (!isDisabledTextarea) {
      textareaRef.current?.focus()
    }
  }, [isDisabledTextarea])

  return (
    <CommentWrap>
      <Thumbnail src={comment.owner.image} />
      <CommentInfoWrap>
        <CommentInfo>
          <CommentInfoLeft>
            <UserName>{comment.owner.name}</UserName>
            <ReactTimeago date={comment.updatedAt} />
          </CommentInfoLeft>
          {userId === comment.owner._id &&
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
        </CommentInfo>
        <Commentarea>
          <textarea
            maxLength={200}
            disabled={isDisabledTextarea}
            ref={textareaRef}
            onChange={(e) => setTextareaData(e.target.value)}
            value={textareaData}
          ></textarea>
        </Commentarea>
        {userId === comment.owner._id && !isDisabledTextarea &&
          <UpdateButtonWrap>
            <CancelButton title="취소" onClick={onClickCancelButton} />
            <UpdateButton title="수정" onClick={onClickUpdateButton}/>
          </UpdateButtonWrap>
        }
      </CommentInfoWrap>
    </CommentWrap>
  );
};

const CommentWrap = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.GRAY};
  padding: 20px 24px;
`

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const CommentInfoWrap = styled.div`
  width: 100%;
  margin-left: 20px;
`

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

const CommentInfoLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`

const UserName = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin-right: 10px;
`

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

const Commentarea = styled.div`
  width: 100%;
  > textarea {
    width: 100%;
    border: none;
    margin-top: 10px;
    resize: none;
  }
`

const UpdateButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CancelButton = styled(CommonButton)`
  height: 30px;
  background-color: ${COLORS.LIGHT_GRAY};
  border: 1px solid ${COLORS.LIGHT_GRAY};
  color: ${COLORS.BLACK};
  padding: 0px 10px;
  box-sizing: border-box;
  &:hover {
    background-color: ${COLORS.WHITE};
  }
`

const UpdateButton = styled(CommonButton)`
  height: 30px;
  padding: 0px 10px;
`


export default CommentList;
