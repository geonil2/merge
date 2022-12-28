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
  className?: string,
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
  width: 766px;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
  padding-bottom: 22px;
  &.newsList {
    width: 420px;
  }
  ${MEDIA.TABLET} {
    width: calc(100vw - 40px);
    &.newsList {
      width: calc(100vw - 40px);
      grid-column-start: 1;
      grid-column-end: 3;
    }
  ${MEDIA.MOBILE} {
    width: calc(100vw - 20px);
    &.newsList {
      width: calc(100vw - 20px);
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
  ${MEDIA.MOBILE} {
    margin: 0px 10px;
  }
`

export default VerticalListTable;
