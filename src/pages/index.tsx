import type {
  NextPage,
  GetServerSidePropsContext,
  GetServerSideProps,
} from "next";

import { dehydrate, QueryClient } from "@tanstack/query-core";

import { getConferenceListApi } from "../services/conference/api";
import { ConferenceListQueryKey } from "../services/conference/types";
import {
  BestBoardQueryKey,
  BoardByCategoryQueryKey,
} from "../services/board/types";
import { getBestBoard, getBoardByCategoryApi } from "../services/board/api";

import TableLeftWrapper from "../components/tables/tableLeftWrapper";
import MainLayout from "../components/mainLayout";
import Notice from "../components/main/notice";
import Best from "../components/main/best";
import Conference from "../components/main/conference";
import Question from "../components/main/question";
import Info from "../components/main/info";
import Community from "../components/main/community";
import Recruit from "../components/main/recruit";

const Home: NextPage = () => {
  return (
    <MainLayout hasAsideBar={true}>
      <TableLeftWrapper>
        <Notice />
        <Best />
        <Conference />
        <Question />
        <Info />
        <Community />
        <Recruit />
      </TableLeftWrapper>
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery(
      [ConferenceListQueryKey],
      () => getConferenceListApi(),
      {
        staleTime: Infinity,
      }
    ),
    queryClient.prefetchQuery([BestBoardQueryKey], () => getBestBoard()),
    queryClient.prefetchQuery(
      [BoardByCategoryQueryKey, { category: "question", offset: 0, limit: 5 }],
      () => getBoardByCategoryApi({ category: "question", offset: 0, limit: 5 })
    ),
    queryClient.prefetchQuery(
      [BoardByCategoryQueryKey, { category: "info", offset: 0, limit: 5 }],
      () => getBoardByCategoryApi({ category: "info", offset: 0, limit: 5 })
    ),
    queryClient.prefetchQuery(
      [BoardByCategoryQueryKey, { category: "community", offset: 0, limit: 5 }],
      () =>
        getBoardByCategoryApi({ category: "community", offset: 0, limit: 5 })
    ),
    queryClient.prefetchQuery(
      [BoardByCategoryQueryKey, { category: "recruit", offset: 0, limit: 5 }],
      () => getBoardByCategoryApi({ category: "recruit", offset: 0, limit: 5 })
    ),
    queryClient.prefetchQuery(
      [BoardByCategoryQueryKey, { category: "notice", offset: 0, limit: 5 }],
      () => getBoardByCategoryApi({ category: "notice", offset: 0, limit: 5 })
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
