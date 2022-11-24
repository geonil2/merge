import React from 'react';
import styled from "@emotion/styled";
import {useSetRecoilState} from "recoil";
import {basicPopupContentsAtom, toastPopupContentsAtom, visibleModalAtom} from "../../../recoil/modal";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {SubmitHandler, useForm} from "react-hook-form";
import TextareaAutosize from 'react-textarea-autosize';
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
import {postCommentApi} from "../../../services/comment/api";
import {CommentByBoardIdQueryKey} from "../../../services/comment/types";
import CommonButton from "../../commonButton";
import {popupModalContents} from "../../../resources/types";

interface Prop {
  userId: string
  boardId: string,
  name: string,
}

export type CommentTextareaValue = {
  contents: string
}

const CommentWrite: React.FC<Prop> = ({ userId, boardId, name }) => {
  const { register, handleSubmit, reset } = useForm<CommentTextareaValue>();
  const { mutate } = useMutation(postCommentApi);
  const queryClient = useQueryClient();
  const setToastPopupContents = useSetRecoilState(toastPopupContentsAtom);
  const setBasicPopupContents = useSetRecoilState(basicPopupContentsAtom);
  const setVisibleModal = useSetRecoilState(visibleModalAtom);

  const onSubmit: SubmitHandler<CommentTextareaValue> = (values, event) => {
    event?.preventDefault();

    if (!values.contents) {
      setVisibleModal(true);
      setToastPopupContents('댓글을 입력해주세요.');
      return;
    }

    mutate({
      ...values,
      userId,
      boardId,
    }, {
      onSuccess: (data) => {
        queryClient.invalidateQueries([CommentByBoardIdQueryKey,{boardId}])
        reset();
      },
      onError: () => {
        setVisibleModal(true);
        setBasicPopupContents({...popupModalContents.commonError});
      }
    })
  }

  return (
    <Container>
      <p>Write a comment</p>
      <CommentWriteHeader>
        <UserName>{name}</UserName>
      </CommentWriteHeader>
      <CommentWriteBody onSubmit={handleSubmit(onSubmit)}>
        <TextareaAutosize
          minRows={4}
          maxRows={6}
          maxLength={500}
          placeholder="댓글을 입력해주세요."
          {...register("contents")}
        />
        <ButtonWrap>
          <Button title="작성" />
        </ButtonWrap>
      </CommentWriteBody>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: ${SHADOWS.basic};
  padding: 0px 24px;
  > p {
    font-weight: 700;
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px solid ${COLORS.GRAY};
  }
  ${MEDIA.mobile} {
    padding: 0px 12px;
  }
`

const CommentWriteHeader = styled.div`
  margin-top: 20px;
`

const UserName = styled.div`
  font-weight: 700;
  font-size: 14px;
`

const CommentWriteBody = styled.form`
  margin-top: 20px;
 > textarea {
   width: 100%;
   max-width: 100%;
   border: none;
   resize: none;
 }  
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 24px;
  margin-top: 20px;
  ${MEDIA.mobile} {
    padding-bottom: 12px;
  }
`

const Button = styled(CommonButton)`
  width: 110px;
  ${MEDIA.mobile} {
    width: 80px;
  }
`

export default CommentWrite;
