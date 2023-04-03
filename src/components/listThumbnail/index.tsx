import React from "react";
import { Interweave } from "interweave";

import * as S from "./style";

interface Prop {
  description: string;
  width: number;
}

export const getImageByDescription = (description: string) => {
  const hasImage = description.indexOf("<img") !== -1;

  if (hasImage) {
    const imageTagStart = description.substring(description.indexOf("<img"));
    return imageTagStart.substring(0, imageTagStart.indexOf(">") + 1);
  }
  return;
};

const ListThumbnail: React.FC<Prop> = ({ description, width }) => {
  return (
    <>
      {getImageByDescription(description) && (
        <S.ThumbnailWrap width={width}>
          <Interweave content={getImageByDescription(description)} />
        </S.ThumbnailWrap>
      )}
    </>
  );
};

export default ListThumbnail;
