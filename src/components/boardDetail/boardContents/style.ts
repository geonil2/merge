import styled from "@emotion/styled";
import { COLORS, MEDIA, SHADOWS } from "../../../config/styles";

export const Container = styled.div`
  padding: 0px 24px;
  box-shadow: ${SHADOWS.BASIC};

  > p {
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid ${COLORS.GRAY};
  }

  ${MEDIA.MOBILE} {
    padding: 0px 12px;
  }
`;

export const ContentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font-size: 14px;
  border-bottom: 1px solid ${COLORS.GRAY};
`;

export const Owner = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Thumbnail = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const Email = styled.p`
  color: ${COLORS.GRAY};
  margin-top: 5px;
`;

export const HeaderRight = styled.div`
  display: flex;
`;

export const LikesCount = styled.div`
  margin-right: 20px;
`;

//Body
export const ContentsBody = styled.div`
  padding: 24px;
  ${MEDIA.MOBILE} {
    padding: 12px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.div`
  width: calc(100% - 105px);
  line-height: 130%;
  font-weight: 700;
  font-size: 20px;
`;

export const Date = styled.div`
  width: 105px;
  font-size: 14px;
  text-align: end;
`;

export const Description = styled.div`
  width: 100%;
  max-height: 1000px;
  font-size: 14px;
  line-height: 160%;
  margin-top: 30px;

  img {
    max-width: 100%;
  }
`;

interface LikesProp {
  active: boolean;
}

export const Likes = styled.div<LikesProp>`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;

  > svg {
    width: 20px;
    fill: ${(prop: LikesProp) =>
      prop.active ? COLORS.PRIMARY : COLORS.LIGHT_GRAY};
    margin-right: 5px;
    cursor: pointer;
  }
`;
