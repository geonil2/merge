import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import styled from "@emotion/styled";
import {COLORS} from "../../config/styles";

const arrowRight = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7077 11.278C15.8484 11.4185 15.9276 11.6091 15.9277 11.808L15.9277 12.188C15.9254 12.3864 15.8466 12.5762 15.7077 12.718L10.5677 17.8479C10.4739 17.9426 10.3461 17.9958 10.2127 17.9958C10.0794 17.9958 9.95162 17.9426 9.85773 17.8479L9.14773 17.1379C9.05367 17.0458 9.00066 16.9196 9.00066 16.7879C9.00066 16.6563 9.05367 16.5301 9.14773 16.4379L13.5977 11.998L9.14774 7.55795C9.05308 7.46407 8.99984 7.33627 8.99984 7.20295C8.99984 7.06963 9.05308 6.94183 9.14774 6.84795L9.85774 6.14795C9.95162 6.05329 10.0794 6.00005 10.2127 6.00005C10.3461 6.00005 10.4739 6.05329 10.5677 6.14795L15.7077 11.278Z" /></svg>
const arrowLeft = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.22 12.72C8.07931 12.5795 8.00018 12.3888 8 12.19V11.81C8.0023 11.6116 8.08112 11.4217 8.22 11.28L13.36 6.14997C13.4539 6.05532 13.5817 6.00208 13.715 6.00208C13.8483 6.00208 13.9761 6.05532 14.07 6.14997L14.78 6.85997C14.8741 6.95214 14.9271 7.07828 14.9271 7.20997C14.9271 7.34166 14.8741 7.46781 14.78 7.55997L10.33 12L14.78 16.44C14.8747 16.5339 14.9279 16.6617 14.9279 16.795C14.9279 16.9283 14.8747 17.0561 14.78 17.15L14.07 17.85C13.9761 17.9446 13.8483 17.9979 13.715 17.9979C13.5817 17.9979 13.4539 17.9446 13.36 17.85L8.22 12.72Z" /></svg>

const Pagination = () => {
  // sample
  const [page, setPage] = useState(1);

  return (
    <PaginationWrap>
      <ReactPaginate
        breakLabel="···"
        nextLabel={arrowRight}
        onPageChange={() => setPage(prev => prev++)}
        // onClick=""
        pageRangeDisplayed={4} // 표시되는 페이지 범위
        marginPagesDisplayed={1} // 표시되는 페이지 범위
        previousLabel={arrowLeft}
        pageCount={50} // 총 페이지 수
        breakClassName="break" // li class 이름
        className="pagination"
        disabledClassName="disabledArrow"
        breakLinkClassName="" // a tage class 이름
        // onPageActive=""
        // renderOnZeroPageCount={null}
      />
    </PaginationWrap>
  );
};

const PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0px;

    .pagination {
      display: flex;
      justify-content: center;

      li {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
        cursor: pointer;
        margin: 0px 5px;

        &.selected {
          color: ${COLORS.PRIMARY};
          border: 1px solid ${COLORS.PRIMARY};
          border-radius: 4px;
        }
      }
    }

    .break {
      color: ${COLORS.DARK_GRAY};
    }

    .previous a svg, .next a svg {
      fill: ${COLORS.BLACK};
    }

    .disabledArrow svg {
      fill: ${COLORS.DARK_GRAY} !important;
    }
`

export default Pagination;
