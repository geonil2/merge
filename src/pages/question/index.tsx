import React, {useEffect, useState} from 'react';
import AsideBar from "../../components/asideBar";
import VerticalListTable from "../../components/tables/verticalListTable";
import styled from "@emotion/styled";
import TableLayout from "../../TableLayout";
import useBoardByCategory from "../../hooks/useBoardListByCateogry";
import {useRecoilState} from "recoil";
import {offsetAtom} from "../../recoil/offset";

export const QnA_mock = [
  { id: 1, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 2, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 3, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 4, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 5, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 6, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 7, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 8, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 9, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 10, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 11, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 12, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 13, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 14, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 15, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 16, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 17, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 18, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 19, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
  { id: 20, title: "React에서 useState사용법", description: "React에서 useState의 사용법을 알려주세요.", url: '/', category: "question", owner: "geonil@gmail.com", likes: 100, created_at: "2022-10-05 11:24:32", updated_at: "2022-10-05 11:24:32"},
]

const Question = () => {
  const [limit, setLimit] = useRecoilState(offsetAtom);
  const [offset, setOffset] = useRecoilState(offsetAtom);
  const { data } = useBoardByCategory({ category: 'question', limit, offset })

  useEffect(() => {
    console.log(data, 'data')
  }, [data])

  return (
    // <TableLayout>
      <TableContainer>
        {!!data?.lists.length &&
          <VerticalListTable
            title='Q&A'
            lists={data.lists}
            showPagination={true}
            totalCount={data.total}
          />
        }
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
  align-self: flex-start;
  gap: 14px 0px;
`

export default Question;
