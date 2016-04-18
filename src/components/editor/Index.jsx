import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Icon
} from 'antd';

import * as _actions from '../../actions/index';
import * as selectors from '../../selectors/index';

import DefaultLayout from '../../layouts/default';
import Toolbar from './Toolbar';
import WidgetEditModal from './WidgetEditModal';
import AceEditor from './Editor';

class Editor extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    // console.log('editor will mount!', this.props);
  }

  componentDidMount() {
    // console.log('editor dit mount!');
  }

  handleSave(values) {
    this.props.actions.editorSaveWidget(values);
  }

  render() {
    return (
      <DefaultLayout route={this.props.route}>
        <div className="silo-toolbar m20">
          <Toolbar {...this.props} router={this.context.router} />
        </div>
        <div className="silo-content p0">
          <AceEditor {...this.props} />
          {
            this.props.uistate.showWidgetEditModal ?
              <WidgetEditModal {...this.props} handleOk={this.handleSave.bind(this)} /> : null
          }
        </div>
      </DefaultLayout>
    );
  }
}

Editor.propTypes = {
  actions: PropTypes.object,
  route: PropTypes.object,
  location: PropTypes.object,
  editor: PropTypes.object,
  uistate: PropTypes.object,
};

Editor.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    editor: state.editor,
    uistate: state.uistate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(_actions, dispatch)
  };
}

// export original stuff for testing
export const editor = Editor;

export default connect(mapStateToProps, mapDispatchToProps)(Editor);

