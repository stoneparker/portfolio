import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font: 400 10px 'Share Tech Mono', monospace;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font: 700 90px 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.background};
  }
`;
