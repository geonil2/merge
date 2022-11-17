import React from "react";
import {useQuery} from "@tanstack/react-query";
import {newsListQueryKey} from "../../../services/news/types";
import {getNewsListApi} from "../../../services/news/api";
import VerticalListTable from "../verticalListTable";

const NewsListTable = () => {
  const newsList = useQuery([newsListQueryKey], () => getNewsListApi(), {
    suspense: true,
    staleTime: Infinity,
  });

  return (
    <>
      {newsList.data && (
        <VerticalListTable
          title='업계 기사'
          list={newsList.data}
          showPagination={false}
          className='newsList'
        />
      )}
    </>
  );
};

export default NewsListTable;
