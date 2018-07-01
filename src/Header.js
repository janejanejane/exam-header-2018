import React, { Component } from 'react';
import styled from 'styled-components';
import CompanyName from './components/CompanyName';
import Hamburger from './components/Hamburger';
import UserSettings from './components/UserSettings';
import Helper from './utils/helper';

const HeaderWrapper = styled.div`
  background-color: #F3F3F3;
  height: 76px;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  padding: 0 20px;
  border: solid 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobile: false
    };
  }
  componentWillMount() {
    this.setState({
      mobile: Helper.isMobileDevice()
    });
  }

  render() {
    return (
      <HeaderWrapper>
        <CompanyName>Company Name</CompanyName>
        { 
          (this.state.mobile)
          ? <Hamburger />
          : null
        }
        <UserSettings />
      </HeaderWrapper>
    );
  }
}

export default Header;
