import React from 'react';
import {Interweave} from "interweave";
import styled from "@emotion/styled";

interface Prop {
  description: string,
  width: number
}

const ListThumbnail: React.FC<Prop> = ({ description, width }) => {
  const getImageByDescription = (description: string) => {
    const hasImage = description.indexOf('<img') !== -1

    if (hasImage) {
      const imageTagStart = description.substring(description.indexOf('<img'))
      return imageTagStart.substring(0, imageTagStart.indexOf('>')+1)
    }
    return;
  }

  return (
    <>
      {getImageByDescription(description) &&
        <ThumbnailWrap width={width}>
          <Interweave content={getImageByDescription(description)} />
        </ThumbnailWrap>
      }
    </>
  );
};

const ThumbnailWrap = styled.div`
  width: ${(prop: { width: number}) => `${prop.width}px`};
  max-height: ${(prop: { width: number}) => `${prop.width}px`};
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
`

export default ListThumbnail;
