import { css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: "Spoqa Han Sans Neo", "Spoqa Han Sans JP", sans-serif !important;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    // overflow: hidden;
    background: #f0f1f5;
    margin: 0;
    padding: 0;
  }

  #root {
    min-width: 360px;
    width: 450px;
    height: 100%;
    background: white;
  }

  button {
    cursor: pointer;
    border: none;
    outline: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyles;
