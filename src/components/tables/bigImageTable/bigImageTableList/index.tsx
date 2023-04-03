import React from "react";

import * as S from "./style";

import { BigImageTableListType } from "../index";

interface Props {
  list: BigImageTableListType;
}

const BigImageTableList: React.FC<Props> = ({ list }) => {
  const { date, tag, title, image, url } = list;

  return (
    <S.A href={url} target="_blank">
      <S.ImageWrap>
        <img src={image} alt="Conference image" />
      </S.ImageWrap>

      <S.Tag>
        {tag.map((tagList: string, index) => (
          <p key={index}>{tagList}</p>
        ))}
      </S.Tag>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
    </S.A>
  );
};

export default BigImageTableList;
