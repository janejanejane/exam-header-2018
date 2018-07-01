import React, { Component } from 'react';
import styled from 'styled-components';

const BarsWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 20px;

  div {
    width: 35px;
    height: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 6px 0;
  }
`

class Hamburger extends Component {
  render() {
    return (
      <BarsWrapper>
        <div></div>
        <div></div>
        <div></div>
      </BarsWrapper>
    )
  }
}

export default Hamburger;