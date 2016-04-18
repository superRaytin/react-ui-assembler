import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Breadcrumb
} from 'antd';

import * as _actions from '../../actions/index';
import * as selectors from '../../selectors/index';

import DefaultLayout from '../../layouts/default';
import Header from '../Header';
import Footer from '../Footer';
import ProtoList from './ProtoList';
import SearchInput from '../workspace/SearchInput';

class Personal extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <DefaultLayout route={this.props.route}>
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
          <ProtoList {...this.props} router={this.context.router} />
        </div>
      </DefaultLayout>
    );
  }
}

Personal.propTypes = {
  actions: PropTypes.object,
  route: PropTypes.object,
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

