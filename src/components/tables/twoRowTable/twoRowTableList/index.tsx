import React, { FC } from "react";
import Link from "next/link";

import * as S from "./style";

import { Board } from "../../../../services/board/types";
import ListThumbnail from "../../../listThumbnail";

interface Props extends Board {
  index: number;
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
      <S.ATagWrap>
        <S.Container>
          <S.ListIndex>{index == 9 ? index + 1 : `0${index + 1}`}</S.ListIndex>
          <ListThumbnail description={description} width={40} />
          <S.TextWrap>
            <p>{title}</p>
            <span>({comment})</span>
            <S.PopularImage
              src="/images/icons/popular.svg"
              alt="Best Popular icon"
            />
          </S.TextWrap>
        </S.Container>
      </S.ATagWrap>
    </Link>
  );
};

export default TwoRowTableList;
