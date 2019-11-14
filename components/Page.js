import { createGlobalStyle, ThemeProvider } from "styled-components";

import Meta from "./Meta";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
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

  .input-row {
    div {
      display: flex;
      flex-direction: column;
    }
    margin-bottom: 0.75em;
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
    text-shadow: 2px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px -2px 0 #fff;
  }
  h4,
  h5,
  h6 {
    text-shadow: 0px -2px 0 #fff, 0px -0px 0 #fff, -1px 0px 2 #fff,
      0px 1px 0 #fff;
  }

  label {
    margin: 0.7em;
    font-size: 0.75em;
  }
  
  input, textarea {
    background: white;
    border: 0;
    border-color: rgb(209, 218, 225);
    border: 2px solid;
    border-radius: 2px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    font-family: 'Comfortaa';
    font-size: 20px;
    -webkit-appearance: none;
    line-height: 1.3;
    margin: 0px;
    max-width: 100%;
    outline: none;
    padding: 16px 20px;
    width: 100%;
    &:hover {
      border-color: rgb(0, 0, 0);
    }
    &:focus {
      background-color: rgb(255, 255, 255);
      color: ${({ theme }) => theme.primaryCol};
      box-shadow: rgb(187, 187, 187) 0px 0px 5px 2px;
      border-color: ${({ theme }) => theme.accentCol};
    }
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
