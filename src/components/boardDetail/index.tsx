import React from 'react';
import {useSession} from "next-auth/react";
import {useQuery} from "@tanstack/react-query";
import {BoardByIdQueryKey} from "../../services/board/types";
import {getBoardByIdApi} from "../../services/board/api";
import {getCommentByBoardIdApi} from "../../services/comment/api";
import {CommentByBoardIdQueryKey} from "../../services/comment/types";
import BoardContents from "./boardContents";
import CommentWrite from "./commentWrite";
import CommentListContainer from "./commentList/commentListContainer";

interface Prop {
  boardId: string
}

const BoardDetail: React.FC<Prop> = ({ boardId }) => {
  const { data: session } = useSession();
  const contents = useQuery([BoardByIdQueryKey, { boardId }], () => getBoardByIdApi(boardId));
  const comment = useQuery([CommentByBoardIdQueryKey, { boardId }], () => getCommentByBoardIdApi(boardId))

  return (
    <>
      {contents.data && <BoardContents
        contents={contents.data}
        userId={session?.user._id}
      />}
      {session && <CommentWrite
        userId={session?.user._id}
        boardId={boardId}
        name={session?.user.name}
      />}
      {comment.data.length !== 0 && <CommentListContainer
        userId={session?.user._id}
        comments={comment.data}
      />}
    </>
  );
};


export default BoardDetail;
