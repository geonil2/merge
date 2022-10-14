import React, {ReactNode} from 'react';
import styled from "@emotion/styled";
import AsideBar from "../components/asideBar";

interface Props {
  children: ReactNode
}

const Index = (props: Props) => {
  return (
    <TableLayout>
      {props.children}
      <AsideBar />
    </TableLayout>
  );
};

const TableLayout = styled.div`
  width: 1280px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  align-items: flex-end;
  padding: 20px 40px;
  margin: 0px auto;
`


export default Index;
