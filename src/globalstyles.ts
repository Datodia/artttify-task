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
        --bg: #030303;
        --secondaryColor: rgba(255, 255, 255, 0.60);
        --button: rgba(88, 68, 68, 0.30);
    }

    body{
        background: radial-gradient(334.11% 100.00% at 50.22% -0.00%, rgba(64, 48, 102, 0.70) 0%, rgba(151, 100, 225, 0.70) 90%);
    }
`


export default GlobalStyle