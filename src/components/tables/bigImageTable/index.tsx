import React, {useEffect} from 'react';
import TableHeaderLayout from "../tableHeaderLayout";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import BigImageTableList from "./bigImageTableList";

interface Props {
  lists: BigImageTableListType[]
}

export type BigImageTableListType = {
  date: string,
  tag: string[],
  title: string,
  image: string
  url: string
}

const BigImageTable: React.FC<Props> = ({ lists }) => {
  return (
    <Container>
      <TableHeaderLayout title="컨퍼런스" />
      <BigImageTableBody>
        {lists.map((list: BigImageTableListType) =>
          <BigImageTableList
            key={list.title}
            date={list.date}
            tag={list.tag}
            title={list.title}
            image={list.image}
            url={list.url}
          />
        )}
      </BigImageTableBody>
    </Container>
  );
};

const Container = styled.section`
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
`

const BigImageTableBody = styled.section`
  display: flex;
  justify-content: space-between;
  //grid-template-rows: repeat(1, 1fr);
  //grid-template-columns: repeat(3, 1fr);
  margin: 0px 24px;
  padding-bottom: 24px;
`

export default BigImageTable;
