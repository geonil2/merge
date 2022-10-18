import type {GetServerSidePropsResult, NextPage} from 'next'
import styled from "@emotion/styled";
import VerticalSlideTable from "../components/tables/verticalSlideTable";
import TwoRowTable from "../components/tables/twoRowTable";
import VerticalListTable from "../components/tables/verticalListTable";
import {GetServerSidePropsContext} from "next";
import TableLayout from "../TableLayout";
import BigImageTable from "../components/tables/bigImageTable";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {ParsedUrlQuery} from "querystring";
import {getConferenceListApi} from "../services/conference/api";
import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";

const QnA_mock = [
  { id: 1, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 2, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 3, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 4, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 5, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
]

const Home: NextPage = () => {
  const conference = useQuery(['HotIssue'], () => getConferenceListApi(), {
    staleTime: Infinity,
  })

  useEffect(() => {
    console.log(conference.data,'data')
  }, [conference])

  return (
    <TableLayout>
      <TableContainer>
        <VerticalSlideTable />
        <TwoRowTable />
        {conference.data?.data && <BigImageTable lists={conference.data.data} />}
        <VerticalListTable
          title='Q&A'
          lists={QnA_mock}
        />
        <VerticalListTable
          title='개발정보'
          lists={QnA_mock}
        />
        <VerticalListTable
          title='커뮤니티'
          lists={QnA_mock}
        />
        <VerticalListTable
          title='구인구직'
          lists={QnA_mock}
        />
      </TableContainer>
    </TableLayout>
  )
}

const TableContainer = styled.div`
  width: 766px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 14px 0px;
`

export default Home


type Callback<
  P,
  Q extends ParsedUrlQuery = ParsedUrlQuery
  > = (
  context: GetServerSidePropsContext<Q>,
  queryClient: QueryClient
) => Promise<GetServerSidePropsResult<P>>
//
// export const createGetServerSideProps = async (callback: Callback) => {
//   const queryClient = new QueryClient()
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     }
//   }
// };


// export const createGetServerSideProps = (fn?: Callback): Callback<P, Q> => async (context) => {
//
// }

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['HotIssue'], getConferenceListApi)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
  },
  }
};

