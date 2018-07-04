import { injectGlobal } from 'styled-components';
import variables from './variables';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  body {
    color: ${variables.body.color};
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    font-size: ${variables.body.fontSize};
    font-weight: ${variables.body.fontSize};
  }

  a {
    color: ${variables.body.color};
    font-size: ${variables.body.fontSize};
    font-weight: ${variables.body.fontSize};
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li a {
    cursor: pointer;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 18px;
  }

  li a:hover,
  li a.active {
    font-weight: 700;
  }
`