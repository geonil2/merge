import React from "react";
import Slider from "react-slick";

import * as S from "./style";

const banner = [
  { id: 1, url: "/images/banner/banner1.jpeg" },
  { id: 2, url: "/images/banner/banner2.jpeg" },
];

const settings = {
  slide: "div",
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: false,
  variableWidth: true,
};

const BannerTable = () => {
  return (
    <S.Container>
      <Slider {...settings}>
        {banner.map((list) => (
          <img key={list.id} src={list.url} alt="Banner image" />
        ))}
      </Slider>
    </S.Container>
  );
};

export default BannerTable;
