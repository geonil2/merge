import React from 'react';
import Slider from "react-slick";
import styled from "@emotion/styled";
import {MEDIA} from "../../../config/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          // <MainBanner key={list.id} >
          //   {/* Add link */}
          //   <a href="#"><img src={list.url} alt="Banner image"/></a>
          <img src={list.url} alt="Banner image"/>
          // </MainBanner>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.section`
  //width: 420px;
  width: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
   .slick-slider {
     width: 100%;
     max-height: 223px;
     overflow: hidden;
     ${MEDIA.tablet} {
       max-height: 175px;
       
       img {
         width: 320px !important;
         height: 175px;
       }
     }
   }
  ${MEDIA.mobile} {
    display: none;
  }
  // .slick-list {
  //   //width: 100%;
  //   max-width: 420px;  
  //   overflow: hidden;
  //   > .slick-track {
  //     display: flex;
  //   }
  //   
  // }
`

const MainBanner = styled.div`
  //height: 220px;
  ////height: 100%;
  //img {
  //  width: 100%;
  //  height: 100%;
  //}
`

export default BannerTable;
