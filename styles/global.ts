import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 35px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font: 400 1rem 'Share Tech Mono', monospace;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font: 700 2.5rem 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.background};
  }

  h2 {
    font: 700 1.8rem 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 70px;
  }

::-webkit-scrollbar {
  background-color: ${({ theme }) => theme.colors.text};
  width: 20px;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.colors.text};
}

  @media (max-width: 900px) {
    html {
      font-size: 26px;
    }
  }
`;
