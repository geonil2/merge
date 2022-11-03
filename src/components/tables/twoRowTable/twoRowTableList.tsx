import React, {FC} from 'react';
import Image from "next/image";
import styled from "@emotion/styled";
import {COLORS} from "../../../config/styles";
import {Board} from "../../../services/board/types";

interface Props extends Board{
}

const TwoRowTableList: FC<Props> = ({
  _id,
  title,
  description,
}) => {
  return (
    <Container>
      <ListIndex>{_id.length === 1 ? `0${_id}` : _id}</ListIndex>
      <Thum src={url} alt="Best Popular Articles image"/>
      <TextWrap>
        <p>{title}</p>
        <span>({count})</span>
        <Image
          src='/images/icons/popular.svg'
          width={20}
          height={20}
          alt="Best Popular icon"
        />
      </TextWrap>
    </Container>
  );
};

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

const Thum = styled.img`
  width: 40px;
  height: 40px;
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
