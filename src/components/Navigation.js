import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: props.hasOwnProperty('items') ? props.items[0].link : ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { items } = this.props;

    if (!items) {
      return;
    }

    const path = window.location.pathname;

    this.setState({
      activeMenu: path === '/' ? items[0].link : path
    });
  }

  handleClick(link) {
    this.setState({
      activeMenu: link
    })
  }

  render() {
    const { items } = this.props;

    if (!items) {
      return null;
    }

    return items.map((item, i) => {
      return (
        <li key={i}>
          <a href={item.link} 
            className={this.state.activeMenu === item.link ? 'active' : ''}
            onClick={(e) => this.handleClick(item.link)}>
            {item.name}            
            {
              item.alert
              ? <div>{item.alert}</div>
              : null
            }
          </a>
        </li>
      )
    })
  }
}

export default Navigation;