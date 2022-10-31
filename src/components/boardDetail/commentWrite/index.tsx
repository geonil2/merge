import React, {useEffect} from 'react';
import CommonButton from "../../commonButton";
import {signIn} from "next-auth/react";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import {SubmitHandler, useForm} from "react-hook-form";
import useUser from "../../../hooks/useUser";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postCommentApi} from "../../../services/comment/api";
import {CommentByBoardIdQueryKey} from "../../../services/comment/types";
import TextareaAutosize from 'react-textarea-autosize';

interface Prop {
  userId: string
  boardId: string,
  name: string,
}

export type CommentTextareaValue = {
  contents: string
}

const CommentWrite: React.FC<Prop> = ({ userId, boardId, name }) => {
  const { user } = useUser();
  const { register, handleSubmit, formState, reset } = useForm<CommentTextareaValue>();
  const { mutate } = useMutation(postCommentApi);
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<CommentTextareaValue> = (values, event) => {
    event?.preventDefault();
    mutate({
      ...values,
      userId,
      boardId,
    }, {
      onSuccess: (data) => {
        queryClient.invalidateQueries([CommentByBoardIdQueryKey,{boardId}])
        reset();
      }
    })
  }
  const { errors } = formState;
  useEffect(() => {
    console.log(errors, 'errors')
  }, [errors])
  return (
    <Container>
      <p>Write a comment</p>
      <CommentWriteHeader>
        <UserName>{name}</UserName>
      </CommentWriteHeader>
      <CommentWriteBody onSubmit={handleSubmit(onSubmit)}>
        <TextareaAutosize
          minRows={3}
          maxRows={6}
          maxLength={400}
          placeholder="댓글을 입력해주세요."
          {...register("contents", {
            required: "댓글을 입력해주세요.",
            maxLength: 400,
          })}
        />
        {/*<textarea*/}
        {/*  {...register("contents", {*/}
        {/*    required: "댓글을 입력해주세요.",*/}
        {/*    maxLength: 200,*/}
        {/*  })}*/}
        {/*  maxLength={200}*/}
        {/*  placeholder="댓글을 남겨주세요."></textarea>*/}
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

const Button = styled(CommonButton)`
  width: 110px;
`

export default CommentWrite;
