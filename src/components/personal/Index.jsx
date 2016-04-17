import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Icon,
  Table
} from 'antd';

import * as _actions from '../../actions/index';
import * as selectors from '../../selectors/index';

import Header from '../Header';
import Footer from '../Footer';
import ProtoList from './ProtoList';
import SearchInput from '../workspace/SearchInput';

import '../workspace/Index.less';

class Personal extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id="wrapper" className="silo">
        <Header {...this.props} />
        <section className="silo-container">
          <div className="silo-board">
            <div className="silo-content">
              <div className="breadcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    Ant Pro
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    我的原型稿
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    列表
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="searchbox">
                <SearchInput placeholder="请输入关键字" style={{width: 200}} />
              </div>
              <ProtoList {...this.props} router={this.context.router} />
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

Personal.propTypes = {
  actions: PropTypes.object,
  personal: PropTypes.object
};

Personal.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    personal: state.personal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(_actions, dispatch)
  };
}

// export original stuff for testing
export const personal = Personal;

export default connect(mapStateToProps, mapDispatchToProps)(Personal);

