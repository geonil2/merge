import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../config/styles";
import Link from "next/link";
import {authenticateQueryKey, getUserQueryKey, SignInRequestBody, SignUpRequestBody} from "../../services/auth/types";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {signInAPI} from "../../services/auth/api";
import {useRouter} from "next/router";
import useSignIn from "../../hooks/useSignIn";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInRequestBody>({ mode: "onChange" });
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: signIn } = useSignIn(signInAPI);

  const onSubmit: SubmitHandler<SignInRequestBody> = (data) => {
    console.log(data)
    signIn(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Logo>
        <img src="/images/logo/merge.svg" alt="Merge logo image"/>
      </Logo>
      <InputContainer>
        <Label htmlFor="email">Email *</Label>
        <Input
          type="email"
          id="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "이메일 형식이 아닙니다."
            }
          })}
        />
        <ErrorMsg>{errors.email && errors.email.message}</ErrorMsg>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Password *</Label>
        <Input
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요."
          autoComplete="current-password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상이어야 합니다."
            },
            maxLength: {
              value: 15,
              message: "비밀번호는 15자 이하이어야 합니다."
            }
          })}
        />
        <ErrorMsg>{errors.password && errors.password.message}</ErrorMsg>
      </InputContainer>
      <SubmitBtn type="submit">로그인</SubmitBtn>
      <SignupLink>
        <p>Merge 계정이 없으신가요?</p>
        <Link href="signup">회원가입하기</Link>
      </SignupLink>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  padding: 24px;
  box-shadow: ${SHADOWS.BASIC};
`

const Logo = styled.div`
  width: 50%;
  margin: 0 auto;
  
  img {
    width: 100%;
  }
`

const Label = styled.label`
  font-weight: 700;
`

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${COLORS.GRAY};
  border-radius: 5px;
  padding: 13px;
  margin-top: 10px;
`

const InputContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`

const ErrorMsg = styled.p`
  position: absolute;
  top: calc(100% + 6px);
  font-size: 12px;
  color: ${COLORS.RED};
`

const SubmitBtn = styled.button`
  width: 100%;
  color: ${COLORS.WHITE};
  text-align: center;
  background-color: ${COLORS.PRIMARY};
  border-radius: 5px;
  opacity: 80%;
  transition-duration: .2s;
  padding: 13px;
  margin-top: 40px;
  cursor: pointer;
  
  &:hover {
    opacity: 100%;
  }
`

const SignupLink = styled.div`
  text-align: end;
  font-size: 14px;
  margin-top: 20px;
  
  p {
    color: ${COLORS.DARK_GRAY};
  }
  
  a {
    display: inline-block;
    text-decoration: underline;
    margin-top: 6px;
  }
`

export default SignInForm;
