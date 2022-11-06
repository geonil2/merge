import React, {useEffect} from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {redirect} from "next/dist/server/api-utils";
import {removeTokenInStorage} from "../../../services/auth/api";
import {Skeleton} from "@mui/material";

const AuthTable = () => {

  const { data: session, status } = useSession();

  const logOut = () => {
    signOut({ redirect: false })
    removeTokenInStorage()
  }

  useEffect(() => {
    console.log(status, 'status')
  }, [status])

  return (
    <Container>
      {session ?
        <>
          <AuthenticatedUI>
            <Profile>
              {
                status === 'authenticated' ? <ProfileThumb
                  src={session.user?.image as string}
                /> : <Skeleton variant="circular" animation="wave" width={60} height={60} />
              }
              <UserText>
                <UserName>{session.user?.name}</UserName>
                <Email>{session.user?.email}</Email>
              </UserText>
            </Profile>
            <LogoutButton onClick={() => logOut()}>
              Log out
            </LogoutButton>
          </AuthenticatedUI>
          <Link href="/writing" passHref>
            <a>
            <WriteButton>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"/>
              </svg>
              <span>글쓰기</span>
            </WriteButton>
            </a>
          </Link>
      </>
      :
      <LoginButton onClick={() => signIn("google", { prompt: "login" })}>
        <GoogleLogo src="/images/icons/google.svg" />
      </LoginButton>
      }
    </Container>
  );
};

const Container = styled.section`
  box-shadow: ${SHADOWS.basic};
  padding: 24px;
`

const AuthenticatedUI = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.GRAY};
  padding-bottom: 12px;
  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 150px;
    height: 1px;
    bottom: -1px;
    left: 50%;
    background-color: ${COLORS.WHITE};
    transform: translateX(-50%);
  }
`

const Profile = styled.div`
  display: flex;
`

const ProfileThumb = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

const UserText = styled.div`
  margin-left: 20px;
`

const UserName = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Email = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${COLORS.DARK_GRAY};
`

const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 26px;
  color: ${COLORS.DARK_GRAY};
  border: 1px solid ${COLORS.DARK_GRAY};
  border-radius: 4px;
  :hover {
    color: ${COLORS.PRIMARY};
    border: 1px solid ${COLORS.PRIMARY};
  }
`

const WriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border: 1px solid ${COLORS.GRAY};
  margin-top: 12px;
  > svg {
    width: 20px;
    height: 20px;
    fill: ${COLORS.GRAY};
    transition-duration: .2s;
    margin-right: 8px;
  }
  &:hover svg {
    fill: ${COLORS.PRIMARY};
  }
`

const LoginButton = styled.button`
  width: 100%;
  height: 42px;
  border: 1px solid ${COLORS.GRAY};
`

const GoogleLogo = styled.img`
`

export default AuthTable;
