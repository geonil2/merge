import React, {FC} from 'react';
import Image from "next/image";
import styled from "@emotion/styled";
import {COLORS} from "../../../config/styles";
import {Board} from "../../../services/board/types";
import Link from "next/link";
import {Interweave} from "interweave";
import ListThumbnail from "../../listThumbnail";

interface Props extends Board {
  index: number
}

const TwoRowTableList: FC<Props> = ({
  index,
  _id,
  title,
  category,
  description,
  comment,
}) => {
  return (
    <Link href={`/${category}/${_id}`}>
      <ATagWrap>
        <Container>
          <ListIndex>{index == 9 ? index+1  : `0${index+1}`}</ListIndex>
          <ListThumbnail description={description} width={40} />
          <TextWrap>
            <p>{title}</p>
            <span>({comment})</span>
            <Image
              src='/images/icons/popular.svg'
              width={20}
              height={20}
              alt="Best Popular icon"
            />
          </TextWrap>
        </Container>
      </ATagWrap>
    </Link>
  );
};

const ATagWrap = styled.a`
  height: 60px;
  cursor: pointer;
`

const Container = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLORS.GRAY};
  padding: 10px 24px;
  &:nth-of-type(odd) {
    border-right: 1px solid ${COLORS.GRAY};
  }
`

const ListIndex = styled.span`
  width: 42px;
  font-weight: 700;
`

const TextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  margin: 10px;
  > p {
    max-width: 185px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-right: 6px;
  }
  > span {
    margin-right: 6px;
  }
  > img {
    width: 20px;
    height: 20px;
  }
`

export default TwoRowTableList;
