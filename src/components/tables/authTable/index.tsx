import React, {useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../../config/styles";
import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {updateNameAPI} from "../../../services/auth/api";
import useOutsideClick from "../../../hooks/useOutsideClick";

export type updateNameInputValue = {
  name?: string
}

const AuthTable = () => {
  const { data: session } = useSession({ required: true });
  const [inputValue, setInputValue] = useState(session?.user.name);
  const formWrapRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useOutsideClick(formWrapRef, false);
  const updateName = useMutation(updateNameAPI);
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    clearErrors,
    formState: { errors },
    setError,
  } = useForm({ defaultValues: { name : session?.user?.name}});

  const onSubmit: SubmitHandler<updateNameInputValue> = (data, event) => {
    event?.preventDefault();
    if (data.name === session?.user?.name) {
      setIsActive(false)
      return;
    }

    updateName.mutate({...data}, {
      onSuccess: async () => {
        setIsActive(false);
        alert('변경에 성공했습니다.' + ' 로그인 후 다시 이용 가능합니다.')
        await signOut();
        await signIn('google');
      },
      onError: () => {
        setError('name', { type: 'custom', message: '잠시 후 다시 시도해주세요.' });
      }
    })
  }

  useEffect(() => {
    if (isActive) {
      setFocus("name")
    } else {
      setInputValue(session?.user.name);
      clearErrors();
      reset();
    }
  }, [isActive])

  useEffect(() => {
    setInputValue(session?.user.name)
  }, [session])

  return (
    <Container>
      {session ?
        <>
          <AuthenticatedUI>
            <Profile>
              {/*<ProfileThumb src={session.user?.image} />*/}
              <ProfileThumb src='/images/icons/profile.svg' />
              <UserText isActive={isActive}>
                <UserName>
                  {
                    isActive ?
                    <div ref={formWrapRef}>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("name", {
                            required: true,
                            maxLength: {
                              value: 15,
                              message: '닉네임은 15글자까지 가능합니다.'
                            },
                            minLength: {
                              value: 3,
                              message: '닉네임은 3글자 이상이어야 합니다.'
                            }
                          })}
                          defaultValue={inputValue}
                        />
                        <SubmitButton>변경</SubmitButton>
                      </form>
                      {errors.name?.message && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
                    </div>
                    :
                    <Name>
                      <p>{session.user?.name}</p>
                      <svg
                        onClick={() => setIsActive(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                      </svg>
                    </Name>
                  }
                </UserName>
                <Email isActive={isActive}>{session.user?.email}</Email>
              </UserText>
            </Profile>
            <LogoutButton onClick={() => signOut({ redirect: false })}>
              로그아웃
            </LogoutButton>
          </AuthenticatedUI>
          <Link href="/writing" passHref>
            <a>
            <WriteButton>
              <span>글쓰기</span>
            </WriteButton>
            </a>
          </Link>
      </>
      :
      <LoginButton onClick={() => signIn("google")}>
        <GoogleLogo src="/images/icons/google.svg" />
      </LoginButton>
      }
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  box-shadow: ${SHADOWS.basic};
  padding: 24px;
  ${MEDIA.tablet} {
    display: none;
  }
`

const AuthenticatedUI = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.GRAY};
  padding-bottom: 12px;
  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 150px;
    height: 1px;
    bottom: -1px;
    left: 50%;
    background-color: ${COLORS.WHITE};
    transform: translateX(-50%);
  }
`

const Profile = styled.div`
  display: flex;
`

const ProfileThumb = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

interface ActiveProp {
  isActive: boolean
}

const UserText = styled.div<ActiveProp>`
  display: flex;
  flex-direction: column;
  justify-content: ${({isActive}) => isActive ? "flex-start" : "space-around"};
  margin-left: 20px;
`

const UserName = styled.div`
  //height: 30px;
  
  form {
    display: flex;
    height: 100%;
    input {
      //height: 100%;
      border-bottom: 1px solid ${COLORS.LIGHT_GRAY};
    }
  }
  
  svg {
    width: 13px;
    margin-left: 10px;
    cursor: pointer;
    fill: ${COLORS.GRAY};
    &:hover {
      fill: ${COLORS.PRIMARY}
    }
  }
`

const Name = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
`

const SubmitButton = styled.button`
  height: 26px;
  display: flex;
  align-items: center;
  color: ${COLORS.DARK_GRAY};
  font-size: 14px;
  border: 1px solid ${COLORS.DARK_GRAY};
  border-radius: 4px;
  padding: 0px 10px;
  margin-left: 7px;
  &:hover {
    color: ${COLORS.PRIMARY};
    border: 1px solid ${COLORS.PRIMARY};
  }
`

const ErrorMsg = styled.p`
  color: ${COLORS.RED};
  font-size: 10px;
  margin-top: 4px;
`

const Email = styled.div<ActiveProp>`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${COLORS.DARK_GRAY};
  margin-top: ${({isActive}) => isActive ? "6px" : "0px"};
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

const WriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border: 1px solid ${COLORS.GRAY};
  margin-top: 12px;
`

const LoginButton = styled.button`
  width: 100%;
  height: 42px;
  border: 1px solid ${COLORS.GRAY};
`

const GoogleLogo = styled.img`
`

export default AuthTable;
