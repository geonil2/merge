import React from "react";
import {GetServerSidePropsContext, NextPage} from "next";
import styled from "@emotion/styled";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {MEDIA} from "../../config/styles";
import {BoardByIdQueryKey} from "../../services/board/types";
import {getBoardByIdApi} from "../../services/board/api";
import {CommentByBoardIdQueryKey} from "../../services/comment/types";
import {getCommentByBoardIdApi} from "../../services/comment/api";
import BoardDetail from "../../components/boardDetail";
import HeadMeta from "../../components/headMeta";

interface Prop {
  id: string
}

const QuestionDetailPage: NextPage<Prop> = ({ id }) => {
  return (
    <Container>
      <BoardDetail boardId={id} />
    </Container>
  );
};

const Container = styled.div`
  width: 766px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  align-self: flex-start;
  gap: 14px 0px;
  ${MEDIA.tablet} {
    width: 100%;
  }
`

export default QuestionDetailPage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context;
  const { id } = query;
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([BoardByIdQueryKey, { boardId: id }], () => getBoardByIdApi(id as string))
  await queryClient.prefetchQuery([CommentByBoardIdQueryKey, { boardId: id }], () => getCommentByBoardIdApi(id as string))

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient),
    }
  };
};

interface Prop {
  Id: string;
}
