import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {BoardByIdQueryKey} from "../../services/board/types";
import {getBoardByIdApi} from "../../services/board/api";
import {getCommentByBoardIdApi} from "../../services/comment/api";
import {CommentByBoardIdQueryKey} from "../../services/comment/types";
import BoardContents from "./boardContents";
import CommentWrite from "./commentWrite";
import CommentListContainer from "./commentList/commentListContainer";
import useUser from "../../hooks/useUser";

interface Prop {
  boardId: string
}

const BoardDetail: React.FC<Prop> = ({ boardId }) => {
  const user = useUser();
  const contents = useQuery([BoardByIdQueryKey, { boardId }], () => getBoardByIdApi(boardId));
  const comment = useQuery([CommentByBoardIdQueryKey, { boardId }], () => getCommentByBoardIdApi(boardId))

  return (
    <>
      {contents.data && <BoardContents
        contents={contents.data}
        userId={user._id}
      />}
      {user && <CommentWrite
        userId={user._id}
        boardId={boardId}
        name={user.name}
      />}
      {comment.data.length !== 0 && <CommentListContainer
        userId={user._id}
        comments={comment.data}
      />}
    </>
  );
};


export default BoardDetail;
