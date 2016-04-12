import React, { PropTypes, Component } from 'react';
import PureRenderMixin from '../../../node_modules/react/lib/ReactComponentWithPureRenderMixin';
import ReactGridLayout, { WidthProvider, Responsive } from 'react-grid-layout';
import assign from 'object-assign';
import _ from 'lodash';
import {
  Icon
} from 'antd';

import * as utils from '../../common/utils';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Board = React.createClass({
  propTypes: {
    actions: PropTypes.object,
    layout: PropTypes.object,
    onLayoutChange: PropTypes.func
  },

  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: 'layout',
      // verticalCompact: false,
      rowHeight: 40,
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      // breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
    };
  },

  getInitialState() {
    return {
      // layouts: {lg: this.props.layout.layouts},
      currentBreakpoint: 'lg'
    };
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

  onLayoutChange(layout, layouts) {
    console.log('layout change!');
    if (this.props.onLayoutChange) {
      this.props.onLayoutChange(layout, layouts);
    }

    // 同步至顶层 store
    this.props.actions.layoutSyncAll(layout);
  },

  handleGridItemActive(key) {
    const { actions, layout } = this.props;

    // 跳过被固定的网格
    if (key === layout.activeGridKey) {
      return;
    }

    actions.changeActiveGrid(key);
  },

  generateSourceToWidget() {
    console.log('generateSourceToWidget');
    const { actions } = this.props;

    _.each(this.props.layout.gridToWidgetMap, (v, key) => {
      if (!v.mounted) {
        utils.generateWidgetToDom(v, `#J-an-${key}`);
        actions.changeGridMountStatus({
          key,
          isMounted: true
        });
      }
    });
  },

  generateGridItemDOM() {
    console.log('generateGridItemDOM');
    const self = this;
    const activeGridKey = this.props.layout.activeGridKey;
    const isEnableRemove = this.props.layout.enableRemove;

    return _.map(this.props.layout.layouts, (l) => {
      const key = l.i;
      let itemCls = l.static ? 'static' : '';

      if (key === activeGridKey) {
        itemCls += ' active';
      }

      return (
        <div key={key} className={itemCls} onClick={self.handleGridItemActive.bind(self, key)}>
          <div className="J-grid-widget-container" data-i={key} id={`J-an-${key}`}></div>
          {
            isEnableRemove &&
            <div className="grid-widget-btn-remove"><Icon type="cross-circle" /></div>
          }
        </div>
      );
    });
  },

  render() {
    console.log('board render!');
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={{lg: this.props.layout.layouts}}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          useCSSTransforms>
          {this.generateGridItemDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
});

export default Board;

