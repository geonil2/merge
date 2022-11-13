import React, {useEffect, useState} from 'react';
import AsideBar from "../../components/asideBar";
import VerticalListTable from "../../components/tables/verticalListTable";
import styled from "@emotion/styled";
import TableLayout from "../../components/tableLayout";
import useBoardByCategory from "../../hooks/useBoardListByCateogry";
import {useRecoilValue} from "recoil";
import {offsetAtom} from "../../recoil/offset";
import {DEFAULT_LISTS_COUNT} from "../../components/pagination";
import {GetServerSidePropsContext, NextPage} from "next";
import TableLeftWrapper from "../../components/tables/tableLeftWrapper";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {ConferenceListQueryKey} from "../../services/conference/types";
import {getConferenceListApi} from "../../services/conference/api";
import {BoardByCategoryQueryKey, BoardByIdQueryKey} from "../../services/board/types";
import {getBoardByCategoryApi, getBoardByIdApi} from "../../services/board/api";
import {useQuery} from "@tanstack/react-query";

const Recruit: NextPage = () => {
  const offset = useRecoilValue(offsetAtom);
  const { data } = useBoardByCategory({ category: 'recruit', offset, limit: DEFAULT_LISTS_COUNT })

  return (
    <Container>
      {!!data?.list.length &&
        <VerticalListTable
          title='채용공고'
          list={data.list}
          showPagination={data.total > DEFAULT_LISTS_COUNT}
          totalCount={data.total}
        />
      }
    </Container>
  );
};

const Container = styled(TableLeftWrapper)`
  height: fit-content;
`

export default Recruit;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([
    BoardByCategoryQueryKey,
    { category: 'recruit', offset: 0, limit: DEFAULT_LISTS_COUNT }
  ], () => getBoardByCategoryApi({
    category: 'recruit',
    offset: 0,
    limit: DEFAULT_LISTS_COUNT
  }))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
};
