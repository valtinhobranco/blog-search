import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height:100vh;
    max-width:100vw;
    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    color: ${(props) => props.theme.colors.text};
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', Arial ,sans-serif;
  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input {
    margin: 10px 5px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 10px;
    &:-webkit-outer-spin-button,
    &:-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  html {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  ::-webkit-scrollbar {
    width:10px;
    height: 10px;
    }
     
    
    ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
    }
     

    ::-webkit-scrollbar-thumb {
   
    background:${(props) => props.theme.colors.green};
    border-radius: 5px;
    }

`;
