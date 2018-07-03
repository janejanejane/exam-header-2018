import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from 'components/Navigation';
import blankuser from 'images/blank.gif';

const SettingsWrapper = styled.div`
  padding: 0 20px;
  border-left: solid 1px rgba(74, 74, 74, 0.25);
  max-width: 125px;
  height: inherit;
  
  :hover {
    background-color: #e4e4e4;
  }

  @media (min-width: 1025px) {
    padding: 0 26px;
  }
`

const SettingsButton = styled.button`
  cursor: pointer;
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

// @link: https://stackoverflow.com/a/29791974/476584
const SettingsMenu = styled.ul`
  background-color: #ffffff;
  border: solid 1px #e4e4e4;
  padding: 10px 0;
  position: absolute;
  right: 10px;
  border-radius: 4px;
  margin-top: 10px;
  box-shadow: 0px 2px 30px rgba(0,0,0,0.3);

  li {
    display: block;
    text-align: left;
    padding: 0 24px;
  }

  li a {
    border-bottom: solid 1px rgba(74, 74, 74, 0.25);
    padding: 10px 0;
    clear: both;
    display: inline-block;
    width: 100%;
  }

  li a div {
    float: right;
    display: inline-block;
    margin-left: 32px;
    background-color: #f26620;
    border-radius: 50%;
    font-size: 10px;
    color: white;
    font-weight: 900;
    line-height: 10px;
    padding: 5px;
    text-align: center;
  }

  li:last-child a {
    border-bottom: 0;
  }

  li:hover {
    background-color: #d8d8d8;
  }

  :before {
    content:"";
    position: absolute;
    right: 17px;
    top: -17px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 17px 17px 17px;
    border-color: transparent transparent #ffffff transparent;
  }
`

class UserSettings extends Component {
  constructor() {
    super()
    this.state = {
      settingsExpanded: false,
      settingsList: [
        {
          name: 'My Profile',
          link: '/profile'
        },
        {
          name: 'My Projects',
          link: '/projects',
          alert: 23
        },
        {
          name: 'Notifications',
          link: '/notifications',
          alert: 23
        },
        {
          name: 'Tasks',
          link: '/tasks',
          alert: 23
        },
        {
          name: 'Help',
          link: '/help'
        },
        {
          name: 'Logout',
          link: '/logout'
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      settingsExpanded: !this.state.settingsExpanded
    })
  }

  render() {
    return (
      <SettingsWrapper>
        <SettingsButton onClick={(e) => this.handleClick()}>
          <Avatar src={blankuser} />
        </SettingsButton>
        {
          this.state.settingsExpanded
          ? <SettingsMenu>
              <Navigation items={this.state.settingsList} />
            </SettingsMenu>
          : null
        }
      </SettingsWrapper>
    )
  }
}

export default UserSettings;
