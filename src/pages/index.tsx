import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import styled from "@emotion/styled";
import VerticalSlideTable from "../components/tables/verticalSlideTable";
import TwoRowTable from "../components/tables/twoRowTable";
import BigImageTable from "../components/tables/bigImageTable";
import VerticalListTable from "../components/tables/verticalListTable";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <TableContainer>
        <VerticalSlideTable />
        <TwoRowTable />
        <BigImageTable />
        <VerticalListTable />
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
