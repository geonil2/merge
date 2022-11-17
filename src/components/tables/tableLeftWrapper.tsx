import React, {HTMLAttributes} from 'react';
import styled from "@emotion/styled";
import {MEDIA} from "../../config/styles";

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
  ${MEDIA.tablet} {
    width: 100%;
    order: 1;
  }
`

export default TableLeftWrapper;
