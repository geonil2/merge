import React from "react";

import * as S from "./style";

interface Props {
  keyword: string | string[] | undefined;
  totalCount?: number;
}

const SearchTitle: React.FC<Props> = ({ keyword = "", totalCount = 0 }) => {
  return (
    <S.Container>
      <S.InnerText>
        <S.SearchKeyword>
          &quot;{keyword}&quot; <span>에 대한 Merge 통합검색</span>
        </S.SearchKeyword>
        <S.Total>총 {totalCount}건</S.Total>
      </S.InnerText>
    </S.Container>
  );
};

export default SearchTitle;
