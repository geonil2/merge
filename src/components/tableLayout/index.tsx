import React, {HTMLAttributes, ReactNode} from 'react';
import styled from "@emotion/styled";
import AsideBar from "../asideBar";
import {MEDIA} from "../../config/styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
}

const TableLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      {children}
      <AsideBar />
    </Layout>
  );
};

const Layout = styled.div`
  width: 1280px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  align-items: flex-end;
  padding: 100px 40px 20px 40px;
  margin: 0px auto;
  ${MEDIA.tablet} {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    padding: 100px 20px 10px 20px;
  }
  ${MEDIA.mobile} {
    padding: 100px 10px 10px 10px;
  }
`


export default TableLayout;
