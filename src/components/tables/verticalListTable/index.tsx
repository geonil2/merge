import React, {FC} from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
import {Board} from "../../../services/board/types";
import VerticalList from "./verticalList";
import TableHeaderLayout from "../tableHeaderLayout";
import Pagination from "../../pagination";

interface Props {
  title: string,
  list: Board[],
  showPagination: boolean,
  totalCount?: number,
  tab?: string,
  className?: string
}

const VerticalListTable: FC<Props> = ({
  title,
  list,
  showPagination,
  totalCount,
  tab,
  className
}) => {
  return (
    <Container className={className}>
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
  ${MEDIA.tablet} {
    &.newsList {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  ${MEDIA.mobile} {
    &.newsList {
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
  }
`

const ListLayout = styled.div`
  height: 70px;
  border-bottom: 1px solid ${COLORS.GRAY};
  margin: 0px 24px;
  &:last-of-type {
    border: none;
  }
  ${MEDIA.mobile} {
    margin: 0px 10px;
  }
`

export default VerticalListTable;
