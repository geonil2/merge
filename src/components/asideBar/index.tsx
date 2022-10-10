import React from 'react';
import AuthTable from "../tables/AuthTable";
import BannerTable from "../tables/bannerTable";
import VerticalListTable from "../tables/verticalListTable";
import styled from "@emotion/styled";
import {useQuery} from "@tanstack/react-query";
import {newsListQueryKey} from "../../services/types";
import {getNewsListApi} from "../../services/api";

const asideBar = () => {
  const news = useQuery([newsListQueryKey], () => getNewsListApi(), {
    staleTime: Infinity,
  });

  return (
    <Aside>
      <AuthTable />
      <BannerTable />
      {news.data?.data && (
        <VerticalListTable
          title='업계 기사'
          lists={news.data.data}
        />
      )}
    </Aside>
  );
};

const Aside = styled.aside`
  position: sticky;
  bottom: 0;
  width: 420px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: max-content;
  gap: 14px 0px;
`

export default asideBar;
