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
    uistate: PropTypes.object,
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
    // 每次安装后，先重置其中组件的绑定状态
    // 由于生成的组件 DOM 是临时态，所主切换路由再回来需要重新生成
    this.props.actions.resetGridMountStatus();

    // 生成组件 DOM
    this.generateSourceToWidget();
  },

  componentDidUpdate() {
    this.generateSourceToWidget();
  },

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  },

  onLayoutChange(layout, layouts) {
    if (this.props.onLayoutChange) {
      this.props.onLayoutChange(layout, layouts);
    }

    // 同步至顶层 store
    this.props.actions.gridSyncLayouts(layout);
  },

  handleGridItemActive(key) {
    const { actions, uistate } = this.props;

    // 跳过被固定的网格
    if (key === uistate.activeGridKey) {
      return;
    }

    actions.changeActiveGridKey(key);
  },

  generateSourceToWidget() {
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
    const self = this;
    const activeGridKey = this.props.uistate.activeGridKey;
    const isEnableRemove = this.props.uistate.enableGridRemove;

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

