import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../assets/Color";

import { IconContext } from "react-icons";
import { TiHome } from "react-icons/ti";
import { IoMdPerson } from "react-icons/io";
import { FaFire } from "react-icons/fa";

// const SocialWrapper = styled.nav`
//   display: flex;
//   width: 100%;
//   height: auto;
//   border-radius: 20px;
//   background-color: ${Color.light};
//   padding: 10px;
//   margin-top: 20px;
// `;

// function Social() {
//   return (
//     <SocialWrapper>
//       <IconContext.Provider
//         value={{
//           style: {
//             color: Color.dark,
//             fontSize: 30,
//             flex: 1,
//             margin: `10px 0`,
//           },
//         }}
//       >
//         <FaFacebook />
//         <FaInstagram />
//         <FaGithub />
//         <FaTwitter />
//       </IconContext.Provider>
//     </SocialWrapper>
//   );
// }

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 55px;
  border-radius: 20px;
  background-color: ${Color.light};
  padding: 10px;
  margin: 10px;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  a {
    font-weight: bold;
    color: ${Color.primary};
  }
`;

const LinkStyle = styled(Link)`
  text-align: center;
  flex: 1;
`;

function Navigation() {
  return (
    <Wrapper>
      <Nav>
        <IconContext.Provider
          value={{
            style: {
              color: Color.dark,
              fontSize: 35,
              flex: 1,
              margin: `10px 0`,
            },
          }}
        >
          <LinkStyle to="/">
            <TiHome />
          </LinkStyle>
          <LinkStyle to="/skills">
            <FaFire />
          </LinkStyle>
          <LinkStyle to="/about">
            <IoMdPerson />
          </LinkStyle>
        </IconContext.Provider>
      </Nav>
    </Wrapper>
  );
}
export default Navigation;
