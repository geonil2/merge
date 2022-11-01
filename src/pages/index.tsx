import type {GetServerSidePropsResult, NextPage} from 'next'
import styled from "@emotion/styled";
import VerticalSlideTable from "../components/tables/verticalSlideTable";
import TwoRowTable from "../components/tables/twoRowTable";
import VerticalListTable from "../components/tables/verticalListTable";
import {GetServerSidePropsContext} from "next";
import TableLayout from "../components/tableLayout";
import BigImageTable from "../components/tables/bigImageTable";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {ParsedUrlQuery} from "querystring";
import {getConferenceListApi} from "../services/conference/api";
import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";
import {ConferenceListQueryKey} from "../services/conference/types";
import {BoardByCategoryQueryKey} from "../services/board/types";
import {getBoardByCategoryApi} from "../services/board/api";
import useBoardListByCategory from "../hooks/useBoardListByCateogry";
import useBoardByCategory from "../hooks/useBoardListByCateogry";
import TableLeftWrapper from "../components/tables/tableLeftWrapper";

const Home: NextPage = () => {
  const conference = useQuery([ConferenceListQueryKey], () => getConferenceListApi(), {
    staleTime: Infinity,
  })
  const questionBoard = useBoardByCategory({ category: 'question' })
  const infoBoard = useBoardByCategory({ category: 'info' })
  const communityBoard = useBoardByCategory({ category: 'community' })
  const recruitBoard = useBoardByCategory({ category: 'recruit' })
  const noticeBoard = useBoardByCategory({ category: 'notice' })

  return (
    <TableLeftWrapper>
      <VerticalSlideTable />
      <TwoRowTable />
      {!!conference.data && <BigImageTable list={conference.data} />}
      {!!questionBoard.data?.list && questionBoard.data.list.length !== 0 &&
        <VerticalListTable
          title='Q&A'
          list={questionBoard.data.list}
          showPagination={false}
        />
      }
      {!!infoBoard.data?.list && infoBoard.data.list.length !== 0 &&
        <VerticalListTable
          title='개발정보'
          list={infoBoard.data.list}
          showPagination={false}
        />
      }
      {!!communityBoard.data?.list && communityBoard.data.list.length !== 0 &&
        <VerticalListTable
          title='커뮤니티'
          list={communityBoard.data.list}
          showPagination={false}
        />
      }
      {!!recruitBoard.data?.list && recruitBoard.data.list.length !== 0 &&
        <VerticalListTable
          title='구인구직'
          list={recruitBoard.data.list}
          showPagination={false}
        />
      }
    </TableLeftWrapper>
  )
}

export default Home

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([ConferenceListQueryKey], () => getConferenceListApi())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
  },
  }
};

