import React, { PropTypes, Component } from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import ReactGridLayout, { WidthProvider, Responsive } from 'react-grid-layout';
import assign from 'object-assign';
import _ from 'lodash';
import u from 'updeep-mutable';

import * as utils from '../../common/utils';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Board = React.createClass({
  propTypes: {
    actions: PropTypes.object,
    proto: PropTypes.object,
    params: PropTypes.object,
  },

  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: 'layout',
      rowHeight: 30,
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
    };
  },

  getInitialState() {
    return {
      currentBreakpoint: 'lg'
    };
  },

  componentWillMount() {
    if (this.props.params.protoId) {
      this.props.actions.viewFetchProtoData(this.props.params.protoId);
    }
  },

  componentDidMount() {
    console.log('did mount');
    this.generateSourceToWidget();
  },

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  },

  componentDidUpdate() {
    console.log('did updated');
    this.generateSourceToWidget();
  },

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  },

  generateSourceToWidget() {
    console.log('generateSourceToWidget');
    const { actions } = this.props;

    _.each(this.props.proto.gridToWidgetMap, (v, key) => {
      if (!v.mounted) {
        utils.generateWidgetToDom(v, `#J-an-${key}`);
        actions.protoChangeGridMountStatus({
          key,
          isMounted: true
        });
      }
    });
  },

  generateGridItemDOM() {
    console.log('generateGridItemDOM');

    return _.map(this.props.proto.layouts, (l) => {
      const key = l.i;
      let itemCls = l.static ? 'static' : '';

      return (
        <div key={key} className={itemCls}>
          <div className="J-grid-widget-container" data-i={key} id={`J-an-${key}`}></div>
        </div>
      );
    });
  },

  render() {
    console.log('view board render!');
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={{lg: this.props.proto.layouts}}
          onBreakpointChange={this.onBreakpointChange}
          useCSSTransforms>
          {this.generateGridItemDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
});

export default Board;

