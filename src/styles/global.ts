import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Chivo', sans-serif;
  }

  span, img {
    background-color: transparent;
  }
`;

export default GlobalStyle;
