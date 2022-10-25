import type {GetServerSidePropsResult, NextPage} from 'next'
import styled from "@emotion/styled";
import VerticalSlideTable from "../components/tables/verticalSlideTable";
import TwoRowTable from "../components/tables/twoRowTable";
import VerticalListTable from "../components/tables/verticalListTable";
import {GetServerSidePropsContext} from "next";
import TableLayout from "../components/TableLayout";
import BigImageTable from "../components/tables/bigImageTable";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {ParsedUrlQuery} from "querystring";
import {getConferenceListApi} from "../services/conference/api";
import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";
import {ConferenceListQueryKey} from "../services/conference/types";
import {BoardByCategoryQueryKey} from "../services/board/types";
import {getBoardByCategory} from "../services/board/api";
import useBoardListByCategory from "../hooks/useBoardListByCateogry";
import useBoardByCategory from "../hooks/useBoardListByCateogry";
import TableLeftWrapper from "../components/tables/tableLeftWrapper";

const QnA_mock = [
  { id: 1, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 2, title: "DNS란 무엇인가요?", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 3, title: "GET과 POST의 차이는?", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 4, title: "객체 지향 프로그래밍?", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 5, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
]

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
      {!!conference.data && <BigImageTable lists={conference.data} />}
      {!!questionBoard.data?.lists && questionBoard.data.lists.length !== 0 &&
        <VerticalListTable
          title='Q&A'
          lists={questionBoard.data.lists}
          showPagination={false}
        />
      }
      {!!infoBoard.data?.lists && infoBoard.data.lists.length !== 0 &&
        <VerticalListTable
          title='개발정보'
          lists={infoBoard.data.lists}
          showPagination={false}
        />
      }
      {!!communityBoard.data?.lists && communityBoard.data.lists.length !== 0 &&
        <VerticalListTable
          title='커뮤니티'
          lists={communityBoard.data.lists}
          showPagination={false}
        />
      }
      {!!recruitBoard.data?.lists && recruitBoard.data.lists.length !== 0 &&
        <VerticalListTable
          title='구인구직'
          lists={recruitBoard.data.lists}
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

