import React from "react";

import * as S from "./style";

import { Comment } from "../../../../services/comment/types";
import CommentList from "..";

interface Prop {
  comments: Comment[];
  userId?: string;
}

const CommentListContainer: React.FC<Prop> = ({ comments, userId }) => {
  return (
    <S.Container>
      <p>Comments</p>
      {comments.map((comment) => (
        <CommentList key={comment._id} comment={comment} userId={userId} />
      ))}
    </S.Container>
  );
};

export default CommentListContainer;
