import React, {useEffect} from 'react';
import AuthTable from "../tables/AuthTable";
import BannerTable from "../tables/bannerTable";
import VerticalListTable from "../tables/verticalListTable";
import styled from "@emotion/styled";
import {useQuery} from "@tanstack/react-query";
import {newsListQueryKey} from "../../services/news/types";
import {getNewsListApi} from "../../services/news/api";
import dynamic from "next/dynamic";
// const BannerTable = dynamic(import('../tables/bannerTable'), {
//   ssr: false
// })

const AsideBar = () => {
  const { data } = useQuery([newsListQueryKey], () => getNewsListApi(), {
    staleTime: Infinity,
  });

  return (
    <Aside>
      <AuthTable />
      <BannerTable />
      {data?.data && (
        <VerticalListTable
          title='업계 기사'
          list={data.data}
          showPagination={false}
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

export default AsideBar;
