import React from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../config/styles";

interface Props {
  media: 'desktop' | 'mobile';
}

const MediaOnlyDiv = styled.div<Props>`
  justify-content: center;
  background-color: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.basic};
${MEDIA.desktop} {
  display: ${({media}) => media === 'desktop' ? 'flex' : 'none'};
}
${MEDIA.mobile} {
  display: ${({ media }) => media === 'mobile' ? 'flex' : 'none'};
}
`

export default MediaOnlyDiv;
