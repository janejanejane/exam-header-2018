import React from 'react';
import styled from 'styled-components';
import CompanyName from 'components/CompanyName';
import MenuItems from 'containers/MenuItems';
import UserSettings from 'containers/UserSettings';
import variables from 'theme/variables';

const HeaderWrapper = styled.div`
  background-color: ${variables.header.backgroundColor};
  height: ${variables.header.height};
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  padding: 0;
  box-shadow: ${variables.header.boxShadow};
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
