import { createGlobalStyle } from "styled-components";
import { Color } from "../Color";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${Color.secondary};
    color: ${Color.dark};
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${Color.secondary};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${Color.primary};
    border-radius: 20px;
    box-shadow:  0 0 15px ${Color.primary}72;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Color.primary}BB;
  }
`;

export default GlobalStyles;
