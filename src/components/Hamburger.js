import React from 'react';
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

  @media (min-width: 1025px) {
    display: none;
  }
`

const Hamburger = ({ clickEvent }) => {
  return (
    <BarsWrapper onClick={clickEvent}>
      <div></div>
      <div></div>
      <div></div>
    </BarsWrapper>
  );
}

export default Hamburger;