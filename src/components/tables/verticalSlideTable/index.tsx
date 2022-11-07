import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../../config/styles";
import {Board} from "../../../services/board/types";
import Link from "next/link";


interface Prop {
  list: Board[],
}

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

const VerticalSlideTable: React.FC<Prop> = ({ list }) => {
  return (
    <SliderContainer>
      <p>공지사항</p>
      <Slider {...settings}>
        {list.map(board => (
          <Link href={`/${board.category}/${board._id}`} key={board._id}>
            <a>
              <div className="slider">{board.title}</div>
            </a>
          </Link>
        ))}
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
  box-shadow: ${SHADOWS.basic};

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
