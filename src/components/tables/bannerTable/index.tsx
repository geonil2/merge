import React from 'react';
import Slider from "react-slick";
import styled from "@emotion/styled";

const mock_banner = [
  {id: 1, url: '/images/mocking/banner1.png'},
  {id: 2, url: '/images/mocking/banner2.png'},
  {id: 3, url: '/images/mocking/banner3.png'},
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
        {mock_banner.map(list => (
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
