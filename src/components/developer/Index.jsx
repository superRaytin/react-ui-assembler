import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Icon
} from 'antd';

import * as _actions from '../../actions/index';
import * as selectors from '../../selectors/index';

import Header from '../Header';
import Footer from '../Footer';
import Toolbar from './Toolbar';
import WidgetList from './WidgetList';
import SearchInput from '../workspace/SearchInput';

import '../workspace/Index.less';

class Developer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id="wrapper" className="silo">
        <Header {...this.props} />
        <section className="silo-container">
          <div className="silo-board">
            <section className="silo-toolbar m20">
              <Toolbar {...this.props} router={this.context.router} />
            </section>
            <div className="silo-content">
              <div className="breadcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    Ant Pro
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    我的组件
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    列表
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <WidgetList {...this.props} router={this.context.router} />
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

Developer.propTypes = {
  actions: PropTypes.object,
  developer: PropTypes.object
};

Developer.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    developer: state.developer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(_actions, dispatch)
  };
}

// export original stuff for testing
export const developer = Developer;

export default connect(mapStateToProps, mapDispatchToProps)(Developer);

