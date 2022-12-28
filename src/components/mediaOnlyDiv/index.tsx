import React from 'react';
import styled from "@emotion/styled";
import {COLORS, MEDIA, SHADOWS} from "../../config/styles";

interface Props {
  media: 'desktop' | 'mobile';
}

const MediaOnlyDiv = styled.div<Props>`
  justify-content: center;
  background-color: ${COLORS.WHITE};
  box-shadow: ${SHADOWS.BASIC};
${MEDIA.DESKTOP} {
  display: ${({media}) => media === 'desktop' ? 'flex' : 'none'};
}
${MEDIA.MOBILE} {
  display: ${({ media }) => media === 'mobile' ? 'flex' : 'none'};
}
`

export default MediaOnlyDiv;
