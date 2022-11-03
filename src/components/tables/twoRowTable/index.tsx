import React from 'react';
import TwoRowTableList from "./twoRowTableList";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import TableHeaderLayout from "../tableHeaderLayout";
import {Board} from "../../../services/board/types";

const mock_list = [
  {id: 1, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'React에서 memoization...', count: 0,},
  {id: 2, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: '객체지향 프로그래밍?', count: 0,},
  {id: 3, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'GET과 POST의 차이', count: 0,},
  {id: 4, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Promise와 Callback ', count: 0,},
  {id: 5, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: '버블링이란...', count: 0,},
  {id: 6, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: '실행 컨텍스트 관련해서 질문드립니다.', count: 0,},
  {id: 7, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: '데이터 타입에 대해 설명해주세요.', count: 0,},
  {id: 8, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Virtual DOM', count: 0,},
  {id: 9, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'props와 state', count: 0,},
  {id: 10, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
]

interface Prop {
  list: Board[]
}

const TwoRowTable: React.FC<Prop> = ({ list }) => {
  return (
    <Container>
      <TableHeaderLayout title="인기글" />
      <TwoRowTableBody>
        {list.map(board => <TwoRowTableList {...board}/>)}
      </TwoRowTableBody>
    </Container>
  );
};

const Container = styled.section`
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
`

const TwoRowTableBody = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(2, 1fr);
`

export default TwoRowTable;
