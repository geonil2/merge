import React from 'react';
import AuthTable from "../tables/AuthTable";
import BannerTable from "../tables/bannerTable";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import AsyncBoundary from "../asyncBoundary";
import LoadingVerticalList from "../tables/verticalListTable/loadingVerticalList";
import {COLORS, MEDIA, SHADOWS} from "../../config/styles";

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
  ${MEDIA.tablet} {
    position: inherit;
    width: 100%;
    order: 2;
    grid-template-columns: auto 320px;
    gap: 14px 14px;
  }
  ${MEDIA.mobile} {
    ${MEDIA.mobile} {
      order: 2;
    grid-template-columns: repeat(1, 1fr);
  }
`

const ErrorElement = styled.div`
  width: 100%;
  height: 720px;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
`

export default AsideBar;
