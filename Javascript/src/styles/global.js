import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --green-ligth:#06D6A0;
        --red:#ef233c;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif; 
        background: rgb(0, 102, 102);
        color: rgb(0,0,0);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        list-style: none;
    }
    h1,h2,h3,h4,p{
        margin: 0;
        padding: 0;
    }
` 

export default GlobalStyle 