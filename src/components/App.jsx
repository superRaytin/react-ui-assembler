import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { getxxx } from '../selectors/index';
import './App.less';

class App extends Component {
  handleSetCount() {
    this.props.actions.setCounter(33);
  }

  render() {
    console.log('render');
    return (
      <div>
        <div key="a1">loading: {this.props.xxx.fetching ? 'true' : 'false'}</div>
        <div key="aaa11">
          app {this.props.xxx.hhh}
          <span onClick={() => { this.props.actions.xxx('jjjj'); }}>change</span>
        </div>
        <div key="a2">
          counter: {this.props.xxx.counter}
          <span onClick={() => { this.handleSetCount(); }}>plus</span>
        </div>
        <div key="a3">
          uu: {this.props.yyy.uu}
          <span onClick={() => { this.props.actions.setuu('loo'); }}> change</span>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object,
  xxx: PropTypes.object,
  yyy: PropTypes.object
};

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    xxx: getxxx(state),
    yyy: state.yyy
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

// save original stuff for testing
export const app = App;

export default connect(mapStateToProps, mapDispatchToProps)(App);

