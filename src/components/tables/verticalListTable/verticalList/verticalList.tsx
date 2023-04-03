import React, { FC } from "react";
import Link from "next/link";
import ReactTimeago from "react-timeago";
import { Interweave } from "interweave";
import { polyfill } from "interweave-ssr";

import * as S from "./style";

import { Board } from "../../../../services/board/types";
import ListThumbnail from "../../../listThumbnail";

/*
 * For server side rendering
 * https://interweave.dev/docs/ssr/
 */
polyfill();

interface Prop {
  list: Board;
}

const VerticalList: React.FC<Prop> = ({ list }) => {
  const { _id, title, description, category, url, owner, createdAt } = list;

  return (
    <Link href={url ? url : `/${category}/${_id}`} passHref>
      <a target={url ? "_blank" : "_self"}>
        <S.List>
          {/*{image && <Image src={image} alt="Contents thumbnail image"/>}*/}
          <ListThumbnail description={description} width={50} />
          <div style={{ width: "100%" }}>
            <S.TextTopArea>
              <p>
                <Interweave content={title} />
              </p>
            </S.TextTopArea>
            <S.TextBotArea>
              {owner && <S.Owner>{owner.email}</S.Owner>}
              {/*{views && <Likes>Likes {views}</Likes>}*/}
              <ReactTimeago date={createdAt} />
            </S.TextBotArea>
          </div>
        </S.List>
      </a>
    </Link>
  );
};

export default VerticalList;
