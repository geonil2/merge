import React from "react";

import * as S from "./style";

import TableHeaderLayout from "../tableHeaderLayout";
import BigImageTableList from "./bigImageTableList";

interface Props {
  list: BigImageTableListType[];
}

export type BigImageTableListType = {
  id: string;
  date: string;
  tag: string[];
  title: string;
  image: string;
  url: string;
};

const BigImageTable: React.FC<Props> = ({ list }) => {
  return (
    <S.Container>
      <TableHeaderLayout title="컨퍼런스" />
      <S.BigImageTableBody>
        {list.map((list) => (
          <BigImageTableList key={list.id} list={list} />
        ))}
      </S.BigImageTableBody>
    </S.Container>
  );
};

export default BigImageTable;
