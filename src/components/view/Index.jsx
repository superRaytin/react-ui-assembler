import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Icon
} from 'antd';

import * as _actions from '../../actions/index';
import * as selectors from '../../selectors/index';

import Footer from './../Footer';
import Board from './Board';

import './../workspace/Index.less';
import '../../middleware/antd';

class Proto extends Component {
  render() {
    const {actions, proto} = this.props;

    return (
      <div id="wrapper" className="silo view-block">
        <section className="silo-container">
          <div className="silo-board">
            <div className="silo-board-content">
              <Board actions={actions}
                     proto={proto} />
            </div>
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

Proto.propTypes = {
  actions: PropTypes.object,
  proto: PropTypes.object
};

function mapStateToProps(state) {
  return {
    proto: state.proto
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(_actions, dispatch)
  };
}

// export original stuff for testing
export const proto = Proto;

export default connect(mapStateToProps, mapDispatchToProps)(Proto);

