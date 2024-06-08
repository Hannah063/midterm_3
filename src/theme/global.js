const { createGlobalStyle } = require("styled-components");

export const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    transition: all 200ms;
    color: ${({ theme }) => theme.color};
  }
`;
