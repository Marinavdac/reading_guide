import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    font-size: 12px;
    padding: 0;
    margin:0;
    
}

body {
    font-family: 'Zen Kurenaido', sans-serif;
    color: black;
    text-shadow: 0 #000000;
}


`

export {GlobalStyle}