import React from 'react';
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../config/styles";
import AsyncBoundary from "../asyncBoundary";
import AuthTable from "../tables/authTable";
import BannerTable from "../tables/bannerTable";
import LoadingVerticalList from "../tables/verticalListTable/loadingVerticalList";
import ErrorVerticalList from "../tables/verticalListTable/errorVerticalList";

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
        errorFallback={<ErrorVerticalList />}
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
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: max-content;
  gap: 14px 0px;
  ${MEDIA.TABLET} {
    position: inherit;
    width: 100%;
    order: 2;
    grid-template-columns: auto 320px;
    gap: 14px 14px;
  }
  ${MEDIA.MOBILE} {
    ${MEDIA.MOBILE} {
      order: 2;
    grid-template-columns: repeat(1, 1fr);
  }
`

export default AsideBar;
