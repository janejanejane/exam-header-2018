import React, { Component } from 'react';
import styled from 'styled-components';
import CompanyName from './components/CompanyName';
import UserSettings from './components/UserSettings';

const HeaderWrapper = styled.div`
  background-color: #F3F3F3;
  height: 50px;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  padding: 20px;
  border: solid 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  @media (min-width: 1025px) {
    height: 76px;
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <CompanyName>Company Name</CompanyName>
        <UserSettings />
      </HeaderWrapper>
    );
  }
}

export default Header;
