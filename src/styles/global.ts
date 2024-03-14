import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

body {
    background: ${({ theme }) => theme.background};
    background-attachment: fixed;
    color: ${({ theme }) => theme.title};
    -webit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font: 400 1rem 'Poppins', sans-serif;
  }

  html {
    @media (max-width: 1024px) {
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }
`
