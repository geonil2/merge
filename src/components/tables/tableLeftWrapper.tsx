import React, {HTMLAttributes, ReactNode} from 'react';
import styled from "@emotion/styled";

interface Props extends HTMLAttributes<HTMLDivElement> {
}

const TableLeftWrapper: React.FC<Props> = ({
  children,
  ...props
}) => {
  return (
    <TableContainer {...props}>
      {children}
    </TableContainer>
  );
};

const TableContainer = styled.div`
  width: 766px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  align-self: flex-start;
  gap: 14px 0px;
`

export default TableLeftWrapper;
