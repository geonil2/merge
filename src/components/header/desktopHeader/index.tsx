import React from 'react';
import Link from "next/link";
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
import HeaderSearchForm from "../headerSearchForm";
import {signIn, useSession} from "next-auth/react";
import CommonButton from "../../commonButton";
import {menuList} from "../../../resources/types";
import {useRouter} from "next/router";

const DesktopHeader = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Header>
      <HeaderWrapper>
        <HeaderContentsContainer>
          <Link href="/" passHref>
            <a>
              <Logo src="/images/logo/merge.svg" alt="Logo" />
            </a>
          </Link>
          <Nav>
            <ul>
              {menuList.map(menu => (
                <li key={menu.url}><Link href={menu.url}>{menu.title}</Link></li>
              ))}
            </ul>
          </Nav>
        </HeaderContentsContainer>
        <HeaderContentsContainer>
          {session ?
            <>
              <div onClick={() => signIn('google')}>
                <ProfileThum
                  // src={session?.user.image}
                  src='/images/icons/profile.svg'
                  alt="Logo"
                />
              </div>
              <WriteButton title="글쓰기" onClick={() => router.push('/writing')} />
            </>
            :
            <Button title="로그인" onClick={() => signIn('google')} />
          }
          <SearchInputContainer>
            <HeaderSearchForm />
          </SearchInputContainer>
        </HeaderContentsContainer>
      </HeaderWrapper>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  z-index: 30;
  width: 100%;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
  margin-bottom: 80px;
`

const HeaderWrapper = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  margin: 0 auto;
  ${MEDIA.tablet} {
    width: 100%;
    padding: 0px 20px;
  }
`

const HeaderContentsContainer = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  width: 120px;
  margin-right: 40px;
  ${MEDIA.tablet} {
    margin-right: 20px;
  }
`

const Nav = styled.nav`
  width: 500px;
  ${MEDIA.tablet} {
    width: 40vw;
    min-width: 310px;
  }
  > ul {
    display: flex;
    justify-content: space-between;
    li {
      font-weight: 700;
      font-size: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0px 5px;
    }
  }
`

const ProfileThum = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`

const Button = styled(CommonButton)`
  width: 72px;
`

const WriteButton = styled(CommonButton)`
  display: none;
  ${MEDIA.tablet} {
    display: block;
  }
`

const SearchInputContainer = styled.div`
  width: 207px;
  ${MEDIA.tablet} {
    width: 120px;
  }
`

export default DesktopHeader;
