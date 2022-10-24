import React, {useEffect} from 'react';
import Contents from "./contents";
import CommentWrite from "./commentWrite";
import CommentList from "./commentList";
import {BoardByIdQueryKey, BoardList} from "../../services/board/types";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getBoardById, postBoardApi} from "../../services/board/api";
import {GetServerSidePropsContext} from "next";
import {SubmitHandler, useForm} from "react-hook-form";
import useUser from "../../hooks/useUser";
import {getCommentByBoardId, postCommentApi} from "../../services/comment/api";
import {CommentByBoardIdQueryKey} from "../../services/comment/types";

interface Prop {
  boardId: string
}

export type CommentTextareaValue = {
  contents: string
}


const ContentsDetail: React.FC<Prop> = ({ boardId }) => {
  const { user } = useUser();
  const { register, handleSubmit, reset } = useForm();
  const contents = useQuery([BoardByIdQueryKey, { boardId }], () => getBoardById(boardId), {
    staleTime: Infinity
  });
  const comment = useQuery([CommentByBoardIdQueryKey, { boardId }], () => getCommentByBoardId(boardId))

  return (
    <>
      {contents?.data && <Contents contents={contents.data} />}
      {user &&
        <CommentWrite
          userId={user._id}
          boardId={boardId}
          name={user.name}
        />
      }
      {comment?.data && <CommentList comments={comment.data} />}

    </>
  );
};


export default ContentsDetail;
