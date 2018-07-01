import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const MenuWrapper = styled.ul`
  line-height: 76px;

  li {
    display: inline-block;
    text-align: left;
    padding-right: 40px;
  }

  li a:hover,
  li a.active {
    color: #f26620;
  }
`;

class MenuItems extends Component {
  constructor() {
    super()
    this.state = {
      menuList: [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'Projects',
          link: '/projects'
        },
        {
          name: 'Team',
          link: '/team'
        },
        {
          name: 'Company',
          link: '/company'
        }
      ]
    }
  }

  render() {
    return (
      <MenuWrapper>
        <Navigation items={this.state.menuList} />
      </MenuWrapper>
    )
  }
}

export default MenuItems;