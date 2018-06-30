import React, { Component } from 'react';
import styled from 'styled-components';
import blankuser from '../images/blank.gif';

const SettingsWrapper = styled.button`
  background-color: transparent;
  outline: none;
  text-align: right;
  border: none;
  width: 50px;
  height: 100%;
  padding: 0;
`

const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`

class UserSettings extends Component {
  render() {
    return (
      <SettingsWrapper>
        <Avatar src={blankuser} />
      </SettingsWrapper>
    )
  }
}

export default UserSettings;
