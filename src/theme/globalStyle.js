import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  body {
    color: #4a4a4a;
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  a {
    color: #4a4a4a;
    font-size: 14px;
    font-weight: 400;
  }
`