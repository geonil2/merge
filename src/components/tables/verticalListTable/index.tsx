import React, { FC } from "react";

import * as S from "./style";

import { Board } from "../../../services/board/types";

import VerticalList from "./verticalList/verticalList";
import TableHeaderLayout from "../tableHeaderLayout";
import Pagination from "../../pagination";

interface Props {
  title: string;
  list: Board[];
  showPagination: boolean;
  totalCount?: number;
  tab?: string;
  className?: string;
}

const VerticalListTable: FC<Props> = ({
  title,
  list,
  showPagination,
  totalCount,
  tab,
  className,
}) => {
  return (
    <S.Container className={className}>
      <TableHeaderLayout title={title} url={tab} />
      {list.map((list) => (
        <S.ListLayout key={list._id}>
          <VerticalList list={list} />
        </S.ListLayout>
      ))}
      {showPagination && <Pagination totalCount={totalCount} />}
    </S.Container>
  );
};

export default VerticalListTable;
