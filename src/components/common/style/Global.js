import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    font-size: 12px;
    margin: 0;
    padding: 0;
      
}

body {
    font-family: 'Zen Kurenaido', sans-serif;
    color: black;
    text-shadow: 0 #000000;
    
}


`;

export { GlobalStyle };
