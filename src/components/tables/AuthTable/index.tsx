import React, {useEffect} from 'react';
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";

const AuthTable = () => {
  const { data: session, status } = useSession();

  return (
    <Container>
        {status === 'authenticated' && session?.user ?
        <AuthenticatedUI>
          <Profile>
            <Image
              src={session.user.image = '/images/icons/profile.svg'}
              width="60"
              height="60"
            />
            <UserText>
              <UserName>{session.user.name}</UserName>
              <Email>{session.user.email}</Email>
            </UserText>
          </Profile>
          <LogoutButton onClick={() => signOut()}>
            Log out
          </LogoutButton>
        </AuthenticatedUI>
        :
        <LoginButton onClick={() => signIn('google')}>
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
  display: flex;
  justify-content: space-between;
`

const Profile = styled.div`
  display: flex;
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

const LoginButton = styled.button`
  width: 100%;
  height: 42px;
  border: 1px solid ${COLORS.GRAY};
`

const GoogleLogo = styled.img`
`

export default AuthTable;
