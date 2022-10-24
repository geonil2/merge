import React from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import ReactTimeago from "react-timeago";
import {Comment} from "../../../services/comment/types";

// const comments = [
//   { id: 1, owner: "geonil kim", comment: "good!!", date: '2022-10-10 10:11' },
//   { id: 2, owner: "geonil kim", comment: "good!!", date: '2022-10-10 10:11' },
//   { id: 3, owner: "geonil kim", comment: "good!!", date: '2022-10-10 10:11' },
//   { id: 4, owner: "geonil kim", comment: "good!!", date: '2022-10-10 10:11' },
//   { id: 5, owner: "geonil kim", comment: "good!!", date: '2022-10-10 10:11' },
//   { id: 6, owner: "geonil kim", comment: "good!!", date: '2022-10-10 10:11' },
//   { id: 7, owner: "geonil kim", comment: "good!!", date: '2022-10-10 10:11' },
//   { id: 8, owner: "geonil kim", comment: "good!!", date: '2022-10-10 10:11' },
// ]

interface Prop {
  comments: Comment[]
}

const CommentList: React.FC<Prop> = ({ comments }) => {
  console.log(comments)
  return (
    <Container>
      <p>Comments</p>
      {comments.map(comment => (
        <CommentWrap>
          <Thumbnail src={comment.user.image} />
          <CommentInfoWrap>
            <CommentInfo>
              <CommentInfoLeft>
                <UserName>{comment.user.name}</UserName>
                <ReactTimeago date={comment.updatedAt} />
              </CommentInfoLeft>
              <UpdateButton xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
              </UpdateButton>
            </CommentInfo>
            <Commentarea>
              <textarea maxLength={200} disabled={true}>{comment.contents}</textarea>
            </Commentarea>
          </CommentInfoWrap>
        </CommentWrap>
      ))}
    </Container>
  );
};

const Container = styled.div`
  box-shadow: ${SHADOWS.basic};
  padding: 0px 24px;
  > p {
    font-weight: 700;
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px solid ${COLORS.GRAY};
  }
`

const CommentWrap = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.GRAY};
  padding: 20px 24px;
`

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const CommentInfoWrap = styled.div`
  width: 100%;
  margin-left: 20px;
`

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

const CommentInfoLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`

const UserName = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin-right: 10px;
`

const UpdateButton = styled.svg`
  width: 12px;
  height: 12px;
  cursor: pointer;
`

const Commentarea = styled.div`
  width: 100%;
  > textarea {
    width: 100%;
    border: none;
    margin-top: 10px;
    resize: none;
  }
`


export default CommentList;
