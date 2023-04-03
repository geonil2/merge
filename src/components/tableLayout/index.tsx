import React, { HTMLAttributes } from "react";
import { useRouter } from "next/router";

import * as S from "./style";

import AsideBar from "../asideBar";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TableLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname.includes("/writing" || "/signin") ? (
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

export default TableLayout;
