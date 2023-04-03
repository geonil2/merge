import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { offsetAtom } from "../../recoil/offset";
import { dehydrate, QueryClient } from "@tanstack/query-core";
import { BoardByCategoryQueryKey } from "../../services/board/types";
import { getBoardByCategoryApi } from "../../services/board/api";
import useBoardByCategory from "../../hooks/useBoardListByCateogry";
import VerticalListTable from "../../components/tables/verticalListTable";
import { DEFAULT_LISTS_COUNT } from "../../components/pagination";
import TableLeftWrapper from "../../components/tables/tableLeftWrapper";
import HeadMeta from "../../components/headMeta";
import MainLayout from "../../components/mainLayout";

const Recruit: NextPage = () => {
  const offset = useRecoilValue(offsetAtom);
  const { data } = useBoardByCategory({
    category: "recruit",
    offset,
    limit: DEFAULT_LISTS_COUNT,
  });

  return (
    <MainLayout hasAsideBar={true}>
      <HeadMeta title="구인구직" description="구인구직" />
      <Container>
        {!!data?.list.length && (
          <VerticalListTable
            title="채용공고"
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

export default Recruit;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [
      BoardByCategoryQueryKey,
      { category: "recruit", offset: 0, limit: DEFAULT_LISTS_COUNT },
    ],
    () =>
      getBoardByCategoryApi({
        category: "recruit",
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
