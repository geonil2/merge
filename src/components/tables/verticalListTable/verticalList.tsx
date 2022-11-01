import React, {FC} from 'react';
import Image from "next/image";
import styled from "@emotion/styled";
import ReactTimeago from "react-timeago";
import Link from "next/link";
import {BoardList} from "../../../services/board/types";
import {COLORS} from "../../../config/styles";
import {Interweave} from "interweave";
import {polyfill} from "interweave-ssr";

/*
* For server side rendering
* https://interweave.dev/docs/ssr/
 */
polyfill();

const VerticalList= ({ list } : { list : BoardList }) => {
  const { _id, title, image, category, url, views, owner, createdAt } = list;
  return (
    <Link href={category ? `/${category}/${_id}` : url} passHref>
      <a target={category ? "_self" : "_blank"}>
        <List>
          {image && <Image src={image} alt="Contents thumbnail image"/>}
          <div>
            <TextTopArea>
              <p><Interweave content={title} /></p>
            </TextTopArea>
            <TextBotArea>
              {owner && <Owner>{owner.email}</Owner>}
              {views && <Likes>Likes {views}</Likes>}
              <ReactTimeago date={createdAt} />
            </TextBotArea>
          </div>
        </List>
      </a>
    </Link>
  );
};

const List = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0px;
  > img {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }
`

const TextTopArea = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  padding: 3px 0px;
  margin-bottom: 8px;
`

const TextBotArea = styled.div`
  display: flex;
  font-size: 12px;
`

const Owner = styled.span`
  font-weight: 700;
  margin-right: 10px;
`

const Likes = styled.span`
`

export default VerticalList;
