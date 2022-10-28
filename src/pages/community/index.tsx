import React from 'react';
import AsideBar from "../../components/asideBar";
import VerticalListTable from "../../components/tables/verticalListTable";
import styled from "@emotion/styled";
import TableLayout from "../../components/tableLayout";
import {NextPage} from "next";

export const QnA_mock = [
  { _id: 1, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 2, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 3, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 4, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 5, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 6, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 7, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 8, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 9, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 10, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 11, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 12, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 13, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 14, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 15, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 16, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 17, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 18, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 19, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
  { _id: 20, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, createdAt: "2022-10-05 11:24:32", updatedAt: "2022-10-05 11:24:32"},
]

const Question: NextPage = () => {
  return (
    // <TableLayout>
      <TableContainer>
        {/*<VerticalListTable*/}
        {/*  title='Q&A'*/}
        {/*  lists={QnA_mock}*/}
        {/*/>*/}
      </TableContainer>
    // </TableLayout>
  );
};
const TableContainer = styled.div`
  width: 766px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 14px 0px;
`

export default Question;
