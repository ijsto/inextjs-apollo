import { createGlobalStyle, ThemeProvider } from "styled-components";

import Meta from "./Meta";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { black } from "../utils/Colors";
import theme from "../lib/theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Neutra Text';
    src: url('/font/Neutra-Text-Bold.otf') format('otf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Comfortaa';
    src: url('/font/Comfortaa-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Comfortaa';
    background: ${({ theme }) => theme.primaryBgCol};
    min-height: 100vh;
    padding-top: 64px;
    position: relative;
  }

  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.secondaryCol};
    margin: 0;
    padding: 0;
    transition: 0.3s all;
  }

  a:hover {
    color: orange
  }

  .content {
    padding: 0 3em 2em;
  }

  h1 {
    font-size: 3.5em;
    letter-spacing: -3px;
    @media screen and (max-width: 580px) {
    font-size: 1.5em;
    letter-spacing: -1px;

  }
  }
  h2 {
    font-size: 2.25em;

  }
  h3 {
    font-size: 1.75em;
    letter-spacing: 1px;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Neutra Text', sans-serif;
    margin-top: 1em;
    color: #00474b;
    font-weight: 400;
    text-shadow: 0px -1px 0 #6bcd9c, 1px -1px 0 #6bcd9c, -1px 1px 0 #6bcd9c,
      1px 0px 0 #6bcd9c;
  }
  h4,
  h5,
  h6 {
    text-shadow: 0px 0px 0 #6bcd9c, 0px -0px 0 #6bcd9c, -0px 0px 0 #6bcd9c,
      0px 1px 0 #6bcd9c;

  }

`;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Header />

      {children}
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Page;
