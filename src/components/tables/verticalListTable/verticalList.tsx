import React, {FC} from 'react';
import Image from "next/image";
import styled from "@emotion/styled";
import ReactTimeago from "react-timeago";
import Link from "next/link";
import {Board} from "../../../services/board/types";
import {COLORS} from "../../../config/styles";
import {Interweave} from "interweave";
import {polyfill} from "interweave-ssr";
import ListThumbnail from "../../listThumbnail";

/*
* For server side rendering
* https://interweave.dev/docs/ssr/
 */
polyfill();

interface Prop {
  list: Board
}

const VerticalList: React.FC<Prop> = ({ list }) => {
  const { _id, title, description, category, url, owner, createdAt } = list;

  return (
    <Link href={url ? url : `/${category}/${_id}`} passHref>
      <a target={url ? "_blank" : "_self"}>
        <List>
          {/*{image && <Image src={image} alt="Contents thumbnail image"/>}*/}
          <ListThumbnail description={description} width={50} />
          <TextArea>
            <TextTopArea>
              <p><Interweave content={title} /></p>
            </TextTopArea>
            <TextBotArea>
              {owner && <Owner>{owner.email}</Owner>}
              {/*{views && <Likes>Likes {views}</Likes>}*/}
              <ReactTimeago date={createdAt} />
            </TextBotArea>
          </TextArea>
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
  
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`

const TextArea = styled.div`
  margin-left: 10px;
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

export default VerticalList;
