import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --white: #fff;
        --black: #000;
        --red: #FF0000;
    }

    h1{
        color: var(--white);
    }
`


export default GlobalStyle