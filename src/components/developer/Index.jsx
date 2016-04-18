import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Breadcrumb
} from 'antd';

import * as _actions from '../../actions/index';
import * as selectors from '../../selectors/index';

import DefaultLayout from '../../layouts/default';
import Toolbar from './Toolbar';
import WidgetList from './WidgetList';

class Developer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <DefaultLayout route={this.props.route}>
        <div className="silo-toolbar m20">
          <Toolbar {...this.props} router={this.context.router} />
        </div>
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
      </DefaultLayout>
    );
  }
}

Developer.propTypes = {
  actions: PropTypes.object,
  route: PropTypes.object,
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

