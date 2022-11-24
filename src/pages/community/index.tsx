import React from 'react';
import {GetServerSidePropsContext, NextPage} from "next";
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {offsetAtom} from "../../recoil/offset";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {BoardByCategoryQueryKey} from "../../services/board/types";
import {getBoardByCategoryApi} from "../../services/board/api";
import useBoardByCategory from "../../hooks/useBoardListByCateogry";
import {DEFAULT_LISTS_COUNT} from "../../components/pagination";
import TableLeftWrapper from "../../components/tables/tableLeftWrapper";
import VerticalListTable from "../../components/tables/verticalListTable";
import HeadMeta from "../../components/headMeta";

const Community: NextPage = () => {
  const offset = useRecoilValue(offsetAtom);
  const { data } = useBoardByCategory({ category: 'community', offset, limit: DEFAULT_LISTS_COUNT })

  return (
    <>
      <HeadMeta
        title='커뮤니티'
        description='커뮤니티'
      />
      <Container>
        {!!data?.list.length &&
          <VerticalListTable
            title='커뮤니티'
            list={data.list}
            showPagination={true}
            totalCount={data.total}
          />
        }
      </Container>
    </>
  );
};

const Container = styled(TableLeftWrapper)`
  height: fit-content;
`

export default Community;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([
    BoardByCategoryQueryKey,
    { category: 'community', offset: 0, limit: DEFAULT_LISTS_COUNT }
  ], () => getBoardByCategoryApi({
    category: 'community',
    offset: 0,
    limit: DEFAULT_LISTS_COUNT
  }))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
};
