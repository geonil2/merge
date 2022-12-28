import React from 'react';
import Slider from "react-slick";
import styled from "@emotion/styled";
import {MEDIA} from "../../../config/styles";

const banner = [
  {id: 1, url: '/images/banner/banner1.jpeg'},
  {id: 2, url: '/images/banner/banner2.jpeg'},
]

const settings = {
  slide: 'div',
  infinite: true,
  speed: 1000,
  slidesToShow : 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: false,
  variableWidth: true
}

const BannerTable = () => {
  return (
    <Container>
      <Slider {...settings}>
        {banner.map(list => (
          <img key={list.id} src={list.url} alt="Banner image"/>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.section`
  width: 420px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${MEDIA.TABLET} {
    display: none;
  }
   .slick-slider {
     width: 100%;
     max-height: 223px;
     overflow: hidden;
     img {
       width: 420px !important;
       height: 223px;
     }
     ${MEDIA.TABLET} {
       display: none;
     }
   }
`

export default BannerTable;
