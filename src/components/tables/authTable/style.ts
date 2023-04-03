import styled from "@emotion/styled";

import { COLORS, MEDIA, SHADOWS } from "../../../config/styles";

import commonButton from "../../commonButton";
import SNSSignIn from "../../../pages/signin/snsSignIn";

export const Container = styled.section`
  width: 100%;
  box-shadow: ${SHADOWS.BASIC};
  padding: 24px;

  ${MEDIA.TABLET} {
    display: none;
  }
`;

export const AuthenticatedUI = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.GRAY};
  padding-bottom: 12px;

  &:after {
    position: absolute;
    display: block;
    content: "";
    width: 150px;
    height: 1px;
    bottom: -1px;
    left: 50%;
    background-color: ${COLORS.WHITE};
    transform: translateX(-50%);
  }
`;

export const Profile = styled.div`
  display: flex;
`;

export const ProfileThumb = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

interface ActiveProp {
  isActive: boolean;
}

export const UserText = styled.div<ActiveProp>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isActive }) =>
    isActive ? "flex-start" : "space-around"};
  margin-left: 20px;
`;

export const UserName = styled.div`
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
      fill: ${COLORS.PRIMARY};
    }
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
`;

export const SubmitButton = styled.button`
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
`;

export const ErrorMsg = styled.p`
  color: ${COLORS.RED};
  font-size: 10px;
  margin-top: 4px;
`;

export const Email = styled.div<ActiveProp>`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${COLORS.DARK_GRAY};
  margin-top: ${({ isActive }) => (isActive ? "6px" : "0px")};
`;

export const LogoutButton = styled.button`
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
`;

export const WriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border: 1px solid ${COLORS.GRAY};
  margin-top: 12px;
`;

export const LoginButtonContainer = styled.div``;

export const MergeLogin = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${COLORS.GRAY};
  padding-bottom: 20px;

  &:before {
    position: absolute;
    display: block;
    content: "";
    width: 150px;
    height: 1px;
    bottom: -1px;
    left: 50%;
    background-color: ${COLORS.WHITE};
    transform: translateX(-50%);
  }

  &:after {
    position: absolute;
    display: block;
    content: "간편 로그인";
    bottom: 0%;
    transform: translateY(50%);
    font-size: 14px;
    color: ${COLORS.GRAY};
  }
`;

export const LoginButton = styled(commonButton)`
  width: 70%;
`;

export const SNS = styled(SNSSignIn)`
  box-shadow: none;

  li {
    height: auto !important;
  }
`;

export const GoogleLogo = styled.img``;
