import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./style";

import { useMutation } from "@tanstack/react-query";

import useOutsideClick from "../../../hooks/useOutsideClick";
import useUser from "../../../hooks/useUser";

import { updateNameAPI } from "../../../services/auth/api";
import { signOutQueryKey } from "../../../services/auth/types";

export type updateNameInputValue = {
  name?: string;
};

const AuthTable = () => {
  const { data: user } = useUser();
  const { mutate: signOut } = useMutation([signOutQueryKey]);
  const [inputValue, setInputValue] = useState("");
  const formWrapRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useOutsideClick(formWrapRef, false);
  const updateName = useMutation(updateNameAPI);
  const router = useRouter();
  // const {
  //   register,
  //   handleSubmit,
  //   setFocus,
  //   reset,
  //   clearErrors,
  //   formState: { errors },
  //   setError,
  // } = useForm({ defaultValues: { name : user?.name}});

  // const onSubmit: SubmitHandler<updateNameInputValue> = (data, event) => {
  //   event?.preventDefault();
  //   if (data.name === user?.name) {
  //     setIsActive(false)
  //     return;
  //   }
  //
  //   updateName.mutate({...data}, {
  //     onSuccess: async () => {
  //       setIsActive(false);
  //       alert('변경에 성공했습니다.' + ' 로그인 후 다시 이용 가능합니다.')
  //     },
  //     onError: () => {
  //       setError('name', { type: 'custom', message: '잠시 후 다시 시도해주세요.' });
  //     }
  //   })
  // }

  // useEffect(() => {
  //   if (isActive) {
  //     setFocus("name")
  //   } else {
  //     setInputValue('');
  //     clearErrors();
  //     reset();
  //   }
  // }, [isActive])

  useEffect(() => {
    setInputValue("");
  }, [user]);

  return (
    <S.Container>
      {user ? (
        <>
          <S.AuthenticatedUI>
            <S.Profile>
              {/*<ProfileThumb src={user?.image} />*/}
              <S.ProfileThumb src="/images/icons/profile.svg" />
              <S.UserText isActive={isActive}>
                <S.UserName>
                  {/*{*/}
                  {/*  isActive ?*/}
                  {/*    <></>*/}
                  {/*  // <div ref={formWrapRef}>*/}
                  {/*  //   <form onSubmit={handleSubmit(onSubmit)}>*/}
                  {/*  //     <input*/}
                  {/*  //       {...register("name", {*/}
                  {/*  //         required: true,*/}
                  {/*  //         maxLength: {*/}
                  {/*  //           value: 15,*/}
                  {/*  //           message: '닉네임은 15글자까지 가능합니다.'*/}
                  {/*  //         },*/}
                  {/*  //         minLength: {*/}
                  {/*  //           value: 3,*/}
                  {/*  //           message: '닉네임은 3글자 이상이어야 합니다.'*/}
                  {/*  //         }*/}
                  {/*  //       })}*/}
                  {/*  //       defaultValue={inputValue}*/}
                  {/*  //     />*/}
                  {/*  //     <SubmitButton>변경</SubmitButton>*/}
                  {/*  //   </form>*/}
                  {/*  //   {errors.name?.message && <ErrorMsg>{errors.name?.message}</ErrorMsg>}*/}
                  {/*  // </div>*/}
                  {/*  :*/}
                  <S.Name>
                    <p>{user?.nickname}</p>
                    {/*<svg*/}
                    {/*  onClick={() => setIsActive(true)}*/}
                    {/*  xmlns="http://www.w3.org/2000/svg"*/}
                    {/*  viewBox="0 0 512 512"*/}
                    {/*>*/}
                    {/*  <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>*/}
                    {/*</svg>*/}
                  </S.Name>
                  {/*}*/}
                </S.UserName>
                <S.Email isActive={isActive}>{user?.email}</S.Email>
              </S.UserText>
            </S.Profile>
            <S.LogoutButton onClick={() => signOut()}>로그아웃</S.LogoutButton>
          </S.AuthenticatedUI>
          <Link href="/writing" passHref>
            <a>
              <S.WriteButton>
                <span>글쓰기</span>
              </S.WriteButton>
            </a>
          </Link>
        </>
      ) : (
        <S.LoginButtonContainer>
          <S.MergeLogin>
            <S.LoginButton
              title="Merge 이메일로 로그인"
              onClick={() => router.push("/signin")}
            />
          </S.MergeLogin>
          <S.SNS text={false} />
        </S.LoginButtonContainer>
      )}
    </S.Container>
  );
};

export default AuthTable;
