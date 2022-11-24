import React, {FC} from 'react';
import Link from "next/link";
import styled from "@emotion/styled";
import ReactTimeago from "react-timeago";
import {Interweave} from "interweave";
import {polyfill} from "interweave-ssr";
import {Board} from "../../../services/board/types";
import ListThumbnail from "../../listThumbnail";

/*
* For server side rendering
* https://interweave.dev/docs/ssr/
 */
polyfill();

interface Prop {
  list: Board,
}

const VerticalList: React.FC<Prop> = ({ list }) => {
  const { _id, title, description, category, url, owner, createdAt } = list;

  return (
    <Link href={url ? url : `/${category}/${_id}`} passHref>
      <a target={url ? "_blank" : "_self"}>
        <List>
          {/*{image && <Image src={image} alt="Contents thumbnail image"/>}*/}
          <ListThumbnail description={description} width={50} />
          <div style={{ width : "100%" }}>
            <TextTopArea>
              <p><Interweave content={title} /></p>
            </TextTopArea>
            <TextBotArea>
              {owner && <Owner>{owner.email}</Owner>}
              {/*{views && <Likes>Likes {views}</Likes>}*/}
              <ReactTimeago date={createdAt} />
            </TextBotArea>
          </div>
        </List>
      </a>
    </Link>
  );
};

const List = styled.div`
  height: 100%;
  display: flex; //
  justify-content: flex-start; //
  align-items: center; //
  img {
    width: 50px;
    height: 50px;
  }
`

const TextTopArea = styled.div`
  width: 100%; //
  display: flex; //
  flex-direction: column; //
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  padding: 3px 0px;
  margin-bottom: 8px;
  & span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const TextBotArea = styled.div`
  display: flex;
  font-size: 12px;
`

const Owner = styled.span`
  font-weight: 700;
  margin-right: 10px;
`

export default VerticalList;
