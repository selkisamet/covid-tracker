import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        primary: "#C3B8FF",
        secondary: "#9384DE",
        third: "#091236"
    },
    fonts: {
        primary: "Roboto, sans-serif"
    },
    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900
    }
};

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html{
        @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
        font-size: 10px;       
    }
    
    body{
        font-family: ${({ theme }) => theme.fonts.primary};
        background-color: ${({ theme }) => theme.colors.third};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        font-size: 1.6rem;
    }
`;