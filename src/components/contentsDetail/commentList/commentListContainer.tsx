import React, {useState} from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import ReactTimeago from "react-timeago";
import {Comment} from "../../../services/comment/types";
import CommentList from "./commentList";

interface Prop {
  comments: Comment[],
  userId?: string
}

const CommentListContainer: React.FC<Prop> = ({ comments, userId }) => {
  return (
    <Container>
      <p>Comments</p>
      {comments.map(comment => (
        <CommentList
          key={comment._id}
          comment={comment}
          userId={userId}
        />
      ))}
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

export default CommentListContainer;
