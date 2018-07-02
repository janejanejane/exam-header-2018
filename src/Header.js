import React from 'react';
import styled from 'styled-components';
import CompanyName from './components/CompanyName';
import MenuItems from './components/MenuItems';
import UserSettings from './components/UserSettings';

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

const Header = () => {
  return (
    <HeaderWrapper>
      <CompanyName>Company Name</CompanyName>
      <MenuItems />
      <UserSettings />
    </HeaderWrapper>
  );
}

export default Header;
