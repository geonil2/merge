import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./style";

import useUser from "../../../hooks/useUser";

import { menuList } from "../../../resources/types";
import HeaderSearchForm from "../headerSearchForm";

const DesktopHeader = () => {
  const { data: user } = useUser();
  const router = useRouter();

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.HeaderContentsContainer>
          <Link href="/" passHref>
            <a>
              <S.Logo src="/images/logo/merge.svg" alt="Logo" />
            </a>
          </Link>
          <S.Nav>
            <ul>
              {menuList.map((menu) => (
                <li key={menu.url}>
                  <Link href={menu.url}>{menu.title}</Link>
                </li>
              ))}
            </ul>
          </S.Nav>
        </S.HeaderContentsContainer>
        <S.HeaderContentsContainer>
          {user ? (
            <>
              <div
              // onClick={() => signIn('google')}
              >
                <S.ProfileThum
                  src="/images/icons/profile.svg"
                  alt="User profile"
                />
              </div>
              <S.WriteButton
                title="글쓰기"
                onClick={() => router.push("/writing")}
              />
            </>
          ) : (
            <S.Button title="로그인" onClick={() => router.push("/signin")} />
          )}
          <S.SearchInputContainer>
            <HeaderSearchForm />
          </S.SearchInputContainer>
        </S.HeaderContentsContainer>
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default DesktopHeader;
