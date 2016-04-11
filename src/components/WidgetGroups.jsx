import React, { PropTypes, Component } from 'react';
import {
  message
} from 'antd';
import _ from 'lodash';

import SearchInput from './SearchInput';

class WidgetGroups extends Component {
  componentWillMount() {
    this.props.actions.fetchWidgets();
  }

  fetchWidgets() {
    this.props.actions.fetchWidgets();
  }

  handleWidgetAdd(widget) {
    const activeGridKey = this.props.layout.activeGridKey;

    if (activeGridKey === null) {
      message.warn('先从面板中选择要操作的网格。', 2);
      return;
    }

    // 网格中已经有控件
    if (this.props.layout.gridToWidgetMap[activeGridKey]) {
      return;
    }

    this.props.actions.createWidgetToGridBySource({
      key: activeGridKey,
      source: widget.source,
      style: widget.style || '',
      id: widget.id
    });
  }

  generateGroup() {
    const self = this;
    return _.map(this.props.widget.data, (group, i) => {
      const widgetList = _.map(group.widgets, (widget, j) => {
        return (
          <div key={j}
               className="silo-sidebar-widget"
               onClick={() => { self.handleWidgetAdd(widget); }}>
            {widget.name}
            <span className="silo-sidebar-widget-desc">{widget.description}</span>
          </div>
        );
      });

      return (
        <section key={i} className="silo-sidebar-group">
          <h3 className="silo-sidebar-group-header">{group.name}</h3>
          <div className="silo-sidebar-group-content">
            {widgetList}
          </div>
        </section>
      );
    });
  }

  render() {
    const {actions} = this.props;
    const groups = this.generateGroup();

    return (
      <div>
        <div className="silo-search">
          <SearchInput {...this.props} placeholder="输入关键字" style={{ width: 178 }} />
        </div>
        {groups}
      </div>
    );
  }
}

WidgetGroups.propTypes = {
  actions: PropTypes.object,
  widget: PropTypes.object,
  layout: PropTypes.object
};

export default WidgetGroups;

