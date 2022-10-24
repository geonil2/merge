import { useRouter } from 'next/router'
import {GetServerSidePropsContext, NextPage} from "next";
import TableLayout from "../../TableLayout";
import React, {useEffect} from "react";
import styled from "@emotion/styled";
import ContentsDetail from "../../components/contentsDetail";
import {useQuery} from "@tanstack/react-query";
import {BoardByIdQueryKey} from "../../services/board/types";
import {getBoardById} from "../../services/board/api";

interface Prop {
  id: string
}

const QuestionDetailPage: NextPage<Prop> = ({ id }) => {
  return (
    <Container>
      <ContentsDetail boardId={id} />
    </Container>
  );
};

const Container = styled.div`
  width: 766px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 14px 0px;
`

export default QuestionDetailPage


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context;
  const { id } = query;
  return {
    props: {
      id,
    },
  };
};

interface Prop {
  Id: string;
}
