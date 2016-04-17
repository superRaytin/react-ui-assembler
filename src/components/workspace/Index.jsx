import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Col,
  Row
} from 'antd';

import * as _actions from '../../actions/index';
import * as selectors from '../../selectors/index';

import Header from './../Header';
import Footer from './../Footer';
import Toolbar from './Toolbar';
import WidgetGroups from './WidgetGroups';
import Board from './Board';
import ProtoEditModal from './ProtoEditModal';

import './Index.less';
import '../../middleware/antd';

class Workspace extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    const protoId = this.props.params.protoId;

    if (protoId) {
      this.props.actions.workspaceFetchProtoData(protoId);
    }
  }

  handleSave(values) {
    const protoId = this.props.params.protoId;

    if (protoId) {
      // modify
      this.props.actions.modifyProtoSave({
        protoId,
        data: values
      });
    } else {
      // create
      this.props.actions.createProtoSave({
        data: values
      });
    }
  }

  render() {
    return (
      <div id="wrapper" className="silo">
        <Header {...this.props} />
        <section className="silo-sidebar">
          <WidgetGroups {...this.props} />
        </section>
        <section className="silo-container">
          <div className="silo-board">
            <section className="silo-toolbar">
              <Toolbar {...this.props} />
            </section>
            <div className="silo-board-content">
              <Board {...this.props} />
              {
                this.props.uistate.showProtoEditModal ?
                  <ProtoEditModal {...this.props} handleOk={this.handleSave.bind(this)} /> : null
              }
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

Workspace.propTypes = {
  actions: PropTypes.object,
  widget: PropTypes.object,
  layout: PropTypes.object,
  uistate: PropTypes.object,
  params: PropTypes.object,
};

Workspace.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // console.log('mapStateToProps', state);
  return {
    widget: selectors.getWidget(state),
    layout: selectors.getLayout(state),
    uistate: state.uistate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(_actions, dispatch)
  };
}

// export original stuff for testing
export const app = Workspace;

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);

