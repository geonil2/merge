import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../config/styles";
import {authenticateQueryKey, getUserQueryKey, SignUpRequestBody} from "../../services/auth/types";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {signUpAPI} from "../../services/auth/api";
import {useRouter} from "next/router";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
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
        router.push('/')
      },
      onError: () => {

      }
    });
  };

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
          placeholder="example@example.com"
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
      <InputContainer>
        <Label htmlFor="name">Name *</Label>
        <Input
          type="text"
          id="name"
          placeholder="홍길동"
          {...register("name", {
            required: "이름을 입력해주세요.",
            minLength: {
              value: 2,
              message: "이름은 2자 이상이어야 합니다."
            }
          })}
        />
        <ErrorMsg>{errors.name && errors.name.message}</ErrorMsg>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="nickname">Nick name *</Label>
        <Input
          type="text"
          id="nickName"
          placeholder="머지 개발자"
          {...register("nickname", {
            required: "닉네임을 입력해주세요.",
            minLength: {
              value: 2,
              message: "닉네은 2자 이상이어야 합니다."
            },
            maxLength: {
              value: 15,
              message: "닉네임은 15자 이하이어야 합니다."
            }
          })}
        />
        <ErrorMsg>{errors.nickname && errors.nickname.message}</ErrorMsg>
      </InputContainer>
      <SubmitBtn type="submit">회원가입</SubmitBtn>
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
  position: relative;
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

export default SignupForm;
