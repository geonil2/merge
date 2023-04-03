import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./style";

import HeaderSearchForm from "../headerSearchForm";

import { useMutation } from "@tanstack/react-query";

import useUser from "../../../hooks/useUser";

import { menuList } from "../../../resources/types";
import { signOutAPI } from "../../../services/auth/api";

const MobileHeader = () => {
  const { data: user } = useUser();
  const { mutate: signOut } = useMutation(signOutAPI);
  const [isShowNav, setIsShowNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsShowNav(false);
  }, [router]);

  return (
    <S.Header>
      <Link href="/" passHref>
        <a>
          <S.Logo src="/images/logo/merge.svg" alt="Logo" />
        </a>
      </Link>
      <S.HeaderContentsContainer>
        {user ? (
          <S.Button title="글쓰기" onClick={() => router.push("/writing")} />
        ) : (
          <S.Button title="로그인" onClick={() => alert("로그인")} />
        )}
        <S.ToggleButton onClick={() => setIsShowNav(!isShowNav)}>
          {isShowNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          )}
        </S.ToggleButton>
      </S.HeaderContentsContainer>

      {isShowNav && (
        <S.Nav>
          <ul>
            {user && (
              <S.UserContainer>
                <S.UserInfo>
                  {/*<UserImage src={user?.image} alt="User image" />*/}
                  <S.UserImage
                    src="/images/icons/profile.svg"
                    alt="User image"
                  />
                  <S.UserText>
                    <S.UserName>{user?.name}</S.UserName>
                    <S.Email>{user?.email}</S.Email>
                  </S.UserText>
                </S.UserInfo>
                <S.LogoutButton
                  onClick={() => (signOut(), setIsShowNav(false))}
                >
                  로그아웃
                </S.LogoutButton>
              </S.UserContainer>
            )}
            <S.SearchInputContainer>
              <HeaderSearchForm />
            </S.SearchInputContainer>
            {menuList.map((menu) => (
              <li key={menu.url}>
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </S.Nav>
      )}
    </S.Header>
  );
};

export default MobileHeader;
