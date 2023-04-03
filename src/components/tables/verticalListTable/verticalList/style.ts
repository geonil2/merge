import styled from "@emotion/styled";

export const List = styled.div`
  height: 100%;
  display: flex; //
  justify-content: flex-start; //
  align-items: center; //
  img {
    width: 50px;
    height: 50px;
  }
`;

export const TextTopArea = styled.div`
  width: 100%; //
  display: flex; //
  flex-direction: column; //
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  padding: 3px 0px;
  margin-bottom: 8px;
  & span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TextBotArea = styled.div`
  display: flex;
  font-size: 12px;
`;

export const Owner = styled.span`
  font-weight: 700;
  margin-right: 10px;
`;
