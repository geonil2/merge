import React, {useEffect} from 'react';
import TableLeftWrapper from "../../components/tables/tableLeftWrapper";
import VerticalListTable from "../../components/tables/verticalListTable";
import {useQuery} from "@tanstack/react-query";
import {SearchQueryKey} from "../../services/search/types";
import {getSearchApi} from "../../services/search/api";
import {useRecoilValue} from "recoil";
import {offsetAtom} from "../../recoil/offset";
import {DEFAULT_LISTS_COUNT} from "../../components/pagination";
import {useRouter} from "next/router";
import SearchTitle from "../../components/searchTitle";

const Search = () => {
  const offset = useRecoilValue(offsetAtom);
  const router = useRouter();
  const searchKeyword = router.query.p;

  const { data } = useQuery(
    [SearchQueryKey, searchKeyword, offset, DEFAULT_LISTS_COUNT],
    () => getSearchApi(searchKeyword, offset, DEFAULT_LISTS_COUNT),
    { enabled: !!searchKeyword }
  );

  return (
    <TableLeftWrapper>
      <SearchTitle keyword={searchKeyword} totalCount={data?.total} />
      {!!data?.list && data.list.length !== 0 &&
        <VerticalListTable
          title='통합검색'
          list={data.list}
          showPagination={data.total > DEFAULT_LISTS_COUNT}
          totalCount={data.total}
        />
      }
    </TableLeftWrapper>
  );
};

export default Search;
