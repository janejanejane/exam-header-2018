import React, { Component } from 'react';
import styled from 'styled-components';
import blankuser from '../images/blank.gif';

const SettingsWrapper = styled.div`
  width: 51px;
  flex-grow: 1;
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
