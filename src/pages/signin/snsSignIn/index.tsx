import React, {HTMLAttributes} from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import useGoogleSignIn from "../../../hooks/useGoogleSignIn";
import useNaverSignIn from "../../../hooks/useNaverSignIn";
import useKakaoSignIn from '../../../hooks/useKakaoSignIn';

interface Props extends HTMLAttributes<HTMLElement> {
  text: boolean
}

const SNSSignin: React.FC<Props> = ({ text, ...props }) => {
  const { handleSignIn: googleHandleSignIn } = useGoogleSignIn();
  const { handleSignIn: kakaoHandleSignIn } = useKakaoSignIn();
  const { handleSignIn: naverHandleSignIn } = useNaverSignIn();

  return (
    <Container {...props}>
      <SNSList>
        <li onClick={googleHandleSignIn}>
          <img src="/images/auth/google.svg" alt="Google logo"/>
          {text && <p>구글로 로그인</p>}
        </li>
        <li onClick={kakaoHandleSignIn}>
          <img src="/images/auth/kakao.svg" alt="Kakao logo"/>
          {text && <p>카카오로 로그인</p>}
        </li>
        <li onClick={naverHandleSignIn}>
          <img src="/images/auth/naver.svg" alt="Naver logo"/>
          {text && <p>네이버로 로그인</p>}
        </li>
      </SNSList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  box-shadow: ${SHADOWS.BASIC};
  margin-top: 20px;
`

const SNSList = styled.div`
  display: flex;
  
  li {
    width: 33.33%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-right: 1px solid ${COLORS.LIGHT_GRAY};
    
    &:last-of-type {
      border-right: none;
    }
    
    img {
      width: 20%;
    }
    
    p {
      font-size: 14px;
      margin-top: 10px;
    }
  }
`

export default SNSSignin;
