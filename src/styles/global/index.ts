import { createGlobalStyle, css } from 'styled-components';

import { utility } from './utility';

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  textarea,
  input {
    outline: none !important;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: none !important;
  }

  html {
    visibility: visible;
    opacity: 1;
  }
`;

const fontFamily = css``;

const base = css`
  .ant-form {
    width: 100%;

    .ant-form-item {
      margin-bottom: 16px;

      label {
        color: ${(props) => props?.theme?.colors?.secondaryDarker} !important;
      }
    }
  }
`;

const typography = css`
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: ${({ theme }) => theme?.fontWeight?.regular};
  }

  h1 {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 72px;
    line-height: 88px;
    letter-spacing: 1.5px;
  }

  h2 {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 44px;
    line-height: 52px;
    letter-spacing: -0.5px;
  }

  h3 {
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0;
  }

  h4 {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.25px;
  }

  h5 {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0;
  }

  h6 {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }

  body {
    font-weight: ${({ theme }) => theme?.fontWeight?.regular};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }

  body small {
    font-weight: ${({ theme }) => theme?.fontWeight?.regular};
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
  }

  .title {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }

  .subtitle {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0;
  }

  .subtitle2 {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0;
  }

  .caption {
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }

  .overline {
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0;
  }

  .tooltip {
    font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0;
  }

  button {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0;
  }

  button.btn-large {
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }

  .ant-picker-dropdown button {
    background-color: ${({ theme }) => theme?.colors?.primary};
    &:hover {
      background-color: ${({ theme }) =>
        theme?.colors?.primaryLighter} !important;
    }
  }

  .ant-picker-time-panel-column
    > li.ant-picker-time-panel-cell-selected
    .ant-picker-time-panel-cell-inner {
    background-color: ${({ theme }) =>
      theme?.colors?.primaryLightest}30 !important;
  }

  .ant-picker-active-bar {
    width: 40% !important;
    background: ${({ theme }) => theme?.colors?.primary} !important;
  }
`;

const scrollApp = css`
  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  ::-webkit-scrollbar-track {
    // background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-track:hover {
    // background-color: #f4f4f4;
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #a0a0a5;
    border-radius: 16px;
    z-index: 1000;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a5;
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

const drawerSidebar = css`
  .ant-drawer {
    .drawer-sidebar {
      .ant-drawer-header {
        padding: 0px;
        border-bottom: none;

        .ant-drawer-close {
          position: absolute;
          top: 10px;
          right: 10px;
          margin-right: 0px;
        }
      }

      .ant-drawer-body {
        padding: 0px;
      }
    }
  }

  &.psv-navbar {
    display: flex;
    align-items: center;
  }

  &.psv-button {
    border: 1px solid red !important;
  }
`;

const timePicker = css`
  .ant-picker-dropdown {
    //chiu

    .ant-picker-cell-range-hover-start,
    .ant-picker-cell-range-hover-end {
      .ant-picker-cell-inner {
        *:hover {
          background: ${({ theme }) =>
            theme?.colors?.primaryLightest}20 !important;
        }
      }
    }

    .ant-picker-cell-in-view.ant-picker-cell-range-start:not(
        .ant-picker-cell-range-start-single
      )::before {
      background-color: ${({ theme }) =>
        theme?.colors?.primaryLightest}10 !important;
    }
    .ant-picker-cell-in-view.ant-picker-cell-range-end:not(
        .ant-picker-cell-range-end-single
      )::before {
      background-color: ${({ theme }) =>
        theme?.colors?.primaryLightest}10 !important;
    }
    .ant-picker-cell-in-range::before {
      background-color: ${({ theme }) =>
        theme?.colors?.primaryLightest}10 !important;
    }
    .ant-picker-cell-inner::before {
      border-color: ${({ theme }) => theme?.colors?.primary} !important;
    }
    .ant-picker-cell-inner:focus-visible {
      border-color: ${({ theme }) => theme?.colors?.primary} !important;
    }
    .ant-picker-cell-range-start,
    .ant-picker-cell-range-end {
      .ant-picker-cell-inner {
        background: ${({ theme }) => theme?.colors?.primary} !important;
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontFamily}
  ${base}
  ${typography}
  ${utility.checkbox}
  ${utility.radioButton}
  ${utility.select}
  ${utility.switchToggle}
  ${utility.input}
  ${scrollApp}
  ${drawerSidebar}
  ${timePicker}
`;

export default GlobalStyle;
