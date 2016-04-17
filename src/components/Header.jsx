import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import {
  Icon
} from 'antd';

class Header extends Component {
  generateNavList() {
    const navList = [
      {
        name: '工作台',
        icon: 'desktop',
        path: '/workspace'
      },
      {
        name: '我的',
        icon: 'user',
        path: '/personal'
      },
      {
        name: '开发者',
        icon: 'github',
        path: '/developer'
      },
    ];

    const currentRouteName = this.props.route.path;

    return navList.map((nav, i) => {
      return (
        <li key={i} className={`/${currentRouteName}` === nav.path ? 'active' : ''}>
          <Link to={nav.path}>
            <Icon type={nav.icon} />
            <span>{nav.name}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <header className="silo-header">
        <div className="silo-header-logo">
          <Icon type="appstore" />
          <div>Ant Pro</div>
        </div>
        <div className="silo-header-nav">
          <ul>
            {this.generateNavList()}
          </ul>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  route: PropTypes.object
};

export default Header;

