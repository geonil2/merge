import styled from "@emotion/styled";

import { COLORS, MEDIA, SHADOWS } from "../../../config/styles";

import CommonButton from "../../commonButton";

export const Header = styled.header`
  position: fixed;
  z-index: 30;
  width: 100%;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
  margin-bottom: 80px;
`;

export const HeaderWrapper = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  margin: 0 auto;

  ${MEDIA.TABLET} {
    width: 100%;
    padding: 0px 20px;
  }
`;

export const HeaderContentsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;
  margin-right: 40px;
  ${MEDIA.TABLET} {
    margin-right: 20px;
  }
`;

export const Nav = styled.nav`
  width: 500px;

  ${MEDIA.TABLET} {
    width: 40vw;
    min-width: 310px;
  }

  > ul {
    display: flex;
    justify-content: space-between;

    li {
      font-weight: 700;
      font-size: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0px 5px;
    }
  }
`;

export const ProfileThum = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

export const Button = styled(CommonButton)`
  width: 72px;
`;

export const WriteButton = styled(CommonButton)`
  display: none;

  ${MEDIA.TABLET} {
    display: block;
  }
`;

export const SearchInputContainer = styled.div`
  width: 207px;

  ${MEDIA.TABLET} {
    width: 120px;
  }
`;
