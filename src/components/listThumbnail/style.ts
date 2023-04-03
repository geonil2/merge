import styled from "@emotion/styled";

export const ThumbnailWrap = styled.div`
  width: ${(prop: { width: number }) => `${prop.width}px`};
  max-height: ${(prop: { width: number }) => `${prop.width}px`};
  border-radius: 6px;
  margin-right: 10px;
  overflow: hidden;

  span {
    display: flex;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
