import React, {useEffect} from 'react';
import AuthTable from "../tables/AuthTable";
import BannerTable from "../tables/bannerTable";
import VerticalListTable from "../tables/verticalListTable";
import styled from "@emotion/styled";
import {useQuery} from "@tanstack/react-query";
import {newsListQueryKey} from "../../services/news/types";
import {getNewsListApi} from "../../services/news/api";
import dynamic from "next/dynamic";
import {Suspense} from "react";
import AsyncBoundary from "../asyncBoundary";
import ErrorBoundary from "../asyncBoundary/errorBoundary";
import LoadingVerticalList from "../tables/verticalListTable/loadingVerticalList";
import {COLORS, SHADOWS} from "../../config/styles";
// import NewsListTable from "../tables/newsListTable";
// const BannerTable = dynamic(import('../tables/bannerTable'), {
//   ssr: false
// })

const NewsListTable = dynamic(
  () => import('../tables/newsListTable'),
  { suspense: true }
);

const AsideBar = () => {
  return (
    <Aside>
      <AuthTable />
      <BannerTable />
      <AsyncBoundary
        errorFallback={<ErrorElement></ErrorElement>}
        suspenseFallback={<LoadingVerticalList />}
      >
        <NewsListTable />
      </AsyncBoundary>
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

const ErrorElement = styled.div`
  width: 100%;
  height: 720px;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
`

export default AsideBar;
