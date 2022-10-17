import React, {useEffect} from 'react';
import {useQuery} from "@tanstack/react-query";
import {newsListQueryKey} from "../../../services/types";
import {getNewsListApi} from "../../../services/news/api";
import TableHeaderLayout from "../tableHeaderLayout";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";

interface NewsList {
  description : string,
  link : string,
  originallink : string,
  pubDate : string,
  title : string,
}

const BigImageTable = () => {
  return (
    <Container>
      <TableHeaderLayout title="올해의 핫 이슈" />
      <BigImageTableBody>
        {/*{news.data?.news?.map((list: NewsList) =>*/}
        {/*  <BigImageTableList*/}
        {/*  />*/}
        {/*)}*/}
      </BigImageTableBody>
    </Container>
  );
};

const Container = styled.section`
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
`

const BigImageTableBody = styled.section`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(3, 1fr);
`

export default BigImageTable;
