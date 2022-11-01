import { css } from "styled-components";

const theme = {
  hex: {
    black: "#000000",
    grey: "#D9D9D9",
    blue: "#0094FF",
  },
  flexCustom: (flexDirection, justifyContent, alignItems) =>
    css`
      display: flex;
      flex-direction: ${flexDirection};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
    `,
};

export default theme;
