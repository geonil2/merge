import React, {useEffect} from 'react';
import BoardContents from "./boardContents";
import CommentWrite from "./commentWrite";
import {BoardByIdQueryKey} from "../../services/board/types";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getBoardByIdApi, postBoardApi} from "../../services/board/api";
import {GetServerSidePropsContext} from "next";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {getCommentByBoardIdApi, postCommentApi} from "../../services/comment/api";
import {CommentByBoardIdQueryKey} from "../../services/comment/types";
import CommentListContainer from "./commentList/commentListContainer";
import {useSession} from "next-auth/react";

interface Prop {
  boardId: string
}

const BoardDetail: React.FC<Prop> = ({ boardId }) => {
  const { data: session, status } = useSession();
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
