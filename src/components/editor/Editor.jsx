import React, { PropTypes, Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Editor extends Component {
  componentWillMount() {
    const { location, actions } = this.props;

    /*
    // edit
    if (location.query.id) {
      // from exist widget list
      if (location.state) {
        // sync to editor value
        actions.editorUpdateValue(location.state.widget.source);

        // sync to widgetData
        actions.editorSyncWidgetData(location.state.widget);
      }
      // should fetch data from remote
      else {
        actions.editorFetchWidgetDataById({
          id: location.query.id
        });
      }
    }
    // new
    else {
      actions.editorReset();
    }
     */

    if (location.query.id) {
      // edit
      actions.editorFetchWidgetDataById({
        id: location.query.id
      });
    } else {
      // new
      actions.editorReset();
    }
  }

  componentDidMount() {
    // 禁用语法错误提示
    this.refs.ace.editor.getSession().setUseWorker(false);
  }

  handleChange(newValue) {
    this.props.actions.editorUpdateValue(newValue);
  }

  render() {
    return (
      <AceEditor
        ref="ace"
        width="100%"
        height="655"
        value={this.props.editor.value}
        mode="javascript"
        theme="monokai"
        onChange={this.handleChange.bind(this)}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
        />
    );
  }
}

Editor.propTypes = {
  actions: PropTypes.object,
  location: PropTypes.object,
  editor: PropTypes.object
};

export default Editor;
