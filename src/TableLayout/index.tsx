import React, {ReactNode} from 'react';
import styled from "@emotion/styled";

interface Props {
  children: ReactNode
}

const Index = (props: Props) => {
  return (
    <TableLayout>
      {props.children}
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
