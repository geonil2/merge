import React from "react";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./style";

import { Board } from "../../../services/board/types";

interface Prop {
  list: Board[];
}

const settings = {
  slide: "div",
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  autoplay: true,
  vertical: true,
  arrows: false,
  dot: false,
};

const VerticalSlideTable: React.FC<Prop> = ({ list }) => {
  return (
    <S.SliderContainer>
      <p>공지사항</p>
      <Slider {...settings}>
        {list.map((board) => (
          <Link href={`/${board.category}/${board._id}`} key={board._id}>
            <a>
              <div className="slider">{board.title}</div>
            </a>
          </Link>
        ))}
      </Slider>
    </S.SliderContainer>
  );
};

export default VerticalSlideTable;
