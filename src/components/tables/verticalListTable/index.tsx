import React, {FC} from 'react';
import TableHeaderLayout from "../tableHeaderLayout";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import VerticalList from "./verticalList";
import {useQuery} from "@tanstack/react-query";
import {getNewsListApi} from "../../../services/news/api";
import {Board} from "../../../services/board/types";
import Pagination from "../../pagination";

interface Props {
  title: string,
  list: Board[],
  showPagination: boolean,
  totalCount?: number,
  tab?: string
}

const VerticalListTable: FC<Props> = ({
  title,
  list,
  showPagination,
  totalCount,
  tab
}) => {
  console.log(list, 'list')
  return (
    <Container>
      <TableHeaderLayout title={title} url={tab} />
      {list.map(list => <ListLayout key={list._id}><VerticalList list={list} /></ListLayout>)}
      {showPagination && <Pagination totalCount={totalCount} />}
    </Container>
  );
};

const Container = styled.section`
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
  padding-bottom: 22px;
`

const ListLayout = styled.div`
  height: 70px;
  border-bottom: 1px solid ${COLORS.GRAY};
  margin: 0px 24px;
  &:last-of-type {
    border: none;
  }
`

export default VerticalListTable;
