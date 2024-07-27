'use client';

import { Global, css } from '@emotion/react';

export const GlobalStyle = () => {
  return <Global styles={reset} />;
};

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin-block-end: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    line-height: 1.5;
    overflow-x: hidden;
  }

  // #root-layout {
  //   height: 100vh;
  // }

  h1,
  h2,
  h3,
  h4,
  button,
  input,
  label {
    line-height: 1.1;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  input {
    border: none;
  }

  textarea {
    resize: none;
    border: none;
  }

  button {
    border: none;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  textarea:not([rows]) {
    min-height: 10em;
  }

  :target {
    scroll-margin-block: 5ex;
  }
`;
