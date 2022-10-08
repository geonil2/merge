import React from 'react';
import TwoRowTableList from "./twoRowTableList";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import TableHeaderLayout from "../tableHeaderLayout";

const mock_list = [
  {id: 1, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text Title text Title text', count: 0,},
  {id: 2, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
  {id: 3, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
  {id: 4, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
  {id: 5, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
  {id: 6, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
  {id: 7, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
  {id: 8, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
  {id: 9, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
  {id: 10, image: 'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png', title: 'Title text', count: 0,},
]

const TwoRowTable = () => {
  return (
    <Container>
      <TableHeaderLayout title="인기글" />
      <TwoRowTableBody>
        {mock_list.map(list => (
          <TwoRowTableList
            key={list.id}
            id={list.id}
            url={list.image}
            title={list.title}
            count={list.count}
          />
        ))}
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
