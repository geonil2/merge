import React, {FC} from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA} from "../../config/styles";
import {useRouter} from "next/router";
import Link from "next/link";

interface Props {
  title: string,
  url?: string
}

const TableHeaderLayout: FC<Props> = ({ title, url }) => {
  const router = useRouter();

  return (
    <TableHeader>
      <p onClick={() => url && router.push(url)}>{title}</p>
      {url &&
        <Link href={url}>
          <MoveToCategory src="/images/icons/right_arrow.svg" alt='Move to category page' />
        </Link>
      }
    </TableHeader>
  );
};

const TableHeader = styled.div`
  display: flex;
  padding: 22px 24px;
  > p {
    color: ${COLORS.PRIMARY};
    font-weight: 800;
  }
  ${MEDIA.MOBILE} {
    padding: 22px 10px;
  }
`

const MoveToCategory = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 8px;
  cursor: pointer;
`

export default TableHeaderLayout;
