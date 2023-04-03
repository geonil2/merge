import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { offsetAtom } from "../../recoil/offset";
import { dehydrate, QueryClient } from "@tanstack/query-core";
import { BoardByCategoryQueryKey } from "../../services/board/types";
import { getBoardByCategoryApi } from "../../services/board/api";
import useBoardByCategory from "../../hooks/useBoardListByCateogry";
import { DEFAULT_LISTS_COUNT } from "../../components/pagination";
import VerticalListTable from "../../components/tables/verticalListTable";
import TableLeftWrapper from "../../components/tables/tableLeftWrapper";
import HeadMeta from "../../components/headMeta";
import MainLayout from "../../components/mainLayout";

const Notice: NextPage = () => {
  const offset = useRecoilValue(offsetAtom);
  const { data } = useBoardByCategory({
    category: "notice",
    offset,
    limit: DEFAULT_LISTS_COUNT,
  });

  return (
    <MainLayout hasAsideBar={true}>
      <HeadMeta title="공지사항" description="공지사항" />
      <Container>
        {!!data?.list.length && (
          <VerticalListTable
            title="Q&A"
            list={data.list}
            showPagination={true}
            totalCount={data.total}
          />
        )}
      </Container>
    </MainLayout>
  );
};

const Container = styled(TableLeftWrapper)`
  height: fit-content;
`;

export default Notice;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [
      BoardByCategoryQueryKey,
      { category: "notice", offset: 0, limit: DEFAULT_LISTS_COUNT },
    ],
    () =>
      getBoardByCategoryApi({
        category: "notice",
        offset: 0,
        limit: DEFAULT_LISTS_COUNT,
      })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
