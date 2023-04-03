import React, { HTMLAttributes } from "react";

import * as S from "./style";

import AsideBar from "../asideBar";

interface Props extends HTMLAttributes<HTMLDivElement> {
  hasAsideBar: boolean;
}

const MainLayout: React.FC<Props> = ({ hasAsideBar, children }) => {
  return (
    <>
      {!hasAsideBar ? (
        children
      ) : (
        <S.Layout>
          {children}
          <AsideBar />
        </S.Layout>
      )}
    </>
  );
};

export default MainLayout;
