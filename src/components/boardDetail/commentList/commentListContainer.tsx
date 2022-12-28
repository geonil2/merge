import React from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
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
  box-shadow: ${SHADOWS.BASIC};
  padding: 0px 24px;
  > p {
    font-weight: 700;
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px solid ${COLORS.GRAY};
  }
  ${MEDIA.MOBILE} {
    padding: 0px 12px;
  }
`

export default CommentListContainer;
