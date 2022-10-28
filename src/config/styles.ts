import {keyframes} from "@emotion/react";

export const COLORS = {
    PRIMARY: '#CA7EFA',
    SUB: '#C06BF4',
    DARK_GRAY: '#949494',
    LIGHT_GRAY: '#EBEBEB',
    GRAY: '#D9D9D9',

    RED: '#FF6975',
    BLUE: '#6993FF',
    BLACK: '#525252',
    WHITE: '#FFFFFF',
}

export const MEDIA = {
  desktop: '@media only screen and (min-width: 769px)',
  tablet: '@media only screen and (max-width: 1200px)',
  mobile: '@media only screen and (max-width: 768px)',
}

export const SHADOWS = {
  basic: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
}

export const ANIMATIONS = {
  fadeIn: keyframes`0% { opacity: 0; } 100% { opacity: 1; }`,
  fadeOut: keyframes`0% { opacity: 1; } 100% { opacity: 0; }`,
  fadeOutIn: keyframes`0% { opacity: 1;} 50% { opacity: 0;} 100% { opacity: 1 }`,
  bounceDown: keyframes`0% { transform: translateY(0) } 50% { transform: translateY(8px) } 100% { transform: translateY(0) }`
}
