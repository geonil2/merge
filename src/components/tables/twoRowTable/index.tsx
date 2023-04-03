import React from "react";

import * as S from "./style";

import { Board } from "../../../services/board/types";

import TwoRowTableList from "./twoRowTableList";
import TableHeaderLayout from "../tableHeaderLayout";

interface Prop {
  list: Board[];
}

const TwoRowTable: React.FC<Prop> = ({ list }) => {
  return (
    <S.Container>
      <TableHeaderLayout title="인기글" />
      <S.TwoRowTableBody>
        {list.map((board, index) => (
          <TwoRowTableList {...board} key={board._id} index={index} />
        ))}
      </S.TwoRowTableBody>
    </S.Container>
  );
};

export default TwoRowTable;
