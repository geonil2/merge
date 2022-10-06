import React from 'react';
import MediaOnlyDiv from "../../mediaOnlyDiv/mediaOnlyDiv";
import Link from "next/link";
import styled from "@emotion/styled";
import {COLORS} from "../../../config/styles";
import DesktopHeader from "../desktopHeader";



const Header = () => {
  return (
    <>
      <MediaOnlyDiv media="desktop">
        <DesktopHeader />
      </MediaOnlyDiv>
    </>
  );
};



export default Header;
