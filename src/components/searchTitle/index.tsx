import React from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../config/styles";

interface Props {
  keyword: string | string[] | undefined,
  totalCount?: number
}

const SearchTitle: React.FC<Props> = ({ keyword= '', totalCount= 0 }) => {
  return (
    <Container>
      <InnerText>
        <SearchKeyword>&quot;{keyword}&quot; <span>에 대한 Merge 통합검색</span></SearchKeyword>
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
  box-shadow: ${SHADOWS.BASIC};
`

const InnerText = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: 120%;
  
  ${MEDIA.MOBILE} {
    justify-content: space-between;
    align-items: flex-start;
    font-size: 14px;
  }
`

const SearchKeyword = styled.div`
  color: ${COLORS.RED};
  
  > span {
    color: ${COLORS.BLACK};
    ${MEDIA.MOBILE} {
      display: block;
    }
  }
`

const Total = styled.div`
  font-size: 14px;
  color: ${COLORS.GRAY};
  margin-left: 10px;
`

export default SearchTitle;
