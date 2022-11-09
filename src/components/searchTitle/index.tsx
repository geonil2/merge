import React from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../config/styles";

interface Props {
  keyword: string | string[] | undefined,
  totalCount?: number
}

const SearchTitle: React.FC<Props> = ({ keyword= '', totalCount= 0 }) => {
  return (
    <Container>
      <InnerText>
        <SearchKeyword>`${"${keyword}"}`</SearchKeyword>
        에 대한 Merge 통합검색
        <Total>총 {totalCount}건</Total>
      </InnerText>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  font-size: 20px;
  padding: 30px 27px;
  background-color: white;
  box-shadow: ${SHADOWS.basic};
`

const InnerText = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
`

const SearchKeyword = styled.div`
  color: ${COLORS.RED};
`

const Total = styled.div`
  font-size: 14px;
  color: ${COLORS.GRAY};
  margin-left: 10px;
`

export default SearchTitle;
