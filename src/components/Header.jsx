import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import {
  Icon
} from 'antd';

class Header extends Component {
  generateNavList(dataList) {
    const currentRouteName = this.props.route.path;

    return dataList.map((nav, i) => {
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
    const topNavList = [
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
    ];

    const bottomNavList = [
      {
        name: '帮助',
        icon: 'question-circle-o',
        path: '/help'
      },
      {
        name: '开发者',
        icon: 'github',
        path: '/developer'
      },
    ];

    return (
      <header className="silo-header">
        <div className="silo-header-logo">
          <Icon type="appstore" />
          <div>Ant Pro</div>
        </div>
        <div className="silo-header-nav">
          <ul>
            {this.generateNavList(topNavList)}
          </ul>
          <div className="flex-placeholder">&nbsp;</div>
          <ul style={{paddingBottom: 20}}>
            {this.generateNavList(bottomNavList)}
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

