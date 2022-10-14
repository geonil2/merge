import React from 'react';
import Index from "../../mediaOnlyDiv";
import Link from "next/link";
import styled from "@emotion/styled";
import {COLORS} from "../../../config/styles";
import DesktopHeader from "../desktopHeader";



const Header = () => {
  return (
    <>
      <Index media="desktop">
        <DesktopHeader />
      </Index>
    </>
  );
};



export default Header;
