import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

import * as S from "./style";

import { useSetRecoilState } from "recoil";
import {
  basicPopupContentsAtom,
  toastPopupContentsAtom,
  visibleModalAtom,
} from "../../../recoil/modal";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postCommentApi } from "../../../services/comment/api";
import { CommentByBoardIdQueryKey } from "../../../services/comment/types";

import { popupModalContents } from "../../../resources/types";

interface Prop {
  userId: string;
  boardId: string;
  name: string;
}

export type CommentTextareaValue = {
  contents: string;
};

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
      setToastPopupContents("댓글을 입력해주세요.");
      return;
    }

    mutate(
      {
        ...values,
        userId,
        boardId,
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries([
            CommentByBoardIdQueryKey,
            { boardId },
          ]);
          reset();
        },
        onError: () => {
          setVisibleModal(true);
          setBasicPopupContents({ ...popupModalContents.commonError });
        },
      }
    );
  };

  return (
    <S.Container>
      <p>Write a comment</p>
      <S.CommentWriteHeader>
        <S.UserName>{name}</S.UserName>
      </S.CommentWriteHeader>
      <S.CommentWriteBody onSubmit={handleSubmit(onSubmit)}>
        <TextareaAutosize
          minRows={4}
          maxRows={6}
          maxLength={500}
          placeholder="댓글을 입력해주세요."
          {...register("contents")}
        />
        <S.ButtonWrap>
          <S.Button title="작성" />
        </S.ButtonWrap>
      </S.CommentWriteBody>
    </S.Container>
  );
};

export default CommentWrite;
