import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../assets/Color";

import Navigation from "./navigation";

const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
`;
const Logo = styled.h1`
  font-size: 35px;
  margin: 25px;
  span {
    color: ${Color.primary};
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <Logo>
        Kacper<span>u</span>
      </Logo>
      <Navigation />
    </HeaderStyle>
  );
}
export default Header;
