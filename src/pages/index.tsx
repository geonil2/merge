import type { NextPage } from 'next'
import styled from "@emotion/styled";
import VerticalSlideTable from "../components/tables/verticalSlideTable";
import TwoRowTable from "../components/tables/twoRowTable";
import BigImageTable from "../components/tables/bigImageTable";
import VerticalListTable from "../components/tables/verticalListTable";
import {GetServerSidePropsContext} from "next";
import {useQuery} from "@tanstack/react-query";
import {newsListQueryKey} from "../services/types";
import {getNewsListApi} from "../services/api";

const Home: NextPage = () => {
  const news = useQuery([newsListQueryKey], () => getNewsListApi(), {
    staleTime: Infinity,
  });

  return (
    <HomeContainer>
      <TableContainer>
        <VerticalSlideTable />
        <TwoRowTable />
        {news.data?.data && (
          <VerticalListTable
            title='업계 기사'
            lists={news.data.data}
          />
        )}
        <BigImageTable />
      </TableContainer>
      <Aside>
        <div></div>
        <div></div>
        <div></div>
      </Aside>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 1280px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  align-items: flex-end;
  padding: 20px 40px;
  margin: 0px auto;
`

const TableContainer = styled.div`
  width: 766px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 14px 0px;
`

const Aside = styled.aside`
  position: sticky;
  bottom: 0;
  width: 420px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: max-content;
  gap: 14px 0px;
`

export default Home

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return { props : {}}
}
