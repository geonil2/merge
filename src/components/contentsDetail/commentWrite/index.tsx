import React from 'react';
import CommonButton from "../../commonButton";
import {signIn} from "next-auth/react";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";

const CommentWrite = () => {
  return (
    <Container>
      <p>Write a comment</p>
      <CommentWriteHeader>
        <UserName>Username</UserName>
      </CommentWriteHeader>
      <CommentWriteBody>
        <textarea name="" id="" maxLength={200} placeholder="댓글을 남겨주세요."></textarea>
        <ButtonWrap>
          <CommonButton title="Write" width={110} onClick={() => signIn('google')} />
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
  font-size: 14px;
`

const CommentWriteBody = styled.div`
  margin-top: 20px;
 > textarea {
   width: 100%;
   max-width: 100%;
   border: none;
 }  
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 24px;
  margin-top: 20px;
`


export default CommentWrite;
