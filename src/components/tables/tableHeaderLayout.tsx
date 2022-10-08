import React, {FC} from 'react';
import styled from "@emotion/styled";
import {COLORS} from "../../config/styles";
import {useRouter} from "next/router";

interface Props {
  title: string,
  url?: string
}

const TableHeaderLayout: FC<Props> = ({ title, url }) => {
  const router = useRouter();

  return (
    <TableHeader>
      <p onClick={() => router.push(url ? url : '/')}>{title}</p>
    </TableHeader>
  );
};

const TableHeader = styled.div`
  display: flex;
  padding: 22px 24px;
  > p {
    color: ${COLORS.PRIMARY};
    font-weight: 800;
    border-right: 1px solid ${COLORS.DARK_GRAY};
    cursor: pointer;
  }
`

export default TableHeaderLayout;
