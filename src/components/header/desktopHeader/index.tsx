import React, {useEffect} from 'react';
import Link from "next/link";
import styled from "@emotion/styled";
import {COLORS, MEDIA} from "../../../config/styles";
import HeaderSearchForm from "../headerSearchForm";
import {MENUS} from "../../../config/menus";
import {signIn, useSession} from "next-auth/react";
import CommonButton from "../../commonButton";
// import useLogin from "../../../hooks/useLogin";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {loginApi} from "../../../services/auth/api";
import useUser from "../../../hooks/useUser";

const DesktopHeader = () => {
  const { user } = useUser();

  return (
    <Header>
      <HeaderContentsContainer>
        <Link href="/" passHref>
          <a>
            <Logo src="/images/logo/merge.svg" alt="Logo" />
          </a>
        </Link>
        <Nav>
          <ul>
            {MENUS.map(menu => (
              <li key={menu.url}><Link href={menu.url}>{menu.title}</Link></li>
            ))}
          </ul>
        </Nav>
      </HeaderContentsContainer>
      <HeaderContentsContainer>
        {user ?
          <div onClick={() => signIn('google')}>
            <ProfileThum
              src={user.image}
              alt="Logo"
            />
          </div>
          :
          <Button title="Login" onClick={() => signIn('google')} />
        }
        <SearchInputContainer>
          <HeaderSearchForm />
        </SearchInputContainer>
      </HeaderContentsContainer>
    </Header>
  );
};

const Header = styled.header`
  width: 1280px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  ${MEDIA.tablet} {
    width: 100%;
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

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  border-radius: 4px;
  padding: 0px 20px;
  margin-right: 10px;
  transition-duration: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.SUB};
  }
`

const Button = styled(CommonButton)`
  width: 72px;
`

const SearchInputContainer = styled.div`
  width: 207px;
  ${MEDIA.tablet} {
    width: 120px;
  }
`

export default DesktopHeader;
