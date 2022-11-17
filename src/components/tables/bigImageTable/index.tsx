import React from 'react';
import TableHeaderLayout from "../tableHeaderLayout";
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
import BigImageTableList from "./bigImageTableList";

interface Props {
  list: BigImageTableListType[]
}

export type BigImageTableListType = {
  id: string,
  date: string,
  tag: string[],
  title: string,
  image: string
  url: string
}

const BigImageTable: React.FC<Props> = ({ list }) => {
  return (
    <Container>
      <TableHeaderLayout title="컨퍼런스" />
      <BigImageTableBody>
        {list.map(list => <BigImageTableList key={list.id} list={list} />)}
      </BigImageTableBody>
    </Container>
  );
};

const Container = styled.section`
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
`

const BigImageTableBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 24px;
  padding-bottom: 24px;
  ${MEDIA.mobile} {
    flex-wrap: wrap;
    margin: 0px 10px;
  }
`

export default BigImageTable;
