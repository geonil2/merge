import { useRouter } from 'next/router'
import {GetServerSidePropsContext, NextPage} from "next";
import TableLayout from "../../components/TableLayout";
import React, {useEffect} from "react";
import styled from "@emotion/styled";
import ContentsDetail from "../../components/contentsDetail";
import {useQuery} from "@tanstack/react-query";
import {BoardByCategoryQueryKey, BoardByIdQueryKey} from "../../services/board/types";
import {getBoardByCategory, getBoardById} from "../../services/board/api";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {CommentByBoardIdQueryKey} from "../../services/comment/types";
import {getCommentByBoardId} from "../../services/comment/api";

interface Prop {
  id: string
}

const QuestionDetailPage: NextPage<Prop> = ({ id }) => {
  return (
    <Container>
      <ContentsDetail boardId={id} />
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
`

export default QuestionDetailPage

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context;
  const { id } = query;
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([BoardByIdQueryKey, { boardId: id }], () => getBoardById(id as string))
  await queryClient.prefetchQuery([CommentByBoardIdQueryKey, { boardId: id }], () => getCommentByBoardId(id as string))

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
