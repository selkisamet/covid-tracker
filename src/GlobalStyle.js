import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        primary: "#C3B8FF",
        second: "#9384DE",
        third: "#091236",
        fourth: "#E17474",
        fifth: "#A13535",
        sixth: "#26315E",
        seventh: "#323E6D",
        eighth: "#636D95",
        white: "#ffffff",
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
        font-size: 10px;       
    }
    
    body{
        font-family: ${({ theme }) => theme.fonts.primary};
        background-color: ${({ theme }) => theme.colors.third};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        font-size: 1.6rem;
    }
`;