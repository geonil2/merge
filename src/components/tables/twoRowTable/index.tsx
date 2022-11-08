import React from 'react';
import TwoRowTableList from "./twoRowTableList";
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
import TableHeaderLayout from "../tableHeaderLayout";
import {Board} from "../../../services/board/types";
import Link from "next/link";

interface Prop {
  list: Board[]
}

const TwoRowTable: React.FC<Prop> = ({ list }) => {
  return (
    <Container>
      <TableHeaderLayout title="인기글" />
      <TwoRowTableBody>
        {list.map((board, index) => (
          <TwoRowTableList
            {...board}
            key={board._id}
            index={index}
          />
        ))}
      </TwoRowTableBody>
    </Container>
  );
};

const Container = styled.section`
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
`

const TwoRowTableBody = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(2, 1fr);
  ${MEDIA.mobile} {
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`

export default TwoRowTable;
