import React from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import {BoardList} from "../../../services/board/types";
import ReactTimeago from "react-timeago";
import nl2br from "react-nl2br";
import {Interweave} from "interweave";

interface Props {
  contents: BoardList
}

const Contents: React.FC<Props> = ({ contents }) => {
  return (
    <Container>
      <p>Question</p>
      <ContentsHeader>
        <Owner>
          <Thumbnail src={contents.owner?.image} />
          <UserText>
            <p>{contents.owner?.name}</p>
            <Email>{contents.owner?.email}</Email>
          </UserText>
        </Owner>
        <Likes>Likes {contents.likes}</Likes>
      </ContentsHeader>
      <ContentsBody>
        <TitleWrap>
          <Title>{contents.title}</Title>
          <Date><ReactTimeago date={contents.createdAt} /></Date>
        </TitleWrap>
        <Description><Interweave content={contents.description} /></Description>
      </ContentsBody>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 24px;
  box-shadow: ${SHADOWS.basic};
  > p {
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid ${COLORS.GRAY};
  }
`

const ContentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font-size: 14px;
  border-bottom: 1px solid ${COLORS.GRAY};
`

const Owner = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Thumbnail = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`

const Email = styled.p`
  color: ${COLORS.GRAY};
`

const Likes = styled.div`
`
//Body
const ContentsBody = styled.div`
  padding: 24px;
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
`

const Date = styled.div`
  font-size: 14px;
`

const Description = styled.div`
  line-height: 170%;
  margin-top: 30px;
`


export default Contents;
