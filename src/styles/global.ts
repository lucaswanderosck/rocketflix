import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    :root {
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
    }
    
    body {
        background: ${({ theme }) => theme.colors.background} fixed center; 
        color: ${({ theme }) => theme.colors.title};
    }

    .container {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 768px) {
            padding: 0 16px 32px 16px;
        }
    }
`;
