import React, { Component } from 'react';
import styled from 'styled-components';
import CompanyName from './components/CompanyName';
import Hamburger from './components/Hamburger';
import MenuItems from './components/MenuItems';
import UserSettings from './components/UserSettings';
import Helper from './utils/helper';

const HeaderWrapper = styled.div`
  background-color: #f3f3f3;
  height: 76px;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  padding: 0;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
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
          : <MenuItems />
        }
        <UserSettings />
      </HeaderWrapper>
    );
  }
}

export default Header;
