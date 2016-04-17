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

import './Index.less';
import '../../middleware/antd';

class App extends Component {
  render() {
    const {actions, widget, layout} = this.props;

    return (
      <div id="wrapper" className="silo">
        <Header {...this.props} />
        <section className="silo-sidebar">
          <WidgetGroups actions={actions}
                        layout={layout}
                        widget={widget} />
        </section>
        <section className="silo-container">
          <div className="silo-board">
            <section className="silo-toolbar">
              <Toolbar actions={actions}
                       layout={layout} />
            </section>
            <div className="silo-board-content">
              <Board actions={actions}
                     layout={layout} />
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object,
  widget: PropTypes.object,
  layout: PropTypes.object
};

function mapStateToProps(state) {
  // console.log('mapStateToProps', state);
  return {
    widget: selectors.getWidget(state),
    layout: selectors.getLayout(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(_actions, dispatch)
  };
}

// export original stuff for testing
export const app = App;

export default connect(mapStateToProps, mapDispatchToProps)(App);

