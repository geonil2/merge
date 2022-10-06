import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import {COLORS, SHADOW} from "../../../config/styles";

const settings = {
  slide: 'div',
  infinite: true,
  speed: 1000,
  slidesToShow : 1,
  autoplay: true,
  vertical: true,
  arrows: false,
  dot: false
}

const VerticalSlideTable = () => {
  return (
    <SliderContainer>
      <p>공지사항</p>
      <Slider {...settings}>
        <div className="slider">10월 첫째주 버그리스트 공지</div>
        <div className="slider">10월 첫째주 버그리스트 공지</div>
        <div className="slider">10월 첫째주 버그리스트 공지</div>
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.WHITE};
  padding: 0px 24px;
  box-shadow: ${SHADOW.basic};

  > p {
    font-weight: 800;
    color: ${COLORS.PRIMARY};
    word-break: keep-all;
  }

  .slider {
    font-weight: 700;
    font-size: 14px;
    padding: 22px 24px;
  }
`

export default VerticalSlideTable;
