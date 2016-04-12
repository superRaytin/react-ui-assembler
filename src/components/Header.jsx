import React, { PropTypes, Component } from 'react';
import {
  Icon
} from 'antd';

class Header extends Component {
  render() {
    return (
      <header className="silo-header">
        <div className="silo-header-logo">
          X pro
        </div>
        <div className="silo-header-nav">
          <ul>
            <li className="active">
              <Icon type="desktop" />
              <span>工作台</span>
            </li>
            <li>
              <Icon type="file-text" />
              <span>模板</span>
            </li>
            <li>
              <Icon type="user" />
              <span>我的</span>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

