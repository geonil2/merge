import React, {useCallback} from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
import {Board, BoardByIdQueryKey} from "../../../services/board/types";
import ReactTimeago from "react-timeago";
import nl2br from "react-nl2br";
import {Interweave} from "interweave";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postLikeApi} from "../../../services/like/api";
import {deleteBoardByIdApi, getBoardByIdApi} from "../../../services/board/api";
import updateDeleteButtonWrapper from "../../updateDeleteButtonWrapper";
import {popupModalContents} from "../../../resources/types";
import {useSetRecoilState} from "recoil";
import {basicPopupContentsAtom} from "../../../recoil/modal";
import {CommentByBoardIdQueryKey} from "../../../services/comment/types";
import {useRouter} from "next/router";
import UpdateDeleteButtonWrapper from "../../updateDeleteButtonWrapper";
import {debounce} from "lodash";

interface Props {
  contents: Board,
  userId?: string
}

const BoardContents: React.FC<Props> = ({ contents, userId }) => {
  const updateLike = useMutation(postLikeApi);
  const deleteBoard = useMutation(deleteBoardByIdApi);
  const queryClient = useQueryClient();
  const setPopupModalContents = useSetRecoilState(basicPopupContentsAtom);
  const router = useRouter();

  const onClickLike = useCallback(debounce(() => {
    updateLike.mutate(contents._id, {
      onSuccess: () => {
        queryClient.invalidateQueries([BoardByIdQueryKey, { boardId: contents._id }]);
      }
    })
  }, 200), [updateLike.data])

  const removeBoard = () => {
    deleteBoard.mutate(contents._id, {
      onSuccess: () => {
        router.push(`/${contents.category}`)
      }
    })
  }

  const onClickDeleteButton = () => {
    setPopupModalContents({...popupModalContents.deleteBoard, onClick: removeBoard})
  }

  const onClickUpdateButton = () => {
    router.push({
      pathname: `/writing/${contents._id}`,
      query: {
        id: contents._id,
        category: contents.category,
        title: contents.title,
        description: contents.description
      }
    }, `/writing/${contents._id}`)
  }

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
        <HeaderRight>
          <LikesCount>추천 {contents.likes?.length}</LikesCount>
          <UpdateDeleteButtonWrapper
            owner={contents.owner?._id}
            onClickUpdateButton={onClickUpdateButton}
            onClickDeleteButton={onClickDeleteButton}
          />
        </HeaderRight>
      </ContentsHeader>
      <ContentsBody>
        <TitleWrap>
          <Title>{contents.title}</Title>
          <Date><ReactTimeago date={contents.createdAt} /></Date>
        </TitleWrap>
        <Description><Interweave content={contents.description} /></Description>
        {userId && <Likes active={contents.likes?.includes(userId) ? true : false}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => onClickLike()}
          >
            <path
              d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/>
          </svg>
          <div>추천 {contents.likes?.length}</div>
        </Likes>}
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
  ${MEDIA.mobile} {
    padding: 0px 12px;
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
  margin-top: 5px;
`

const HeaderRight = styled.div`
  display: flex;
`

const LikesCount = styled.div`
  margin-right: 20px;
`
//Body
const ContentsBody = styled.div`
  padding: 24px;
  ${MEDIA.mobile} {
    padding: 12px;
  }
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Title = styled.div`
  width: calc(100% - 100px);
  line-height: 120%;
  font-weight: 700;
  font-size: 32px;
`

const Date = styled.div`
  width: 100px;
  font-size: 14px;
  text-align: end;
`

const Description = styled.div`
  width: 100%;
  max-height: 1000px;
  font-size: 14px;
  line-height: 160%;
  overflow: scroll;
  margin-top: 30px;
  img {
    max-width: 100%;
  }
`

interface LikesProp {
  active: boolean
}

const Likes = styled.div<LikesProp>`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
  > svg {
    width: 20px;
    fill: ${(prop: LikesProp) => prop.active ? COLORS.PRIMARY: COLORS.LIGHT_GRAY};
    margin-right: 5px;
    cursor: pointer;
  }
`


export default BoardContents;
