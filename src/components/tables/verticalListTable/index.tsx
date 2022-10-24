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
  lists: BoardList[],
  showPagination: boolean,
  totalCount?: number,
}

const VerticalListTable: FC<Props> = ({
  title,
  lists,
  showPagination,
  totalCount
}) => {
  return (
    <Container>
      <TableHeaderLayout title={title} />
      {lists.map(list => <VerticalList key={list._id} list={list} />)}
      {showPagination && <Pagination totalCount={totalCount} />}
    </Container>
  );
};

const Container = styled.section`
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
`

export default VerticalListTable;
