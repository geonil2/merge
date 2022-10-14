import React from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";

const Contents = () => {
  return (
    <Container>
      <p>Question</p>
      <ContentsHeader>
        <Owner>
          <Thumbnail src="/images/icons/profile.svg" />
          <UserText>
            <p>name</p>
            <p>email</p>
          </UserText>
        </Owner>
        <Likes>Likes 100</Likes>
      </ContentsHeader>
      <ContentsBody>
        <TitleWrap>
          <Title>Title</Title>
          <Date>2022-10-10 11:30</Date>
        </TitleWrap>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat nulla sed ex interdum bibendum. Mauris nisl velit, varius ac tincidunt rutrum, faucibus nec sem. Mauris facilisis turpis nisi, sit amet tempor lacus blandit nec. Vestibulum commodo interdum sem, sed posuere dui ultricies sit amet. Suspendisse volutpat felis id ex viverra, eu feugiat tortor egestas. Morbi elementum ut mi at laoreet. Cras consectetur vulputate augue, vel tempor mi aliquam quis. Curabitur in neque ac diam congue volutpat ac vitae neque. Pellentesque bibendum dapibus ligula quis pharetra. Pellentesque dictum, quam aliquam eleifend dictum, leo lacus viverra ipsum, eu vulputate odio erat vitae orci. Duis eget lacinia libero, nec pretium enim. Ut pulvinar neque a felis mattis finibus. Nulla a faucibus ante. Vestibulum tristique, purus eu rhoncus viverra, velit mauris tristique velit, quis fringilla quam sem et felis. Maecenas bibendum sodales rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut elementum, est at lobortis mollis, tortor tellus maximus felis, a commodo nisi magna nec sem. Quisque eget libero finibus, tristique ligula faucibus, efficitur nunc. Maecenas consectetur ornare leo at sodales. Integer molestie, augue non tempus blandit, risus nulla ornare dui, nec viverra nisl purus a quam.</Description>
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
`

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px
  > p {
    color: ${COLORS.GRAY};
  }
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
