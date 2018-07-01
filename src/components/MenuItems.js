import React, { Component } from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 76px;

  li {
    display: inline-block;
    text-align: left;
    width: 114px;
  }

  li a {
    text-decoration: none;
    text-transform: uppercase;
    line-height: 18px;
  }

  li a:hover {
    color: #f26620;
    font-weight: 700;
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
        {
          this.state.menuList.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.link}>{item.name}</a>
              </li>
            )
          })
        }
      </MenuWrapper>
    )
  }
}

export default MenuItems;