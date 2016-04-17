import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Icon
} from 'antd';

import * as _actions from '../../actions/index';
import * as selectors from '../../selectors/index';

import Header from '../Header';
import Footer from '../Footer';
import Toolbar from './Toolbar';
import WidgetEditModal from './WidgetEditModal';
import AceEditor from './Editor';

import '../workspace/Index.less';

class Editor extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    console.log('editor will mount!', this.props);
  }

  componentDidMount() {
    console.log('editor dit mount!');
  }

  handleSave(values) {
    this.props.actions.editorSaveWidget(values);
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
            <div className="silo-content p0">
              <AceEditor {...this.props} />
              {
                this.props.editor.showWidgetEditModal ?
                  <WidgetEditModal {...this.props} handleOk={this.handleSave.bind(this)} /> : null
              }
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

Editor.propTypes = {
  actions: PropTypes.object,
  location: PropTypes.object,
  editor: PropTypes.object,
};

Editor.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    editor: state.editor
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

