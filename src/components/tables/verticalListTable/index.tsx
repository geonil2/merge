import React, {FC} from 'react';
import TableHeaderLayout from "../tableHeaderLayout";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import VerticalList from "./verticalList";
import {useQuery} from "@tanstack/react-query";
import {getNewsListApi} from "../../../services/news/api";
import {BoardList} from "../../../services/board/types";
import Pagination from "../../pagination";

interface Props {
  title: string,
  list: BoardList[],
  showPagination: boolean,
  totalCount?: number,
}

const VerticalListTable: FC<Props> = ({
  title,
  list,
  showPagination,
  totalCount
}) => {
  console.log(list, 'list')
  return (
    <Container>
      <TableHeaderLayout title={title} />
      {list.map(list => <ListLayout><VerticalList key={list._id} list={list} /></ListLayout>)}
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
  border-bottom: 1px solid ${COLORS.GRAY};
  margin: 0px 24px;
  &:last-of-type {
    border: none;
  }
`

export default VerticalListTable;
