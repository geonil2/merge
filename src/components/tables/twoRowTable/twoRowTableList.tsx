import React, {FC} from 'react';
import Image from "next/image";
import styled from "@emotion/styled";
import {COLORS} from "../../../config/styles";

interface Props {
  key: number
  id: number,
  url: string,
  title: string,
  count: number,
}

const TwoRowTableList: FC<Props> = ({
  id,
  url,
  title,
  count
}) => {
  return (
    <Container>
      <ListIndex>{id.toString().length === 1 ? `0${id}` : id}</ListIndex>
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
  &:nth-child(odd) {
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
