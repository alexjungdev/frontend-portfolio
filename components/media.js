"use Client"

import { css } from "styled-components";

const sizes = {
  xs: 0,
  s: 350,
  m: 576,
  l: 1024,
  xl: 1280,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});