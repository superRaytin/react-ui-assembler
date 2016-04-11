import React, { PropTypes, Component } from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import ReactGridLayout, { WidthProvider, Responsive } from 'react-grid-layout';
import assign from 'object-assign';
import _ from 'lodash';

const util = require('util');
const ResponsiveReactGridLayout = WidthProvider(Responsive);

function transformSourceCode(code) {
  try {
    return Babel.transform(code, {
      presets: [
        'es2015',
        'react',
        'stage-0'
      ]
    }).code;
  } catch (e) {
    throw new Error('Invalid widget code');
  }
}

function applySourceCodeToDOM(sourceCode, id) {
  const renderedCode = transformSourceCode(sourceCode);

  try {
    let html = util.format('<script>mountNode=document.getElementById("%s");</script>', id);
    html += util.format('<script>(function(){%s})()</script>', renderedCode);
    jQuery(`#${id}`).after(html);
  } catch (e) {
    throw new Error(`Apply source code error: ${e}`);
  }
}

function generateWidget(v) {
  const sourceCode = v.source;
  const dom = jQuery('<div id="__temp-widget-containter"></div>');
  const widgetRenderContainer = jQuery('#widget-render-container');

  widgetRenderContainer.html('');
  widgetRenderContainer.append(dom);

  // 添加样式
  if (!jQuery(`#__temp-widget-style-${v.id}`).length) {
    jQuery('head').append(`<style id="__temp-widget-style-${v.id}">${v.style}</style>`);
  }

  applySourceCodeToDOM(sourceCode, '__temp-widget-containter');
}

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
      width: 1170,
      rowHeight: 30,
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
      const domNode = jQuery(`#J-an-${key}`);
      if (!v.mounted) {
        generateWidget(v);
        domNode.append(jQuery('#__temp-widget-containter').removeAttr('id'));
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

    return _.map(this.props.layout.layouts, (l) => {
      const key = l.i;
      let itemCls = l.static ? 'static' : '';

      if (key === activeGridKey) {
        itemCls += ' active';
      }

      return (
        <div key={key} className={itemCls} onClick={self.handleGridItemActive.bind(self, key)}>
          <div className="J-grid-widget-container" data-i={key} id={`J-an-${key}`}></div>
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

