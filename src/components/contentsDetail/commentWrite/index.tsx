import React from 'react';
import CommonButton from "../../commonButton";
import {signIn} from "next-auth/react";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import {SubmitHandler, useForm} from "react-hook-form";
import useUser from "../../../hooks/useUser";
import {CommentTextareaValue} from "../index";
import {useMutation} from "@tanstack/react-query";
import {postCommentApi} from "../../../services/comment/api";

interface Prop {
  userId: string
  boardId: string,
  name: string,
}

const CommentWrite: React.FC<Prop> = ({ userId, boardId, name }) => {
  const { user } = useUser();
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useMutation(postCommentApi);

  const onSubmit: SubmitHandler<CommentTextareaValue> = (data, event) => {
    event?.preventDefault();
    mutate({
      ...data,
      userId,
      boardId,
    }, {
      onSuccess: (data) => {
        reset();
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
        <textarea {...register("contents")} maxLength={200} placeholder="댓글을 남겨주세요."></textarea>
        <ButtonWrap>
          <CommonButton title="작성" width={110} />
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
`


export default CommentWrite;
