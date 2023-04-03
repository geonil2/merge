import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import * as S from "./style";

import {
  authenticateQueryKey,
  getUserQueryKey,
  SignUpRequestBody,
} from "../../services/auth/types";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signUpAPI } from "../../services/auth/api";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequestBody>({ mode: "onChange" });
  const queryClient = useQueryClient();
  const { mutate: signup } = useMutation(signUpAPI);
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpRequestBody> = (data) => {
    signup(data, {
      onSuccess: (user) => {
        queryClient.setQueryData([authenticateQueryKey], true);
        queryClient.invalidateQueries([getUserQueryKey]);

        // 팝업 열어서 푸쉬시키기
        router.push("/");
      },
      onError: () => {},
    });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Logo>
        <img src="/images/logo/merge.svg" alt="Merge logo image" />
      </S.Logo>
      <S.InputContainer>
        <S.Label htmlFor="email">Email *</S.Label>
        <S.Input
          type="email"
          id="email"
          placeholder="example@example.com"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "이메일 형식이 아닙니다.",
            },
          })}
        />
        <S.ErrorMsg>{errors.email && errors.email.message}</S.ErrorMsg>
      </S.InputContainer>
      <S.InputContainer>
        <S.Label htmlFor="password">Password *</S.Label>
        <S.Input
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상이어야 합니다.",
            },
            maxLength: {
              value: 15,
              message: "비밀번호는 15자 이하이어야 합니다.",
            },
          })}
        />
        <S.ErrorMsg>{errors.password && errors.password.message}</S.ErrorMsg>
      </S.InputContainer>
      <S.InputContainer>
        <S.Label htmlFor="name">Name *</S.Label>
        <S.Input
          type="text"
          id="name"
          placeholder="홍길동"
          {...register("name", {
            required: "이름을 입력해주세요.",
            minLength: {
              value: 2,
              message: "이름은 2자 이상이어야 합니다.",
            },
          })}
        />
        <S.ErrorMsg>{errors.name && errors.name.message}</S.ErrorMsg>
      </S.InputContainer>
      <S.InputContainer>
        <S.Label htmlFor="nickname">Nick name *</S.Label>
        <S.Input
          type="text"
          id="nickName"
          placeholder="머지 개발자"
          {...register("nickname", {
            required: "닉네임을 입력해주세요.",
            minLength: {
              value: 2,
              message: "닉네은 2자 이상이어야 합니다.",
            },
            maxLength: {
              value: 15,
              message: "닉네임은 15자 이하이어야 합니다.",
            },
          })}
        />
        <S.ErrorMsg>{errors.nickname && errors.nickname.message}</S.ErrorMsg>
      </S.InputContainer>
      <S.SubmitBtn type="submit">회원가입</S.SubmitBtn>
    </S.Form>
  );
};

export default SignupForm;
