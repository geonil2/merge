import React from 'react';

const Contents = () => {
  return (
    <Container>
      <p>Question</p>
      <ContentsHeader>
        <Owner>
          <Thumbnail />
          <Text>
            <UserName>name</UserName>
            <Email>email</Email>
          </Text>
        </Owner>
        <Likes>Likes 100</Likes>
      </ContentsHeader>
    </Container>
  );
};

export default Contents;
