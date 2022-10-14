import { useRouter } from 'next/router'
import {NextPage} from "next";
import TableLayout from "../../TableLayout";
import React from "react";
import styled from "@emotion/styled";
import ContentsDetail from "../../components/contentsDetail";

const QuestionDetailPage: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <TableLayout>
      <Container>
        <ContentsDetail />
      </Container>
    </TableLayout>
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
