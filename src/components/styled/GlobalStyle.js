import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.textColor};
    margin: 0;
    padding: 0;

}

`;
