import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import * as S from "./style";

import { useQueryClient } from "@tanstack/react-query";

import { SignInRequestBody } from "../../services/auth/types";
import { signInAPI } from "../../services/auth/api";

import useSignIn from "../../hooks/useSignIn";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInRequestBody>({ mode: "onChange" });
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: signIn } = useSignIn(signInAPI);

  const onSubmit: SubmitHandler<SignInRequestBody> = (data) => {
    signIn(data);
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
          placeholder="이메일을 입력해주세요."
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
          placeholder="비밀번호를 입력해주세요."
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
      <S.SubmitBtn type="submit">로그인</S.SubmitBtn>
      <S.SignupLink>
        <p>Merge 계정이 없으신가요?</p>
        <Link href="signup">회원가입하기</Link>
      </S.SignupLink>
    </S.Form>
  );
};

export default SignInForm;
