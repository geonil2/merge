import React from 'react';
import styled from "@emotion/styled";
import {BigImageTableListType} from "./index";
import {COLORS, MEDIA} from "../../../config/styles";

interface Props {
  list: BigImageTableListType
}

const BigImageTableList: React.FC<Props> = ({ list }) => {
  const { date, tag, title, image, url } = list;
  return (
    <A href={url} target='_blank'>
      <img src={image} />
      <Tag>
        {tag.map((tagList: string, index) => (
          <p key={index}>{tagList}</p>
        ))}
      </Tag>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </A>
  );
};

const A = styled.a`
  width: 32%;
  img {
    width: 100%;
    //height: 140px;
    border-radius: 6px;
  }
  ${MEDIA.mobile} {
    width: 48%;
  }
`

const Tag = styled.div`
 display: flex;
  > p {
    display: flex;
    flex-shrink: 1;
    align-items: center;
    min-width: 0px;
    font-size: 12px;
    line-height: 20px;
    color: ${COLORS.WHITE};;
    background: ${COLORS.PRIMARY};
    border-radius: 3px;
    padding-left: 6px;
    padding-right: 6px;
    margin: 6px 6px 0px 0px;
  }
`

const Title = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  margin-top: 5px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`

const Date = styled.div`
  font-size: 14px;
  color: ${COLORS.GRAY};
  margin-top: 5px;
`

export default BigImageTableList;
