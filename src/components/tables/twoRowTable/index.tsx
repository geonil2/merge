import React from 'react';
import styled from "@emotion/styled";
import {Board} from "../../../services/board/types";
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
import TwoRowTableList from "./twoRowTableList";
import TableHeaderLayout from "../tableHeaderLayout";

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
  width: 766px;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
  ${MEDIA.tablet} {
    width: calc(100vw - 40px);
  }
  ${MEDIA.mobile} {
    width: calc(100vw - 20px);
  }
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
