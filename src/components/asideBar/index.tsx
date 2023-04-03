import React from "react";
import dynamic from "next/dynamic";

import * as S from "./style";

import AsyncBoundary from "../asyncBoundary";

import AuthTable from "../tables/authTable";
import BannerTable from "../tables/bannerTable";
import LoadingVerticalList from "../tables/verticalListTable/loadingVerticalList";
import ErrorVerticalList from "../tables/verticalListTable/errorVerticalList";

const NewsListTable = dynamic(() => import("../tables/newsListTable"), {
  suspense: true,
});

const AsideBar = () => {
  return (
    <S.Aside>
      <AuthTable />
      <BannerTable />
      <AsyncBoundary
        errorFallback={<ErrorVerticalList />}
        suspenseFallback={<LoadingVerticalList />}
      >
        <NewsListTable />
      </AsyncBoundary>
    </S.Aside>
  );
};

export default AsideBar;
