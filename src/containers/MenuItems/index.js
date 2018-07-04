import React, { Component } from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger';
import Navigation from 'components/Navigation';
import variables from 'theme/variables';

const MenuWrapper = styled.ul`
  display: none;

  &.show {
    display: block;
    position: absolute;
    background-color: ${variables.header.backgroundColor};
    bottom: 0;
    right: 0;
    left: 0;
    top: 78px;

    li a {
      padding: 20px 0;
      margin: 0 20px;
      border-bottom: solid 1px ${variables.colors.grey};
    }
  }

  li a:hover,
  li a.active {
    color: ${variables.colors.orange};
  }

  @media (min-width: 1025px) {
    display: block;
    line-height: ${variables.header.height};

    li {
      display: inline-block;
      text-align: left;
      padding-right: 40px;
    }
  }
`;

class MenuItems extends Component {
  constructor() {
    super()
    this.state = {
      navbarExpanded: false,
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
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      navbarExpanded: !this.state.navbarExpanded
    })
  }

  render() {
    return (
      <div>
        <Hamburger clickEvent={(e) => this.handleClick()} />
        <MenuWrapper className={this.state.navbarExpanded ? 'show' : ''}>
          <Navigation items={this.state.menuList} />
        </MenuWrapper>
      </div>
    )
  }
}

export default MenuItems;