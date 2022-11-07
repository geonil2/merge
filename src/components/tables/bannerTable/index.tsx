import React from 'react';
import Slider from "react-slick";
import styled from "@emotion/styled";

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
}

const BannerTable = () => {
  return (
    <Container>
      <Slider {...settings}>
        {banner.map(list => (
          <MainBanner key={list.id} >
            {/* Add link */}
            <a href="#"><img src={list.url} alt="Banner image"/></a>
          </MainBanner>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .slick-list {
    width: 100%;
    max-width: 420px;  
    overflow: hidden;
    > .slick-track {
      display: flex;
    }
  }
`

const MainBanner = styled.div`
  height: 220px;
  img {
    width: 100%;
    height: 100%;
  }
`

export default BannerTable;
