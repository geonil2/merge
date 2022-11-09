import Link from "next/link";
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
import HeaderSearchForm from "../headerSearchForm";
import {signIn, signOut, useSession} from "next-auth/react";
import CommonButton from "../../commonButton";
import {menuList} from "../../../resources/types";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import AuthTable from "../../tables/AuthTable";

const MobileHeader = () => {
  const { data: session } = useSession();
  const [isShowNav, setIsShowNav] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setIsShowNav(false)
  }, [router])

  return (
    <Header>
      <Link href="/" passHref><a>
          <Logo src="/images/logo/merge.svg" alt="Logo" />
      </a></Link>
      <HeaderContentsContainer>
        {session ?
          <Link href="/writing" passHref><Button title="글쓰기" /></Link>
          :
          <Button title="LogIn" onClick={() => signIn('google')} />
        }
        <ToggleButton onClick={() => setIsShowNav(!isShowNav)}>
          {isShowNav ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          }
        </ToggleButton>
      </HeaderContentsContainer>

      {isShowNav &&
        <Nav>
          <ul>
            {session &&
              <UserContainer>
                <UserInfo>
                  <UserImage src={session.user?.image} alt="User image" />
                  <UserText>
                    <UserName>{session.user?.name}</UserName>
                    <Email>{session.user?.email}</Email>
                  </UserText>
                </UserInfo>
                <LogoutButton onClick={() => (signOut({ redirect: false }), setIsShowNav(false))}>Log out</LogoutButton>
              </UserContainer>
            }
            <SearchInputContainer>
              <HeaderSearchForm />
            </SearchInputContainer>
            {menuList.map(menu => (
              <li key={menu.url}><Link href={menu.url}>{menu.title}</Link></li>
            ))}
          </ul>
        </Nav>
      }
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 30;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
  padding: 0px 10px;
`

const HeaderContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 100px;
  margin-right: 10px;
`

const Button = styled(CommonButton)`
  width: 72px;
`

const ToggleButton = styled.div`
  width: 16px;
  margin-left: 10px;
  cursor: pointer;
  svg {
    fill: ${COLORS.DARK_GRAY}
  }
`

const Nav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0%;
  width: 100vw;
  height: calc(100vh - 80px);
  background: ${COLORS.WHITE};
  ul {
    margin: 10%;
    li {
      font-weight: 800;
      margin: 10% 0%;
    }
  }
`

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
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

const SearchInputContainer = styled.div`
  width: 100%;
  margin-top: 10%;
`

export default MobileHeader;
