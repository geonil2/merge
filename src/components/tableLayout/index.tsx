import React, {HTMLAttributes, ReactNode} from 'react';
import styled from "@emotion/styled";
import AsideBar from "../asideBar";

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
  padding: 20px 40px;
  margin: 0px auto;
`


export default TableLayout;