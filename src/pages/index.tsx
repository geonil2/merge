import type {GetServerSidePropsResult, GetStaticPropsContext, NextPage} from 'next'
import styled from "@emotion/styled";
import VerticalSlideTable from "../components/tables/verticalSlideTable";
import TwoRowTable from "../components/tables/twoRowTable";
import VerticalListTable from "../components/tables/verticalListTable";
import {GetServerSidePropsContext} from "next";
import AsideBar from "../components/asideBar";
import TableLayout from "../TableLayout";
import BigImageTable from "../components/tables/bigImageTable";
import axios, { AxiosRequestConfig } from 'axios';
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {ParsedUrlQuery} from "querystring";
import {getHotIssueApi} from "../services/hotIssue/api";
import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";
import {api} from "../config/api";

const QnA_mock = [
  { id: 1, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 2, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 3, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 4, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 5, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
]

const Home: NextPage = ({ data } : { data : any }) => {
  // const hotIssue = useQuery(['HotIssue'], () => getHotIssueApi(), {
  //   staleTime: Infinity,
  // })

  useEffect(() => {
    console.log(data,'data')
  }, [data])

  return (
    <TableLayout>
      <TableContainer>
        <VerticalSlideTable />
        <TwoRowTable />
        <VerticalListTable
          title='Q&A'
          lists={QnA_mock}
        />
        <BigImageTable />
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
        {/*<BigImageTable />*/}
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
  // const queryClient = new QueryClient()
  // await queryClient.prefetchQuery(['HotIssue'], getHotIssueApi)
  // return {
  //   props: {
  //     dehydratedState: dehydrate(queryClient),
  // },
  // }
  // console.log(process.env.NOTION_DATABASE_ID)
  // const { data } = await api.post(`/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, {
  //   baseURL: 'https://api.notion.com',
  //   headers: {
  //     "Authorization" : `Bearer ${process.env.NOTION_TOKEN}`,
  //     "Notion-Version": "2022-02-22",
  //   }
  // });
  return { props: {  } }
};



// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return {
//     props : {}
//   }
// }
