import React, {FC} from 'react';
import Image from "next/image";
import styled from "@emotion/styled";
import ReactTimeago from "react-timeago";
import Link from "next/link";
import {VerticalTableList} from "../../../services/types";
import {COLORS} from "../../../config/styles";

const VerticalList= ({ list } : { list : VerticalTableList }) => {
  const { title, image, url, views, userName, date } = list;
  return (
    <Link href={url} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <List>
          {image && <Image src={image} alt="Contents thumbnail image"/>}
          <div>
            <TextTopArea>
              <p>{title}</p>
            </TextTopArea>
            <TextBotArea>
              {userName && <UserName>{userName}</UserName>}
              {views && <Likes>Likes {views}</Likes>}
              <ReactTimeago date={date} />
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
  border-bottom: 1px solid ${COLORS.LIGHT_GRAY};
  padding: 10px 0px;
  margin: 0px 24px;
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
  padding: 3px 0px;
  margin-bottom: 8px;
`

const TextBotArea = styled.div`
  display: flex;
  font-size: 12px;
`

const UserName = styled.span`
  font-weight: 700;
  margin-right: 10px;
`

const Likes = styled.span`
`

export default VerticalList;
