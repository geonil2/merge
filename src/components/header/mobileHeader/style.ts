import styled from "@emotion/styled";

import { COLORS, SHADOWS } from "../../../config/styles";

import CommonButton from "../../commonButton";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 30;
  background: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
  padding: 0px 10px;
`;

export const HeaderContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  margin-right: 10px;
`;

export const Button = styled(CommonButton)`
  width: 72px;
`;

export const ToggleButton = styled.div`
  width: 16px;
  margin-left: 10px;
  cursor: pointer;

  svg {
    fill: ${COLORS.DARK_GRAY};
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0%;
  width: 100vw;
  height: calc(100vh - 80px);
  background: ${COLORS.WHITE};

  ul {
    margin: 10%;

    li {
      font-weight: 800;
      margin: 10% 0%;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

export const UserText = styled.div`
  margin-left: 20px;
`;

export const UserName = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Email = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${COLORS.DARK_GRAY};
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

export const SearchInputContainer = styled.div`
  width: 100%;
  margin-top: 10%;
`;
