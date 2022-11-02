import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
     box-sizing: border-box;
     margin: 0;
     text-decoration: none;
     font-family: 'Inter';
     font-style: normal;
     -ms-overflow-style: none;
     scrollbar-width: none;
     ::-webkit-scrollbar { 
         display: none;
     }
    }

    button{
      padding: 5px 18px;
      font-weight: 700;
      font-size: 14px;
      border:none;
      border-radius: 62px;
      line-height: 17px;
      cursor: pointer;
    }

    button:focus,
    button:active {
      outline: none;
    }
`;

export default GlobalStyle;
